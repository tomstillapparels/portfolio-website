import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import logoAsset from "@/assets/tomstill-logo.png.asset.json";
import { openWhatsApp } from "@/lib/whatsapp";

const navLinks = [
  { label: "Showcase", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "Brand Story", to: "/brand-story" },
  { label: "Inquiry", to: "/inquiry" },
] as const;

export function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const typedRef = useRef(false);

  const runSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/categories", search: query.trim() ? { q: query.trim() } : {} });
    setMobileMenuOpen(false);
  };

  // Live search-as-you-type: debounce keystrokes and push to /categories?q=
  useEffect(() => {
    if (!typedRef.current) return;
    const term = query.trim();
    const timer = window.setTimeout(() => {
      navigate({ to: "/categories", search: term ? { q: term } : {} });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [query, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    typedRef.current = true;
    setQuery(e.target.value);
  };

  return (
    <header className="bg-background text-on-background w-full z-50 sticky top-0 brutalist-border-bottom border-outline">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-1 max-w-full">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center" aria-label="TOMSTILL home">
            <img
              src={logoAsset.url}
              alt="TOMSTILL"
              className="h-8 md:h-10 w-auto"
            />
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
          <form
            onSubmit={runSearch}
            role="search"
            action="/categories"
            method="get"
            className="hidden lg:flex items-center brutalist-border px-3 py-1 bg-surface-container-lowest"
          >
            <button type="submit" aria-label="Search inventory" className="mr-2 flex items-center">
              <Search className="text-on-surface-variant h-4 w-4" />
            </button>
            <input
              value={query}
              onChange={handleChange}
              name="q"
              className="bg-transparent border-none focus:ring-0 font-display text-sm w-48 text-on-surface p-0 outline-none"
              placeholder="Search Inventory"
              type="search"
              aria-label="Search inventory"
            />
          </form>
          <button
            onClick={() => openWhatsApp("Hi TOMSTILL, I'd like to place a bulk wholesale order.")}
            className="bg-primary text-primary-foreground font-display uppercase px-6 py-2 brutalist-border hover:bg-surface-tint transition-colors"
          >
            Bulk Order
          </button>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="text-primary h-6 w-6" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background brutalist-border-top p-4 flex flex-col gap-4">
          <form onSubmit={runSearch} role="search" action="/categories" method="get" className="flex items-center brutalist-border px-3 py-2 bg-surface-container-lowest">
            <Search className="text-on-surface-variant mr-2 h-4 w-4" />
            <input
              value={query}
              onChange={handleChange}
              name="q"
              className="bg-transparent font-display text-sm w-full text-on-surface p-0 outline-none"
              placeholder="Search Inventory"
              type="search"
              aria-label="Search inventory"
            />
          </form>
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
