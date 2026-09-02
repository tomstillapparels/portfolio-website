import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/categories")({
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    const raw = search["q"];
    return typeof raw === "string" && raw.length > 0 ? { q: raw } : {};
  },
  head: () => ({
    meta: [
      { title: "Categories — TOMSTILL" },
      {
        name: "description",
        content:
          "Browse the TOMSTILL wholesale inventory. Premium tops, outerwear, and bottoms — industrial-grade apparel for high-volume retail.",
      },
      { property: "og:title", content: "Categories — TOMSTILL" },
      {
        property: "og:description",
        content: "Browse the TOMSTILL wholesale inventory — industrial-grade apparel.",
      },
    ],
  }),
  component: CategoriesPage,
});

import { catalogProducts } from "@/lib/catalog";

function CategoriesPage() {
  const { q } = Route.useSearch();
  const query = (q ?? "").trim().toLowerCase().slice(0, 100);
  const terms = query.split(/\s+/).filter(Boolean);
  const products = terms.length
    ? catalogProducts.filter((p) => {
        const haystack = [p.title, p.sku, p.desc, p.badge ?? ""].join(" ").toLowerCase();
        return terms.every((t) => haystack.includes(t));
      })
    : catalogProducts;

  return (
    <div className="flex flex-1 relative w-full max-w-[1920px] mx-auto min-h-screen">
      <main className="flex-1 px-4 md:px-8 bg-surface w-full min-h-screen">
        <div className="mb-6">
          <div className="border-b-2 border-primary pb-4">
            <h1 className="font-display text-3xl md:text-5xl text-primary uppercase tracking-tighter">
              Premium Streetwear Collection
            </h1>
            {query && (
              <p className="font-display text-sm uppercase tracking-widest text-on-surface-variant mt-3">
                {products.length} result{products.length === 1 ? "" : "s"} for "{query}"
              </p>
            )}
          </div>
        </div>
        {products.length === 0 && (
          <p className="font-body text-on-surface-variant pb-12">
            No inventory matches that search. Try a different style or fabric.
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-12">
          {products.map((prod) => (
            <article
              key={prod.sku}
              className="border-2 border-primary bg-background group relative flex flex-col h-full"
            >
              <div className="relative w-full aspect-[4/5] border-b-2 border-primary overflow-hidden bg-surface-variant">
                <img
                  src={prod.img}
                  alt={prod.title}
                  width={640}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-1 flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-display text-xl text-primary leading-tight">{prod.title}</h2>
                </div>
                <p className="font-body text-on-surface-variant text-sm">{prod.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
