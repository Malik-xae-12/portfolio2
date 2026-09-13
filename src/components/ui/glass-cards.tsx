import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData, type GlassCardItem } from '../../lib/utils';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  id: number;
  title: string;
  description: string;
  index: number;
  totalCards: number;
  color: string;
  tagline?: string;
  skills?: string[];
  rate?: string;
  badge?: string;
  category?: string;
  image?: string;
  whatWeCover?: string[];
  onInquire?: (title: string) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  index,
  totalCards,
  tagline,
  skills: _skills = [],
  rate = "$30 / hour",
  category,
  image,
  whatWeCover = [],
  onInquire,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.045;

    // Set initial state
    gsap.set(card, {
      scale: 1,
      transformOrigin: "center top",
    });

    // Create scroll trigger for stacking effect
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);

        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: "center top",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [index, totalCards]);

  const handleInquire = () => {
    if (onInquire) {
      onInquire(title);
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'sticky',
        top: '85px',
        paddingTop: '2rem',
      }}
      className="px-4 sm:px-8"
    >
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          minHeight: '390px',
          borderRadius: '24px',
          isolation: 'isolate',
          top: `${index * 16}px`,
          transformOrigin: 'top',
        }}
        className="card-content transition-transform duration-200 select-none shadow-2xl"
      >
        {/* Main Integration Card Container - Clean Graphite Style (Ref: 21st.dev @shadcnspace/integration-card) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, #18181b 0%, #121214 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
          }}
          className="p-5 sm:p-6 md:p-7 text-white"
        >
          {/* Subtle top specular sheen */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '35%',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, transparent 100%)',
              pointerEvents: 'none',
              borderRadius: '24px 24px 0 0',
            }}
          />

          {/* TWO-COLUMN LAYOUT: Left Image & Right Service Details */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-7 items-stretch h-full">
            {/* LEFT SIDE: Service Imagery & Visual Identity */}
            <div className="md:col-span-5 flex flex-col justify-between relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[380px] border border-white/10 group bg-neutral-900">
              {/* High-res Cover Image */}
              <img
                src={image || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

              {/* Top Image Badge */}
              <div className="relative z-10 p-3.5 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 text-[10px] font-mono font-medium text-neutral-300 uppercase tracking-wider">
                  0{index + 1} // {category || "SERVICE"}
                </span>

                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              </div>

              {/* Bottom Image Overlay Info */}
              <div className="relative z-10 p-4 space-y-1">
                <p className="font-sans font-bold text-xl sm:text-2xl text-white leading-tight tracking-tight">
                  {title}
                </p>
                {tagline && (
                  <p className="text-xs font-mono text-neutral-400 line-clamp-1">
                    {tagline}
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT SIDE: What It Is, Pricing, Deliverables & Actions */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {/* Header: Title & Pricing Box */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-2.5 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 font-medium uppercase tracking-widest">
                      SPECIALIZED FREELANCE OFFERING
                    </span>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight mt-0.5">
                      {title}
                    </h3>
                  </div>

                  {/* HOW MUCH I CHARGE */}
                  <div className="flex flex-col sm:items-end bg-neutral-800/80 border border-neutral-700/70 rounded-xl px-3.5 py-1.5 shrink-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      HOURLY RATE
                    </span>
                    <span className="font-sans font-bold text-lg sm:text-xl text-white leading-none mt-0.5">
                      {rate}
                    </span>
                  </div>
                </div>

                {/* WHAT IT IS (Summary description) */}
                <p className="text-xs sm:text-[13px] font-sans text-neutral-400 leading-relaxed">
                  {description}
                </p>

                {/* WHAT WE COVER (Deliverables with integration card style icon badges) */}
                <div className="space-y-2 pt-0.5">
                  <span className="text-xs font-mono font-medium text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                    <span>WHAT WE COVER &amp; DELIVER:</span>
                  </span>

                  <div className="grid grid-cols-1 gap-2">
                    {whatWeCover.map((item, wIdx) => (
                      <div
                        key={wIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-300"
                      >
                        <div className="w-4.5 h-4.5 rounded-md bg-neutral-800 border border-neutral-700/80 flex items-center justify-center shrink-0 mt-0.5 text-neutral-200 shadow-xs">
                          <Check className="w-3 h-3 text-neutral-200" strokeWidth={2.5} />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-neutral-500">
                  CARD 0{index + 1} / 0{totalCards} &bull; SCROLL TO STACK
                </span>

                <button
                  type="button"
                  onClick={handleInquire}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-sans font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shrink-0"
                >
                  <span>Select Service / Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface StackedCardsProps {
  onExploreServices?: () => void;
  onInquireService?: (serviceName: string) => void;
  items?: GlassCardItem[];
}

export const StackedCards: React.FC<StackedCardsProps> = ({
  onExploreServices,
  onInquireService,
  items = cardData,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <main
      id="services"
      ref={containerRef}
      style={{
        backgroundColor: '#121214',
      }}
      className="relative w-full text-white"
    >
      {/* Hero Section with Integration Card Subtle Dot Grid Backdrop */}
      <section
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          color: '#ffffff',
          padding: '5.5rem 1.5rem 2.25rem',
        }}
      >
        {/* Subtle dot matrix grid background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6">
          {/* Horizontal Single-Line Header matching Certifications */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-neutral-800/80 pb-5">
            {/* 1. Left: Title */}
            <div className="flex items-center shrink-0">
              <h2 className="font-condensed font-black text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-none text-white">
                SERVICES
              </h2>
            </div>

            {/* 2. Middle & Right: Description BESIDE Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed max-w-md text-left sm:text-right">
                Specialized engineering solutions in DevOps, Microsoft Fabric, Power BI, web platforms, and design systems.
              </p>

              {onExploreServices && (
                <button
                  type="button"
                  onClick={onExploreServices}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-sans font-bold text-xs tracking-wider uppercase hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shrink-0 cursor-pointer"
                >
                  <span>Explore All Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stacking Cards Section */}
      <section
        style={{
          color: '#ffffff',
          width: '100%',
          position: 'relative',
        }}
      >
        {items.map((card: GlassCardItem, index: number) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            tagline={card.tagline}
            description={card.description}
            skills={card.skills}
            rate={card.rate}
            badge={card.badge}
            category={card.category}
            color={card.color}
            image={card.image}
            whatWeCover={card.whatWeCover}
            index={index}
            totalCards={items.length}
            onInquire={onInquireService}
          />
        ))}
      </section>

      {/* Sleek, graceful outro transition into Certifications */}
      <div className="relative w-full h-36 sm:h-44 md:h-52 bg-gradient-to-b from-[#121214] via-[#121214]/75 to-[#D9DDE0] pointer-events-none" />
    </main>
  );
};

export default StackedCards;
