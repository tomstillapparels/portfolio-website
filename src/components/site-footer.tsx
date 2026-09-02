import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  useEffect(() => {
    if (document.getElementById("exflow-branding-script")) return;

    const script = document.createElement("script");
    script.id = "exflow-branding-script";
    script.src = "https://exflow-ai.vercel.app/branding.js";
    script.async = true;
    script.onerror = () => {
      const el = document.getElementById("agency-credit");
      if (el) el.innerHTML = " | Built by Ex-Flow AI";
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("exflow-branding-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <footer className="w-full px-4 md:px-8 py-12 flex flex-col md:flex-row justify-between items-start bg-primary text-primary-foreground border-t border-outline brutalist-border-top mt-auto">
      <div className="mb-8 md:mb-0">
        <h2 className="font-display text-2xl text-primary-foreground uppercase mb-2">TOMSTILL</h2>
        <p className="font-body opacity-60 max-w-sm mt-4">
          © 2026 TOMSTILL PVT LTD. ALL RIGHTS RESERVED. INDUSTRIAL GRADE QUALITY.
          <span id="agency-credit"></span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          to="/categories"
          className="font-display uppercase tracking-widest text-primary-foreground opacity-60 hover:opacity-100 transition-opacity"
        >
          Portfolio
        </Link>
        <Link
          to="/about"
          className="font-display uppercase tracking-widest text-primary-foreground opacity-60 hover:opacity-100 transition-opacity"
        >
          About
        </Link>
        <Link
          to="/privacy-policy"
          className="font-display uppercase tracking-widest text-primary-foreground opacity-60 hover:opacity-100 transition-opacity"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms-of-service"
          className="font-display uppercase tracking-widest text-primary-foreground opacity-60 hover:opacity-100 transition-opacity"
        >
          Terms of Service
        </Link>
        <Link
          to="/shipping-logistics"
          className="font-display uppercase tracking-widest text-primary-foreground opacity-60 hover:opacity-100 transition-opacity"
        >
          Shipping & Logistics
        </Link>
        <Link
          to="/wholesale-faq"
          className="font-display uppercase tracking-widest text-primary-foreground opacity-60 hover:opacity-100 transition-opacity"
        >
          Wholesale FAQ
        </Link>
      </div>
    </footer>
  );
}
