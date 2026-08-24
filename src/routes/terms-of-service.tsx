import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — TOMSTILL" },
      {
        name: "description",
        content:
          "Terms governing wholesale orders, quotes, payment, and delivery with TOMSTILL PVT LTD.",
      },
      { property: "og:title", content: "Terms of Service — TOMSTILL" },
      {
        property: "og:description",
        content: "Wholesale order, quote, payment, and delivery terms with TOMSTILL.",
      },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <header className="mb-12 border-b-2 border-primary pb-4">
        <p className="font-display uppercase tracking-widest text-on-surface-variant text-xs mb-2">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-primary uppercase">
          Terms of Service
        </h1>
        <p className="font-body text-sm text-on-surface-variant mt-3">
          Last updated: 19 August 2026
        </p>
      </header>

      <div className="space-y-10">
        <Section title="1. Acceptance of Terms">
          These Terms of Service ("Terms") govern your use of the TOMSTILL website and any wholesale
          orders placed with TOMSTILL PVT LTD ("TOMSTILL," "we," "us"). By browsing this site or
          submitting an inquiry, you agree to be bound by these Terms. If you do not agree, please
          do not use this site or place orders.
        </Section>

        <Section title="2. Wholesale Nature">
          TOMSTILL supplies apparel on a wholesale, business-to-business basis. All orders are
          subject to a minimum order quantity (MOQ) of 50 units. We do not sell individual units to
          end consumers. Prices and catalog availability are indicative and confirmed at the point
          of quotation.
        </Section>

        <Section title="3. Quotations and Orders">
          Prices displayed or quoted are not binding until confirmed in writing via WhatsApp or
          email. A quote is valid for 14 days from issue unless otherwise stated. Orders are
          accepted only upon written confirmation from TOMSTILL and are subject to stock and
          production availability.
        </Section>

        <Section title="4. Production and Dispatch">
          Verified in-stock inventory is dispatched within 48 hours. Made-to-order and bulk
          production runs carry lead times confirmed at quotation. Dispatch timelines are estimates
          and may be affected by material availability, order volume, and external logistics
          factors. We will communicate any significant delays as soon as we become aware of them.
        </Section>

        <Section title="5. International Delivery">
          TOMSTILL offers worldwide freight and customs handling for large-scale wholesale
          consignments. The buyer is responsible for any import duties, taxes, and customs clearance
          charges applicable in the destination country, unless otherwise agreed in writing.
        </Section>

        <Section title="6. Payment">
          Payment terms, accepted methods, and deposit requirements are confirmed at quotation.
          Unless agreed otherwise, production begins only after receipt of the agreed advance
          payment. Title to goods passes to the buyer upon full payment and dispatch.
        </Section>

        <Section title="7. Quality and Inspection">
          Every TOMSTILL product is manufactured to industrial-grade quality standards. Buyers are
          encouraged to inspect consignments upon delivery. Any discrepancy or defect must be
          reported within 7 days of receipt, supported by photographic evidence, to be considered
          for remedy.
        </Section>

        <Section title="8. Returns and Remedies">
          As wholesale goods are produced or allocated to order, returns are accepted only for
          verified manufacturing defects reported within the 7-day inspection window. Approved
          remedies may include replacement, credit, or repair at our discretion. Goods must be
          returned in original, unused condition.
        </Section>

        <Section title="9. Limitation of Liability">
          To the fullest extent permitted by law, TOMSTILL's liability for any order is limited to
          the value of the goods in that order. We are not liable for indirect, incidental, or
          consequential losses, including loss of profit or resale opportunity.
        </Section>

        <Section title="10. Intellectual Property">
          All content on this site, including the TOMSTILL name, logo, product imagery, and catalog
          descriptions, is the property of TOMSTILL PVT LTD and may not be reproduced without our
          written permission.
        </Section>

        <Section title="11. Governing Law">
          These Terms are governed by the laws of India. Any disputes arising from wholesale orders
          or use of this site shall be subject to the exclusive jurisdiction of the courts in India.
        </Section>

        <Section title="12. Contact">
          For questions about these Terms, contact us via WhatsApp at +91 90354 29042.
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
