import { promises as dns } from "node:dns";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
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

/** Single-line, length-capped - safe to put in a mail header. */
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

/* No third-party mail service. Every submission is (1) appended to a file on this server, then
   (2) delivered by this server's own mail path:
     - MAIL_RELAY_HOST set: hand off to a relay you run yourself (e.g. Postfix), or
     - otherwise: connect straight to the recipient domain's MX host on port 25
       (needs outbound port 25 open on the droplet - DigitalOcean blocks it by default, see README).
   If mail delivery fails the enquiry is still in the file, so it is never lost. */

const dataDir = () => process.env.DATA_DIR ?? path.join(process.cwd(), "data");

async function saveSubmission(entry: Record<string, string>) {
  await mkdir(dataDir(), { recursive: true });
  await appendFile(
    path.join(dataDir(), "contact-submissions.jsonl"),
    JSON.stringify({ at: new Date().toISOString(), ...entry }) + "\n",
  );
}

const domain = new URL(site.url).hostname;
const fromAddress = () => process.env.CONTACT_FROM ?? `${site.name} website <noreply@${domain}>`;
const toAddress = () => process.env.CONTACT_TO ?? site.email;

function dkim() {
  const privateKey = process.env.DKIM_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!privateKey) return undefined;
  return { domainName: domain, keySelector: process.env.DKIM_SELECTOR ?? "mail", privateKey };
}

async function deliver(mail: { replyTo: string; subject: string; text: string }) {
  const message = { from: fromAddress(), to: toAddress(), ...mail };
  const common = {
    name: process.env.MAIL_HOSTNAME,
    dkim: dkim(),
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
  };

  const relay = process.env.MAIL_RELAY_HOST;
  if (relay) {
    const port = Number(process.env.MAIL_RELAY_PORT ?? 25);
    const { MAIL_RELAY_USER: user, MAIL_RELAY_PASS: pass } = process.env;
    await nodemailer
      .createTransport({
        ...common,
        host: relay,
        port,
        secure: port === 465,
        auth: user && pass ? { user, pass } : undefined,
      })
      .sendMail(message);
    return;
  }

  const recipientDomain = toAddress().split("@").pop()!;
  const mx = (await dns.resolveMx(recipientDomain)).sort((a, b) => a.priority - b.priority);
  let lastErr: unknown = new Error(`no MX records for ${recipientDomain}`);
  for (const { exchange } of mx) {
    try {
      await nodemailer.createTransport({ ...common, host: exchange, port: 25, secure: false }).sendMail(message);
      return;
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
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

  let saved = true;
  try {
    await saveSubmission({ name, company, email, message });
  } catch (err) {
    saved = false;
    console.error("[contact] could not save submission:", err);
  }

  try {
    await deliver({
      replyTo: `${oneLine(name).replace(/[<>"]/g, "")} <${email}>`,
      subject: `New enquiry from ${oneLine(name)} (${oneLine(company)})`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}\n`,
    });
  } catch (err) {
    console.error("[contact] mail delivery failed:", err);
    // Saved on disk = not lost, so the visitor's enquiry counts as received. Otherwise tell them honestly.
    if (!saved) {
      return NextResponse.json(
        { error: `We couldn't send your message right now. Please email us at ${site.email}.` },
        { status: 503 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
