import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a Demo",
  description:
    "Talk to ZTPL about SEBI CSCRF compliance, Zoffec Aegis, or GRC advisory. Book a demo or reach our team at support@zt-pl.com.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-green-glow" aria-hidden />
      <div className="container-px relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="heading mt-5 text-4xl sm:text-5xl">
              Let&apos;s get you audit-ready
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              Book a demo of Zoffec Aegis or talk to our GRC team about your SEBI
              CSCRF obligations. Tell us your entity type and where you are — we
              meet you there.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg text-ink hover:text-green"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  Phone
                </dt>
                <dd className="mt-1 text-lg text-ink-muted">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  Location
                </dt>
                <dd className="mt-1 text-lg text-ink-muted">{site.location}</dd>
              </div>
            </dl>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
