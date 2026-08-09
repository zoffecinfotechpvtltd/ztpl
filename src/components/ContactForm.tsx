"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card border-green/50">
        <h3 className="heading text-xl text-ink">Thanks — we&apos;ll be in touch.</h3>
        <p className="mt-3 text-sm text-ink-muted">
          Your message is on its way to our team. We typically respond
          within one business day. For anything urgent, email{" "}
          <a href={`mailto:${site.email}`} className="text-green">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Company"
          name="company"
          autoComplete="organization"
          required
        />
      </div>
      <Field
        label="Work email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-ink"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your CSCRF obligations, entity type, or what you'd like to see in a demo."
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-green focus:outline-none focus:ring-1 focus:ring-green"
        />
      </div>

      {status === "error" && (
        <p id="form-error" role="alert" className="text-sm text-alert">
          Something went wrong. Please email {site.email} directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-describedby={status === "error" ? "form-error" : undefined}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
      <p className="text-center text-xs text-ink-faint">
        By submitting, you agree to be contacted about your enquiry. We don&apos;t
        share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-green focus:outline-none focus:ring-1 focus:ring-green"
      />
    </div>
  );
}
