"use client";

import { motion } from "framer-motion";
import { KeyRound, Lock, ShieldCheck } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

const counters = [
  { end: 3, label: "Platforms" },
  { end: 7, label: "Sectors served" },
  { end: 2, label: "Deployment modes" },
];

const taglines = [
  { text: "Your data, your residency", Icon: Lock },
  { text: "Tamper-evident by design", Icon: ShieldCheck },
  { text: "Least privilege, enforced", Icon: KeyRound },
];

export function StatsBand() {
  return (
    <section className="relative pb-8 pt-4 lg:pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card relative overflow-hidden bg-surface/60 px-6 py-12 lg:px-12"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="text-center">
            <p className="font-mono text-xs text-muted-foreground">ztplsolutions.com / about</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">ZTPL</h2>
            <p className="mt-2 text-base">Zoffec Technologies Private Limited — Compliance Simplified.</p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {counters.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.5 }}
                className="text-center"
              >
                <CountUp
                  end={c.end}
                  className="gradient-text block text-5xl font-bold md:text-6xl"
                />
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </p>
              </motion.div>
            ))}
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {taglines.map(({ text, Icon }) => (
              <li
                key={text}
                className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/90"
              >
                <Icon className="h-4 w-4 text-brand-cyan" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
