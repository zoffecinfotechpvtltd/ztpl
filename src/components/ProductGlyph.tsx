import { accentClasses, type Accent } from "@/lib/accent";

/**
 * Fallback glyph for a product that has no real icon asset yet (e.g.
 * ExploitSense). Keeps the icon slot visually consistent with Aegis/Argus's
 * real icons instead of leaving it empty or falling back to a plain chip.
 */
export function ProductGlyph({
  slug,
  accent,
  className = "h-5 w-5",
}: {
  slug: string;
  accent: Accent;
  className?: string;
}) {
  const cls = `${className} ${accentClasses[accent].text}`;

  if (slug === "exploitsense") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
      <path
        d="M12 2.5 4 5.5v6c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10v-6L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
