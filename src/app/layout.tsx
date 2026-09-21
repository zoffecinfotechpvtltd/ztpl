import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";


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
    sameAs: [site.socials.linkedin],
  };

  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="relative min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
