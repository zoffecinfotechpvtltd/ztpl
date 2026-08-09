"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Marquee } from "@/components/Marquee";
import { CompanyPanel } from "@/components/CompanyPanel";
import { audience } from "@/lib/site";

const trust = ["Practitioner-led", "SEBI CSCRF", "Platform-backed", "MSSP-ready"];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-green-glow"
        aria-hidden
      />

      <div className="container-px relative grid items-center gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-glow" />
            Cybersecurity &amp; GRC for regulated India
          </motion.span>

          <motion.h1
            variants={item}
            className="heading mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.1rem]"
          >
            Compliance,
            <br />
            <span className="text-gradient animate-gradient-pan">
              Simplified.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            <span className="font-medium text-ink">ZTPL</span> is a
            cybersecurity and RegTech company for India&apos;s SEBI-regulated
            businesses. We pair practitioner-led GRC advisory with{" "}
            <span className="font-medium text-ink">Zoffec Aegis</span> — the
            compliance platform we built to run it — so your team gets both
            the guidance and the system to execute it.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary">
              Book a Demo
            </Link>
            <Link href="/solutions" className="btn-ghost">
              Explore Our Platforms →
            </Link>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.14em] text-ink-faint"
          >
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-green">✓</span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — company identity panel */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-6 bg-green-glow"
            aria-hidden
          />
          <CompanyPanel />
        </motion.div>
      </div>

      {/* audience marquee */}
      <div className="relative border-y border-line bg-bg-soft/40 py-6">
        <p className="container-px mb-4 text-center text-[11px] uppercase tracking-[0.22em] text-ink-faint">
          Built for SEBI-regulated entities &amp; the firms that serve them
        </p>
        <Marquee
          duration={38}
          items={audience.map((a) => (
            <span
              key={a}
              className="mx-2 inline-flex items-center gap-2 text-sm text-ink-muted"
            >
              <span className="h-1 w-1 rounded-full bg-green/60" />
              {a}
            </span>
          ))}
        />
      </div>
    </section>
  );
}
