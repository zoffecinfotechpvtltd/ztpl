import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZTPL — Zoffec Technologies Private Limited — builds compliance technology and delivers GRC advisory for India's SEBI-regulated businesses.",
};

const values = [
  {
    title: "Regulator-credible",
    body: "We speak the language of SEBI CSCRF, Annexure-K, and audit. No hype — just precise, defensible work.",
  },
  {
    title: "Build, then advise",
    body: "We earn trust by shipping. Aegis is proof our guidance is grounded in how compliance actually operates.",
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
          <div className="max-w-3xl">
            <span className="eyebrow">About</span>
            <h1 className="heading mt-5 text-4xl sm:text-5xl">
              We make compliance buildable
            </h1>
            <p className="mt-5 text-xl text-ink-muted">
              {site.legalName} ({site.name}) is a cybersecurity and RegTech
              company focused on one thing: making SEBI CSCRF compliance
              achievable, repeatable, and audit-ready for India&apos;s regulated
              businesses.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Why we exist" />
            <div className="mt-5 space-y-4 text-ink-muted">
              <p>
                The SEBI Cyber Security and Cyber Resilience Framework raised the
                bar for regulated entities — and exposed how unprepared most
                compliance tooling was for it. Spreadsheets break. Generic GRC
                suites don&apos;t speak CSCRF. Advisory alone leaves you with a
                report and no system to run it.
              </p>
              <p>
                We built ZTPL to close that gap from both directions: a product,
                Zoffec Aegis, that operationalises CSCRF end-to-end, and an
                advisory practice that implements it shoulder-to-shoulder with
                your team. Software where it scales, people where it counts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Mission" title="What we're here to do" />
            <div className="mt-5 space-y-4 text-ink-muted">
              <p>
                To be the most trusted compliance partner for SEBI-regulated
                entities and the MSSPs that serve them — by shipping technology
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

      <section className="border-y border-line bg-bg-soft py-20 sm:py-28">
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
                <div className="card h-full">
                  <h3 className="heading text-lg">{v.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-faint">
              Founders &amp; team — bios and photos to be added. Drop your team
              content here.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
