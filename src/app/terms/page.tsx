import type { Metadata } from "next";
import { LegalPage, H2 } from "@/components/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${site.legalName} (${site.name}).`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="To be confirmed">
      <p>
        <strong>This is placeholder content.</strong> These Terms of Use govern
        your access to and use of the {site.name} website operated by{" "}
        {site.legalName}. Replace this with your reviewed terms before launch. By
        using this website, you agree to these terms.
      </p>

      <H2>1. Use of this website</H2>
      <p>
        You agree to use this website lawfully and not to misuse, disrupt, or
        attempt to gain unauthorised access to it, its systems, or its data. You
        must not use the site to transmit harmful code or to infringe the rights
        of others.
      </p>

      <H2>2. Intellectual property</H2>
      <p>
        All content, branding, trademarks, and the Zoffec Aegis product are the
        property of {site.legalName} or its licensors unless otherwise stated.
        You may not copy, reproduce, or redistribute our content without prior
        written permission.
      </p>

      <H2>3. No professional or regulatory advice</H2>
      <p>
        Content on this website is provided for general information only and does
        not constitute legal, regulatory, or professional advice. Engagements
        for advisory or product services are governed by separate written
        agreements.
      </p>

      <H2>4. Third-party links</H2>
      <p>
        This website may link to third-party sites and applications (including
        the Zoffec Aegis platform). We are not responsible for the content,
        policies, or practices of third-party sites.
      </p>

      <H2>5. Disclaimer &amp; limitation of liability</H2>
      <p>
        This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis without warranties of any kind. To the maximum
        extent permitted by law, {site.legalName} is not liable for any indirect,
        incidental, or consequential loss arising from your use of the site.
      </p>

      <H2>6. Changes to these terms</H2>
      <p>
        We may update these terms from time to time. Continued use of the website
        after changes take effect constitutes acceptance of the revised terms.
      </p>

      <H2>7. Governing law</H2>
      <p>
        These terms are governed by the laws of India, and any disputes are
        subject to the exclusive jurisdiction of the courts of Mumbai, India.
      </p>

      <H2>8. Contact</H2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.email}`} className="text-green">
          {site.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
