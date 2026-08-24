import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TOMSTILL" },
      {
        name: "description",
        content:
          "How TOMSTILL PVT LTD collects, uses, and safeguards information shared through wholesale inquiries and catalog requests.",
      },
      { property: "og:title", content: "Privacy Policy — TOMSTILL" },
      {
        property: "og:description",
        content: "How TOMSTILL collects, uses, and safeguards wholesale inquiry information.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <header className="mb-12 border-b-2 border-primary pb-4">
        <p className="font-display uppercase tracking-widest text-on-surface-variant text-xs mb-2">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-primary uppercase">Privacy Policy</h1>
        <p className="font-body text-sm text-on-surface-variant mt-3">
          Last updated: 19 August 2026
        </p>
      </header>

      <div className="space-y-10">
        <Section title="1. Introduction">
          TOMSTILL PVT LTD ("TOMSTILL," "we," "us") is a wholesale apparel manufacturer and
          distributor based in India. This Privacy Policy explains what information we collect when
          you submit a bulk inquiry, request a quote, or contact us, and how we use and protect that
          information. By using this website and submitting your details, you consent to the
          practices described here.
        </Section>

        <Section title="2. Information We Collect">
          We only collect the information you choose to provide through our inquiry forms and
          WhatsApp communication. This may include:
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Full name and company name</li>
            <li>Corporate email address and contact number</li>
            <li>Requested product lines, SKU references, and order volume</li>
            <li>Shipping destination and logistics preferences</li>
            <li>Messages and attachments shared via WhatsApp or email</li>
          </ul>
          We do not use cookies, tracking pixels, or third-party analytics on this website.
        </Section>

        <Section title="3. How We Use Your Information">
          Your information is used strictly to process wholesale inquiries, prepare quotations,
          arrange production and dispatch, and fulfill orders. We may also use your contact details
          to respond to your questions and share catalog updates you have requested. We do not sell,
          rent, or trade your personal information to third parties.
        </Section>

        <Section title="4. WhatsApp Communication">
          Bulk inquiries and quote requests on this site are routed to our official WhatsApp number
          (+91 90354 29042). Messages you send through WhatsApp are governed by WhatsApp's own terms
          and privacy policy in addition to this policy. Please avoid sharing sensitive data such as
          full payment card numbers over WhatsApp.
        </Section>

        <Section title="5. Data Sharing">
          We share your information only with parties necessary to fulfill your order:
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Freight forwarders and customs brokers for international delivery</li>
            <li>Production partners involved in manufacturing your order</li>
            <li>Payment and logistics providers, where relevant</li>
          </ul>
          Each party is instructed to handle your data confidentially and only for the purpose of
          fulfilling your order.
        </Section>

        <Section title="6. Data Retention">
          We retain inquiry and order records for as long as necessary to fulfill orders, handle
          warranty or quality matters, and meet applicable accounting requirements. You may request
          deletion of your inquiry details at any time by contacting us.
        </Section>

        <Section title="7. Data Security">
          We take reasonable measures to protect the information you share. However, no method of
          transmission over the internet or WhatsApp is fully secure, and we cannot guarantee
          absolute security.
        </Section>

        <Section title="8. Your Rights">
          You may request access to, correction of, or deletion of the personal information you have
          shared with us. To exercise any of these rights, contact us via WhatsApp at +91 90354
          29042.
        </Section>

        <Section title="9. Changes to This Policy">
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated revision date. Continued use of the site after changes constitutes
          acceptance of the revised policy.
        </Section>

        <Section title="10. Contact">
          For any privacy-related questions, reach us via WhatsApp at +91 90354 29042.
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl uppercase text-primary mb-3 border-b border-outline pb-2">
        {title}
      </h2>
      <div className="font-body text-on-surface-variant leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
