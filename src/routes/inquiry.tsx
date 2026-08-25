import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, PackageCheck, Truck, Globe, Loader2, AlertCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { sendInquiryEmail } from "@/lib/email";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Bulk Inquiry — TOMSTILL" },
      {
        name: "description",
        content:
          "Initiate your wholesale partnership with TOMSTILL. Complete the manifest to receive customized pricing and inventory schedules.",
      },
      { property: "og:title", content: "Bulk Inquiry — TOMSTILL" },
      { property: "og:description", content: "Initiate your TOMSTILL wholesale partnership." },
    ],
  }),
  component: InquiryPage,
});

function InquiryPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    volume: "50 - 100",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await sendInquiryEmail({
        data: {
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          volume: formData.volume,
        }
      });
      setSubmitted(true);
    } catch (err: any) {
      console.error("Failed to submit inquiry:", err);
      setError("We encountered an issue submitting your manifest via email. You can still transmit your inquiry directly via WhatsApp below.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppFallback = () => {
    openWhatsApp(
      [
        "TOMSTILL BULK INQUIRY",
        `Name: ${formData.fullName}`,
        `Company: ${formData.companyName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Initial Volume: ${formData.volume} units`,
      ].join("\n"),
    );
  };

  if (submitted) {
    return (
      <main className="flex-grow flex items-center justify-center p-10">
        <div className="brutalist-border bg-surface-container-lowest p-10 text-center max-w-lg">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl uppercase mb-4">Inquiry Transmitted</h2>
          <p className="font-body text-on-surface-variant mb-6">
            Your wholesale manifest has been securely transmitted. A digital copy of your inquiry has been sent to our allocation desk. Expect a custom catalog and pricing matrix within 12 hours.
          </p>
          <div className="bg-surface-container-high p-4 brutalist-border mb-8 text-left">
            <h4 className="font-display uppercase text-sm text-primary mb-2">Want a faster response?</h4>
            <p className="font-body text-xs text-on-surface-variant mb-4">
              Open a direct line of communication with our team on WhatsApp using the manifest info you just entered.
            </p>
            <button 
              onClick={handleWhatsAppFallback}
              className="brutalist-button w-full text-center py-2 uppercase font-display text-sm bg-primary text-primary-foreground"
            >
              Chat on WhatsApp
            </button>
          </div>
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
          Initiate your wholesale partnership. Complete the manifest below to receive customized
          pricing and inventory schedules.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-8 brutalist-border bg-surface-container-lowest p-6 md:p-10">
          {error && (
            <div className="mb-6 brutalist-border border-red-500 bg-red-50 text-red-700 p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-display uppercase text-sm font-bold mb-1">Submission Error</p>
                <p className="font-body text-sm">{error}</p>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-display uppercase text-primary text-xs" htmlFor="fullName">
                  Full Name
                </label>
                <input 
                  className="brutalist-input p-3 w-full" 
                  id="fullName" 
                  required 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  disabled={submitting}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="font-display uppercase text-primary text-xs"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  className="brutalist-input p-3 w-full"
                  id="companyName"
                  required
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  disabled={submitting}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-display uppercase text-primary text-xs" htmlFor="email">
                  Email
                </label>
                <input 
                  className="brutalist-input p-3 w-full" 
                  id="email" 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={submitting}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-display uppercase text-primary text-xs" htmlFor="phone">
                  Contact Number
                </label>
                <input 
                  className="brutalist-input p-3 w-full" 
                  id="phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={submitting}
                />
              </div>
            </div>
            <div className="border-t border-outline pt-6">
              <label className="font-display uppercase text-primary mb-4 block">
                Initial Volume (Units)
              </label>
              <select
                id="volume"
                className="brutalist-input p-3 w-full md:w-1/2"
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                disabled={submitting}
              >
                <option value="50 - 100">50 - 100</option>
                <option value="101 - 500">101 - 500</option>
                <option value="501 - 1,000">501 - 1,000</option>
                <option value="1,000+">1,000+</option>
              </select>
            </div>
            <button
              className="brutalist-button w-full md:w-auto px-8 py-4 font-display uppercase text-xl mt-8 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              type="submit"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  Transmitting...
                  <Loader2 className="h-5 w-5 animate-spin" />
                </>
              ) : (
                <>
                  Transmit Inquiry
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="brutalist-border bg-surface-container-high p-6 flex flex-col gap-6">
            <h2 className="font-display text-xl uppercase text-primary border-b border-primary pb-2">
              Wholesale Parameters
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 pb-4 border-b border-outline-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 brutalist-border flex items-center justify-center bg-surface-container-lowest shrink-0">
                  <PackageCheck className="text-primary fill-current h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display uppercase text-primary mb-1">MOQ 50 Units</h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    Accessible entry point for premium industrial-grade apparel lines.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-4 border-b border-outline-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 brutalist-border flex items-center justify-center bg-surface-container-lowest shrink-0">
                  <Truck className="text-primary fill-current h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display uppercase text-primary mb-1">48H Dispatch</h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    Rapid processing protocol for verified in-stock inventory.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-4 border-b border-outline-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 brutalist-border flex items-center justify-center bg-surface-container-lowest shrink-0">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display uppercase text-primary mb-1">
                    International Delivery
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    Worldwide freight and large-scale wholesale orders.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
