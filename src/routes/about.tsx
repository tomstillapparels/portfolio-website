import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shirt,
  Factory,
  Warehouse,
  Globe2,
  MapPin,
  ArrowDown,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TOMSTILL" },
      {
        name: "description",
        content:
          "Founded in 2008 in Tiruppur, TOMSTILL manufactures and wholesales men's apparel for distributors across India, the Middle East, and Europe.",
      },
      { property: "og:title", content: "About — TOMSTILL" },
      {
        property: "og:description",
        content:
          "Founded in 2008 in Tiruppur, TOMSTILL manufactures and wholesales men's apparel for distributors across India, the Middle East, and Europe.",
      },
    ],
  }),
  component: AboutPage,
});

/* ─── Image Placeholder ─── */
function ImagePlaceholder({
  label,
  className = "",
  aspectClass = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  aspectClass?: string;
}) {
  return (
    <div
      className={`bg-surface-dim border-2 border-dashed border-outline flex items-center justify-center ${aspectClass} ${className}`}
    >
      <span className="font-display text-xs sm:text-sm uppercase tracking-widest text-on-surface-variant text-center px-4 leading-relaxed">
        {label}
      </span>
    </div>
  );
}

/* ─── Section wrapper with scroll reveal ─── */
function RevealSection({
  children,
  className = "",
  threshold,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const { ref, isVisible } = useScrollReveal(threshold);
  return (
    <div
      ref={ref}
      className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════════ */
function AboutPage() {
  return (
    <main className="flex-grow w-full overflow-x-hidden">
      <HeroSection />
      <BeginningSection />
      <JourneySection />
      <WhatWeDoSection />
      <BuiltToScaleSection />
      <ManufacturingSection />
      <PhilosophySection />
      <ReachSection />
      <FoundersSection />
      <ClosingSection />
    </main>
  );
}

/* ─── SECTION 01: HERO ─── */
function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="w-full min-h-[85vh] md:min-h-[90vh] flex flex-col lg:flex-row border-b border-outline">
      <div
        ref={ref}
        className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-surface order-2 lg:order-1"
      >
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant mb-4 md:mb-6">
            Est. 2008 — Tiruppur, India
          </p>
        </div>
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.25s" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary leading-[0.9] uppercase mb-6 md:mb-8">
            From Tiruppur.
            <br />
            Built Around
            <br />
            Men's Fashion.
          </h1>
        </div>
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.45s" }}
        >
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-lg mb-8 md:mb-10 leading-relaxed">
            Founded in 2008, TOMSTILL began with a simple ambition: to introduce
            new fashion styles into men's clothing. Today, we manufacture and
            wholesale men's apparel for distributors and wholesalers across India
            and international markets.
          </p>
        </div>
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/categories"
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
            >
              Explore Collection
            </Link>
            <Link
              to="/inquiry"
              className="bg-transparent text-primary px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-0 bg-surface-container-highest order-1 lg:order-2">
        <ImagePlaceholder
          label="[CLIENT PHOTO: TOMSTILL Editorial / Factory / Fashion]"
          className="absolute inset-0 border-0"
          aspectClass=""
        />
      </div>
    </section>
  );
}

/* ─── SECTION 02: THE BEGINNING ─── */
function BeginningSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-32 bg-background border-b border-outline overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto relative">
        {/* Large background year */}
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} pointer-events-none select-none`}
          style={{ transitionDelay: "0s" }}
        >
          <span className="font-display text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none text-primary/[0.06] uppercase absolute -top-6 sm:-top-8 md:-top-12 -left-2 sm:-left-4">
            2008
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-16 sm:pt-20 md:pt-24 lg:pt-0">
          <div className="lg:col-span-7">
            <div
              className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3 sm:mb-4">
                Section 02
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight mb-4 sm:mb-6">
                The Journey Begins
                <br />
                in Tiruppur.
              </h2>
            </div>
            <div
              className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                TOMSTILL APPARELS PVT LTD began its journey in Tiruppur in 2008,
                founded by Aboobacker Cheriyath and Ashraf KM with a vision to
                introduce new fashion styles into clothing.
              </p>
            </div>
          </div>
          <div
            className={`lg:col-span-5 scroll-hidden-right ${isVisible ? "scroll-visible-right" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <ImagePlaceholder
              label="[CLIENT PHOTO: Early TOMSTILL / Founders / Original Workspace]"
              aspectClass="aspect-[4/5]"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 03: OUR JOURNEY (Timeline) ─── */
function JourneySection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const milestones = [
    {
      year: "2008",
      title: "Founded in Tiruppur",
      desc: "Started manufacturing and wholesale in men's clothing.",
    },
    {
      year: "2012",
      title: "Expanding the Focus",
      desc: "Expanded its focus into men's apparels.",
    },
    {
      year: "TODAY",
      title: "Operating at Scale",
      desc: "TOMSTILL operates across Tiruppur and Bangalore, serving distributors and wholesalers across India and exporting to markets in the Middle East and Europe.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-32 bg-surface-variant border-b border-outline">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} text-center mb-12 sm:mb-16 md:mb-20`}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3 sm:mb-4">
            Section 03
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight">
            Our Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-outline"
            style={{
              transform: isVisible ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "top",
              transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          />

          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`relative pl-16 sm:pl-20 pb-12 sm:pb-16 last:pb-0 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: `${0.4 + i * 0.2}s` }}
            >
              {/* Dot marker */}
              <div
                className="absolute left-[18px] sm:left-[26px] top-1 w-3 h-3 sm:w-4 sm:h-4 border-2 border-primary bg-background"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.4s ease ${0.5 + i * 0.2}s`,
                }}
              />
              <span className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-none block mb-2 sm:mb-3">
                {m.year}
              </span>
              <h3 className="font-display text-lg sm:text-xl text-primary uppercase mb-2">
                {m.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-md">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 04: WHAT WE DO ─── */
function WhatWeDoSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const capabilities = [
    {
      num: "01",
      title: "Men's Apparel",
      desc: "Manufacturing and wholesale of men's clothing.",
      icon: Shirt,
    },
    {
      num: "02",
      title: "Manufacturing",
      desc: "Multiple manufacturing units supporting production at scale.",
      icon: Factory,
    },
    {
      num: "03",
      title: "Wholesale",
      desc: "Serving distributors and wholesalers across India.",
      icon: Warehouse,
    },
    {
      num: "04",
      title: "Export",
      desc: "Supplying international markets across the Middle East and Europe.",
      icon: Globe2,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-32 bg-background border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} mb-10 sm:mb-12 md:mb-16`}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3 sm:mb-4">
            Section 04
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight">
            More Than
            <br />
            a Wholesaler.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                className={`brutalist-border bg-surface-container-lowest p-5 sm:p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl text-primary/10 leading-none">
                    {cap.num}
                  </span>
                  <Icon className="text-primary h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 flex-shrink-0" />
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl text-primary uppercase mb-2 sm:mb-3">
                  {cap.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-on-surface-variant mt-auto leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 05: BUILT TO SCALE ─── */
function BuiltToScaleSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const workers = useCountUp(100, 2000, isVisible);
  const units = useCountUp(5, 1500, isVisible);
  const locations = useCountUp(2, 1200, isVisible);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} mb-10 sm:mb-12 md:mb-16`}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-primary-container block mb-3 sm:mb-4">
            Section 05
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground uppercase leading-tight">
            Built to Make.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-none block">
              {workers}+
            </span>
            <span className="font-display text-xs sm:text-sm uppercase tracking-widest text-on-primary-container block mt-2 sm:mt-3">
              Workers
            </span>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-none block">
              4–{units}
            </span>
            <span className="font-display text-xs sm:text-sm uppercase tracking-widest text-on-primary-container block mt-2 sm:mt-3">
              Manufacturing Units
            </span>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-none block">
              {locations}
            </span>
            <span className="font-display text-xs sm:text-sm uppercase tracking-widest text-on-primary-container block mt-2 sm:mt-3">
              Key Locations
            </span>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.65s" }}
          >
            <div className="flex flex-col gap-1">
              <span className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground leading-tight uppercase">
                Tiruppur
              </span>
              <span className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground leading-tight uppercase">
                Bangalore
              </span>
            </div>
            <span className="font-display text-xs sm:text-sm uppercase tracking-widest text-on-primary-container block mt-2 sm:mt-3">
              Operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 06: MANUFACTURING STORY ─── */
function ManufacturingSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-32 bg-background border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} mb-10 sm:mb-12 md:mb-16`}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3 sm:mb-4">
            Section 06
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase leading-[0.9]">
            From Idea
            <br />
            to Apparel.
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl mt-4 sm:mt-6 leading-relaxed">
            From manufacturing to wholesale, TOMSTILL brings together production
            and fashion with a focus on new trends and designs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <ImagePlaceholder
              label="[CLIENT PHOTO: Cutting Floor]"
              aspectClass="aspect-[3/4]"
              className="w-full"
            />
            <span className="font-display text-xs uppercase tracking-widest text-on-surface-variant mt-3 block">
              01 — Cutting
            </span>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <ImagePlaceholder
              label="[CLIENT PHOTO: Sewing / Production Line]"
              aspectClass="aspect-[3/4]"
              className="w-full"
            />
            <span className="font-display text-xs uppercase tracking-widest text-on-surface-variant mt-3 block">
              02 — Sewing
            </span>
          </div>
          <div
            className={`sm:col-span-2 lg:col-span-1 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <ImagePlaceholder
              label="[CLIENT PHOTO: Finished Garments / Warehouse]"
              aspectClass="aspect-[3/4]"
              className="w-full"
            />
            <span className="font-display text-xs uppercase tracking-widest text-on-surface-variant mt-3 block">
              03 — Finished Garments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 07: PHILOSOPHY ─── */
