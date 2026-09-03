import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shirt,
  Factory,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
  Compass,
  MapPin,
  Phone,
  Layers,
  Award,
  Scissors,
  CheckCircle2,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — TOM STILL" },
      {
        name: "description",
        content:
          "Tom Still is a statement of timeless style, confidence, and individuality. Premium men's apparel, formal shirts, and tailored essentials.",
      },
      { property: "og:title", content: "About Us — TOM STILL" },
      {
        property: "og:description",
        content:
          "Tom Still is a statement of timeless style, confidence, and individuality. Premium men's fashion crafted with precision.",
      },
    ],
  }),
  component: AboutPage,
});

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE — EDITORIAL BRAND PORTFOLIO
   ═══════════════════════════════════════════════════════════ */
function AboutPage() {
  return (
    <main className="flex-grow w-full overflow-x-hidden bg-background">
      <HeroSection />
      <VisionMissionSection />
      <WhatWeDoSection />
      <ProductCategoriesSection />
      <GrowthAndPurposeSection />
      <LeadershipSection />
      <QualityAndInnovationSection />
      <TeamCultureSection />
      <HeadquartersSection />
    </main>
  );
}

/* ─── 01. HERO SECTION ─── */
function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="w-full border-b border-outline bg-surface">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 flex flex-col lg:flex-row gap-12 items-center"
      >
        <div className="w-full lg:w-7/12">
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-4">
              Brand Profile
            </span>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary leading-[0.88] uppercase mb-6 sm:mb-8">
              Confidence is
              <br />
              the Best
              <br />
              Accessory.
            </h1>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.45s" }}
          >
            <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-xl mb-8 leading-relaxed">
              TOM STILL is more than just a men's fashion brand. It's a statement
              of timeless style, confidence, and individuality. Rooted in modern
              sophistication and inspired by classic elegance, we craft fashion
              that empowers men to dress with purpose and presence.
            </p>
          </div>
          <div
            className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <div className="flex flex-wrap gap-4">
              <Link
                to="/categories"
                className="bg-primary text-primary-foreground px-8 py-4 font-display text-xs sm:text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Right graphic manifesto banner */}
        <div
          className={`w-full lg:w-5/12 scroll-hidden-right ${isVisible ? "scroll-visible-right" : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="brutalist-border bg-surface-container-lowest p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[380px]">
            <div>
              <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary font-bold block mb-3">
                Brand Manifesto
              </span>
              <p className="font-display text-xl sm:text-2xl text-primary uppercase leading-snug mb-6">
                “Elevate your everyday style with our premium shirts where comfort meets class. Crafted with precision, designed for confidence. Wear the difference.”
              </p>
            </div>
            <div className="border-t-2 border-primary pt-4 flex justify-between items-center">
              <span className="font-display text-xs uppercase tracking-widest text-on-surface-variant">
                TOM STILL
              </span>
              <span className="font-display text-xs uppercase tracking-widest text-primary font-bold">
                Timeless Precision
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 02. VISION & MISSION SECTION ─── */
function VisionMissionSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-background border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div
            className={`brutalist-border bg-surface-container-lowest p-6 sm:p-8 md:p-10 flex flex-col justify-between scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-primary" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary font-bold">
                  Our Direction
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-primary uppercase leading-tight mb-6">
                Our Vision
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-4">
                Our vision is to establish TOM STILL as a leading global brand in the formal fashion industry, one that represents trust, quality, and sophisticated design.
              </p>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                We envision a future where TOM STILL becomes synonymous with professional excellence, inspiring a movement where dressing well is about confidence, character, and the pursuit of success.
              </p>
            </div>
            <div className="border-t border-outline pt-4 mt-6">
              <span className="font-display text-xs uppercase tracking-widest text-primary font-bold">
                Global Ambition • Responsible Growth
              </span>
            </div>
          </div>

          {/* Mission */}
          <div
            className={`brutalist-border bg-surface-container-lowest p-6 sm:p-8 md:p-10 flex flex-col justify-between scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary font-bold">
                  Our Commitment
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-primary uppercase leading-tight mb-6">
                Our Mission
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-4">
                At TOM STILL, our mission is to craft premium-quality formal shirts that blend timeless elegance with modern precision. We aim to empower professionals by offering attire that reflects their ambition, confidence, and refined taste.
              </p>
              <p className="font-display text-lg text-primary uppercase leading-snug font-bold">
                “TOM STILL shirts are made to help you stand tall.”
              </p>
            </div>
            <div className="border-t border-outline pt-4 mt-6">
              <span className="font-display text-xs uppercase tracking-widest text-primary font-bold">
                Crafted to Lead • Designed to Empower
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 03. WHAT WE DO SECTION ─── */
function WhatWeDoSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-surface-variant border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} max-w-3xl mb-12 sm:mb-16`}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3">
            Core Operations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight mb-6">
            What We Do?
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            At TOM STILL, we bring fashion to life by crafting styles that empower individuality and express confidence. Specializing in trend-forward designs and timeless classics, we blend creativity, quality, and comfort to redefine everyday fashion.
          </p>
          <p className="font-display text-xl text-primary uppercase leading-snug mt-4 font-bold">
            “We don't just follow trends. We set them.”
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── 04. PRODUCT CATEGORIES SECTION ─── */
function ProductCategoriesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const categories = [
    { name: "Formal Shirts", desc: "Timeless elegance & modern precision" },
    { name: "Printed Shirts", desc: "Statement patterns & contemporary style" },
    { name: "Half Sleeve Shirts", desc: "Casual sophistication for warm weather" },
    { name: "Types of T-Shirts", desc: "Premium knits & casual essentials" },
    { name: "Jeans", desc: "Durable denim tailored for comfort" },
    { name: "Tracksuits", desc: "Athleisure with modern fit" },
    { name: "Tailored Trousers", desc: "Precision stitching & boardroom comfort" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-background border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3">
            Portfolio Ranges
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight">
            Product Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <div
              key={cat.name}
              className={`brutalist-border bg-surface-container-lowest p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-display text-2xl text-primary/20 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Shirt className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-primary uppercase mb-2">
                  {cat.name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 05. GROWTH & PURPOSE SECTION ─── */
function GrowthAndPurposeSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-surface border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Growth */}
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3">
            Milestones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-primary uppercase leading-tight mb-6">
            Growth With Purpose
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed mb-4">
            At TOM STILL, growth isn't just measured in numbers. It's woven into every fabric we create, every milestone we achieve, and every customer we inspire.
          </p>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            What started as a small idea has evolved into a brand that reflects style, individuality, and purpose. We've grown our collections and expanded our reach, building a loyal community that believes in quality, authenticity, and innovation.
          </p>
        </div>

        {/* Fashion with Purpose */}
        <div
          className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.35s" }}
        >
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3">
            Core Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-primary uppercase leading-tight mb-6">
            Fashion With Purpose
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed mb-4">
            We see fashion as a language of self-expression, confidence, and identity. Our commitment goes beyond aesthetics. We source responsibly, produce ethically, and design consciously.
          </p>
          <div className="brutalist-border bg-surface-container-high p-5 mt-6">
            <h4 className="font-display text-sm uppercase text-primary mb-2 font-bold">
              Core Pillars
            </h4>
            <div className="grid grid-cols-3 gap-2 font-display text-xs uppercase tracking-widest text-primary font-bold">
              <div>• Comfort</div>
              <div>• Confidence</div>
              <div>• Character</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 06. LEADERSHIP SECTION ─── */
function LeadershipSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  const founders = [
    {
      name: "ABOOBACKER CHERIYATH",
      title: "FOUNDER OF TOM STILL",
      desc: "Co-founding leader driving TOM STILL's vision, brand values, and strategic growth in the modern apparel industry.",
    },
    {
      name: "ASHRAF KM",
      title: "FOUNDER OF TOM STILL",
      desc: "Co-founding leader guiding product innovation, market expansion, and commitment to quality craftsmanship.",
    },
  ];

  const directors = [
    {
      name: "FAZAL CH",
      title: "DIRECTOR OF TOM STILL",
      desc: "Leading operational excellence, strategic partnerships, and brand experience across all touchpoints.",
    },
    {
      name: "NOUSHAD KM",
      title: "DIRECTOR OF TOM STILL",
      desc: "Directing commercial strategy, supply chain management, and retail distribution networks.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-background border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3">
            Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight">
            Meet Our Leadership
          </h2>
        </div>

        {/* Founders */}
        <div className="mb-12">
          <h3 className="font-display text-lg sm:text-xl uppercase tracking-[0.2em] text-secondary font-bold mb-6 border-b border-outline pb-3">
            Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((person, index) => (
              <div
                key={person.name}
                className={`brutalist-border bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${0.15 + index * 0.15}s` }}
              >
                <div>
                  <span className="font-display text-xs uppercase tracking-widest text-secondary font-bold block mb-2">
                    {person.title}
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl text-primary uppercase mb-4">
                    {person.name}
                  </h4>
                  <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {person.desc}
                  </p>
                </div>
                <div className="border-t border-outline pt-4 mt-6">
                  <span className="font-display text-xs uppercase tracking-widest text-primary font-bold">
                    Executive Leadership • Strategic Vision
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Directors */}
        <div>
          <h3 className="font-display text-lg sm:text-xl uppercase tracking-[0.2em] text-secondary font-bold mb-6 border-b border-outline pb-3">
            Directors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((person, index) => (
              <div
                key={person.name}
                className={`brutalist-border bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${0.35 + index * 0.15}s` }}
              >
                <div>
                  <span className="font-display text-xs uppercase tracking-widest text-secondary font-bold block mb-2">
                    {person.title}
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl text-primary uppercase mb-4">
                    {person.name}
                  </h4>
                  <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {person.desc}
                  </p>
                </div>
                <div className="border-t border-outline pt-4 mt-6">
                  <span className="font-display text-xs uppercase tracking-widest text-primary font-bold">
                    Director • Retail & Operational Leadership
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 07. QUALITY & INNOVATION SECTION ─── */
function QualityAndInnovationSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  const qualityStandards = [
    { title: "Color Fastness", desc: "Tested for long-lasting vibrancy" },
    { title: "Fabric Strength", desc: "High tensile durability for daily wear" },
    { title: "Sizing Accuracy", desc: "Precision tailored fits across styles" },
    { title: "Meticulous Finishing", desc: "Multiple inspections from raw thread to packaging" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-primary text-primary-foreground border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-primary-container block mb-3">
            Standards & Compliance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground uppercase leading-tight">
            Quality & Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityStandards.map((item, index) => (
            <div
              key={item.title}
              className={`p-6 border border-primary-foreground/20 bg-primary-container/10 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <CheckCircle2 className="h-6 w-6 text-on-primary-container mb-4" />
              <h3 className="font-display text-xl uppercase mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-on-primary-container opacity-80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl uppercase mb-3">
              Ethical Sourcing & Compliance
            </h3>
            <p className="font-body text-sm sm:text-base opacity-80 leading-relaxed">
              We follow ethical sourcing practices and collaborate only with trusted manufacturers who share our dedication to craftsmanship, compliance, and sustainability.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl uppercase mb-3">
              Future-Ready Design
            </h3>
            <p className="font-body text-sm sm:text-base opacity-80 leading-relaxed">
              We constantly push boundaries to merge creativity with technology — integrating sustainable materials and digital design tools so every collection reflects originality and modern relevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 08. TEAM & CULTURE SECTION ─── */
function TeamCultureSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-surface border-b border-outline">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-on-surface-variant block mb-3">
            Work Culture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase leading-tight mb-6">
            One Vision, Many Hands
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            At TOM STILL, we believe that great things are never done alone. They're built together. We are a family of creators, dreamers, and doers — standing side by side, sharing ideas, and inspiring each other daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="brutalist-border bg-surface-container-lowest p-6">
            <Users className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg uppercase text-primary mb-2">
              Passionate Collaboration
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Designers, fabric experts, tailors, and marketing minds working in unity.
            </p>
          </div>
          <div className="brutalist-border bg-surface-container-lowest p-6">
            <Award className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg uppercase text-primary mb-2">
              Shared Excellence
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Supporting personal growth and celebrating every achievement as one team.
            </p>
          </div>
          <div className="brutalist-border bg-surface-container-lowest p-6">
            <Sparkles className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg uppercase text-primary mb-2">
              Support That Inspires
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Ethical craftsmanship, compliance, and mutual respect in every process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 09. HEADQUARTERS & CONTACT ─── */
function HeadquartersSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-28 bg-background">
      <div ref={ref} className="max-w-5xl mx-auto brutalist-border bg-surface-container-lowest p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary font-bold block mb-3">
              Corporate Headquarters
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-primary uppercase leading-tight mb-4">
              TOM STILL
            </h2>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                First Floor, RAK Tower, beside Mother Opticals, opposite Lulu Mall Walkway,
                Edappally, Kochi, Ernakulam, Kerala 682024.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span className="font-display text-lg font-bold text-primary">
                +91 98478 86555
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center">
            <Link
              to="/categories"
              className="brutalist-button w-full text-center py-4 font-display uppercase text-sm bg-primary text-primary-foreground tracking-widest block"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
