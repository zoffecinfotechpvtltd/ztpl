"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Milestone } from "@/lib/site";

export function Timeline({ items }: { items: Milestone[] }) {
  const reduce = useReducedMotion();

  return (
    <ol className="relative space-y-8 border-l border-line pl-8">
      {items.map((m, i) => (
        <motion.li
          key={`${m.year}-${m.label}`}
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-gradient"
            aria-hidden
          />
          <span className="font-display text-sm font-bold text-green">
            {m.year}
          </span>
          <p className="mt-1 text-base text-ink">{m.label}</p>
        </motion.li>
      ))}
    </ol>
  );
}
