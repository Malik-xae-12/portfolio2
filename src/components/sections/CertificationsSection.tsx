"use client";

import { useRef } from 'react';
import { ShieldCheck, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  CoverflowCarousel,
  type CoverflowSlide,
  type CoverflowCarouselHandle,
} from '@/components/ui/coverflow-carousel';

interface CertificationItem extends CoverflowSlide {
  code: string;
  level: string;
  expiresAt: string;
  verifyUrl: string;
  themeColor: string;
}

const CERTIFICATES: CertificationItem[] = [
  {
    code: 'DP-700',
    title: 'DP-700: Microsoft Fabric',
    subtitle: 'Data Cloud Solutions Architect',
    level: 'Expert',
    expiresAt: 'Oct 2026',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    themeColor: '#0078D4',
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    alt: 'DP-700 Microsoft Certified Data Cloud Solutions Architect',
  },
  {
    code: 'DP-600',
    title: 'DP-600: Fabric Analytics',
    subtitle: 'Enterprise Analytics Engineer',
    level: 'Associate',
    expiresAt: 'Dec 2026',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    themeColor: '#00A4EF',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    alt: 'DP-600 Fabric Analytics Engineer Associate',
  },
  {
    code: 'DP-800',
    title: 'DP-800: Azure Data Solutions',
    subtitle: 'Designing Enterprise Data Systems',
    level: 'Specialist',
    expiresAt: 'Aug 2026',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    themeColor: '#008272',
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    alt: 'DP-800 Azure Data Solutions Specialist',
  },
  {
    code: 'PL-300',
    title: 'PL-300: Power BI Analyst',
    subtitle: 'Data Modeling & Business Intelligence',
    level: 'Certified',
    expiresAt: 'Nov 2026',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    themeColor: '#F2C811',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    alt: 'PL-300 Power BI Data Analyst Associate',
  },
  {
    code: 'AZ-400',
    title: 'AZ-400: Azure DevOps',
    subtitle: 'DevOps Engineer Expert',
    level: 'Expert',
    expiresAt: 'Jan 2027',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    themeColor: '#0078D7',
    src: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    alt: 'AZ-400 Azure DevOps Engineer Expert',
  },
  {
    code: 'AZ-204',
    title: 'AZ-204: Azure Developer',
    subtitle: 'Cloud Application Developer',
    level: 'Associate',
    expiresAt: 'Feb 2027',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    themeColor: '#2886DE',
    src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
    alt: 'AZ-204 Azure Developer Associate',
  },
];

export const CertificationsSection = () => {
  const carouselRef = useRef<CoverflowCarouselHandle>(null);

  return (
    <section
      id="certifications"
      className="relative w-full pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 md:px-20 bg-[#D9DDE0] text-[#0A0A0A] border-t border-black/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Header Bar with Title on Left, Description and Navigation Buttons at the End */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/10 pb-5">
          {/* Left: Section Title */}
          <div className="flex items-center">
            <h2 className="font-condensed font-black text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-none text-[#0A0A0A]">
              CERTIFICATIONS
            </h2>
          </div>

          {/* Right: Description Text and Navigation Buttons at the end */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed max-w-md text-left sm:text-right">
              Officially verified Microsoft, Fabric, Power BI, DevOps, and cloud data architecture credentials.
            </p>

            {/* Navigation Buttons placed at the end */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => carouselRef.current?.prev()}
                aria-label="Previous Certifications"
                className="w-10 h-10 rounded-full border border-black/15 bg-[#F5F6F8] text-black hover:bg-black hover:text-white transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer active:scale-95 group"
                title="Previous certifications"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => carouselRef.current?.next()}
                aria-label="Next Certifications"
                className="w-10 h-10 rounded-full border border-black/15 bg-[#F5F6F8] text-black hover:bg-black hover:text-white transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer active:scale-95 group"
                title="Next certifications"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Coverflow Carousel with Certification Badge on Upper Side and Expire At & Verify Text Down */}
        <div className="relative w-full">
          <CoverflowCarousel
            ref={carouselRef}
            slides={CERTIFICATES}
            cardWidth="clamp(280px, 30vw, 360px)"
            rotate={40}
            depth={0.55}
            perspective={3.2}
            gap={0.06}
            loop={true}
            showNavigation={false}
            showPagination={true}
            showCaption={false}
            renderCard={(slide) => {
              const cert = slide as CertificationItem;
              return (
                <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#111317] via-[#0D0E12] to-[#07080A] text-white border border-white/10 shadow-2xl rounded-3xl select-none group">
                  {/* Radial Halo Glow matching credential theme */}
                  <div
                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-35 pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
                    style={{ backgroundColor: cert.themeColor || '#0078D4' }}
                  />
                  <div
                    className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: cert.themeColor || '#0078D4' }}
                  />

                  {/* UPPER SIDE: Certification Badge & Credential Information */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Top Row: Code Pill and Level Badge */}
                    <div className="w-full flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold tracking-wider text-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{cert.code}</span>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                        {cert.level}
                      </span>
                    </div>

                    {/* Central 3D Certification Badge Medallion */}
                    <div className="relative my-2 sm:my-3">
                      <div
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-[1.5px] shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${cert.themeColor || '#0078D4'}, rgba(255,255,255,0.4), ${cert.themeColor || '#0078D4'})`,
                        }}
                      >
                        <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#181A22] to-[#0A0B0E] p-3 flex flex-col items-center justify-center text-center shadow-inner">
                          {/* Certification Shield Icon */}
                          <ShieldCheck
                            className="w-10 h-10 sm:w-12 sm:h-12 mb-1.5 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                            style={{ color: cert.themeColor || '#0078D4' }}
                          />
                          <span className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-widest text-white/90">
                            MICROSOFT
                          </span>
                          <span className="text-[7.5px] sm:text-[8.5px] font-mono tracking-wider text-neutral-400 uppercase">
                            CERTIFIED
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Credential Title & Role Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight text-white line-clamp-1 mt-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 line-clamp-1 mt-0.5">
                      {cert.subtitle}
                    </p>
                  </div>

                  {/* DOWN: Expire at & Verify Text */}
                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        Expire at
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">
                        {cert.expiresAt}
                      </span>
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-black hover:bg-neutral-200 transition-all font-mono font-bold text-xs tracking-wider uppercase shadow-md active:scale-95 group/btn cursor-pointer"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
