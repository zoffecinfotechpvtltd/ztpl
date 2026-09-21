import type { Metadata } from "next";
import { LegalPage, H2 } from "@/components/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.legalName}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="21 September 2026">
      <p>
        This Privacy Policy explains how {site.legalName} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) handles personal information collected through this website, {site.url.replace("https://", "")}.
        It does not cover data processed inside our platforms (such as Aegis), which is governed by the
        agreement we sign with each customer.
      </p>

      <H2>1. Information we collect</H2>
      <p>
        <strong>Information you give us.</strong> When you use the contact form, book a demo, or write or call us,
        we collect what you provide: your name, company, work email address, phone number if you give one, and the
        contents of your message.
      </p>
      <p>
        <strong>Information collected automatically.</strong> Like most web servers, ours record technical data such
        as your IP address, browser type, the pages requested, and timestamps. We use it to operate, secure, and
        troubleshoot the website.
      </p>
      <p>
        We do not use advertising or tracking cookies, and this website does not currently run third-party
        analytics.
      </p>

      <H2>2. How we use your information</H2>
      <ul className="list-disc space-y-2 pl-6">
        <li>To respond to your enquiry, arrange a demo, and follow up on what you asked about.</li>
        <li>To operate, secure, and improve the website, and to prevent spam and abuse.</li>
        <li>To meet legal, regulatory, and accounting obligations.</li>
      </ul>
      <p>We do not sell your personal information, and we do not use it for automated decision-making.</p>

      <H2>3. Basis for processing</H2>
      <p>
        We process the information you submit on the basis of your consent, given when you send us a message, and to
        the extent needed to respond to you. You can withdraw consent at any time by writing to us (see section 8);
        this does not affect processing already carried out.
      </p>

      <H2>4. Who we share it with</H2>
      <p>
        We share personal information only with service providers who help us run the website and handle
        correspondence, and only as far as they need it to do so. These currently include our cloud hosting
        provider and Google Workspace, which delivers the email your enquiry generates. We may also disclose
        information where the law or a competent authority requires it. Our providers are bound to protect the
        information and use it only for our purposes.
      </p>

      <H2>5. Where it is stored</H2>
      <p>
        Our website servers are located in India. Email is handled by Google Workspace, which may process data in
        other countries under its own safeguards.
      </p>

      <H2>6. How long we keep it</H2>
      <p>
        We keep enquiries and correspondence only for as long as needed to deal with your request, maintain
        business records, and meet legal obligations, after which we delete or anonymise them. Server logs are kept
        for a limited period for security purposes.
      </p>

      <H2>7. Security</H2>
      <p>
        We use reasonable technical and organisational measures to protect personal information, including encrypted
        connections (HTTPS) and restricted access. No system is completely secure, so we cannot guarantee absolute
        security.
      </p>

      <H2>8. Your rights and how to reach us</H2>
      <p>
        Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you may ask us to give
        you a summary of the personal information we hold about you, correct or update it, erase it, or stop
        processing it, and you may nominate someone to exercise these rights on your behalf. To do so, or to raise a
        concern or complaint, email <a href={`mailto:${site.email}`} className="text-brand-amber hover:underline">{site.email}</a>.
        We aim to respond within 30 days. If you are not satisfied with our response, you may approach the Data
        Protection Board of India.
      </p>

      <H2>9. Children</H2>
      <p>This website is intended for business users and is not directed at children. We do not knowingly collect information from anyone under 18.</p>

      <H2>10. Changes to this policy</H2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above shows when it last
        changed; significant changes will be reflected on this page.
      </p>

      <H2>11. Contact</H2>
      <p>
        {site.legalName}, {site.location}
        <br />
        Email: <a href={`mailto:${site.email}`} className="text-brand-amber hover:underline">{site.email}</a>
        <br />
        Phone: {site.phone}
        <br />
        CIN: {site.cin}
      </p>
    </LegalPage>
  );
}
