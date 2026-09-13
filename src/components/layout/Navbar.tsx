import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotchWingProps {
  position?: 'top' | 'bottom';
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}

function NotchLeftWing({
  position = 'top',
  className,
  fillColor,
  strokeColor,
}: NotchWingProps) {
  const isBottom = position === 'bottom';
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      shapeRendering="geometricPrecision"
      className={cn(
        'pointer-events-none absolute right-full size-4 overflow-visible select-none transition-colors duration-200',
        isBottom ? 'bottom-0' : 'top-0',
        className
      )}
    >
      <path
        d={
          isBottom
            ? 'M 0 20 C 11.046 20 20 11.046 20 0 H 21 V 21 H 0 Z'
            : 'M 0 0 C 11.046 0 20 8.954 20 20 H 21 V -1 H 0 Z'
        }
        fill={fillColor || 'currentColor'}
        style={{ transition: 'all 700ms ease-in-out' }}
      />
      {strokeColor && (
        <path
          d={
            isBottom
              ? 'M 0 20 C 11.046 20 20 11.046 20 0'
              : 'M 0 0 C 11.046 0 20 8.954 20 20'
          }
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          style={{ transition: 'all 700ms ease-in-out' }}
        />
      )}
    </svg>
  );
}

function NotchRightWing({
  position = 'top',
  className,
  fillColor,
  strokeColor,
}: NotchWingProps) {
  const isBottom = position === 'bottom';
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      shapeRendering="geometricPrecision"
      className={cn(
        'pointer-events-none absolute left-full size-4 overflow-visible select-none transition-colors duration-200',
        isBottom ? 'bottom-0' : 'top-0',
        className
      )}
    >
      <path
        d={
          isBottom
            ? 'M 20 20 C 8.954 20 0 11.046 0 0 H -1 V 21 H 20 Z'
            : 'M 20 0 C 8.954 0 0 8.954 0 20 H -1 V -1 H 20 Z'
        }
        fill={fillColor || 'currentColor'}
        style={{ transition: 'all 700ms ease-in-out' }}
      />
      {strokeColor && (
        <path
          d={
            isBottom
              ? 'M 20 20 C 8.954 20 0 11.046 0 0'
              : 'M 20 0 C 8.954 0 0 8.954 0 20'
          }
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          style={{ transition: 'all 700ms ease-in-out' }}
        />
      )}
    </svg>
  );
}

interface NavbarProps {
  isDarkSectionControlled?: boolean;
  onScrollToAbout: () => void;
  onScrollToWork: () => void;
  onScrollToServices: () => void;
  onScrollToCerts: () => void;
  onScrollToConsulting?: () => void;
  onScrollToContact: () => void;
  onReplayPreloader?: () => void;
}

