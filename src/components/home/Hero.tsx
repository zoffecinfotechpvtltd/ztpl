"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { audience } from "@/lib/site";

const trust = ["SEBI CSCRF", "Annexure-K", "RE-ready", "MSSP multi-client"];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden">
      {/* glow + grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-green-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden
      />

      <div className="container-px relative pb-20 pt-20 sm:pb-28 sm:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={item} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-glow" />
            India&apos;s SEBI CSCRF compliance platform
          </motion.span>

          <motion.h1
            variants={item}
            className="heading mt-6 text-4xl leading-[1.05] sm:text-6xl"
          >
            Compliance{" "}
            <span className="bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent">
              Simplified.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg text-ink-muted"
          >
            SEBI CSCRF, handled — the platform and the advisory in one. ZTPL
            builds Zoffec Aegis and stands beside your team from gap assessment
            to audit-ready submission.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary">
              Book a Demo
            </Link>
            <Link href="/solutions/aegis" className="btn-ghost">
              Explore Aegis →
            </Link>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.14em] text-ink-faint"
          >
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-green">✓</span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* audience marquee-ish strip */}
        <div className="mt-16 border-t border-line pt-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-faint">
            Built for SEBI-regulated entities & the firms that serve them
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-muted">
            {audience.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
