import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOMSTILL — Premium Streetwear Wholesale From India" },
      {
        name: "description",
        content:
          "Premium ready-to-sell streetwear collections for wholesale. Source finished high-end designs, heavy knits, structured cutoffs, and trousers directly from India. Low MOQ, global dispatch, ready for retail.",
      },
      { property: "og:title", content: "TOMSTILL — Premium Streetwear Wholesale From India" },
      {
        property: "og:description",
        content:
          "Premium ready-to-sell streetwear collections for wholesale. Source finished high-end designs, heavy knits, structured cutoffs, and trousers directly from India. Low MOQ, global dispatch, ready for retail.",
      },
    ],
  }),
  component: ShowcasePage,
});

import { ArrowRight } from "lucide-react";
import { heroEditorial, newArrivals } from "@/lib/catalog";

function ShowcasePage() {
  return (
    <main className="flex-grow w-full">
      <section className="w-full flex flex-col lg:flex-row border-b border-outline h-auto lg:h-[716px] min-h-[500px]">
        <div className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col justify-center border-r-0 lg:border-r border-outline bg-surface">
          <h1 className="font-display text-5xl md:text-7xl text-primary leading-tight uppercase max-w-2xl mb-8">
            Industrial
            <br />
            Grade
            <br />
            Quality
          </h1>
          <p className="font-body text-lg text-on-surface-variant mb-12 max-w-md">
            Premium streetwear essentials sourced for high-volume retail. Uncompromising materials.
            Structured cuts. Earth-toned palettes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/categories"
              className="bg-primary text-primary-foreground px-8 py-4 font-display text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
            >
              View Catalog
            </Link>
            <Link
              to="/inquiry"
              className="bg-transparent text-primary px-8 py-4 border-2 border-primary font-display text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Enquiry
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[409px] h-full bg-surface-container-highest">
          <img
            src={heroEditorial}
            alt="TOMSTILL editorial industrial fashion"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </section>

      <section className="w-full px-4 md:px-8 py-24 bg-surface">
        <div className="flex justify-between items-end mb-12 border-b border-outline pb-4">
          <h2 className="font-display text-3xl text-primary uppercase tracking-tighter">
            New Arrivals
          </h2>
          <Link
            to="/categories"
            className="font-display text-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-2"
          >
            Full Inventory <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-outline">
          {newArrivals.map((prod) => (
            <div
              key={prod.sku}
              className="border-b border-r border-outline p-4 group hover:bg-surface-container-low transition-colors duration-300 flex flex-col"
            >
              <div className="aspect-square relative mb-4 overflow-hidden bg-surface-variant">
                <img
                  src={prod.img}
                  alt={prod.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {prod.badge && (
                  <div className="absolute top-2 right-2 bg-secondary text-primary-foreground px-2 py-1 font-display text-[10px] uppercase">
                    {prod.badge}
                  </div>
                )}
              </div>
              <div className="mt-auto border-t border-outline pt-4 flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-display text-xl text-primary leading-tight">{prod.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full relative py-32 border-y border-outline overflow-hidden bg-surface-variant">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1d1c15 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl text-primary uppercase leading-none mb-6">
            Bulk Logistics
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Streamlined international shipping. Factory-direct sourcing. We handle the complexity of
            large-scale garment fulfillment so you can focus on retail.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="text-center">
              <span className="block font-display text-3xl text-secondary">48h</span>
              <span className="block font-display text-xs uppercase tracking-widest text-outline">
                Dispatch
              </span>
            </div>
            <div className="text-center md:border-l md:border-r border-outline px-8">
              <span className="block font-display text-3xl text-secondary">MOQ 50</span>
              <span className="block font-display text-xs uppercase tracking-widest text-outline">
                Per Style
              </span>
            </div>
            <div className="text-center">
              <span className="block font-display text-3xl text-secondary">Global</span>
              <span className="block font-display text-xs uppercase tracking-widest text-outline">
                International Delivery
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
