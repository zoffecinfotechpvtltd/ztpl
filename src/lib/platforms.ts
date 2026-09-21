import { Activity, Crosshair, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PlatformAccent = {
  /** Tailwind classes — kept as full literals so the compiler sees them. */
  text: string;
  gradientText: string;
  gradientBg: string;
  border: string;
  glow: string;
  dot: string;
  soft: string;
  softer: string;
  badge: "default" | "cyan" | "violet";
};

export type Platform = {
  slug: "aegis" | "argus" | "exploitsense";
  name: string;
  Icon: LucideIcon;
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

export const platforms: Platform[] = [
  {
    slug: "aegis",
    name: "Zoffec Aegis",
    Icon: ShieldCheck,
    category: "SEBI CSCRF Compliance Platform",
    subtitle: "The GRC Platform for SEBI CSCRF",
    description:
      "A multi-tenant GRC platform purpose-built for SEBI CSCRF — one workspace where Regulated Entities and MSSPs run assessments, hold evidence, manage third-party risk, and ship audit-ready reports.",
    features: ["SEBI-Native Assessment", "AI-Powered GRC Assistant", "Evidence Vault", "Third-Party Risk (TPRA)"],
    linkLabel: "See the GRC platform",
    href: "/solutions/aegis",
    status: "live",
    externalHref: "https://aegis.ztplsolutions.com",
    displayUrl: "aegis.ztplsolutions.com",
    accent: {
      text: "text-blue-400",
      gradientText: "gradient-text",
      gradientBg: "from-blue-500 to-cyan-400",
      border: "border-blue-400/30",
      glow: "shadow-[0_0_80px_-20px_rgb(59_130_246/0.8)]",
      dot: "bg-blue-400",
      soft: "bg-blue-500/25",
      softer: "bg-blue-500/10",
      badge: "default",
    },
  },
  {
    slug: "argus",
    name: "Argus",
    Icon: Activity,
    category: "Network Monitoring (NMS)",
    subtitle: "Network monitoring that never blinks.",
    description:
      "ZTPL's network monitoring system — built for continuous, always-on visibility into infrastructure health, so anomalies surface before they become incidents.",
    features: [],
    linkLabel: "See the monitoring platform",
    href: "/solutions/argus",
    status: "coming-soon",
    displayUrl: "argus · preview",
    accent: {
      text: "text-cyan-300",
      gradientText: "bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent",
      gradientBg: "from-cyan-400 to-teal-400",
      border: "border-cyan-300/30",
      glow: "shadow-[0_0_80px_-20px_rgb(34_211_238/0.7)]",
      dot: "bg-cyan-300",
      soft: "bg-cyan-400/25",
      softer: "bg-cyan-400/10",
      badge: "cyan",
    },
  },
  {
    slug: "exploitsense",
    name: "ExploitSense",
    Icon: Crosshair,
    category: "Continuous Threat Exposure Management (CTEM)",
    subtitle: "Continuous Threat Exposure Management.",
    description:
      "ZTPL's CTEM platform — continuous discovery, validation, and prioritisation of exposure across your attack surface.",
    features: [],
    linkLabel: "See the exposure platform",
    href: "/solutions/exploitsense",
    status: "coming-soon",
    displayUrl: "exploitsense · preview",
    accent: {
      text: "text-violet-400",
      gradientText: "gradient-text-violet",
      gradientBg: "from-violet-500 to-fuchsia-500",
      border: "border-violet-400/30",
      glow: "shadow-[0_0_80px_-20px_rgb(124_58_237/0.8)]",
      dot: "bg-violet-400",
      soft: "bg-violet-500/25",
      softer: "bg-violet-500/10",
      badge: "violet",
    },
  },
];
