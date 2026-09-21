"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotNetwork } from "@/components/ui/dot-network";

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
        "gradient-mesh-hero relative flex min-h-[50vh] items-center overflow-hidden pb-28 pt-44 text-center",
        className,
      )}
    >
      <DotNetwork />
      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
