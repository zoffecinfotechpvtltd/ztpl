import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — SEBI CSCRF Advisory, GRC, VAPT, vCISO",
  description:
    "ZTPL's GRC and cybersecurity services for SEBI-regulated entities: SEBI CSCRF advisory, GRC consulting, VAPT, vCISO, third-party risk (TPRA), and audit support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 bg-green-glow"
          aria-hidden
        />
        <div className="container-px relative py-20 sm:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Services</span>
              <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Practitioner-led{" "}
                <span className="text-gradient">GRC &amp; cybersecurity</span>
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-ink-muted">
                When you need more than software, our team delivers the advisory
                and assurance that gets SEBI-regulated entities — and the MSSPs
                who serve them — to audit-ready and beyond.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <SpotlightCard className="flex h-full flex-col">
                <h2 className="heading text-xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.short}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <span className="mt-0.5 text-green">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-2">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-green"
                  >
                    Talk to us about {s.title} →
                  </Link>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Not sure where your gaps are?"
        body="Start with a CSCRF gap assessment. We'll map your obligations, score your readiness, and give you a prioritised path to compliant."
        primaryLabel="Talk to us"
      />
    </>
  );
}
