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
          "Explore the TOMSTILL men's apparel collection. Premium streetwear, structured cuts, and earth-toned palettes — manufactured and wholesaled from Tiruppur, India.",
      },
      { property: "og:title", content: "Collections — TOMSTILL" },
      {
        property: "og:description",
        content:
          "Explore the TOMSTILL men's apparel collection — premium manufacturing and wholesale from India.",
      },
    ],
  }),
  component: CollectionsPage,
});

import { catalogProducts, newArrivals } from "@/lib/catalog";

function CollectionsPage() {
  const { q } = Route.useSearch();
  const query = (q ?? "").trim().toLowerCase().slice(0, 100);
  const terms = query.split(/\s+/).filter(Boolean);
  const filtered = terms.length
    ? catalogProducts.filter((p) => {
        const haystack = [p.title, p.sku, p.desc, p.badge ?? ""]
          .join(" ")
          .toLowerCase();
        return terms.every((t) => haystack.includes(t));
      })
    : catalogProducts;

  // Featured product — first new arrival
  const featured = newArrivals[0];
  // Editorial products — next 4 after featured (or fewer if not available)
  const editorialProducts = catalogProducts
    .filter((p) => p.sku !== featured.sku)
    .slice(0, 4);
  // Grid products — everything else
  const gridProducts = catalogProducts.filter(
    (p) =>
      p.sku !== featured.sku && !editorialProducts.some((e) => e.sku === p.sku),
  );

  // If searching, show filtered results in a simple grid
  const isSearching = terms.length > 0;

  return (
    <main className="flex-grow w-full">
      {/* Collection Hero */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-surface border-b border-outline">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[0.9] uppercase mb-4 sm:mb-6">
            The Collection
          </h1>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Men's apparel designed around new trends, new cuts, and new styles.
            Manufactured and wholesaled from Tiruppur, India.
          </p>
          {isSearching && (
            <div className="mt-4 sm:mt-6 pt-4 border-t border-outline">
              <p className="font-display text-sm uppercase tracking-widest text-on-surface-variant">
                {filtered.length} result{filtered.length === 1 ? "" : "s"} for "
                {query}"
              </p>
            </div>
          )}
        </div>
      </section>

      {isSearching ? (
        /* Search results — clean visual grid */
        <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-background">
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <p className="font-body text-on-surface-variant pb-12">
                No items match that search. Try a different style or fabric.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {filtered.map((prod) => (
                  <article key={prod.sku} className="group">
                    <div className="aspect-[4/5] relative overflow-hidden bg-surface-variant border border-outline">
                      <img
                        src={prod.img}
                        alt={prod.title}
                        width={640}
                        height={800}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-sm sm:text-base text-primary uppercase mt-2 sm:mt-3 leading-tight">
                      {prod.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                      {prod.desc}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* Featured Product — Editorial Highlight */}
          <section className="w-full border-b border-outline">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[60%] relative bg-surface-container-highest">
                <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[600px] xl:min-h-[700px] relative overflow-hidden">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[40%] p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center bg-surface border-t lg:border-t-0 lg:border-l border-outline">
                <span className="font-display text-xs uppercase tracking-[0.3em] text-on-surface-variant mb-3 sm:mb-4 block">
                  Featured
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary uppercase leading-tight mb-3 sm:mb-4">
                  {featured.title}
                </h2>
                <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed mb-6 sm:mb-8">
                  {featured.desc}
                </p>
                <div className="h-px bg-outline" />
              </div>
            </div>
          </section>

          {/* Editorial Product Layouts — Alternating */}
          {editorialProducts.map((prod, i) => {
            const isReversed = i % 2 === 1;
            return (
              <section
                key={prod.sku}
                className="w-full border-b border-outline"
              >
                <div
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                >
                  <div className="w-full lg:w-[55%] relative bg-surface-container-highest">
                    <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[450px] xl:min-h-[550px] relative overflow-hidden group">
                      <img
                        src={prod.img}
                        alt={prod.title}
                        width={800}
                        height={1000}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div
                    className={`w-full lg:w-[45%] p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center bg-surface border-t lg:border-t-0 ${isReversed ? "lg:border-r" : "lg:border-l"} border-outline`}
                  >
                    <span className="font-display text-xs uppercase tracking-[0.3em] text-on-surface-variant/60 mb-2 sm:mb-3 block">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-primary uppercase leading-tight mb-3 sm:mb-4">
                      {prod.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Material Story Callout */}
          <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-surface-variant border-b border-outline relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#1d1c15 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight mb-4 sm:mb-6">
                Every Piece, Manufactured.
              </h2>
              <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                From heavy knits and velour to structured linen and embroidered
                poplin — each garment is produced across our manufacturing units
                in Tiruppur.
              </p>
            </div>
          </section>

          {/* Full Collection Grid — Visual Only */}
          <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-background border-b border-outline">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-8 sm:mb-10 md:mb-12 border-b border-outline pb-4">
                <h2 className="font-display text-2xl sm:text-3xl text-primary uppercase tracking-tighter">
                  Full Collection
                </h2>
                <span className="font-display text-xs sm:text-sm uppercase tracking-widest text-on-surface-variant">
                  {catalogProducts.length} Styles
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {gridProducts.map((prod) => (
                  <article key={prod.sku} className="group">
                    <div className="aspect-[4/5] relative overflow-hidden bg-surface-variant border border-outline">
                      <img
                        src={prod.img}
                        alt={prod.title}
                        width={640}
                        height={800}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-xs sm:text-sm text-primary uppercase mt-2 sm:mt-3 leading-tight">
                      {prod.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed hidden sm:block">
                      {prod.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Soft Enquiry CTA */}
          <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-surface">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary uppercase leading-tight mb-3 sm:mb-4">
                Interested in Our Collection?
              </h2>
              <p className="font-body text-base sm:text-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
                We manufacture and wholesale men's apparel for distributors and
                wholesalers.
              </p>
              <Link
                to="/inquiry"
                className="inline-block bg-primary text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
