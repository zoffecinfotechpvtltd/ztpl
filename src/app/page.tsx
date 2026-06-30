import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Counter } from "@/components/Counter";
import { CTA } from "@/components/CTA";
import { services, products, platformPillars } from "@/lib/site";

const aegis = products[0];

const approach = [
  {
    tag: "Build",
    title: "We ship a real platform",
    body: "Zoffec Aegis is a working, multi-tenant GRC platform — not a slide deck. It runs assessments, holds evidence, and produces audit-ready reports for every entity you manage.",
  },
  {
    tag: "Advise",
    title: "We sit on your side of the table",
    body: "SEBI CSCRF advisory, vCISO leadership, and VAPT delivered by practitioners who speak regulator — and translate it into action your team can execute.",
  },
  {
    tag: "Assure",
    title: "We carry you to the audit",
    body: "Evidence mapped, controls implemented, findings closed. We don't hand you a report and leave — we get you submission-ready.",
  },
];

const proof = [
  { value: 8, suffix: "", label: "Integrated modules in one platform" },
  { value: 100, suffix: "%", label: "Annexure-K-aligned reporting" },
  { value: 2, suffix: "", label: "Deployment modes — cloud & on-prem" },
  { value: 24, suffix: "/7", label: "Tamper-evident audit trail" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* THE PLATFORM, IN ONE LINE */}
      <Section>
        <SectionHeading
          eyebrow="Why a platform"
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

      {/* FEATURED PLATFORM — AEGIS */}
      <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow">The Platform</span>
                <h2 className="heading mt-5 text-3xl sm:text-4xl">
                  Zoffec Aegis
                </h2>
                <p className="mt-2 text-sm font-medium text-yellow">
                  {aegis.tagline}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  One multi-tenant GRC workspace for assessments, evidence,
                  third-party risk, and audit-ready reporting. A single
                  Regulated Entity runs its whole program here; an MSSP runs
                  dozens of clients side by side. Deploy on our cloud or your own
                  server.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {aegis.modules.slice(0, 6).map((m) => (
                    <li
                      key={m.title}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <span className="mt-0.5 text-green">▸</span>
                      <span className="font-medium text-ink">{m.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/solutions/aegis" className="btn-primary">
                    Explore the Platform
                  </Link>
                  <a
                    href={aegis.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Launch Aegis →
                  </a>
                </div>
              </div>

              <Reveal direction="left" delay={0.1}>
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-6 bg-green-glow"
                    aria-hidden
                  />
                  <div className="relative grid gap-4">
                    {aegis.modules.slice(0, 4).map((m, i) => (
                      <SpotlightCard key={m.title} className="!p-5">
                        <div className="flex items-start gap-4">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green/30 bg-green/10 font-display font-bold text-green">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="heading text-base">{m.title}</h3>
                            <p className="mt-1 text-sm text-ink-muted">
                              {m.body}
                            </p>
                          </div>
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="Build, advise, assure — the whole compliance lifecycle"
          intro="Most vendors sell you software or sell you hours. ZTPL does both — and makes them work together."
        />
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
      </Section>

      {/* SERVICES OVERVIEW */}
      <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Advisory that closes the gap to compliant"
              intro="When you need hands and heads, not just a tool — our practitioners deliver."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link href="/services" className="block h-full">
                  <SpotlightCard className="h-full">
                    <h3 className="heading text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {s.short}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-green">
                      Learn more →
                    </span>
                  </SpotlightCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ZTPL — PROOF */}
      <Section>
        <SectionHeading
          eyebrow="Why ZTPL"
          title="We build, not just advise"
          intro="Anyone can hand you a checklist. We engineered the platform that runs it — which means our advice is grounded in how compliance actually gets done."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <SpotlightCard className="h-full">
                <div className="font-display text-4xl font-bold text-gradient">
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
