import Link from "next/link";
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
    "ZTPL — Zoffec Technologies Private Limited — is a cybersecurity and RegTech company building Zoffec Aegis, Argus, and Wardloom, and delivering GRC advisory for India's SEBI-regulated businesses and MSSPs.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Regulator-credible",
    body: "We speak the language of SEBI CSCRF, Annexure-K, and audit. No hype — just precise, defensible work.",
  },
  {
    title: "Build, then advise",
    body: "We earn trust by shipping. Every platform we run — Aegis, Argus, Wardloom — is proof our guidance is grounded in how the work actually operates.",
  },
  {
    title: "Outcomes, not hours",
    body: "We measure ourselves by your audit outcome — controls closed, evidence ready, submission accepted.",
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
                {site.legalName} ({site.name}) is a cybersecurity and RegTech
                company focused on one thing: making SEBI CSCRF compliance
                achievable, repeatable, and audit-ready for India&apos;s
                regulated businesses and the MSSPs that serve them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Why we exist" />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-muted">
              <p>
                The SEBI Cyber Security and Cyber Resilience Framework raised the
                bar for regulated entities — and exposed how unprepared most
                compliance tooling was for it. Spreadsheets break. Generic GRC
                suites don&apos;t speak CSCRF. Advisory alone leaves you with a
                report and no system to run it.
              </p>
              <p>
                We built ZTPL to close that gap from both directions: platforms
                — starting with Zoffec Aegis, which operationalises CSCRF
                end-to-end for many entities at once — and an advisory practice
                that implements it shoulder-to-shoulder with your team.
                Software where it scales, people where it counts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Mission" title="What we're here to do" />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-muted">
              <p>
                To be the most trusted compliance partner for SEBI-regulated
                entities and the MSSPs that serve them — by shipping a platform
                that makes the framework workable and advisory that makes it
                stick.
              </p>
              <p>
                Our differentiator is simple: we don&apos;t just advise, we
                build. That means our guidance is tested against a real platform,
                real evidence, and real audit cycles — not theory.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading eyebrow="Timeline" title="How we got here" />
        <div className="mt-10 max-w-xl">
          <Timeline items={milestones} />
        </div>
      </Section>

      <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
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

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-bg-card/60 p-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
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
          <Link
            href="/trust"
            className="mt-6 inline-block text-sm font-semibold text-green"
          >
            Read our full trust &amp; security posture →
          </Link>
        </div>
      </Section>

      <CTA />
    </>
  );
}
