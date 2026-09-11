"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { services } from "@/lib/site";

/**
 * Left-rail selector + detail panel, replacing six near-identical cards with
 * one service in full detail at a time. Rail sits above the panel on mobile
 * (horizontal scroll) rather than beside it.
 */
export function ServiceSelector() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const s = services[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr]">
      <div
        role="tablist"
        aria-label="Services"
        className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {services.map((service, i) => {
          const isActive = i === active;
          return (
            <button
              key={service.slug}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all duration-300 lg:shrink ${
                isActive
                  ? "border-green/40 bg-green/10 text-ink"
                  : "border-line bg-bg-soft/40 text-ink-muted hover:border-line hover:bg-bg-soft hover:text-ink"
              }`}
            >
              {service.title}
            </button>
          );
        })}
      </div>

      <div className="card overflow-hidden p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.slug}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-8"
          >
            <h2 className="heading text-2xl">{s.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {s.short}
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {s.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span className="mt-0.5 text-green">✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="text-sm font-semibold text-green">
                Talk to us about {s.title} →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
