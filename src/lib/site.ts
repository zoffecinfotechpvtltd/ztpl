/**
 * Single source of truth for company facts, navigation, and content data.
 * Confirmed decisions:
 *  - Legal name: Zoffec Technologies Private Limited
 *  - Brand: yellow + green on deep charcoal (extracted from the logo)
 *  - Contact: support@ztplsolutions.com
 *  - Zoffec Aegis is positioned as a PLATFORM (multi-tenant GRC) — not a
 *    one-off solution. Built for Regulated Entities (REs) and the MSSPs /
 *    GRC consultancies that serve them.
 */

export const site = {
  name: "ZTPL",
  legalName: "Zoffec Technologies Private Limited",
  tagline: "Compliance Simplified.",
  description:
    "ZTPL is a cybersecurity and RegTech company for India's SEBI-regulated businesses — practitioner-led GRC advisory, backed by Zoffec Aegis, the compliance platform we built to run it.",
  url: "https://ztplsolutions.com",
  email: "support@ztplsolutions.com",
  phone: "+91 00000 00000", // placeholder — replace before launch
  location: "Mumbai, India",
  // PLACEHOLDER — replace with real values from incorporation docs before launch.
  cin: "[Add CIN — see incorporation documents]",
  founded: "[Add founding year]",
  socials: {
    linkedin: "https://www.linkedin.com/company/ztpl",
    x: "https://x.com/ztpl",
  },
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Platform", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Trust", href: "/trust" },
  { label: "Contact", href: "/contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  PLATFORM / PRODUCTS — add an object here and a full page is generated.     */
/* -------------------------------------------------------------------------- */

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "in-development";
  /** One-line category shown as a chip — e.g. "Network Monitoring (NMS)". */
  category: string;
  /** External app/marketing URL, if the product lives elsewhere. */
  externalUrl?: string;
  short: string;
  description: string;
  /** Deep-dive sections — omitted entirely (not rendered) for products that don't have this content yet. */
  problems?: { title: string; body: string }[];
  modules?: { title: string; body: string }[];
  deployment?: { name: string; body: string; points: string[] }[];
  plans?: { name: string; blurb: string; highlight: boolean }[];
};

