"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { products } from "@/lib/site";
import { accentClasses } from "@/lib/accent";
import { ProductGlyph } from "@/components/ProductGlyph";

/**
 * Tabbed product spotlight — replaces a same-weight 3-card grid with one
 * large panel per product, since "what we build" is the single most
 * important commercial content on the homepage and deserves a full moment
 * each, not a card among cards.
 */
export function ProductSpotlight() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const p = products[active];
  const a = accentClasses[p.accent];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Products"
        className="flex flex-wrap gap-2 sm:gap-3"
      >
        {products.map((product, i) => {
          const isActive = i === active;
          const pa = accentClasses[product.accent];
          return (
            <button
              key={product.slug}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `${pa.chipBorder} ${pa.chipBg} text-ink`
                  : "border-line bg-bg-soft/40 text-ink-muted hover:border-line hover:bg-bg-soft hover:text-ink"
              }`}
            >
              {product.icon ? (
                <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded bg-white p-0.5">
                  <Image src={product.icon} alt="" width={24} height={24} className="h-full w-full object-contain" />
                </span>
              ) : (
                <ProductGlyph slug={product.slug} accent={product.accent} className="h-5 w-5" />
              )}
              {product.name}
            </button>
          );
        })}
      </div>

      <div className={`border-grad mt-6 ${a.glowShadow}`}>
        <div className="relative overflow-hidden rounded-[15px] bg-bg-card p-6 sm:p-10">
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-40 ${a.chipBg}`}
            aria-hidden
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={p.slug}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className={`chip ${a.text}`}>{p.category}</span>
                  <span className={p.status === "live" ? "pill-live" : "chip text-yellow"}>
                    {p.status === "live" ? "Live" : "In development"}
                  </span>
                </div>
                <h3 className="heading mt-4 text-2xl sm:text-3xl">{p.name}</h3>
                <p className={`mt-1 text-sm font-semibold ${a.text}`}>{p.tagline}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {p.short}
                </p>

                {p.modules && p.modules.length > 0 && (
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.modules.slice(0, 4).map((m) => (
                      <li key={m.title} className="flex items-start gap-2 text-sm text-ink-muted">
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                        {m.title}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/solutions/${p.slug}`} className="btn-primary">
                    {p.linkLabel}
                  </Link>
                  {p.externalUrl && (
                    <a
                      href={p.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      Launch Platform →
                    </a>
                  )}
                </div>
              </div>

              {/* Screenshot slot — no real product capture available yet;
                  labeled placeholder so it's obvious what belongs here,
                  never a fake mockup. */}
              <div
                className={`flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed ${a.chipBorder} bg-bg/60 text-center`}
              >
                <ProductGlyph slug={p.slug} accent={p.accent} className="h-8 w-8 opacity-60" />
                <p className="max-w-[220px] text-xs text-ink-faint">
                  {p.name} product screenshot — placeholder pending a real capture
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
