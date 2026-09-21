import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, H2 } from "@/components/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the ${site.name} website, operated by ${site.legalName}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="21 September 2026">
      <p>
        These terms govern your use of this website, {site.url.replace("https://", "")}, operated by{" "}
        {site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the website you
        agree to them. If you do not agree, please do not use the website.
      </p>

      <H2>1. What this website is</H2>
      <p>
        This is an information website about {site.name} and its platforms. Access to and use of our platforms,
        such as Aegis, is governed by a separate written agreement between us and each customer, and not by
        these terms.
      </p>

      <H2>2. Not professional advice</H2>
      <p>
        Content on this website is general information about security and regulatory compliance. It is not legal,
        regulatory, audit, or other professional advice, and does not create an advisory relationship. Regulatory
        requirements, including those of SEBI, change and apply differently to each entity, so please take advice on
        your own circumstances before acting.
      </p>

      <H2>3. Acceptable use</H2>
      <p>You agree not to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>use the website unlawfully, or in a way that harms, disrupts, or overloads it or its infrastructure;</li>
        <li>attempt to gain unauthorised access to the website, its servers, or any connected system;</li>
        <li>probe, scan, or test the vulnerability of the website without our prior written permission;</li>
        <li>use automated means to submit the contact form in bulk, or submit false or misleading information.</li>
      </ul>

      <H2>4. Intellectual property</H2>
      <p>
        The website and its content, including text, design, graphics, logos, and the names {site.name},
        Aegis, Argus, and ExploitSense, belong to {site.legalName} or its licensors and are protected by applicable
        intellectual property laws. You may view the website and share links to it. You may not copy, modify,
        distribute, or reuse its content for commercial purposes without our written permission.
      </p>

      <H2>5. Product information</H2>
      <p>
        We describe our platforms, including those still in development, as accurately as we can, but features,
        availability, and timelines may change without notice, and nothing on this website is a commitment to
        deliver a particular feature or date. Only a signed agreement creates obligations.
      </p>

      <H2>6. Third-party links</H2>
      <p>
        The website may link to third-party sites. We do not control them and are not responsible for their content
        or practices.
      </p>

      <H2>7. Disclaimer</H2>
      <p>
        The website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest extent
        permitted by law, we disclaim all warranties, express or implied, including that the website will be
        uninterrupted, error-free, or free of harmful components.
      </p>

      <H2>8. Limitation of liability</H2>
      <p>
        To the fullest extent permitted by law, {site.legalName} will not be liable for any indirect, incidental, or
        consequential loss, or for loss of profit, data, or business, arising from your use of, or inability to use,
        the website or reliance on its content. Nothing in these terms limits liability that cannot be limited under
        applicable law.
      </p>

      <H2>9. Privacy</H2>
      <p>
        How we handle personal information is described in our{" "}
        <Link href="/privacy" className="text-brand-amber hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <H2>10. Changes</H2>
      <p>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo; date shows the current version,
        and continued use of the website after a change means you accept the updated terms.
      </p>

      <H2>11. Governing law</H2>
      <p>
        These terms are governed by the laws of India. The courts at Mumbai have exclusive jurisdiction over any
        dispute arising from them, subject to any mandatory rights you have under applicable law.
      </p>

      <H2>12. Contact</H2>
      <p>
        {site.legalName}, {site.location}
        <br />
        Email: <a href={`mailto:${site.email}`} className="text-brand-amber hover:underline">{site.email}</a>
        <br />
        CIN: {site.cin}
      </p>
    </LegalPage>
  );
}
