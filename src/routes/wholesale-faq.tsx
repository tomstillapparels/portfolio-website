import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/wholesale-faq")({
  head: () => ({
    meta: [
      { title: "Wholesale FAQ — TOMSTILL" },
      {
        name: "description",
        content:
          "Answers to common questions about TOMSTILL wholesale orders, MOQ, dispatch, and international delivery.",
      },
      { property: "og:title", content: "Wholesale FAQ — TOMSTILL" },
      {
        property: "og:description",
        content: "Common questions about TOMSTILL wholesale orders, MOQ, and delivery.",
      },
    ],
  }),
  component: WholesaleFaqPage,
});

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our MOQ is 50 units per style. This threshold enables wholesale pricing and efficient production allocation. Higher volumes unlock improved per-unit pricing.",
  },
  {
    q: "How do I place a wholesale order?",
    a: "Submit a bulk inquiry through our Inquiry page, or message us directly on WhatsApp at +91 90354 29042 with your company details, desired styles, and volume. We respond with a quotation and confirm production and dispatch details.",
  },
  {
    q: "How fast do you dispatch orders?",
    a: "Verified in-stock inventory is dispatched within 48 hours of confirmed payment. Made-to-order and bulk production runs carry lead times confirmed at quotation.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We offer worldwide freight and customs handling for large-scale wholesale consignments via air and sea freight. Transit windows depend on destination and freight mode.",
  },
  {
    q: "Who pays customs duties and import taxes?",
    a: "The buyer is responsible for any import duties, taxes, and customs clearance charges in the destination country, unless otherwise agreed in writing. We provide all documents required for clearance.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Accepted payment methods, deposit requirements, and terms are confirmed at quotation. Production typically begins after receipt of the agreed advance payment.",
  },
  {
    q: "Can I request samples before placing a bulk order?",
    a: "Sample requests are handled on a case-by-case basis. Contact us via WhatsApp with the styles you are evaluating, and we will advise on availability and any sample fees.",
  },
  {
    q: "What if my consignment arrives damaged or with defects?",
    a: "Every product is manufactured to industrial-grade quality standards. Inspect your consignment on delivery and report any defect within 7 days with photographic evidence. Approved remedies may include replacement, credit, or repair.",
  },
  {
    q: "Can I customize products with my own branding?",
    a: "Custom branding, labels, and packaging can be arranged for qualifying order volumes. Share your requirements via WhatsApp and we will confirm feasibility and lead times.",
  },
  {
    q: "How do I get a freight estimate?",
    a: "Send your destination, order volume, and preferred freight mode (air or sea) via WhatsApp at +91 90354 29042, and we will provide a tailored logistics quote.",
  },
];

function WholesaleFaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <header className="mb-12 border-b-2 border-primary pb-4">
        <p className="font-display uppercase tracking-widest text-on-surface-variant text-xs mb-2">
          Support
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-primary uppercase">Wholesale FAQ</h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mt-4">
          Common questions about ordering, dispatch, and delivery with TOMSTILL. Still need help?
          Message us on WhatsApp at +91 90354 29042.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="brutalist-border bg-surface-container-lowest">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display uppercase text-primary text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 font-body text-on-surface-variant leading-relaxed border-t border-outline pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
