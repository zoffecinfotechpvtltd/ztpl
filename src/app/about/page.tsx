import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Timeline } from "@/components/Timeline";
import { CTA } from "@/components/CTA";
import { site, milestones, certifications } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZTPL — Zoffec Technologies Private Limited — is a technology company building Zoffec Aegis, Argus, and ExploitSense for India's regulated businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Regulator-credible",
    body: "We speak the language of SEBI CSCRF, Annexure-K, and audit. No hype — just precise, defensible engineering.",
  },
  {
    title: "Build, then ship",
    body: "Every platform we run — Aegis, Argus, ExploitSense — is real, working software, not a slide deck or a roadmap promise.",
  },
  {
    title: "Outcomes, not hours",
    body: "We measure ourselves by whether the platform actually solves the problem — controls closed, exposure surfaced, uptime held.",
  },
  {
    title: "Security by default",
    body: "Data residency, least privilege, and hardened deployment are baseline, not premium add-ons.",
  },
];

export default function AboutPage() {
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
              <span className="eyebrow">About</span>
              <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-6xl">
                We make compliance{" "}
                <span className="text-gradient">buildable</span>
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-ink-muted">
                {site.legalName} ({site.name}) is a technology company. We
                build Zoffec Aegis, Argus, and ExploitSense — real platforms
                for compliance, infrastructure, and threat exposure, for
                India&apos;s regulated businesses.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="story">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Why we exist" />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-muted">
              <p>
                Regulated businesses in India run on tools that weren&apos;t
                built for the frameworks they actually answer to.
                Spreadsheets break. Generic GRC suites don&apos;t speak
                CSCRF. Point tools don&apos;t talk to each other.
              </p>
              <p>
                We built ZTPL to close that gap with software: Zoffec Aegis
                operationalises SEBI CSCRF end-to-end for many entities at
                once; Argus watches infrastructure continuously; ExploitSense
                keeps attack surface honest. One engineering team, one
                operating standard, three problems solved properly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Mission" title="What we're here to do" />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-muted">
              <p>
                To be the platform India&apos;s regulated businesses actually
                run on — for compliance, for infrastructure, for exposure
                management — built by people who ship, not just spec.
              </p>
              <p>
                Our differentiator is simple: we build. Every product decision
                is tested against real deployments, real data, and real
                operating conditions — not a slide in a pitch deck.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="timeline" className="border-t border-line">
        <SectionHeading eyebrow="Timeline" title="How we got here" />
        <div className="mt-10 max-w-xl">
          <Timeline items={milestones} />
        </div>
      </Section>

      <section
        id="values"
        className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28"
      >
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="How we work"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.08}>
                <SpotlightCard className="h-full">
                  <h3 className="heading text-lg">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {v.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section id="trust-strip">
        <div className="mx-auto max-w-3xl rounded-xl border border-line bg-bg-card/60 p-8 text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Registered &amp; recognised
          </span>
          <p className="mt-3 text-sm text-ink-muted">{site.legalName}</p>
          <p className="mt-1 text-sm text-ink-muted">CIN: {site.cin}</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {certifications.map((c) => (
              <li key={c.name} className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA />
    </>
  );
}
