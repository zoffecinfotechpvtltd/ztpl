import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Aurora } from "@/components/Aurora";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LedgerRail } from "@/components/LedgerRail";
import { Preloader } from "@/components/Preloader";
import { site } from "@/lib/site";

/**
 * Satoshi — the brand's actual typeface, per the official brand board: one
 * family across headline/subhead/body/label, self-hosted (files in
 * src/fonts/satoshi, sourced from Fontshare) rather than a display/body
 * pairing, matching the real spec exactly.
 */
const display = localFont({
  src: [
    { path: "../fonts/satoshi/Satoshi-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});
/** IBM Plex Mono — a restrained utility accent for data-like content (control IDs, timestamps, the ledger rail), not the brand's primary voice. */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  keywords: [
    "SEBI CSCRF",
    "GRC platform",
    "RegTech",
    "compliance platform India",
    "network monitoring",
    "continuous threat exposure management",
    "Annexure-K",
    "VAPT",
    "vCISO",
    "third-party risk",
    "cyber resilience",
    "Zoffec Aegis",
    "Argus",
    "ExploitSense",
    "MSSP GRC platform",
    "regulated entities compliance",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      { url: "/logo.jpeg", width: 1242, height: 1242, alt: "ZTPL — Compliance Simplified" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/logo.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    // PLACEHOLDER — foundingDate/taxID resolve automatically once the
    // bracketed values in site.ts are replaced with real facts.
    foundingDate: site.founded,
    taxID: site.cin,
    description: site.description,
    logo: `${site.url}/logo.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    sameAs: [site.socials.linkedin, site.socials.x],
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable}`}
    >
      <body className="relative min-h-screen bg-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Preloader />
        <Aurora />
        <ScrollProgress />
        <LedgerRail />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-green focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