export const Navbar = ({
  isDarkSectionControlled,
  onScrollToAbout,
  onScrollToWork,
  onScrollToServices,
  onScrollToCerts,
  onScrollToConsulting,
  onScrollToContact,
  onReplayPreloader,
}: NavbarProps) => {
  const [activeSection, setActiveSection] = useState<'hero' | 'about' | 'work' | 'services' | 'certs' | 'consulting' | 'contact'>('hero');
  const [internalDarkSection, setInternalDarkSection] = useState(false);

  const isDarkSection = isDarkSectionControlled !== undefined ? isDarkSectionControlled : internalDarkSection;

  // Limelight spotlight beam measurement
  const navContainerRef = useRef<HTMLElement | null>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [limelightStyle, setLimelightStyle] = useState({ left: 0, width: 40, opacity: 0 });

  useLayoutEffect(() => {
    const btn = buttonRefs.current[activeSection];
    const container = navContainerRef.current;
    if (btn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const center = btnRect.left - containerRect.left + btnRect.width / 2;
      const width = Math.max(38, btnRect.width * 0.72);
      setLimelightStyle({
        left: center - width / 2,
        width,
        opacity: 1,
      });
    } else {
      setLimelightStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const centerY = vh / 2;
      const navbarY = 40; // The notch is at the very top ceiling of the screen

      // 1. Determine active navigation section
      if (scrollY < vh * 0.5) {
        setActiveSection('hero');
      } else {
        const sections: {
          id: string;
          name: 'about' | 'work' | 'services' | 'certs' | 'consulting' | 'contact';
        }[] = [
          { id: 'about', name: 'about' },
          { id: 'work', name: 'work' },
          { id: 'services', name: 'services' },
          { id: 'certifications', name: 'certs' },
          { id: 'consulting', name: 'consulting' },
          { id: 'contact', name: 'contact' },
        ];

        for (const sec of sections) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= centerY && rect.bottom >= centerY) {
              setActiveSection(sec.name);
              break;
            }
          }
        }
      }

      // 2. Determine if the navbar at the top ceiling is over a dark section (About, Services, or Contact)
      let isOverDark = false;
      const darkSectionIds = ['about', 'services', 'contact'];
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
      setInternalDarkSection(isOverDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const notchFill = isDarkSection ? '#FFFFFF' : '#0A0A0A';
  const notchStroke = isDarkSection ? '#FFFFFF' : '#0A0A0A';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pointer-events-auto">
      {/* Top Ceiling Border Line to the left of the navbar */}
      <div
        className={`flex-1 h-[2.5px] transition-colors duration-700 pointer-events-none ${
          isDarkSection ? 'bg-white/65' : 'bg-black/35'
        }`}
      />

      <div className="relative flex items-center shrink-0">
        {/* Left Concave Notch Ear Wing (Smooth bezier ear to top ceiling edge) */}
        <NotchLeftWing
          position="top"
          fillColor={notchFill}
          strokeColor={notchStroke}
          className="!size-4"
        />

        {/* Right Concave Notch Ear Wing (Smooth bezier ear to top ceiling edge) */}
        <NotchRightWing
          position="top"
          fillColor={notchFill}
          strokeColor={notchStroke}
          className="!size-4"
        />

        {/* Notch Body Container with Dynamic Contrast (Black on Cement, White on Black) */}
        <div
          className={`relative backdrop-blur-md rounded-b-2xl px-5 sm:px-7 py-2.5 flex items-center justify-between gap-6 sm:gap-10 transition-all duration-700 ease-in-out select-none ${
            isDarkSection
              ? 'bg-white border-b border-x border-white shadow-[0_12px_40px_rgba(255,255,255,0.18)] text-[#0A0A0A]'
              : 'bg-[#0A0A0A] border-b border-x border-[#0A0A0A] shadow-[0_12px_40px_rgba(0,0,0,0.35)] text-white'
          }`}
        >
          {/* Logo Brand: [AM] MALIK */}
          <div
            onClick={handleScrollToTop}
            title="Scroll to top"
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div
              onClick={(e) => {
                if (onReplayPreloader) {
                  e.stopPropagation();
                  onReplayPreloader();
                }
              }}
              title="Replay intro"
              className={`w-6 h-6 rounded-md flex items-center justify-center font-sans font-black text-[10px] tracking-tight group-hover:scale-105 transition-all duration-700 shadow-sm ${
                isDarkSection
                  ? 'bg-[#0A0A0A] text-white group-hover:bg-black'
                  : 'bg-white text-black group-hover:bg-neutral-200'
              }`}
            >
              AM
            </div>
            <span
              className={`font-sans font-extrabold text-xs tracking-wider transition-colors duration-700 ${
                isDarkSection ? 'text-[#0A0A0A]' : 'text-white'
              }`}
            >
              MALIK
            </span>
          </div>

          {/* Navigation Links with LIMELIGHT Spotlight Beam ("above lid, below light transition") */}
          <nav
            ref={navContainerRef}
            className="relative hidden md:flex items-center gap-1.5 text-[11px] font-sans font-bold tracking-wider py-1"
          >
            {/* Active Section Upper Line Indicator */}
            <div
              className={`absolute top-0 z-10 h-[3px] rounded-full transition-all duration-400 ease-in-out pointer-events-none ${
                isDarkSection ? 'bg-[#0A0A0A]' : 'bg-white'
              }`}
              style={{
                left: `${limelightStyle.left}px`,
                width: `${limelightStyle.width}px`,
                opacity: limelightStyle.opacity,
              }}
            />

            {[
              { label: 'ABOUT', id: 'about', onClick: onScrollToAbout },
              { label: 'PROJECTS', id: 'work', onClick: onScrollToWork },
              { label: 'SERVICES', id: 'services', onClick: onScrollToServices },
              { label: 'CERTIFICATIONS', id: 'certs', onClick: onScrollToCerts },
              { label: 'CONSULTING', id: 'consulting', onClick: onScrollToConsulting || onScrollToContact },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    buttonRefs.current[item.id] = el;
                  }}
                  onClick={item.onClick}
                  className={`relative z-20 px-3 py-1 transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? isDarkSection
                        ? 'text-[#0A0A0A] font-extrabold'
                        : 'text-white font-extrabold'
                      : isDarkSection
                      ? 'text-neutral-500 hover:text-black font-semibold'
                      : 'text-neutral-400 hover:text-white font-semibold'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button: HIRE ME with Arrow */}
          <button
            onClick={onScrollToContact}
            className={`px-4 py-1.5 rounded-full transition-all duration-700 cursor-pointer text-[11px] font-sans font-bold tracking-wider flex items-center gap-1.5 shadow-sm active:scale-95 ${
              isDarkSection
                ? 'bg-[#0A0A0A] text-white hover:bg-black'
                : 'bg-white text-black hover:bg-neutral-200'
            }`}
          >
            <span>Hire Me</span>
            <ArrowUpRight
              className={`w-3 h-3 ${
                isDarkSection ? 'text-emerald-400' : 'text-emerald-600'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Top Ceiling Border Line to the right of the navbar */}
      <div
        className={`flex-1 h-[2.5px] transition-colors duration-700 pointer-events-none ${
          isDarkSection ? 'bg-white/65' : 'bg-black/35'
        }`}
      />
    </header>
  );
};

export default Navbar;
