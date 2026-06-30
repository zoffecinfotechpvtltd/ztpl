import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Aurora } from "@/components/Aurora";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/lib/site";

/**
 * Pliant (loaded via @import in globals.css) is the primary typeface.
 * Manrope is loaded through next/font purely as a self-hosted fallback so
 * there is never a flash of an ugly system serif while Pliant streams in.
 */
const fallback = Manrope({
  subsets: ["latin"],
  variable: "--font-pliant-fallback",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "SEBI CSCRF",
    "GRC platform",
    "RegTech",
    "compliance platform India",
    "Annexure-K",
    "VAPT",
    "vCISO",
    "third-party risk",
    "cyber resilience",
    "Zoffec Aegis",
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
    <html lang="en" className={fallback.variable}>
      <body className="relative min-h-screen bg-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Aurora />
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-green focus:px-4 focus:py-2 focus:text-bg"
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