export const products: Product[] = [
  {
    slug: "aegis",
    name: "Zoffec Aegis",
    tagline: "The GRC Platform for SEBI CSCRF",
    status: "live",
    category: "SEBI CSCRF Compliance Platform",
    externalUrl: "https://aegis.ztplsolutions.com",
    short:
      "A multi-tenant GRC platform purpose-built for SEBI CSCRF — one workspace where Regulated Entities and MSSPs run assessments, hold evidence, manage third-party risk, and ship audit-ready reports.",
    description:
      "Zoffec Aegis is a multi-tenant GRC platform engineered around the SEBI Cyber Security & Cyber Resilience Framework. Regulated Entities run their entire compliance program in one place; MSSPs and GRC consultancies run dozens of clients side by side — assessments, evidence, third-party risk, and Annexure-K-ready reporting. Deploy on our hardened cloud or inside your own environment.",
    problems: [
      {
        title: "Point tools don't scale to a framework",
        body: "CSCRF spans governance, controls, evidence, vendors, and reporting. A spreadsheet or a generic checklist covers a slice — and leaves gaps a regulator will find. A platform covers the whole lifecycle in one model.",
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
        body: "Run assessments against a pre-loaded CSCRF control library with scoring, ownership, and live readiness — per entity, per client.",
      },
      {
        title: "AI-Powered GRC Assistant",
        body: "Drafting help, control guidance, and gap explanations from an assistant that actually understands the framework.",
      },
      {
        title: "Evidence Vault",
        body: "Collect, version, and map evidence to controls. Every artefact is traceable — so audit prep stops being a fire drill.",
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
        body: "Every action captured in a tamper-evident log (HMAC-SHA256 sessions) — defensible evidence by design.",
      },
      {
        title: "Audit-Ready Reporting",
        body: "Generate Annexure-K-aligned, submission-ready reports and board packs on demand — no spreadsheet archaeology.",
      },
    ],
    deployment: [
      {
        name: "Cloud (SaaS)",
        body: "Up and running fast on our managed, security-hardened cloud. We handle uptime, patching, and backups — you focus on compliance.",
        points: [
          "Fastest time-to-value",
          "Managed updates & backups",
          "Elastic multi-tenant scale",
        ],
      },
      {
        name: "On-Premises",
        body: "Deploy Aegis inside your own environment for full data residency and control — ideal where policy or regulation demands it.",
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
    externalUrl: "https://argus.ztplsolutions.com",
    short:
      "ZTPL's network monitoring system — built for continuous, always-on visibility into infrastructure health, so anomalies surface before they become incidents.",
    description:
      "Argus is ZTPL's network monitoring platform, engineered for continuous visibility across infrastructure. [Full module and feature breakdown to be added here as the product page expands.]",
    modules: [
      {
        title: "[Add real Argus capability]",
        body: "[e.g. uptime/latency monitoring, alerting, dashboards — replace with confirmed feature detail.]",
      },
    ],
  },
  {
    slug: "wardloom",
    name: "Wardloom",
    tagline: "Continuous Threat Exposure Management — in development.",
    status: "in-development",
    category: "Continuous Threat Exposure Management (CTEM)",
    short:
      "ZTPL's upcoming CTEM platform — continuous discovery, validation, and prioritisation of exposure across your attack surface. Currently in active development.",
    description:
      "Wardloom is ZTPL's Continuous Threat Exposure Management platform, currently in development. [Add scope, planned modules, and target release once finalised.]",
    modules: [
      {
        title: "[Add planned capability]",
        body: "[e.g. attack-surface discovery, exposure validation, prioritisation — replace once scoped.]",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  PLATFORM CAPABILITIES — high-level pillars for the home/platform pages.    */
/* -------------------------------------------------------------------------- */

export const platformPillars = [
  {
    tag: "Multi-tenant",
    title: "Built for many entities at once",
    body: "True tenant isolation lets an MSSP run dozens of Regulated Entities side by side — and lets a single RE manage every business unit — with no cross-contamination.",
  },
  {
    tag: "SEBI-native",
    title: "The framework is the foundation",
    body: "CSCRF controls, Annexure-K mapping, and RE categorisation are baked into the data model — not bolted on as templates.",
  },
  {
    tag: "Audit-ready",
    title: "Evidence to submission, in one trail",
    body: "Every control links to versioned evidence and a tamper-evident log, so a submission-ready report is always one click away.",
  },
];

/* -------------------------------------------------------------------------- */
/*  SERVICES                                                                   */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    slug: "sebi-cscrf-advisory",
    title: "SEBI CSCRF Advisory",
    short:
      "End-to-end guidance on the SEBI Cyber Security & Cyber Resilience Framework — scoping, gap assessment, and Annexure-K readiness.",
    points: [
      "RE categorisation & applicability mapping",
      "Annexure-K control implementation",
      "Submission-ready documentation",
    ],
  },
  {
    slug: "grc-consulting",
    title: "GRC Consulting",
    short:
      "Stand up a governance, risk, and compliance program that holds up to scrutiny — policies, controls, and a repeatable operating rhythm.",
    points: [
      "Policy & control framework design",
      "Risk register & treatment plans",
      "Board-level governance reporting",
    ],
  },
  {
    slug: "vapt",
    title: "VAPT",
    short:
      "Vulnerability assessment and penetration testing aligned to CSCRF expectations — network, web, API, and cloud.",
    points: [
      "Authenticated & unauthenticated testing",
      "Remediation guidance & retest",
      "Regulator-ready findings reports",
    ],
  },
  {
    slug: "vciso",
    title: "vCISO",
    short:
      "Fractional Chief Information Security Officer leadership — strategy, oversight, and accountable security ownership without the full-time cost.",
    points: [
      "Security strategy & roadmap",
      "Regulator & auditor liaison",
      "Incident readiness & oversight",
    ],
  },
  {
    slug: "tpra",
    title: "Third-Party Risk (TPRA)",
    short:
      "Assess, score, and continuously monitor the vendors and MSSPs in your supply chain against CSCRF and contractual obligations.",
    points: [
      "Vendor inventory & tiering",
      "Due-diligence questionnaires",
      "Continuous risk monitoring",
    ],
  },
  {
    slug: "audit-support",
    title: "Audit Support",
    short:
      "Walk into your VAPT and cyber audit prepared — evidence packaged, controls mapped, and findings tracked to closure.",
    points: [
      "Evidence collation & mapping",
      "Auditor coordination",
      "Findings remediation tracking",
    ],
  },
] as const;

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
/*  COMPANY — milestones, certifications.                                     */
/*  PLACEHOLDER DATA: entries below are structurally final but factually      */
/*  empty. Replace bracketed fields with real facts before launch — do not    */
/*  ship invented dates or certifications.                                    */
/* -------------------------------------------------------------------------- */

export type Milestone = {
  year: string;
  label: string;
};

export const milestones: Milestone[] = [
  { year: "[Year]", label: "ZTPL founded" },
  { year: "[Year]", label: "Zoffec Aegis development begins" },
  { year: "[Year]", label: "Zoffec Aegis reaches general availability" },
  { year: "[Year]", label: "[Next milestone]" },
];

export type Certification = {
  name: string;
  body?: string;
};

export const certifications: Certification[] = [
  { name: "[Certification — e.g. ISO/IEC 27001]", body: "[Issuing body, if applicable]" },
  { name: "[Certification]", body: "[Issuing body, if applicable]" },
];

/**
 * Trust statements grounded in things already true of the architecture
 * (see products[0].deployment and products[0].modules) — reworded as
 * company capability, not invented.
 */
export const trustPoints = [
  {
    title: "Your data, your residency",
    body: "Deploy on our managed cloud or entirely inside your own environment — full data residency and control when policy or regulation demands it.",
  },
  {
    title: "Tamper-evident by design",
    body: "Every action across the platform is captured in an immutable, HMAC-SHA256-secured audit trail — defensible evidence, not an afterthought.",
  },
  {
    title: "Least privilege, enforced",
    body: "Access control and periodic review are built into the platform's data model, not bolted on as a policy document nobody checks.",
  },
] as const;
