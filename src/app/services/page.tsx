import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ServiceSelector } from "@/components/ServiceSelector";

export const metadata: Metadata = {
  title: "Services — Hands-On Support Alongside Our Platforms",
  description:
    "Practitioner services from the ZTPL team, alongside Zoffec Aegis, Argus, and ExploitSense: SEBI CSCRF advisory, GRC consulting, VAPT, vCISO, third-party risk (TPRA), and audit support.",
  alternates: { canonical: "/services" },
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
                Hands-on support{" "}
                <span className="text-gradient">alongside the platform</span>
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-ink-muted">
                Software alone doesn&apos;t close every gap. Our practitioners
                offer these services alongside Zoffec Aegis, Argus, and
                ExploitSense for teams that need hands and heads, not just a
                tool.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <ServiceSelector />
      </Section>

      <CTA
        title="Not sure where your gaps are?"
        body="Start with a CSCRF gap assessment. We'll map your obligations, score your readiness, and give you a prioritised path to compliant."
        primaryLabel="Talk to us"
      />
    </>
  );
}
