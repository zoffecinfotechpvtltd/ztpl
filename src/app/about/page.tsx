import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { CTA } from "@/components/CTA";
import { site, milestones, certifications, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZTPL — Zoffec Technologies Private Limited — is a technology company building Zoffec Aegis, Argus, and ExploitSense for India's regulated businesses.",
  alternates: { canonical: "/about" },
};

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

      {milestones.length > 0 && (
        <Section id="timeline" className="border-t border-line">
          <SectionHeading eyebrow="Timeline" title="How we got here" />
          <div className="mt-10 max-w-xl">
            <Timeline items={milestones} />
          </div>
        </Section>
      )}

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
          <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="h-full">
                <div className="h-full bg-bg-card/80 p-6">
                  <span className="font-display text-xl font-bold text-line">
                    0{i + 1}
                  </span>
                  <h3 className="heading mt-2 text-base">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {v.body}
                  </p>
                  <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-ink-faint">
                    {v.proof}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section id="trust-strip">
        <div className="surface-certificate mx-auto max-w-3xl p-8 text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6248]">
            Registered &amp; recognised
          </span>
          <p className="mt-3 text-sm font-medium">{site.legalName}</p>
          {site.cin && <p className="mt-1 text-sm">CIN: {site.cin}</p>}
          {certifications.length > 0 && (
            <ul className="mt-5 flex flex-wrap justify-center gap-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#1A1F26]/15 bg-white/50 px-3 py-1 font-mono text-xs font-medium"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-deep" />
                  {c.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <CTA
        title="Want to talk to the team, not a slide deck?"
        body="We're the people who built Aegis, Argus, and ExploitSense — happy to walk you through how, and why, on a call."
        primaryLabel="Talk to us"
      />
    </>
  );
}
