"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

/** Eyebrow + heading + subtext block used by every section. */
export function SectionHeading({ eyebrow, title, description, align = "center", className, as: Tag = "h2" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-3xl", className)}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">{eyebrow}</p>
      <Tag className="mt-4 text-3xl font-bold leading-[1.1] md:text-5xl">{title}</Tag>
      {description && <p className="mt-5 text-base md:text-lg">{description}</p>}
    </motion.div>
  );
}
