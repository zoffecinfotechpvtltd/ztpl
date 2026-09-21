/**
 * Single source of truth for company facts, navigation, and content data.
 * Confirmed decisions:
 *  - Legal name: ZTPL
 *  - Brand: yellow + green on deep charcoal (extracted from the logo)
 *  - Contact: support@ztplsolutions.com
 *  - Aegis is positioned as a PLATFORM (multi-tenant GRC) - not a
 *    one-off solution. Built for Regulated Entities (REs) and the MSSPs /
 *    GRC consultancies that serve them.
 */

export const site = {
  name: "ZTPL",
  legalName: "ZTPL",
  tagline: "Compliance Simplified.",
  description:
    "ZTPL is a technology company for India's regulated businesses. We build Aegis, Argus, and ExploitSense: real platforms for compliance, infrastructure monitoring, and threat exposure.",
  url: "https://ztplsolutions.com",
  email: "support@ztplsolutions.com",
  phone: "+91 87790 21628",
  phoneAlt: "+91 98194 78648",
  location: "Mumbai, India",
  // Registered particulars (Ministry of Corporate Affairs).
  cin: "U62091MH2026PTC473298",
  founded: "2026",
  socials: {
    linkedin: "https://www.linkedin.com/company/ztpl",
  },
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Platform", href: "/solutions" },
  { label: "Contact", href: "/contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  PLATFORM / PRODUCTS - add an object here and a full page is generated.     */
/* -------------------------------------------------------------------------- */

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "in-development";
  /** One-line category shown as a chip - e.g. "Network Monitoring (NMS)". */
  category: string;
  /** Real product icon, sourced from the product's own site - see /public/products. */
  icon?: string;
  /** External app/marketing URL, if the product lives elsewhere. */
  externalUrl?: string;
  /** Per-product accent - deliberate, not decorative: emerald = compliance/clear,
   *  cyan = monitoring/signal, amber = threat/exposure. Used for badges, links,
   *  hover borders wherever this product is referenced. */
  accent: "green" | "cyan" | "yellow";
  /** One-line, plain-English "what you get" hook for card/spotlight link text. */
  linkLabel: string;
  short: string;
  description: string;
  /** Deep-dive sections - omitted entirely (not rendered) for products that don't have this content yet. */
  problems?: { title: string; body: string }[];
  modules?: { title: string; body: string }[];
  deployment?: { name: string; body: string; points: string[] }[];
  plans?: { name: string; blurb: string; highlight: boolean }[];
};

export const products: Product[] = [
  {
    slug: "aegis",
    name: "Aegis",
    tagline: "The GRC Platform for SEBI CSCRF",
    status: "live",
    category: "SEBI CSCRF Compliance Platform",
    icon: "/products/aegis-icon.png",
    externalUrl: "https://aegis.ztplsolutions.com",
    accent: "green",
    linkLabel: "See the GRC platform",
    short:
      "A multi-tenant GRC platform purpose-built for SEBI CSCRF - one workspace where Regulated Entities and MSSPs run assessments, hold evidence, manage third-party risk, and ship audit-ready reports.",
    description:
      "Aegis is a multi-tenant GRC platform engineered around the SEBI Cyber Security & Cyber Resilience Framework. Regulated Entities run their entire compliance program in one place; MSSPs and GRC consultancies run dozens of clients side by side - assessments, evidence, third-party risk, and Annexure-K-ready reporting. Deploy on our hardened cloud or inside your own environment.",
    problems: [
      {
        title: "Point tools don't scale to a framework",
        body: "CSCRF spans governance, controls, evidence, vendors, and reporting. A spreadsheet or a generic checklist covers a slice - and leaves gaps a regulator will find. A platform covers the whole lifecycle in one model.",
      },
      {
        title: "One RE is hard; many is impossible by hand",
        body: "MSSPs and consultancies juggle dozens of Regulated Entities in parallel. Without true multi-tenancy you get cross-contamination, rework, and a broken audit trail.",
      },
      {
        title: "Audit prep becomes a fire drill",
        body: "When evidence lives across drives and inboxes, every submission is a scramble. A platform keeps every artefact mapped to a control, versioned, and submission-ready year round.",
      },
    ],
    modules: [
      {
        title: "SEBI-Native Assessment",
        body: "Run assessments against a pre-loaded CSCRF control library with scoring, ownership, and live readiness - per entity, per client.",
      },
      {
        title: "AI-Powered GRC Assistant",
        body: "Drafting help, control guidance, and gap explanations from an assistant that actually understands the framework.",
      },
      {
        title: "Evidence Vault",
        body: "Collect, version, and map evidence to controls. Every artefact is traceable - so audit prep stops being a fire drill.",
      },
      {
        title: "Third-Party Risk (TPRA)",
        body: "Onboard, tier, and continuously assess vendors. Surface concentration and supply-chain risk before a regulator does.",
      },
      {
        title: "Asset & CIA Inventory",
        body: "A living asset register with confidentiality, integrity, and availability ratings mapped to controls.",
      },
      {
        title: "Access Control & Review",
        body: "Run periodic access reviews and enforce least-privilege with a clean, reviewable trail.",
      },
      {
        title: "Immutable Audit Trail",
        body: "Every action captured in a tamper-evident log (HMAC-SHA256 sessions) - defensible evidence by design.",
      },
      {
        title: "Audit-Ready Reporting",
        body: "Generate Annexure-K-aligned, submission-ready reports and board packs on demand - no spreadsheet archaeology.",
      },
    ],
    deployment: [
      {
        name: "Cloud (SaaS)",
        body: "Up and running fast on our managed, security-hardened cloud. We handle uptime, patching, and backups - you focus on compliance.",
        points: [
          "Fastest time-to-value",
          "Managed updates & backups",
          "Elastic multi-tenant scale",
        ],
      },
      {
        name: "On-Premises",
        body: "Deploy Aegis inside your own environment for full data residency and control - ideal where policy or regulation demands it.",
        points: [
          "Your infrastructure, your data",
          "Air-gap friendly",
          "Full data residency",
        ],
      },
    ],
    plans: [
      { name: "Solo", blurb: "For an individual practitioner managing a single entity.", highlight: false },
      { name: "Starter", blurb: "For small teams beginning their CSCRF journey.", highlight: false },
      { name: "Professional", blurb: "For MSSPs & consultancies running multiple clients.", highlight: true },
      { name: "Enterprise", blurb: "For MIIs and large REs with complex estates.", highlight: false },
      { name: "Custom", blurb: "On-prem deployment and bespoke requirements.", highlight: false },
    ],
  },
  {
    slug: "argus",
    name: "Argus",
    tagline: "Network monitoring that never blinks.",
    status: "live",
    category: "Network Monitoring (NMS)",
    icon: "/products/argus-icon.png",
    externalUrl: "https://argus.ztplsolutions.com",
    accent: "cyan",
    linkLabel: "See the monitoring platform",
    short:
      "ZTPL's network monitoring system - built for continuous, always-on visibility into infrastructure health, so anomalies surface before they become incidents.",
    description:
      "Argus is ZTPL's network monitoring platform, engineered for continuous visibility across infrastructure. [Full module and feature breakdown to be added here as the product page expands.]",
    modules: [
      {
        title: "[Add real Argus capability]",
        body: "[e.g. uptime/latency monitoring, alerting, dashboards - replace with confirmed feature detail.]",
      },
    ],
  },
  {
    slug: "exploitsense",
    name: "ExploitSense",
    tagline: "Continuous Threat Exposure Management.",
    status: "live",
    category: "Continuous Threat Exposure Management (CTEM)",
    externalUrl: "https://exploitsense.ztplsolutions.com",
    accent: "yellow",
    linkLabel: "See the exposure platform",
    short:
      "ZTPL's CTEM platform - continuous discovery, validation, and prioritisation of exposure across your attack surface.",
    description:
      "ExploitSense is ZTPL's Continuous Threat Exposure Management platform - continuous discovery, validation, and prioritisation of exposure across your attack surface. [Full module and feature breakdown to be added here as the product page expands.]",
    modules: [
      {
        title: "[Add real ExploitSense capability]",
        body: "[e.g. attack-surface discovery, exposure validation, prioritisation - replace with confirmed feature detail.]",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  PLATFORM CAPABILITIES - high-level pillars for the home/platform pages.    */
/* -------------------------------------------------------------------------- */

export const platformPillars = [
  {
    tag: "Multi-tenant",
    title: "Built for many entities at once",
    body: "True tenant isolation lets an MSSP run dozens of Regulated Entities side by side - and lets a single RE manage every business unit - with no cross-contamination.",
  },
  {
    tag: "SEBI-native",
    title: "The framework is the foundation",
    body: "CSCRF controls, Annexure-K mapping, and RE categorisation are baked into the data model - not bolted on as templates.",
  },
  {
    tag: "Audit-ready",
    title: "Evidence to submission, in one trail",
    body: "Every control links to versioned evidence and a tamper-evident log, so a submission-ready report is always one click away.",
  },
];

export const audience = [
  "Stock Brokers",
  "Asset Management Companies",
  "Depository Participants",
  "Registered Investment Advisers",
  "Market Infrastructure Institutions",
  "Clearing Corporations",
  "MSSPs & GRC Consultancies",
] as const;

/* -------------------------------------------------------------------------- */
/*  COMPANY - milestones, certifications.                                     */
/*  Left empty on purpose: an absent claim is neutral, a placeholder claim    */
/*  reads as a red flag on a compliance company's own trust section. Add      */
/*  real entries here once dates/certifications are confirmed - the About     */
/*  page timeline/cert panel render conditionally and pick these up as-is.    */
/* -------------------------------------------------------------------------- */

export type Milestone = {
  year: string;
  label: string;
};

export const milestones: Milestone[] = [];

export type Certification = {
  name: string;
  body?: string;
};

export const certifications: Certification[] = [];

/**
 * Trust statements grounded in things already true of the architecture
 * (see products[0].deployment and products[0].modules) - reworded as
 * company capability, not invented.
 */
export const trustPoints = [
  {
    title: "Your data, your residency",
    body: "Deploy on our managed cloud or entirely inside your own environment - full data residency and control when policy or regulation demands it.",
  },
  {
    title: "Tamper-evident by design",
    body: "Every action across the platform is captured in an immutable, HMAC-SHA256-secured audit trail - defensible evidence, not an afterthought.",
  },
  {
    title: "Least privilege, enforced",
    body: "Access control and periodic review are built into the platform's data model, not bolted on as a policy document nobody checks.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  VALUES - paired with a concrete proof point, not left as abstract slogans. */
/* -------------------------------------------------------------------------- */

export const values = [
  {
    title: "Regulator-credible",
    body: "We speak the language of SEBI CSCRF, Annexure-K, and audit.",
    proof: "Every Aegis control maps directly to a CSCRF clause - not a generic template.",
  },
  {
    title: "Build, then ship",
    body: "Every platform we run is real, working software.",
    proof: "Aegis is live today; Argus and ExploitSense are in development - no vapourware.",
  },
  {
    title: "Outcomes, not hours",
    body: "We measure ourselves by whether the platform solves the problem.",
    proof: "Controls closed, exposure surfaced, uptime held - that's the scoreboard.",
  },
  {
    title: "Security by default",
    body: "Data residency, least privilege, and hardened deployment are baseline.",
    proof: "Cloud or on-prem, the same controls apply either way - no premium tier for security.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  FAQ - common due-diligence questions, reduces sales-call load.            */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    question: "Which entities does SEBI CSCRF actually apply to?",
    answer:
      "CSCRF applies to SEBI-Regulated Entities (REs) - categorised by size and complexity into different tiers, each with its own control expectations. Aegis maps your RE category to the right control set automatically, and our team can help you confirm applicability first.",
  },
  {
    question: "Cloud or on-premises - which deployment do we need?",
    answer:
      "Both are supported on the same platform. Cloud gets you running fastest with managed updates and backups; on-premises gives you full data residency inside your own environment. The choice usually comes down to policy or regulatory requirement, not platform capability - either way, you get the same controls.",
  },
  {
    question: "How long does a typical CSCRF implementation take?",
    answer:
      "It depends on your RE category and how much groundwork is already in place. A gap assessment is the fastest way to get a real timeline - it maps what you already have against Annexure-K and gives you a prioritised, scoped path instead of a guess.",
  },
  {
    question: "Can an MSSP or consultancy run multiple client entities in one account?",
    answer:
      "Yes - Aegis is built multi-tenant from the ground up. Each client entity is fully isolated (no cross-contamination), while your team gets one workspace to manage assessments, evidence, and reporting across all of them.",
  },
  {
    question: "Can we talk to someone before committing to a platform?",
    answer:
      "Yes. Book a short demo and we'll walk through Aegis, Argus, or ExploitSense against your own setup, and tell you plainly whether it fits.",
  },
] as const;
