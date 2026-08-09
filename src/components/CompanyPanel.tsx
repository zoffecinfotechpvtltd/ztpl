"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "./Counter";
import { services, audience, trustPoints } from "@/lib/site";

/**
 * Company-identity hero panel — the first thing a visitor sees. Deliberately
 * not a product screenshot: it's ZTPL's own facts (services, sectors served,
 * how we work), mirroring the window-chrome card style used for the Aegis
 * product preview elsewhere so the two read as one visual system.
 */
export function CompanyPanel() {
  const reduce = useReducedMotion();
  const stats = [
    { k: "Services", v: services.length },
    { k: "Sectors served", v: audience.length },
    { k: "Deployment modes", v: 2 },
  ];

  return (
    <div className="relative">
      <div className="border-grad shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        <div className="rounded-[15px] bg-bg/95 p-4">
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-3 w-3 rounded-full bg-alert/70" />
            <span className="h-3 w-3 rounded-full bg-yellow/70" />
            <span className="h-3 w-3 rounded-full bg-green/70" />
            <span className="ml-3 truncate text-xs text-ink-faint">
              ztplsolutions.com / about
            </span>
          </div>

          <div className="space-y-5 rounded-xl border border-line bg-bg-card p-5">
            <div>
              <span className="text-sm font-semibold text-ink">ZTPL</span>
              <p className="mt-1 text-xs text-ink-muted">
                Zoffec Technologies Private Limited — Compliance Simplified.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <div key={s.k} className="rounded-lg border border-line bg-bg p-3">
                  <div className="font-display text-lg font-bold text-ink">
                    <Counter value={s.v} />
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-ink-faint">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-1">
              {trustPoints.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  <span className="text-[13px] leading-snug text-ink-muted">
                    {t.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -right-3 -top-3 hidden rounded-full border border-green/40 bg-bg px-3 py-1.5 text-[11px] font-semibold text-green shadow-lg sm:block animate-float"
      >
        Practitioner-built
      </motion.div>
    </div>
  );
}
