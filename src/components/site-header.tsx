import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import logoAsset from "@/assets/tomstill-logo.png";

const navLinks = [
  { label: "Showcase", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "About", to: "/about" },
  { label: "Enquiry", to: "/inquiry" },
] as const;

export function SiteHeader() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background text-on-background w-full z-50 sticky top-0 brutalist-border-bottom border-outline">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-2 max-w-full">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center" aria-label="TOMSTILL home">
            <img src={logoAsset} alt="TOMSTILL" className="h-8 md:h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6 ml-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-display text-sm uppercase text-on-surface-variant hover:text-primary transition-colors ${
                    active ? "active-nav" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="text-primary h-6 w-6" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background brutalist-border-top p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-display text-sm uppercase text-on-surface-variant"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
