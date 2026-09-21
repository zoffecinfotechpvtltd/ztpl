"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

type Cta = { label: string; href: string };

type Props = {
  heading?: string;
  body?: string;
  primary?: Cta;
  secondary?: Cta;
};

// Inline fractal-noise grain; sits over the panel at very low opacity.
const grain =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/** Closing CTA piece shown above the footer on every main page: a calm deep-green panel with one emerald action. */
export function CTABanner({
  heading = "See what we build",
  body = "Book a walkthrough of Zoffec Aegis, or ask about Argus and ExploitSense — we'll show you the platform, not a slide deck.",
  primary = { label: "Book a Demo", href: "/contact" },
  secondary = { label: "Explore Our Platforms", href: "/solutions" },
}: Props) {
  return (
    <Section tone="ink" aria-label="Call to action" seed={`cta-${heading}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative isolate overflow-hidden rounded-3xl border border-brand-green/20 bg-[#0B1912] px-6 py-16 text-center md:px-16 md:py-24"
        >
          <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-brand-green/[0.16] blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-72 w-72 rounded-full bg-brand-deep/[0.14] blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay"
            style={{ backgroundImage: grain }}
          />

          <h2 className="text-4xl font-black md:text-5xl">{heading}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg">{body}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="gradient" size="lg">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href={secondary.href}>
                {secondary.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
