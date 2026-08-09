import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { CTA } from "@/components/CTA";
import { site, trustPoints, certifications, getProduct } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "How ZTPL handles data residency, access control, and audit-trail integrity across its own platforms — the security posture behind the compliance advice.",
  alternates: { canonical: "/trust" },
};

const aegis = getProduct("aegis");

export default function TrustPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-green-glow" aria-hidden />
        <div className="container-px relative py-20 sm:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Trust &amp; security</span>
              <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-6xl">
                A compliance company{" "}
                <span className="text-gradient">held to its own standard</span>
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-ink-muted">
                We ask regulated entities to prove their security posture. Here
                is ours — how we handle data residency, access, and audit
                integrity across every platform we run.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="principles" railLabel="Principles">
        <SectionHeading
          eyebrow="Principles"
          title="What's baseline, not premium"
          intro="These aren't policy documents nobody checks — they're built into how our platforms are engineered."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <h3 className="heading text-lg">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {t.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {aegis?.deployment && (
        <section
          id="deployment"
          data-rail-label="Deployment"
          className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28"
        >
          <div className="container-px">
            <Reveal>
              <SectionHeading
                eyebrow="Data residency"
                title="Your cloud or ours"
                intro="Deployment options run the way your risk posture and regulator require — demonstrated first on Zoffec Aegis, and the model every platform we build follows."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {aegis.deployment.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.08}>
                  <SpotlightCard className="h-full">
                    <h3 className="heading text-xl">{d.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {d.body}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {d.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-2 text-sm text-ink-muted"
                        >
                          <span className="text-green">✓</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Section id="certifications" railLabel="Certifications">
        <SectionHeading
          eyebrow="Certifications & registration"
          title="Compliance, on the record"
        />
        <div className="mt-10 rounded-xl border border-line bg-bg-card/60 p-8">
          <div className="flex flex-col gap-1 text-sm text-ink-muted">
            <span>{site.legalName}</span>
            <span>CIN: {site.cin}</span>
            <span>Founded: {site.founded}</span>
          </div>
          <div className="mt-6">
            <TrustBadgeRow items={certifications} />
          </div>
          <p className="mt-6 text-xs text-ink-faint">
            Certifications above are placeholders pending confirmation — this
            page will list only certifications ZTPL actually holds.
          </p>
        </div>
      </Section>

      <CTA
        title="Have a security questionnaire for us?"
        body="Send it over — we'll walk your team through our posture directly, control by control."
        primaryLabel="Talk to us"
      />
    </>
  );
}
