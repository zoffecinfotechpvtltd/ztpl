/**
 * Per-product accent system. Classes are written out in full (not built via
 * template interpolation) so Tailwind's static analyzer can find them.
 */
export type Accent = "green" | "cyan" | "yellow";

export const accentClasses: Record<
  Accent,
  {
    text: string;
    dot: string;
    chipBorder: string;
    chipBg: string;
    cardHoverBorder: string;
    glowShadow: string;
    ring: string;
  }
> = {
  green: {
    text: "text-green",
    dot: "bg-green",
    chipBorder: "border-green/40",
    chipBg: "bg-green/10",
    cardHoverBorder: "hover:border-green/40",
    glowShadow: "shadow-[0_24px_60px_-24px_rgba(0,210,106,0.35)]",
    ring: "ring-green/30",
  },
  cyan: {
    text: "text-accent-cyan",
    dot: "bg-accent-cyan",
    chipBorder: "border-accent-cyan/40",
    chipBg: "bg-accent-cyan/10",
    cardHoverBorder: "hover:border-accent-cyan/40",
    glowShadow: "shadow-[0_24px_60px_-24px_rgba(0,191,255,0.35)]",
    ring: "ring-accent-cyan/30",
  },
  yellow: {
    text: "text-yellow",
    dot: "bg-yellow",
    chipBorder: "border-yellow/40",
    chipBg: "bg-yellow/10",
    cardHoverBorder: "hover:border-yellow/40",
    glowShadow: "shadow-[0_24px_60px_-24px_rgba(255,193,7,0.35)]",
    ring: "ring-yellow/30",
  },
};
