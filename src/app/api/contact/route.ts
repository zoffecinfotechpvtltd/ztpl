import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, message } = body;

  if (!isNonEmptyString(name) || !isNonEmptyString(company) || !isNonEmptyString(email)) {
    return NextResponse.json({ error: "Name, company, and email are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: send via an email provider once credentials exist — e.g. Resend:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({ from: ..., to: site.email, subject: ..., text: ... });
  // Until RESEND_API_KEY is set, submissions are only logged server-side.
  console.log("[contact] submission:", {
    name,
    company,
    email,
    message: isNonEmptyString(message) ? message : "",
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
