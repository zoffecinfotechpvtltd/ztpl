"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { ensureGsap, ScrollTrigger } from "@/lib/gsap";

type Entry = { id: string; label: string };

/**
 * Fixed vertical "audit log" of the page's own sections — the product's own
 * metaphor (every action is logged) applied to the act of reading the page.
 * Scans for [data-rail-label] on mount / route change, so it's page-aware
 * without a hardcoded section list. Desktop only (lg+); on mobile the
 * regular header nav already does this job.
 */
export function LedgerRail() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rail-label]")
    );

    const list: Entry[] = nodes.map((node, i) => {
      if (!node.id) node.id = `rail-section-${i}`;
      return { id: node.id, label: node.dataset.railLabel ?? node.id };
    });
    // Legitimate DOM-driven state sync, not derivable during render: the
    // section list depends on the committed DOM for the current route.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEntries(list);
    setActive(0);

    if (nodes.length === 0) return;

    const gsap = ensureGsap();
    const triggers = nodes.map((node, i) =>
      ScrollTrigger.create({
        trigger: node,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActive(i);
        },
      })
    );

    return () => {
      triggers.forEach((t) => t.kill());
      gsap.globalTimeline.clear();
    };
  }, [pathname]);

  if (entries.length < 2) return null;

  function goTo(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <nav
      aria-label="Sections on this page"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 font-mono text-[11px] xl:flex"
    >
      {entries.map((entry, i) => {
        const isActive = i === active;
        return (
          <button
            key={entry.id}
            type="button"
            onClick={() => goTo(entry.id)}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2.5 text-left"
          >
            <span
              className={`h-px shrink-0 transition-all duration-300 ${
                isActive ? "w-5 bg-green" : "w-3 bg-line group-hover:bg-ink-faint"
              }`}
              aria-hidden
            />
            <span
              className={`whitespace-nowrap rounded-md px-2 py-1 tracking-[0.06em] backdrop-blur transition-all duration-300 ${
                isActive
                  ? "bg-bg/85 text-green shadow-[0_0_0_1px_rgba(0,210,106,0.25)]"
                  : "bg-bg/0 text-ink-faint opacity-0 group-hover:bg-bg/85 group-hover:opacity-100 group-focus-visible:bg-bg/85 group-focus-visible:opacity-100"
              }`}
            >
              [{String(i).padStart(2, "0")}] {entry.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
