import { Hero } from "@/components/home/Hero";
import { ProductSpotlight } from "@/components/home/ProductSpotlight";
import { ProcessFlow } from "@/components/home/ProcessFlow";
import { LifecycleRail } from "@/components/home/LifecycleRail";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Counter } from "@/components/Counter";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import {
  products,
  platformPillars,
  trustPoints,
  audience,
  site,
} from "@/lib/site";

const approach = [
  {
    tag: "Build",
    title: "We ship real software",
    body: "Zoffec Aegis, Argus, and ExploitSense are working platforms — not slide decks. They run assessments, watch infrastructure, and surface exposure for real, every day.",
  },
  {
    tag: "Ship",
    title: "Cloud or on your own infrastructure",
    body: "Every platform we build deploys on our managed cloud or entirely inside your environment — your risk posture and regulator decide, not us.",
  },
  {
    tag: "Support",
    title: "We stay after go-live",
    body: "Onboarding, updates, and direct support from the team that builds the platform — not a ticket queue routed through three time zones.",
  },
];

const proof = [
  { value: products.length, suffix: "", label: "Platforms engineered in-house" },
  { value: audience.length, suffix: "", label: "Regulated sectors served" },
  { value: 2, suffix: "", label: "Deployment modes — cloud & on-prem" },
  { value: 100, suffix: "%", label: "Annexure-K-aligned reporting" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WHAT WE BUILD — product portfolio, moved up: it's the most concrete
          thing ZTPL sells and shouldn't sit behind abstract framing. */}
      <section
        id="what-we-build"
        className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28"
      >
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Three platforms, one operating model"
              intro="Compliance, infrastructure, and threat exposure — engineered by the same team, to the same standard."
            />
          </Reveal>
          <div className="mt-10">
            <ProductSpotlight />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <Section id="who-we-are">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="A technology company, not a single product"
              intro={`${site.legalName} builds security and compliance software for India's regulated businesses — three platforms, one engineering team, one operating standard.`}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative space-y-5 border-l border-line pl-6">
              {trustPoints.map((t) => (
                <div key={t.title} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-gradient" />
                  <h3 className="heading text-base">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HOW WE ENGINEER — governance → controls → reporting pipeline */}
      <Section id="engineering">
        <SectionHeading
          eyebrow="How we engineer"
          title="A framework this broad needs a platform — not a checklist"
          intro="SEBI CSCRF touches governance, controls, evidence, vendors, and reporting. Zoffec Aegis models all of it in one place, so nothing falls through the cracks."
        />
        <ProcessFlow
          nodes={platformPillars.map((p) => ({
            tag: p.tag,
            title: p.title,
            body: p.body,
          }))}
        />
      </Section>

      {/* HOW WE WORK — build/ship/support lifecycle rail */}
      <section
        id="approach"
        className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28"
      >
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Build, ship, support — the whole product lifecycle"
              intro="A platform is only as good as what happens after launch. We own all three."
            />
          </Reveal>
          <LifecycleRail stops={approach} />
        </div>
      </section>

      {/* WHY ZTPL — PROOF */}
      <Section id="proof" className="bg-dot-faint bg-[length:18px_18px]">
        <SectionHeading
          eyebrow="Why ZTPL"
          title="Engineered, not assembled"
          intro="Every platform we ship comes out of the same team, the same codebase discipline, and the same deployment standard."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {proof.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <SpotlightCard className="h-full">
                <div className="font-mono text-4xl font-bold tabular-nums text-gradient">
                  <span aria-hidden>
                    <Counter value={p.value} suffix={p.suffix} />
                  </span>
                  <span className="sr-only">
                    {p.value}
                    {p.suffix} — {p.label}
                  </span>
                </div>
                <div className="mt-3 text-sm text-ink-muted">{p.label}</div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before you talk to us"
          align="center"
        />
        <FAQ />
      </Section>

      <CTA />
    </>
  );
}
