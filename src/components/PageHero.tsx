"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  className?: string;
};

/** Compact hero for inner pages: mesh gradient, centered copy, min 50vh. */
export function PageHero({ eyebrow, title, body, className }: Props) {
  return (
    <section
      className={cn(
        "gradient-mesh-hero relative flex min-h-[50vh] items-center overflow-hidden pb-16 pt-32 text-center",
        className,
      )}
    >
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />
      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
