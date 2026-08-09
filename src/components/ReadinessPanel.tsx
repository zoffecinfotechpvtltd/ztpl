"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "./Counter";

/**
 * Illustrative Aegis "CSCRF Readiness" panel — an animated, branded product
 * preview. Replace with a real product screenshot when available.
 */
export function ReadinessPanel({ url = "aegis.ztplsolutions.com / dashboard" }: { url?: string }) {
  const reduce = useReducedMotion();
  const stats = [
    { k: "Controls", v: 146 },
    { k: "Evidence", v: 312 },
    { k: "Open gaps", v: 27 },
  ];

  return (
    <div className="relative">
      <div className="border-grad shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        <div className="rounded-[15px] bg-bg/95 p-4">
          {/* window chrome */}
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-3 w-3 rounded-full bg-alert/70" />
            <span className="h-3 w-3 rounded-full bg-yellow/70" />
            <span className="h-3 w-3 rounded-full bg-green/70" />
            <span className="ml-3 truncate text-xs text-ink-faint">{url}</span>
          </div>

          <div className="space-y-4 rounded-xl border border-line bg-bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">
                CSCRF Readiness
              </span>
              <span className="text-sm font-bold text-green">
                <Counter value={82} suffix="%" />
              </span>
            </div>

            {/* progress */}
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-line">
              <motion.div
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-brand-gradient"
              />
            </div>

            {/* stat tiles */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-lg border border-line bg-bg p-3"
                >
                  <div className="font-display text-lg font-bold text-ink">
                    <Counter value={s.v} />
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-ink-faint">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>

            {/* module rows */}
            <div className="space-y-2 pt-1">
              {[
                ["Governance", 96],
                ["Third-party risk", 74],
                ["Evidence vault", 88],
              ].map(([label, pct], i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 text-[11px] text-ink-muted">
                    {label}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                    <motion.div
                      initial={reduce ? false : { width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.5 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full rounded-full bg-green/70"
                    />
                  </div>
                  <span className="w-8 shrink-0 text-right text-[11px] font-medium text-ink-muted">
                    {pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="pt-3 text-center text-[10px] text-ink-faint">
            Illustrative UI — replace with a real product screenshot.
          </p>
        </div>
      </div>

      {/* floating badge */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -right-3 -top-3 hidden rounded-full border border-green/40 bg-bg px-3 py-1.5 text-[11px] font-semibold text-green shadow-lg sm:block animate-float"
      >
        Annexure-K ready
      </motion.div>
    </div>
  );
}
