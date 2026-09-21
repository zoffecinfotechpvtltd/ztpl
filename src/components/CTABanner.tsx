"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Cta = { label: string; href: string };

type Props = {
  heading?: string;
  body?: string;
  primary?: Cta;
  secondary?: Cta;
};

// Inline fractal-noise grain; sits over the gradient at low opacity.
const grain =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/** Closing CTA card shown above the footer on every main page. */
export function CTABanner({
  heading = "See what we build",
  body = "Book a walkthrough of Zoffec Aegis, or ask about Argus and ExploitSense — we'll show you the platform, not a slide deck.",
  primary = { label: "Book a Demo", href: "/contact" },
  secondary = { label: "Explore Our Platforms", href: "/solutions" },
}: Props) {
  return (
    <section className="container mb-24" aria-label="Call to action">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative isolate overflow-hidden rounded-3xl bg-gradient-cta bg-[length:200%_200%] px-6 py-16 text-center animate-gradient-shift md:px-16 md:py-24"
      >
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-80 w-80 rounded-full bg-fuchsia-500/40 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-overlay"
          style={{ backgroundImage: grain }}
        />

        <h2 className="text-4xl font-bold text-white md:text-5xl">{heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">{body}</p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="light" size="lg">
            <Link href={primary.href}>
              <span className="bg-gradient-to-r from-blue-700 to-violet-700 bg-clip-text text-transparent">
                {primary.label}
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="lg" className="group">
            <Link href={secondary.href}>
              {secondary.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
