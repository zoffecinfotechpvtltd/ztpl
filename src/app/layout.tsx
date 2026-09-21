import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";


/** Satoshi is the ZTPL brand typeface (self-hosted from src/fonts/satoshi). */
const satoshi = localFont({
  src: [
    { path: "../fonts/satoshi/Satoshi-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s - ${site.name}`,
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
    "third-party risk",
    "cyber resilience",
    "Aegis",
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
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    images: [
      { url: "/logo.jpeg", width: 1242, height: 1242, alt: "ZTPL - Compliance Simplified" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
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
    foundingDate: site.founded,
    taxID: site.gstin,
    identifier: { "@type": "PropertyValue", propertyID: "CIN", value: site.cin },
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
      className={`dark ${satoshi.variable} ${GeistMono.variable}`}
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
