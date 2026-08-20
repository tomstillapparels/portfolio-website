import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Bulk Inquiry — TOMSTILL" },
      { name: "description", content: "Initiate your wholesale partnership with TOMSTILL. Complete the manifest to receive customized pricing and inventory schedules." },
      { property: "og:title", content: "Bulk Inquiry — TOMSTILL" },
      { property: "og:description", content: "Initiate your TOMSTILL wholesale partnership." },
    ],
  }),
  component: InquiryPage,
});

import { CheckCircle2, ArrowRight, PackageCheck, Truck, Globe } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const get = (id: string) => (form.querySelector<HTMLInputElement | HTMLSelectElement>(`#${id}`)?.value ?? "").trim();
    openWhatsApp(
      [
        "TOMSTILL BULK INQUIRY",
        `Name: ${get("fullName")}`,
        `Company: ${get("companyName")}`,
        `Email: ${get("email")}`,
        `Phone: ${get("phone")}`,
        `Initial Volume: ${get("volume")} units`,
      ].join("\n"),
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex-grow flex items-center justify-center p-10">
        <div className="brutalist-border bg-surface-container-lowest p-10 text-center max-w-md">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl uppercase mb-4">Handed Off To WhatsApp</h2>
          <p className="font-body text-on-surface-variant mb-8">
            Your manifest is pre-loaded in WhatsApp. Press send in the WhatsApp window to
            complete the inquiry — until then it has not reached our allocation desk. Once sent,
            expect a preliminary catalog transmission within 12 hours.
          </p>
          <Link to="/" className="brutalist-button px-8 py-3 inline-block uppercase font-display">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-6xl text-primary uppercase border-b-2 border-primary pb-4 mb-4">
          Bulk Inquiry
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl">
          Initiate your wholesale partnership. Complete the manifest below to receive customized pricing and inventory schedules.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-8 brutalist-border bg-surface-container-lowest p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-display uppercase text-primary text-xs" htmlFor="fullName">Full Name</label>
                <input className="brutalist-input p-3 w-full" id="fullName" required type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-display uppercase text-primary text-xs" htmlFor="companyName">Company Name</label>
                <input className="brutalist-input p-3 w-full" id="companyName" required type="text" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-display uppercase text-primary text-xs" htmlFor="email">Email</label>
                <input className="brutalist-input p-3 w-full" id="email" required type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-display uppercase text-primary text-xs" htmlFor="phone">Contact Number</label>
                <input className="brutalist-input p-3 w-full" id="phone" type="tel" />
              </div>
            </div>
            <div className="border-t border-outline pt-6">
              <label className="font-display uppercase text-primary mb-4 block">Initial Volume (Units)</label>
              <select id="volume" className="brutalist-input p-3 w-full md:w-1/2" defaultValue="50 - 100">
                <option>50 - 100</option>
                <option>101 - 500</option>
                <option>501 - 1,000</option>
                <option>1,000+</option>
              </select>
            </div>
            <button className="brutalist-button w-full md:w-auto px-8 py-4 font-display uppercase text-xl mt-8 flex items-center justify-center gap-2" type="submit">
              Transmit Inquiry
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="brutalist-border bg-surface-container-high p-6 flex flex-col gap-6">
            <h2 className="font-display text-xl uppercase text-primary border-b border-primary pb-2">Wholesale Parameters</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 pb-4 border-b border-outline-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 brutalist-border flex items-center justify-center bg-surface-container-lowest shrink-0">
                  <PackageCheck className="text-primary fill-current h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display uppercase text-primary mb-1">MOQ 50 Units</h4>
                  <p className="font-body text-sm text-on-surface-variant">Accessible entry point for premium industrial-grade apparel lines.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-4 border-b border-outline-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 brutalist-border flex items-center justify-center bg-surface-container-lowest shrink-0">
                  <Truck className="text-primary fill-current h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display uppercase text-primary mb-1">48H Dispatch</h4>
                  <p className="font-body text-sm text-on-surface-variant">Rapid processing protocol for verified in-stock inventory.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-4 border-b border-outline-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 brutalist-border flex items-center justify-center bg-surface-container-lowest shrink-0">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display uppercase text-primary mb-1">International Delivery</h4>
                  <p className="font-body text-sm text-on-surface-variant">Worldwide freight and large-scale wholesale orders.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
