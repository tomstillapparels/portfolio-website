import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brand-story")({
  head: () => ({
    meta: [
      { title: "Brand Story — TOMSTILL" },
      {
        name: "description",
        content:
          "Engineered for the global street. TOMSTILL sources, manufactures, and distributes wholesale apparel with uncompromising precision.",
      },
      { property: "og:title", content: "Brand Story — TOMSTILL" },
      {
        property: "og:description",
        content: "Engineered for the global street. Industrial-grade wholesale apparel.",
      },
    ],
  }),
  component: BrandStoryPage,
});

import factoryImg from "@/assets/factory.jpg";
import { Factory, PackageCheck, Truck, Globe2, Infinity as InfinityIcon } from "lucide-react";

function BrandStoryPage() {
  return (
    <main className="flex-grow w-full">
      <section className="w-full px-4 md:px-8 py-24 md:py-32 brutalist-border-bottom">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-5xl text-primary mb-6 uppercase">
              Engineered for the Global Street.
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-8">
              TOMSTILL operates at the intersection of raw industrial capability and high-street
              aesthetic. We source, manufacture, and distribute wholesale apparel with
              uncompromising precision.
            </p>
          </div>
          <div className="lg:col-span-5 aspect-square brutalist-border p-2 bg-surface-container-highest relative overflow-hidden group">
            <img
              src={factoryImg}
              alt="TOMSTILL factory floor"
              width={1200}
              height={800}
              loading="lazy"
              className="object-cover w-full h-full filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
            />
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground font-display px-2 py-1 uppercase text-xs">
              Fac. 01 / BKK
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-8 py-20 bg-surface-container-low brutalist-border-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <span className="font-display text-sm text-outline uppercase tracking-widest mr-4">
              01
            </span>
            <h2 className="font-display text-2xl text-primary uppercase">Our Heritage</h2>
            <div className="h-px bg-outline flex-grow ml-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="brutalist-border bg-surface-container-lowest p-6 flex flex-col h-full hover:-translate-y-1 transition-transform">
              <Factory className="text-primary mb-4 h-9 w-9" />
              <h3 className="font-display text-xl mb-2">Industrial Roots</h3>
              <p className="font-body text-sm text-on-surface-variant mt-auto">
                Born from the heavy textile districts, our foundation is built on scale, durability,
                and volume production.
              </p>
            </div>
            <div className="brutalist-border bg-surface-container-lowest p-6 flex flex-col h-full hover:-translate-y-1 transition-transform">
              <PackageCheck className="text-primary mb-4 h-9 w-9" />
              <h3 className="font-display text-xl mb-2">Archive Quality</h3>
              <p className="font-body text-sm text-on-surface-variant mt-auto">
                We treat standard blanks with archival reverence, ensuring consistent fits, heavy
                weights, and pristine finishes.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 brutalist-border relative min-h-[300px] bg-surface-container-high">
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent">
                <h3 className="font-display text-2xl text-primary-foreground">
                  Material Integrity
                </h3>
                <p className="font-body text-sm text-primary-foreground/80 mt-2">
                  Every bolt of fabric graded for weight, hand-feel, and structural memory before it
                  enters production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-8 py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6 uppercase">Global Logistics</h2>
          <p className="font-body text-lg text-on-primary-container max-w-2xl mx-auto mb-12">
            From factory floor to your distribution center. We command a streamlined supply chain
            designed for high-volume, rapid deployment across continents.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <Globe2 className="h-12 w-12 mb-2 text-secondary-container" />
              <span className="font-display uppercase tracking-widest text-on-primary-container">
                40+ Countries
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 mb-2 text-secondary-container" />
              <span className="font-display uppercase tracking-widest text-on-primary-container">
                Freight Tier
              </span>
            </div>
            <div className="flex flex-col items-center">
              <InfinityIcon className="h-12 w-12 mb-2 text-secondary-container" />
              <span className="font-display uppercase tracking-widest text-on-primary-container">
                Continuous Cycle
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
