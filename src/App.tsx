import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { StairsPreloader } from './components/sections/StairsPreloader';
import { HeroExact } from './components/sections/HeroExact';
import { AboutExact } from './components/sections/AboutExact';
import { MarqueeExact } from './components/sections/MarqueeExact';
import { PortfolioGallery } from './components/ui/portfolio-gallery';
import { ServicesSection } from './components/sections/ServicesSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Synchronize dark section detection with the top ceiling / viewport border
  useEffect(() => {
    const handleScroll = () => {
      const navbarY = 40;
      let isOverDark = false;
      const darkSectionIds = ['about', 'services'];
      for (const id of darkSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarY && rect.bottom >= navbarY) {
            isOverDark = true;
            break;
          }
        }
      }
      setIsDarkSection(isOverDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReplayPreloader = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative w-full bg-[#D9DDE0] text-[#0A0A0A] font-sans antialiased overflow-x-clip selection:bg-black selection:text-white">
      {/* FULL-SCREEN VIEWPORT BORDER FRAME (Slim border with reversed high-contrast outer frame fill) */}
      <div
        className={`fixed inset-1 sm:inset-1.5 md:inset-2 pointer-events-none z-40 rounded-xl md:rounded-2xl border transition-all duration-700 ease-in-out ${
          isDarkSection
            ? 'border-white/25 shadow-[0_0_0_100vmax_#F5F6F8]'
            : 'border-black/20 shadow-[0_0_0_100vmax_#000000]'
        }`}
      />

      {/* 1. GLOBALLY FIXED ADAPTIVE NOTCH NAVBAR */}
      <Navbar
        isDarkSectionControlled={isDarkSection}
        onScrollToAbout={() => scrollToSection('about')}
        onScrollToWork={() => scrollToSection('work')}
        onScrollToServices={() => scrollToSection('services')}
        onScrollToCerts={() => scrollToSection('certifications')}
        onScrollToContact={() => scrollToSection('contact')}
        onReplayPreloader={handleReplayPreloader}
      />

      {/* 2. Skiper 9 Stairs Preloader (Stepped Geometric Lift Reveal) */}
      <AnimatePresence mode="wait">
        {isLoading && <StairsPreloader key="stairs-preloader" />}
      </AnimatePresence>

      {/* 3. SECTION 1: Sticky Pinned Hero */}
      <div className="sticky top-0 h-screen w-full z-10 overflow-hidden">
        <HeroExact onScrollToAbout={() => scrollToSection('about')} />
      </div>

      {/* 4. SECTION 2: Full Floating Black About Section (Clean elevation shadow, no heavy glow) */}
      <div
        id="about"
        className="relative z-20 w-full bg-[#000000] shadow-[0_-4px_20px_rgba(0,0,0,0.18)]"
      >
        <AboutExact />
      </div>

      {/* 5. Ticker Banner & Freelance Showcase */}
      <div className="relative z-30 w-full bg-[#D9DDE0]">
        <MarqueeExact />

        {/* SECTION 3: 3D Overlapping Portfolio Gallery (Replaces previous 3rd section) */}
        <PortfolioGallery
          title="Featured Freelance Projects"
          archiveButton={{
            text: "Request Custom Project",
            href: "#contact",
          }}
        />

        {/* SECTION 4: Services I Offer (Technical Architecture & Engineering) */}
        <ServicesSection />

        {/* SECTION 5: Industry Certifications & Credentials */}
        <CertificationsSection />

        {/* SECTION 6: Project Inquiry & Consultation Booking */}
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
