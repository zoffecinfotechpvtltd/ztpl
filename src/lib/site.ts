/**
 * Single source of truth for company facts, navigation, and content data.
 * Confirmed decisions:
 *  - Legal name: Zoffec Technologies Private Limited
 *  - Brand: Variant A (yellow + green), dark UI
 *  - Contact: support@zt-pl.com
 *  - Products are data-driven (see `products`) so the site scales beyond Aegis.
 */

export const site = {
  name: "ZTPL",
  legalName: "Zoffec Technologies Private Limited",
  tagline: "Compliance Simplified.",
  description:
    "ZTPL builds compliance technology — including Zoffec Aegis, India's most complete SEBI CSCRF platform — and delivers the GRC advisory that gets regulated entities audit-ready.",
  url: "https://www.zt-pl.com",
  email: "support@zt-pl.com",
  phone: "+91 00000 00000", // placeholder — replace before launch
  location: "Mumbai, India",
  socials: {
    linkedin: "https://www.linkedin.com/company/ztpl",
    x: "https://x.com/ztpl",
  },
} as const;

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  PRODUCTS — add a new object here and a full product page is generated.     */
/* -------------------------------------------------------------------------- */

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "coming-soon";
  /** External app/marketing URL, if the product lives elsewhere. */
  externalUrl?: string;
  short: string;
  description: string;
  problems: { title: string; body: string }[];
  modules: { title: string; body: string }[];
  deployment: { name: string; body: string; points: string[] }[];
  plans: { name: string; blurb: string; highlight: boolean }[];
};

export const products: Product[] = [
  {
    slug: "aegis",
    name: "Zoffec Aegis",
    tagline: "SEBI CSCRF Compliance Platform",
    status: "live",
    externalUrl: "https://zoffecgrc.vercel.app/",
    short:
      "India's most complete SEBI CSCRF platform — a multi-client GRC workspace for assessments, evidence, third-party risk, and audit-ready reporting.",
    description:
      "India's most complete SEBI CSCRF compliance platform. A multi-client GRC workspace for assessments, evidence, third-party risk, and audit-ready reporting — deployed on our cloud or your own server.",
    problems: [
      {
        title: "Spreadsheets don't survive an audit",
        body: "Evidence scattered across drives and inboxes turns every CSCRF submission into a fire drill — and leaves gaps a regulator will find.",
      },
      {
        title: "CSCRF is broad and unforgiving",
        body: "From governance to Annexure-K controls, the framework spans your whole estate. Tracking it manually doesn't scale past one entity.",
      },
      {
        title: "Consultants juggle many clients",
        body: "MSSPs and GRC firms need to run dozens of REs in parallel without cross-contamination, rework, or losing the audit trail.",
      },
    ],
    modules: [
      {
        title: "SEBI-Native Assessment",
        body: "Run assessments against a pre-loaded CSCRF control library with scoring, ownership, and live readiness per client.",
      },
      {
        title: "AI-Powered GRC Assistant",
        body: "Get drafting help, control guidance, and gap explanations from an assistant that understands the framework.",
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
        body: "Maintain a living asset register with confidentiality, integrity, and availability ratings mapped to controls.",
      },
      {
        title: "Access Control & Review",
        body: "Run periodic access reviews and enforce least-privilege with a clean, reviewable trail.",
      },
      {
        title: "Immutable Audit Trail",
        body: "Every action is captured in a tamper-evident log (HMAC-SHA256 sessions) — defensible evidence by design.",
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
          "Elastic scale",
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
      { name: "Professional", blurb: "For consulting firms managing multiple clients.", highlight: true },
      { name: "Enterprise", blurb: "For MIIs and large REs with complex estates.", highlight: false },
      { name: "Custom", blurb: "On-prem deployment and bespoke requirements.", highlight: false },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

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
  "MSSPs & GRC Consultancies",
] as const;
