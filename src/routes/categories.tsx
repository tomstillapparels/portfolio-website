import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/categories")({
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    const raw = search["q"];
    return typeof raw === "string" && raw.length > 0 ? { q: raw } : {};
  },
  head: () => ({
    meta: [
      { title: "Collections — TOMSTILL" },
      {
        name: "description",
        content:
          "Visual lookbook and image archive of TOMSTILL men's apparel. Manufactured and wholesaled from Tiruppur, India.",
      },
      { property: "og:title", content: "Collections — TOMSTILL" },
      {
        property: "og:description",
        content: "Visual lookbook and image archive of TOMSTILL men's apparel.",
      },
    ],
  }),
  component: CollectionsPage,
});

import { catalogProducts, heroEditorial } from "@/lib/catalog";

function CollectionsPage() {
  const { q } = Route.useSearch();
  const query = (q ?? "").trim().toLowerCase().slice(0, 100);
  const terms = query.split(/\s+/).filter(Boolean);

  const images = terms.length
    ? catalogProducts.filter((p) => {
        const haystack = [p.title, p.sku, p.desc, p.badge ?? ""]
          .join(" ")
          .toLowerCase();
        return terms.every((t) => haystack.includes(t));
      })
    : catalogProducts;

  // Collage item layout variants to create an engaging visual rhythm
  const getAspectClass = (index: number) => {
    const pattern = index % 7;
    switch (pattern) {
      case 0:
        return "aspect-[3/4] md:col-span-2 md:row-span-2"; // Featured large portrait
      case 1:
        return "aspect-[4/5]";
      case 2:
        return "aspect-square";
      case 3:
        return "aspect-[16/10] md:col-span-2"; // Wide banner
      case 4:
        return "aspect-[3/4]";
      case 5:
        return "aspect-[4/5]";
      case 6:
        return "aspect-square";
      default:
        return "aspect-[3/4]";
    }
  };

  return (
    <main className="flex-grow w-full bg-background min-h-screen">
      {/* Header */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-10 sm:py-14 border-b border-outline bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.3em] text-on-surface-variant block mb-2">
              Visual Archive
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[0.9] uppercase">
              The Collection
            </h1>
          </div>
          <p className="font-display text-xs sm:text-sm uppercase tracking-widest text-on-surface-variant max-w-xs">
            {images.length} Imagery Entries • Tiruppur Manufacturing
          </p>
        </div>
      </section>

      {/* Product Image Collage Grid */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="max-w-[1800px] mx-auto">
          {images.length === 0 ? (
            <p className="font-body text-on-surface-variant py-12 text-center">
              No images match that search. Try a different search term.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px]">
              {/* Hero editorial image insertion for extra collage depth if not filtering */}
              {terms.length === 0 && (
                <div className="relative overflow-hidden bg-surface-variant border-2 border-primary md:col-span-2 md:row-span-2 group">
                  <img
                    src={heroEditorial}
                    alt="TOMSTILL Editorial"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground font-display text-[10px] uppercase tracking-widest px-2 py-1">
                    EDITORIAL
                  </div>
                </div>
              )}

              {images.map((prod, index) => {
                const aspectClass = getAspectClass(index);
                return (
                  <div
                    key={prod.sku}
                    className={`relative overflow-hidden bg-surface-variant brutalist-border group ${aspectClass}`}
                  >
                    <img
                      src={prod.img}
                      alt="TOMSTILL Apparel"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Minimal Footer CTA */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-surface border-t border-outline">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary uppercase leading-tight mb-4">
            Wholesale & Manufacturing Inquiries
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed">
            Supplying distributors and wholesalers across India, the Middle East, and Europe.
          </p>
          <Link
            to="/inquiry"
            className="inline-block bg-primary text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
