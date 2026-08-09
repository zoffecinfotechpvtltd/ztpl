"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Marquee } from "@/components/Marquee";
import { CompanyPanel } from "@/components/CompanyPanel";
import { audience } from "@/lib/site";
import { ensureGsap, gsapMatchMedia } from "@/lib/gsap";

const trust = ["3 platforms shipped", "SEBI CSCRF", "Multi-tenant", "MSSP-ready"];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const beats = gsap.utils.toArray<HTMLElement>("[data-hero-beat]");
      const panel =
        rootRef.current?.querySelector<HTMLElement>("[data-hero-panel]") ??
        null;
      const targets = panel ? [...beats, panel] : beats;

      gsapMatchMedia(({ full }) => {
        if (!full) {
          gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
          return;
        }
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(beats, {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.09,
        }).from(
          panel,
          { opacity: 0, y: 24, scale: 0.95, duration: 0.8 },
          "-=0.55"
        );
        return () => {
          tl.kill();
        };
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-green-glow"
        aria-hidden
      />

      <div className="container-px relative grid items-center gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        {/* Left — copy */}
        <div>
          <span data-hero-beat className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-glow" />
            Security &amp; compliance technology, built in India
          </span>

          <h1
            data-hero-beat
            className="heading mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.1rem]"
          >
            Compliance,
            <br />
            <span className="text-gradient animate-gradient-pan">
              Simplified.
            </span>
          </h1>

          <p
            data-hero-beat
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            <span className="font-medium text-ink">
              Zoffec Technologies Private Limited
            </span>{" "}
            builds security and compliance platforms for India&apos;s
            regulated businesses:{" "}
            <span className="font-medium text-ink">Zoffec Aegis</span> for
            SEBI CSCRF, <span className="font-medium text-ink">Argus</span>{" "}
            for infrastructure monitoring, and{" "}
            <span className="font-medium text-ink">ExploitSense</span> for
            threat exposure. Real software, not a slide deck.
          </p>

          <div data-hero-beat className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a Demo
            </Link>
            <Link href="/solutions" className="btn-ghost">
              Explore Our Platforms →
            </Link>
          </div>

          <ul
            data-hero-beat
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-ink-faint"
          >
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-green">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — company identity panel */}
        <div data-hero-panel className="relative">
          <div
            className="pointer-events-none absolute -inset-6 bg-green-glow"
            aria-hidden
          />
          <CompanyPanel />
        </div>
      </div>

      {/* audience marquee */}
      <div className="relative border-y border-line bg-bg-soft/40 py-6">
        <p className="container-px mb-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          Built for SEBI-regulated entities &amp; the firms that serve them
        </p>
        <Marquee
          duration={38}
          items={audience.map((a) => (
            <span
              key={a}
              className="mx-2 inline-flex items-center gap-2 text-sm text-ink-muted"
            >
              <span className="h-1 w-1 rounded-full bg-green/60" />
              {a}
            </span>
          ))}
        />
      </div>
    </section>
  );
}
