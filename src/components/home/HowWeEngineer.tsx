"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    n: "01",
    tag: "Multi-tenant",
    title: "Built for many entities at once",
    body: "True tenant isolation lets an MSSP run dozens of Regulated Entities side by side — and lets a single RE manage every business unit — with no cross-contamination.",
  },
  {
    n: "02",
    tag: "SEBI-native",
    title: "The framework is the foundation",
    body: "CSCRF controls, Annexure-K mapping, and RE categorisation are baked into the data model — not bolted on as templates.",
  },
  {
    n: "03",
    tag: "Audit-ready",
    title: "Evidence to submission, in one trail",
    body: "Every control links to versioned evidence and a tamper-evident log, so a submission-ready report is always one click away.",
  },
];

export function HowWeEngineer() {
  return (
    <section className="section-y" aria-labelledby="how-we-engineer">
      <div className="container">
        <SectionHeading
          eyebrow="How we engineer"
          title={<span id="how-we-engineer">A framework this broad needs a platform — not a checklist</span>}
          description="SEBI CSCRF touches governance, controls, evidence, vendors, and reporting. Zoffec Aegis models all of it in one place, so nothing falls through the cracks."
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Timeline spine */}
          <div
            aria-hidden
            className="absolute bottom-4 left-4 top-4 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-violet-500 md:left-[5.5rem]"
          />

          <ol className="space-y-16 md:space-y-20">
            {items.map((it) => (
              <motion.li
                key={it.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-4 pl-12 md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0"
              >
                <span
                  aria-hidden
                  className="z-10 -ml-1 select-none self-start bg-background py-1 pr-2 text-6xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(59_130_246/0.55)] md:text-8xl md:pr-4"
                >
                  {it.n}
                </span>
                <div className="md:pt-3">
                  <p className="gradient-text text-xs font-semibold uppercase tracking-[0.2em]">{it.tag}</p>
                  <h3 className="mt-3 text-2xl font-bold md:text-3xl">{it.title}</h3>
                  <p className="mt-3 max-w-2xl text-base md:text-lg">{it.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
