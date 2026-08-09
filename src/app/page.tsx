import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Counter } from "@/components/Counter";
import { CTA } from "@/components/CTA";
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
            <div className="grid gap-4 sm:grid-cols-1">
              {trustPoints.map((t) => (
                <SpotlightCard key={t.title}>
                  <h3 className="heading text-base">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {t.body}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* WHAT WE BUILD — product portfolio */}
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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <SpotlightCard className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-2">
                    {p.icon ? (
                      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
                        <Image src={p.icon} alt="" width={40} height={40} className="h-full w-full object-contain" />
                      </div>
                    ) : (
                      <span className="chip">{p.category}</span>
                    )}
                    <span
                      className={
                        p.status === "live" ? "pill-live" : "chip text-yellow"
                      }
                    >
                      {p.status === "live" ? "Live" : "In development"}
                    </span>
                  </div>
                  {p.icon && <span className="chip mt-3 self-start">{p.category}</span>}
                  <h3 className="heading mt-4 text-xl">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-yellow">
                    {p.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {p.short}
                  </p>
                  <Link
                    href={`/solutions/${p.slug}`}
                    className="mt-5 inline-block text-sm font-semibold text-green"
                  >
                    Learn more →
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY A PLATFORM */}
      <Section id="engineering">
        <SectionHeading
          eyebrow="How we engineer"
          title="A framework this broad needs a platform — not a checklist"
          intro="SEBI CSCRF touches governance, controls, evidence, vendors, and reporting. Zoffec Aegis models all of it in one place, so nothing falls through the cracks."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {platformPillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <span className="chip text-green">{p.tag}</span>
                <h3 className="heading mt-4 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* APPROACH */}
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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((p, i) => (
              <Reveal key={p.tag} delay={i * 0.08}>
                <SpotlightCard className="h-full">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green">
                    {p.tag}
                  </span>
                  <h3 className="heading mt-3 text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ZTPL — PROOF */}
      <Section id="proof">
        <SectionHeading
          eyebrow="Why ZTPL"
          title="Engineered, not assembled"
          intro="Every platform we ship comes out of the same team, the same codebase discipline, and the same deployment standard."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <SpotlightCard className="h-full">
                <div className="font-mono text-4xl font-bold tabular-nums text-gradient">
                  <Counter value={p.value} suffix={p.suffix} />
                </div>
                <div className="mt-3 text-sm text-ink-muted">{p.label}</div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
