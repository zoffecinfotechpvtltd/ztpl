import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { services, products } from "@/lib/site";

const aegis = products[0];

const pillars = [
  {
    tag: "Build",
    title: "We ship a real product",
    body: "Zoffec Aegis is a working GRC platform — not a slide deck. It runs assessments, holds evidence, and produces audit-ready reports.",
  },
  {
    tag: "Advise",
    title: "We sit on your side of the table",
    body: "SEBI CSCRF advisory, vCISO leadership, and VAPT delivered by practitioners who speak regulator — and translate it into action.",
  },
  {
    tag: "Assure",
    title: "We carry you to the audit",
    body: "Evidence mapped, controls implemented, findings closed. We don't hand you a report and leave — we get you submission-ready.",
  },
];

const proof = [
  { stat: "1", label: "Platform built in-house — Zoffec Aegis" },
  { stat: "Cloud / On-prem", label: "Deploy your way" },
  { stat: "Multi-client", label: "Made for MSSPs & consultancies" },
  { stat: "Annexure-K", label: "Submission-ready reporting" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WHAT WE DO */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="One partner for the whole compliance lifecycle"
          intro="Most vendors sell you software or sell you hours. ZTPL does both — and makes them work together."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.08}>
              <div className="card h-full">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-green">
                  {p.tag}
                </span>
                <h3 className="heading mt-3 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FEATURED PRODUCT — AEGIS */}
      <section className="border-y border-line bg-bg-soft py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow">Flagship product</span>
                <h2 className="heading mt-4 text-3xl sm:text-4xl">
                  Zoffec Aegis
                </h2>
                <p className="mt-4 text-lg text-ink-muted">
                  India&apos;s most complete SEBI CSCRF compliance platform — a
                  multi-client GRC workspace for assessments, evidence,
                  third-party risk, and audit-ready reporting. Deploy on our
                  cloud or on your own server.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {aegis.modules.slice(0, 4).map((m) => (
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
                    Explore Aegis
                  </Link>
                  <a
                    href={aegis.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Launch Platform →
                  </a>
                </div>
              </div>

              {/* product mockup slot */}
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-4 bg-green-glow"
                  aria-hidden
                />
                <div className="relative rounded-2xl border border-line bg-bg p-4 shadow-2xl">
                  <div className="flex items-center gap-1.5 pb-3">
                    <span className="h-3 w-3 rounded-full bg-alert/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow/70" />
                    <span className="h-3 w-3 rounded-full bg-green/70" />
                    <span className="ml-3 text-xs text-ink-faint">
                      aegis.zoffec.com / dashboard
                    </span>
                  </div>
                  <div className="space-y-3 rounded-lg bg-bg-card p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-ink">
                        CSCRF Readiness
                      </span>
                      <span className="text-sm font-bold text-green">82%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-line">
                      <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-green to-yellow" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {[
                        ["Controls", "146"],
                        ["Evidence", "312"],
                        ["Open gaps", "27"],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="rounded-md border border-line bg-bg p-3"
                        >
                          <div className="text-lg font-bold text-ink">{v}</div>
                          <div className="text-[10px] uppercase tracking-wide text-ink-faint">
                            {k}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="pt-3 text-center text-[10px] text-ink-faint">
                    Illustrative UI — replace with a real product screenshot.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
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
              <Link href="/services" className="card block h-full">
                <h3 className="heading text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-green">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY ZTPL */}
      <section className="border-y border-line bg-bg-soft py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Why ZTPL"
              title="We build, not just advise"
              intro="Anyone can hand you a checklist. We engineered the platform that runs it — which means our advice is grounded in how compliance actually gets done."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {proof.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.06}>
                  <div className="card h-full">
                    <div className="font-display text-2xl font-bold text-green">
                      {p.stat}
                    </div>
                    <div className="mt-2 text-sm text-ink-muted">{p.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