function PhilosophySection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-36 lg:py-44 bg-surface-variant border-b border-outline relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1d1c15 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-6 sm:mb-8">
            Section 07 — Philosophy
          </span>
        </div>
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.25s" }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary uppercase leading-[0.85] mb-8 sm:mb-10 md:mb-12">
            New Trends.
            <br />
            New Designs.
            <br />
            New Fashion.
          </h2>
        </div>
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.45s" }}
        >
          <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            TOMSTILL was built around the idea of bringing new fashion styles
            into men's clothing. Our focus continues to be on evolving designs
            and creating apparel that moves with changing markets and tastes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 08: OUR REACH ─── */
function ReachSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const stops = [
    { name: "TIRUPPUR", sub: "Manufacturing Base" },
    { name: "BANGALORE", sub: "Operations" },
    { name: "INDIA", sub: "National Distribution" },
    { name: "MIDDLE EAST", sub: "International Export" },
    { name: "EUROPE", sub: "International Export" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-32 bg-background border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: headline + text */}
          <div>
            <div
              className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            >
              <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3 sm:mb-4">
                Section 08
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase leading-[0.9] mb-4 sm:mb-6">
                From Tiruppur
                <br />
                to the World.
              </h2>
            </div>
            <div
              className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-lg leading-relaxed">
                With operations in Tiruppur and Bangalore, TOMSTILL serves
                distributors and wholesalers across India while exporting men's
                apparel to markets across the Middle East and Europe.
              </p>
            </div>
          </div>

          {/* Right: geographic flow */}
          <div className="relative pl-6 sm:pl-8">
            {/* Vertical connecting line */}
            <div
              className="absolute left-0 sm:left-1 top-2 bottom-2 w-px bg-outline"
              style={{
                transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                transition:
                  "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            />
            {stops.map((stop, i) => (
              <div
                key={stop.name}
                className={`relative pb-6 sm:pb-8 last:pb-0 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${0.3 + i * 0.12}s` }}
              >
                {/* Dot */}
                <div className="absolute -left-[9px] sm:-left-[7px] top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-primary bg-background" />
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-display text-lg sm:text-xl md:text-2xl text-primary uppercase block leading-tight">
                      {stop.name}
                    </span>
                    <span className="font-display text-xs uppercase tracking-widest text-on-surface-variant">
                      {stop.sub}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 09: FOUNDERS ─── */
function FoundersSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-32 bg-surface-variant border-b border-outline">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} mb-10 sm:mb-12 md:mb-16`}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3 sm:mb-4">
            Section 09
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight">
            The People Behind
            <br />
            TOMSTILL
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <ImagePlaceholder
              label="[FOUNDER PHOTO: Aboobacker Cheriyath]"
              aspectClass="aspect-[3/4]"
              className="w-full mb-4 sm:mb-6"
            />
            <h3 className="font-display text-xl sm:text-2xl text-primary uppercase">
              Aboobacker Cheriyath
            </h3>
            <span className="font-display text-xs uppercase tracking-widest text-on-surface-variant">
              Co-Founder
            </span>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <ImagePlaceholder
              label="[FOUNDER PHOTO: Ashraf KM]"
              aspectClass="aspect-[3/4]"
              className="w-full mb-4 sm:mb-6"
            />
            <h3 className="font-display text-xl sm:text-2xl text-primary uppercase">
              Ashraf KM
            </h3>
            <span className="font-display text-xs uppercase tracking-widest text-on-surface-variant">
              Co-Founder
            </span>
          </div>
        </div>

        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.45s" }}
        >
          <div className="border-t border-outline pt-6 sm:pt-8">
            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Founded with a vision to introduce new fashion styles into
              clothing, TOMSTILL began its journey through men's apparel
              manufacturing and wholesale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 10: CLOSING STATEMENT ─── */
function ClosingSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-36 lg:py-44 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary uppercase leading-[0.9] mb-6 sm:mb-8 md:mb-10">
            Building the
            <br />
            Next Generation
            <br />
            of Men's Fashion.
          </h2>
        </div>
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant mb-8 sm:mb-10 md:mb-12">
            From Tiruppur to markets across India and beyond.
          </p>
        </div>
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/categories"
              className="bg-primary text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
            >
              Explore Collection
            </Link>
            <Link
              to="/inquiry"
              className="bg-transparent text-primary px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-primary font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
