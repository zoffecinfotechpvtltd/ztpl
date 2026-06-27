import Link from "next/link";

/**
 * Brand mark — interlocking double-chevron (yellow "<" + green ">"),
 * a clean SVG recreation of /public/logo.jpeg for crisp rendering at any size.
 * Variant A (yellow + green).
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={className}
      fill="none"
      role="img"
      aria-hidden="true"
    >
      {/* yellow chevron, pointing left, upper-left */}
      <path
        d="M16 6 L8 14.5 L16 23"
        stroke="#FFD60A"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* green chevron, pointing right, lower-right */}
      <path
        d="M20 13 L28 21.5 L20 30"
        stroke="#21C063"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  withTagline = true,
  className = "",
}: {
  withTagline?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="ZTPL — Compliance Simplified. Home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.18em] text-ink">
          ZTPL
        </span>
        {withTagline && (
          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.22em] text-ink-faint">
            <span className="text-yellow/80">Compliance</span>{" "}
            <span className="text-green/80">Simplified</span>
          </span>
        )}
      </span>
    </Link>
  );
}
