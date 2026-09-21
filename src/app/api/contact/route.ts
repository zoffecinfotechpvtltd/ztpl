import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
  // Honeypot: real users never see or fill this; bots usually do.
  website: z.string().optional(),
});

/** Single-line, length-capped — safe to put in a mail header. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 200);

/* Small in-memory limiter: 5 submissions / 10 min per IP. Per-process only,
   which is enough for a single container; swap for Redis if this ever scales out. */
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

function transport() {
  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) return null;
  const port = Number(process.env.SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please fill in every field with a valid email address." }, { status: 400 });
  }
  const { name, company, email, message, website } = parsed.data;

  // Bot filled the honeypot: pretend success, send nothing.
  if (website) return NextResponse.json({ ok: true });

  const mailer = transport();
  if (!mailer) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] SMTP not configured; dev submission:", { name, company, email, message });
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] SMTP_USER / SMTP_PASS are not set; submission was NOT delivered:", { name, company, email });
    return NextResponse.json(
      { error: `We couldn't send your message right now. Please email us at ${site.email}.` },
      { status: 503 },
    );
  }

  try {
    await mailer.sendMail({
      from: `"${site.name} website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: `"${oneLine(name)}" <${email}>`,
      subject: `New enquiry from ${oneLine(name)} (${oneLine(company)})`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}\n`,
    });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { error: `We couldn't send your message right now. Please email us at ${site.email}.` },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
