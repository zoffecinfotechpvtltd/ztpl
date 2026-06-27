import type { Metadata } from "next";
import { LegalPage, H2 } from "@/components/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.legalName} (${site.name}).`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="To be confirmed">
      <p>
        <strong>This is placeholder content.</strong> It outlines how{" "}
        {site.legalName} ({site.name}) handles information collected through this
        website. Replace it with your reviewed, jurisdiction-appropriate policy
        before launch.
      </p>

      <H2>1. Information we collect</H2>
      <p>
        When you contact us, request a demo, or otherwise interact with us, we
        collect the details you provide — such as your name, company, work
        email, phone number, and the contents of your message. We may also
        collect limited technical data (such as IP address, browser type, and
        pages visited) to operate and secure the site.
      </p>

      <H2>2. How we use your information</H2>
      <p>
        We use your information to respond to enquiries, schedule and deliver
        demos, provide the services you request, improve our website, and meet
        our legal and regulatory obligations. We do not sell your personal data.
      </p>

      <H2>3. Legal basis &amp; retention</H2>
      <p>
        We process your information on the basis of your consent, our legitimate
        interest in operating our business, and where necessary to comply with
        applicable law. We retain personal data only for as long as needed for
        the purposes described here or as required by law.
      </p>

      <H2>4. Sharing &amp; disclosure</H2>
      <p>
        We may share information with trusted service providers who help us
        operate the website and deliver our services, under appropriate
        confidentiality and data-protection terms. We may also disclose
        information where required by law or to protect our rights.
      </p>

      <H2>5. Data security</H2>
      <p>
        We apply appropriate technical and organisational measures — consistent
        with the security posture we bring to our products and services — to
        protect your information against unauthorised access, alteration, or
        loss.
      </p>

      <H2>6. Your rights</H2>
      <p>
        Subject to applicable law, you may request access to, correction of, or
        deletion of your personal data, and you may withdraw consent at any
        time. To exercise these rights, contact us using the details below.
      </p>

      <H2>7. Cookies</H2>
      <p>
        This site may use essential cookies to function correctly. Any
        analytics or non-essential cookies will be described and, where
        required, consented to before use.
      </p>

      <H2>8. Contact</H2>
      <p>
        Questions about this policy? Email{" "}
        <a href={`mailto:${site.email}`} className="text-green">
          {site.email}
        </a>
        . {site.legalName} is based in {site.location}.
      </p>
    </LegalPage>
  );
}
