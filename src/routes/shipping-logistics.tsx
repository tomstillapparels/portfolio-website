import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping-logistics")({
  head: () => ({
    meta: [
      { title: "Shipping & Logistics — TOMSTILL" },
      { name: "description", content: "TOMSTILL wholesale dispatch, freight, customs, and international delivery terms." },
      { property: "og:title", content: "Shipping & Logistics — TOMSTILL" },
      { property: "og:description", content: "Wholesale dispatch, freight, customs, and international delivery terms." },
    ],
  }),
  component: ShippingLogisticsPage,
});

import { Truck, Globe, PackageCheck, Clock, FileText, Anchor } from "lucide-react";

function ShippingLogisticsPage() {
  return (
    <main className="flex-grow w-full max-w-5xl mx-auto px-4 md:px-8 py-12">
      <header className="mb-12 border-b-2 border-primary pb-4">
        <p className="font-display uppercase tracking-widest text-on-surface-variant text-xs mb-2">Logistics</p>
        <h1 className="font-display text-4xl md:text-6xl text-primary uppercase">Shipping & Logistics</h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mt-4">
          How TOMSTILL moves industrial-grade wholesale consignments from our production floor to
          your warehouse — anywhere in the world.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <Stat icon={<Clock className="h-5 w-5" />} title="48H Dispatch" body="Verified in-stock inventory ships within 48 hours of confirmed payment." />
        <Stat icon={<PackageCheck className="h-5 w-5" />} title="MOQ 50 Units" body="Minimum order quantity of 50 units per style to enable wholesale pricing." />
        <Stat icon={<Globe className="h-5 w-5" />} title="Worldwide Delivery" body="Freight and customs handling for large-scale wholesale consignments globally." />
      </div>

      <div className="space-y-10">
        <Section title="1. Order Processing">
          Once your inquiry is confirmed and payment is received, in-stock items enter our
          dispatch protocol within 48 hours. Made-to-order and bulk production runs carry lead
          times that are confirmed at the point of quotation. You will receive a dispatch
          confirmation with tracking details as soon as your consignment leaves our facility.
        </Section>

        <Section title="2. Domestic Shipping (India)">
          Orders within India are shipped via trusted surface and express courier networks.
          Transit times typically range from 3 to 7 business days depending on destination and
          consignment size. Domestic shipments are freight-protected and packaged for
          high-volume retail handling.
        </Section>

        <Section title="3. International Delivery">
          TOMSTILL handles worldwide freight for large-scale wholesale consignments. We
          coordinate sea and air freight through vetted forwarders based on your destination,
          timeline, and budget. Typical international transit windows:
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Air freight: 7 to 14 business days</li>
            <li>Sea freight: 25 to 45 business days</li>
          </ul>
          Exact timelines depend on destination, port availability, and customs processing.
        </Section>

        <Section title="4. Customs, Duties, and Taxes">
          For international consignments, the buyer is responsible for any import duties,
          taxes, and customs clearance charges levied by the destination country, unless
          otherwise agreed in writing. TOMSTILL provides the commercial invoice and supporting
          documents required for clearance, and we can recommend customs brokers on request.
        </Section>

        <Section title="5. Packaging">
          All wholesale orders are packed in industrial-grade cartons designed for
          high-volume transit. Cartons are labeled with style, SKU, quantity, and carton
          sequence to streamline your receiving process. Special packaging requirements can be
          arranged on request.
        </Section>

        <Section title="6. Tracking and Support">
          Each consignment is assigned a tracking reference shared at dispatch. For shipping
          updates, freight coordination, or delivery questions, contact us via WhatsApp at
          +91 90354 29042 with your order reference.
        </Section>

        <Section title="7. Freight Terms">
          Shipping costs, Incoterms, and freight responsibility are confirmed at quotation.
          Unless otherwise agreed, shipments default to FOB origin. We are happy to arrange
          door-to-door freight on request.
        </Section>
      </div>

      <div className="mt-12 brutalist-border bg-surface-container-high p-6 flex items-center gap-4">
        <Anchor className="text-primary h-8 w-8 shrink-0" />
        <div>
          <h2 className="font-display uppercase text-primary mb-1">Need a Freight Estimate?</h2>
          <p className="font-body text-sm text-on-surface-variant">
            Send your destination, volume, and preferred freight mode via WhatsApp for a
            tailored logistics quote.
          </p>
        </div>
      </div>
    </main>
  );
}

function Stat({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="brutalist-border bg-surface-container-lowest p-6">
      <div className="w-10 h-10 brutalist-border flex items-center justify-center bg-surface-container-high mb-4">
        <span className="text-primary">{icon}</span>
      </div>
      <h2 className="font-display uppercase text-primary mb-2">{title}</h2>
      <p className="font-body text-sm text-on-surface-variant">{body}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl uppercase text-primary mb-3 border-b border-outline pb-2 flex items-center gap-2">
        {title}
      </h2>
      <div className="font-body text-on-surface-variant leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
