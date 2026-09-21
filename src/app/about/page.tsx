import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZTPL is a technology company building Aegis, Argus, and ExploitSense for India's regulated businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    n: "01",
    title: "Regulator-credible",
    lead: "We speak the language of SEBI CSCRF, Annexure-K, and audit.",
    body: "Every Aegis control maps directly to a CSCRF clause - not a generic template.",
  },
  {
    n: "02",
    title: "Build, then ship",
    lead: "Every platform we run is real, working software.",
    body: "Aegis is live today; Argus and ExploitSense are in development - no vapourware.",
  },
  {
    n: "03",
    title: "Outcomes, not hours",
    lead: "We measure ourselves by whether the platform solves the problem.",
    body: "Controls closed, exposure surfaced, uptime held - that's the scoreboard.",
  },
  {
    n: "04",
    title: "Security by default",
    lead: "Data residency, least privilege, and hardened deployment are baseline.",
    body: "Cloud or on-prem, the same controls apply either way - no premium tier for security.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We make compliance buildable"
        body="ZTPL is a technology company. We build Aegis, Argus, and ExploitSense - real platforms for compliance, infrastructure, and threat exposure, for India's regulated businesses."
      />

      {/* Our story */}
      <Section tone="ink" seed="about-story" aria-labelledby="our-story">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Our story</p>
            <h2 id="our-story" className="mt-4 text-3xl font-bold leading-[1.1] md:text-5xl">
              Why we exist
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 border-l border-transparent text-base md:text-lg lg:border-l-brand-green/40 lg:pl-10">
            <p>
              Regulated businesses in India run on tools that weren&apos;t built for the frameworks they actually
              answer to. Spreadsheets break. Generic GRC suites don&apos;t speak CSCRF. Point tools don&apos;t talk
              to each other.
            </p>
            <p>
              We built ZTPL to close that gap with software: Aegis operationalises SEBI CSCRF end-to-end for
              many entities at once; Argus watches infrastructure continuously; ExploitSense keeps attack surface
              honest. One engineering team, one operating standard, three problems solved properly.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Mission */}
      <Section tone="slate" seed="about-mission" aria-labelledby="mission">
        <div className="container">
          <Reveal className="mx-auto max-w-4xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Mission</p>
            <h2 id="mission" className="mt-4 text-center text-3xl font-bold md:text-4xl">
              What we&apos;re here to do
            </h2>
            <blockquote className="glass-card relative mt-10 px-8 py-12 text-center md:px-14 md:py-16">
              <span
                aria-hidden
                className="gradient-text absolute left-6 top-2 select-none text-8xl font-bold leading-none md:left-10"
              >
                “
              </span>
              <p className="relative text-xl font-semibold leading-snug text-foreground md:text-3xl">
                To be the platform India&apos;s regulated businesses actually run on - for compliance, for
                infrastructure, for exposure management - built by people who ship, not just spec.
              </p>
              <p className="relative mt-6 text-base md:text-lg">
                Our differentiator is simple: we build. Every product decision is tested against real deployments,
                real data, and real operating conditions - not a slide in a pitch deck.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="ink" seed="about-values" aria-labelledby="values">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">How we work</p>
            <h2 id="values" className="mt-4 text-3xl font-bold md:text-5xl">
              Four principles we hold ourselves to
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={0.08 * i}>
                <Card className="glass-card glow-border relative h-full overflow-hidden border-foreground/10 bg-foreground/[0.03] p-8">
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-4 select-none text-8xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(0_210_106/0.3)]"
                  >
                    {v.n}
                  </span>
                  <h3 className="relative text-2xl font-bold">{v.title}</h3>
                  <p className="relative mt-4 text-base font-medium text-foreground/90">{v.lead}</p>
                  <p className="relative mt-2 text-base">{v.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Registered & recognised */}
      <Section tone="slate" pad="sm" seed="about-registered" aria-label="Registered and recognised">
        <Reveal className="container flex justify-center">
          <div className="glass-card w-full max-w-2xl px-8 py-8 text-center">
            <Image src="/logo-mark.png" alt="" width={381} height={382} className="mx-auto h-14 w-auto" />
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Registered &amp; recognised</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{site.legalName}</p>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-foreground/10 bg-background/40 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">CIN</dt>
                <dd className="mt-1 break-all font-mono text-foreground">{site.cin}</dd>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background/40 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">GSTIN</dt>
                <dd className="mt-1 font-mono text-foreground">{site.gstin}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </Section>

      <CTABanner
        heading="Want to talk to the team, not a slide deck?"
        body="We're the people who built Aegis, Argus, and ExploitSense - happy to walk you through how, and why, on a call."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Explore Our Platforms", href: "/solutions" }}
      />
    </>
  );
}
