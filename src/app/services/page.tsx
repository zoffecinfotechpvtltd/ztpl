import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServicesTabs } from "@/components/ServicesTabs";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SEBI CSCRF advisory, GRC consulting, VAPT, vCISO, third-party risk, and audit support — hands-on services alongside the ZTPL platforms.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Hands-on support alongside the platform"
        body="Software alone doesn't close every gap. Our practitioners offer these services alongside Zoffec Aegis, Argus, and ExploitSense for teams that need hands and heads, not just a tool."
      />

      <section className="section-y" aria-label="Our services">
        <div className="container">
          <ServicesTabs />
        </div>
      </section>

      {/* Mid-page strip — violet tint to break the rhythm before the closing CTA */}
      <section className="pb-24 lg:pb-32" aria-labelledby="gaps">
        <Reveal className="container">
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/25 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-transparent px-8 py-14 text-center backdrop-blur-xl md:px-16">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <h2 id="gaps" className="relative text-3xl font-bold md:text-4xl">
              Not sure where your gaps are?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-base md:text-lg">
              Start with a CSCRF gap assessment. We&apos;ll map your obligations, score your readiness, and give you a
              prioritised path to compliant.
            </p>
            <Button asChild variant="gradient" size="lg" className="relative mt-8 bg-gradient-secondary">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </>
  );
}
