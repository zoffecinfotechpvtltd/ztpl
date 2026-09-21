import { Crosshair } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PlatformAccent = {
  /** Tailwind classes - kept as full literals so the compiler sees them. */
  text: string;
  gradientText: string;
  gradientBg: string;
  /** Text colour that stays readable on `gradientBg`. */
  onAccent: string;
  border: string;
  glow: string;
  dot: string;
  soft: string;
  softer: string;
  /** Tints for the hero card behind the product. */
  tint: string;
  badge: "blue" | "violet" | "sky";
};

export type Platform = {
  slug: "aegis" | "argus" | "exploitsense";
  name: string;
  /** Fallback glyph when the product has no real logo asset. */
  Icon: LucideIcon;
  /** Real square-ish mark, used in tabs and cards. */
  mark?: string;
  /** Real horizontal lockup, used in large product headers. */
  wordmark?: { src: string; width: number; height: number };
  category: string;
  subtitle: string;
  description: string;
  /** Home tabs list all four Aegis features; the Platform page lists the first three. */
  features: string[];
  linkLabel: string;
  href: string;
  status: "live" | "coming-soon";
  /** Only set for platforms that are actually deployed. */
  externalHref?: string;
  /** Shown in the mockup's address bar. */
  displayUrl: string;
  accent: PlatformAccent;
};

/**
 * The company theme is ZTPL's yellow + green; each *product* keeps its own brand colour so
 * they stay recognisable: Aegis = blue, Argus = purple, ExploitSense = sky blue.
 */
export const platforms: Platform[] = [
  {
    slug: "aegis",
    name: "Zoffec Aegis",
    Icon: Crosshair,
    mark: "/products/aegis-mark.png",
    wordmark: { src: "/products/aegis-logo.png", width: 707, height: 252 },
    category: "SEBI CSCRF Compliance Platform",
    subtitle: "The GRC Platform for SEBI CSCRF",
    description:
      "A multi-tenant GRC platform purpose-built for SEBI CSCRF - one workspace where Regulated Entities and MSSPs run assessments, hold evidence, manage third-party risk, and ship audit-ready reports.",
    features: ["SEBI-Native Assessment", "AI-Powered GRC Assistant", "Evidence Vault", "Third-Party Risk (TPRA)"],
    linkLabel: "See the GRC platform",
    href: "/solutions/aegis",
    status: "live",
    externalHref: "https://aegis.ztplsolutions.com",
    displayUrl: "aegis.ztplsolutions.com",
    accent: {
      text: "text-blue-400",
      gradientText: "bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent",
      gradientBg: "from-blue-600 to-blue-400",
      onAccent: "text-white",
      border: "border-blue-400/30",
      glow: "shadow-[0_0_80px_-20px_rgb(59_130_246/0.8)]",
      dot: "bg-blue-400",
      soft: "bg-blue-500/25",
      softer: "bg-blue-500/10",
      tint: "from-blue-500/30 to-blue-500/0",
      badge: "blue",
    },
  },
  {
    slug: "argus",
    name: "Argus",
    Icon: Crosshair,
    mark: "/products/argus-icon.png",
    category: "Network Monitoring (NMS)",
    subtitle: "Network monitoring that never blinks.",
    description:
      "ZTPL's network monitoring system - built for continuous, always-on visibility into infrastructure health, so anomalies surface before they become incidents.",
    features: [],
    linkLabel: "See the monitoring platform",
    href: "/solutions/argus",
    status: "coming-soon",
    displayUrl: "argus · preview",
    accent: {
      text: "text-violet-400",
      gradientText: "bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent",
      gradientBg: "from-violet-600 to-fuchsia-500",
      onAccent: "text-white",
      border: "border-violet-400/30",
      glow: "shadow-[0_0_80px_-20px_rgb(139_92_246/0.8)]",
      dot: "bg-violet-400",
      soft: "bg-violet-500/25",
      softer: "bg-violet-500/10",
      tint: "from-violet-500/30 to-fuchsia-500/0",
      badge: "violet",
    },
  },
  {
    slug: "exploitsense",
    name: "ExploitSense",
    Icon: Crosshair,
    category: "Continuous Threat Exposure Management (CTEM)",
    subtitle: "Continuous Threat Exposure Management.",
    description:
      "ZTPL's CTEM platform - continuous discovery, validation, and prioritisation of exposure across your attack surface.",
    features: [],
    linkLabel: "See the exposure platform",
    href: "/solutions/exploitsense",
    status: "coming-soon",
    displayUrl: "exploitsense · preview",
    accent: {
      text: "text-sky-400",
      gradientText: "bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent",
      gradientBg: "from-sky-500 to-sky-300",
      onAccent: "text-slate-950",
      border: "border-sky-400/30",
      glow: "shadow-[0_0_80px_-20px_rgb(14_165_233/0.75)]",
      dot: "bg-sky-400",
      soft: "bg-sky-500/25",
      softer: "bg-sky-500/10",
      tint: "from-sky-400/30 to-sky-400/0",
      badge: "sky",
    },
  },
];
