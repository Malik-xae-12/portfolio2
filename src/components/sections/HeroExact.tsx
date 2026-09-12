import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroExactProps {
  onScrollToAbout: () => void;
}

export const HeroExact = ({ onScrollToAbout }: HeroExactProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#ECECEC] text-[#0A0A0A] select-none flex flex-col justify-between">
      {/* 1. TOP FLOATING CAPSULE NAVBAR (Exact Match of User Image 1) */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto">
        <div className="w-full max-w-[940px] bg-white/95 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 flex items-center justify-between shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-black/10">
          {/* Logo Brand: [GM] DESIGN BY MATTHEW */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center font-sans font-black text-xs tracking-tight">
              GM
            </div>
            <div className="flex items-center gap-1 text-xs font-sans font-bold tracking-wider text-[#0A0A0A]">
              <span>DESIGN BY</span>
              <span className="font-extrabold">MATTHEW</span>
            </div>
          </div>

          {/* Navigation Links: PRODUCT / RESOURCE / PRICE / ABOUT US */}
          <nav className="hidden md:flex items-center gap-5 text-[11px] font-sans font-bold tracking-wider text-[#333333]">
            <a href="#about" className="hover:text-black transition-colors cursor-pointer">
              PRODUCT
            </a>
            <span className="text-[#B0B0B0]">/</span>
            <a href="#work" className="hover:text-black transition-colors cursor-pointer">
              RESOURCE
            </a>
            <span className="text-[#B0B0B0]">/</span>
            <a href="#work" className="hover:text-black transition-colors cursor-pointer">
              PRICE
            </a>
            <span className="text-[#B0B0B0]">/</span>
            <a href="#about" className="hover:text-black transition-colors cursor-pointer">
              ABOUT US
            </a>
          </nav>

          {/* Action Button: HIRE ME */}
          <button
            onClick={onScrollToAbout}
            className="px-5 py-1.5 rounded-full border border-black text-[11px] font-sans font-bold tracking-wider text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
          >
            HIRE ME
          </button>
        </div>
      </header>

      {/* 2. UPPER-LEFT SUBTEXT: "Freelance / Designer & Developer" */}
      <div className="absolute top-20 sm:top-24 left-8 sm:left-14 z-20 space-y-0 pointer-events-none text-left leading-tight">
        <div className="text-[13px] sm:text-sm font-sans font-medium text-[#2A2A28]">
          Freelance
        </div>
        <div className="text-[13px] sm:text-sm font-sans font-medium text-[#2A2A28]">
          Designer &amp; Developer
        </div>
      </div>

      {/* 3. MINIMALIST WIREFRAME CIRCLES (Only 2 circles: top-left & bottom-right) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full stroke-[#222222] stroke-[1.2]"
          strokeOpacity="0.32"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Top-left circle (matches 2nd image position) */}
          <circle cx="160" cy="110" r="330" />

          {/* Bottom-right circle (at scroll down) */}
          <circle cx="1260" cy="980" r="440" />
        </svg>
      </div>

      {/* 4. GIANT KINETIC TEXT BEHIND CUTOUT (Centered vertically & horizontally) */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none overflow-hidden z-10"
        style={{
          transform: `translate3d(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.25}px, 0)`,
        }}
      >
        <div className="animate-kinetic flex items-center whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="font-condensed font-black text-[34vw] sm:text-[30vw] md:text-[27vw] leading-none tracking-tight text-[#0A0A0A] mr-16 select-none uppercase inline-block"
            >
              GARED MATTHEW
            </span>
          ))}
        </div>
      </div>

      {/* 5. FOREGROUND CUTOUT PORTRAIT (DEAD CENTER HORIZONTALLY, FILLS UP TO NAVBAR) */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none flex justify-center items-end h-[85vh] sm:h-[88vh] md:h-[91vh]">
        <img
          src="/hero-portrait-removebg-preview.png"
          alt="Gared Matthew - Freelance Designer & Developer"
          className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]"
          style={{
            transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.12}px, 0)`,
            transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          draggable={false}
        />
      </div>

      {/* 6. LOWER-RIGHT SUBTEXT: "Scroll down ↓" */}
      <div
        onClick={onScrollToAbout}
        className="absolute bottom-8 right-8 sm:right-16 z-30 flex flex-col items-center gap-1.5 text-[#444444] pointer-events-auto cursor-pointer hover:text-black transition-colors group"
      >
        <span className="text-[12px] font-sans font-medium tracking-wide">
          Scroll down
        </span>
        <div className="w-8 h-8 rounded-full border border-black/25 flex items-center justify-center group-hover:border-black group-hover:translate-y-1 transition-all">
          <ArrowDown className="w-4 h-4 stroke-[1.5]" />
        </div>
      </div>
    </section>
  );
};
