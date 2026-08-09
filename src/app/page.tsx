import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Counter } from "@/components/Counter";
import { CTA } from "@/components/CTA";
import {
  services,
  products,
  platformPillars,
  trustPoints,
  certifications,
  site,
} from "@/lib/site";

const approach = [
  {
    tag: "Build",
    title: "We ship real software",
    body: "Zoffec Aegis, Argus, and Wardloom are working platforms — not slide decks. They run assessments, watch infrastructure, and surface exposure for real, every day.",
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
  { value: products.length, suffix: "", label: "Products engineered in-house" },
  { value: services.length, suffix: "", label: "Advisory services, end to end" },
  { value: 2, suffix: "", label: "Deployment modes — cloud & on-prem" },
  { value: 100, suffix: "%", label: "Annexure-K-aligned reporting" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WHO WE ARE */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="A cybersecurity & RegTech company, not a single product"
              intro={`${site.legalName} builds security and compliance software for India's regulated businesses, and stands beside them as an advisory partner. The software is proof of the advice — not the whole company.`}
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
      <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Three platforms, one operating model"
              intro="We build the software our advisory practice wishes existed — then run our clients on it."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <SpotlightCard className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <span className="chip">{p.category}</span>
                    <span
                      className={
                        p.status === "live" ? "pill-live" : "chip text-yellow"
                      }
                    >
                      {p.status === "live" ? "Live" : "In development"}
                    </span>
                  </div>
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
      <Section>
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
      <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Build, advise, assure — the whole compliance lifecycle"
              intro="Most vendors sell you software or sell you hours. ZTPL does both — and makes them work together."
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

      {/* SERVICES OVERVIEW */}
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Advisory that closes the gap to compliant"
          intro="When you need hands and heads, not just a tool — our practitioners deliver."
        />
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
      </Section>

      {/* TRUST & SECURITY TEASER */}
      <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="eyebrow">Trust &amp; security</span>
                <h2 className="heading mt-5 text-3xl sm:text-4xl">
                  How we handle your compliance posture
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
                  Data residency, tamper-evident logging, and least-privilege
                  access aren&apos;t premium add-ons here — they&apos;re the
                  baseline our own platforms are built on.
                </p>
                <Link
                  href="/trust"
                  className="mt-6 inline-block text-sm font-semibold text-green"
                >
                  See our full trust &amp; security posture →
                </Link>
              </div>
              <div className="rounded-2xl border border-line bg-bg-card/60 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Certifications &amp; frameworks
                </span>
                <div className="mt-4">
                  {/* PLACEHOLDER — see src/lib/site.ts `certifications` */}
                  <ul className="flex flex-wrap gap-3">
                    {certifications.map((c) => (
                      <li key={c.name} className="chip">
                        <span className="h-1.5 w-1.5 rounded-full bg-green" />
                        {c.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ZTPL — PROOF */}
      <Section>
        <SectionHeading
          eyebrow="Why ZTPL"
          title="We build, not just advise"
          intro="Anyone can hand you a checklist. We engineer the platforms that run it — which means our advice is grounded in how compliance actually gets done."
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
