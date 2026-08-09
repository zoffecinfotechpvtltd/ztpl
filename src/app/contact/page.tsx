import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a Demo",
  description:
    "Talk to ZTPL about SEBI CSCRF compliance, the Zoffec Aegis platform, or GRC advisory. Book a demo or reach our team at support@zt-pl.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-green-glow" aria-hidden />
      <div className="container-px relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">Contact</span>
            <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Let&apos;s get you{" "}
              <span className="text-gradient">audit-ready</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Talk to our team about ZTPL, book a demo of Zoffec Aegis, or ask
              about Argus and Wardloom. Tell us what you need — we meet you
              there.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg text-ink transition-colors hover:text-green"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Phone
                </dt>
                <dd className="mt-1 text-lg text-ink-muted">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Location
                </dt>
                <dd className="mt-1 text-lg text-ink-muted">{site.location}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
