"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const CERTIFICATES = [
  {
    code: 'DP-700',
    title: 'DP-700: Microsoft Fabric',
    subtitle: 'Data Cloud Solutions Architect',
    countLabel: 'Expert',
    meta: 'Microsoft Certified',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    desc: 'Implementing multi-terabyte Lakehouse, OneLake, Delta Lake, and enterprise Fabric analytics architectures.',
  },
  {
    code: 'DP-600',
    title: 'DP-600: Fabric Analytics',
    subtitle: 'Enterprise Analytics Engineer',
    countLabel: 'Associate',
    meta: 'Microsoft Certified',
    cover: '',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    desc: 'Designing semantic models, DAX measures, Direct Lake mode, and automated ingestion workflows.',
  },
  {
    code: 'DP-800',
    title: 'DP-800: Azure Data Solutions',
    subtitle: 'Designing Enterprise Data Systems',
    countLabel: 'Specialist',
    meta: 'Microsoft Certified',
    cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    desc: 'Scalable relational & NoSQL data architectures, Synapse pipelines, and cloud database security.',
  },
  {
    code: 'PL-300',
    title: 'PL-300: Power BI Analyst',
    subtitle: 'Data Modeling & Business Intelligence',
    countLabel: 'Certified',
    meta: 'Microsoft Certified',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    desc: 'Advanced data transformation in Power Query, star schema modeling, and executive KPI reporting.',
  },
  {
    code: 'AZ-400',
    title: 'AZ-400: Azure DevOps',
    subtitle: 'DevOps Engineer Expert',
    countLabel: 'Expert',
    meta: 'Microsoft Certified',
    cover: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    desc: 'CI/CD pipeline automation, Terraform Infrastructure as Code, Git branch policies, and zero-downtime releases.',
  },
  {
    code: 'AZ-204',
    title: 'AZ-204: Azure Developer',
    subtitle: 'Cloud Application Developer',
    countLabel: 'Associate',
    meta: 'Microsoft Certified',
    cover: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    desc: 'Serverless Functions, Container Apps, Cosmos DB, Azure Key Vault, and secure token authentication.',
  },
];

const CARDS_PER_PAGE = 3;

export const CertificationsSection = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(CERTIFICATES.length / CARDS_PER_PAGE);
  const currentCards = CERTIFICATES.slice(
    page * CARDS_PER_PAGE,
    (page + 1) * CARDS_PER_PAGE
  );

  const handleNext = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="certifications"
      className="relative w-full pt-14 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-6 sm:px-12 md:px-20 bg-[#D9DDE0] text-[#0A0A0A] border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-7">
        {/* Unified Single-Line Horizontal Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/10 pb-4">
          {/* Left: CERTIFICATIONS Title */}
          <div className="flex items-center">
            <h2 className="font-condensed font-black text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-none text-[#0A0A0A]">
              CERTIFICATIONS
            </h2>
          </div>

          {/* Right: Description Text BESIDE Left & Right Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed max-w-md text-left sm:text-right">
              Officially verified Microsoft, Fabric, Power BI, DevOps, and cloud data architecture credentials.
            </p>

            <div className="flex items-center gap-3 shrink-0">
              {/* Page Dots Indicator */}
              <div className="flex items-center gap-1.5 mr-1">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > page ? 1 : -1);
                      setPage(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === page ? 'w-5 bg-black' : 'w-2 bg-black/20 hover:bg-black/40'
                    }`}
                    title={`Go to page ${idx + 1}`}
                    aria-label={`Go to page ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev & Next Buttons */}
              <button
                onClick={handlePrev}
                aria-label="Previous Certifications"
                className="w-10 h-10 rounded-full border border-black/15 bg-[#F5F6F8] text-black hover:bg-black hover:text-white transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer active:scale-95 group"
                title="Previous certifications"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Certifications"
                className="w-10 h-10 rounded-full border border-black/15 bg-[#F5F6F8] text-black hover:bg-black hover:text-white transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer active:scale-95 group"
                title="Next certifications"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Certifications Carousel: Exactly 3 Cards at a time */}
        <div className="relative overflow-hidden min-h-[440px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 60 : -60,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (dir: number) => ({
                  x: dir > 0 ? -60 : 60,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {currentCards.map((cert) => (
                <div
                  key={cert.code}
                  className="bg-[#F5F6F8] rounded-3xl p-6 border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group select-none"
                >
                  {/* Top Cover / Header with Badges */}
                  <div>
                    {cert.cover ? (
                      <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-black/5 mb-5 bg-[#F6F6F6]">
                        <img
                          src={cert.cover}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Code Badge */}
                        <div className="absolute top-3.5 left-3.5">
                          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs">
                            {cert.code}
                          </span>
                        </div>

                        {/* Verified Badge */}
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>VERIFIED</span>
                        </div>

                        {/* Bottom Level & Authority on Cover */}
                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                          <span className="text-[11px] font-mono tracking-wider uppercase text-white/90">
                            {cert.meta}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-mono font-bold uppercase text-white">
                            {cert.countLabel}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-black/10 mb-5 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-5 flex flex-col justify-between">
                        {/* Top Badges */}
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-mono font-bold text-xs">
                            {cert.code}
                          </span>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span>VERIFIED</span>
                          </div>
                        </div>

                        {/* Center Icon & Branding */}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                            <ShieldCheck className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                              MICROSOFT CERTIFIED
                            </span>
                            <span className="text-sm font-sans font-bold text-white block">
                              {cert.subtitle}
                            </span>
                          </div>
                        </div>

                        {/* Bottom Meta */}
                        <div className="flex items-center justify-between text-neutral-300">
                          <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                            {cert.meta}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-white/15 text-[10px] font-mono font-bold uppercase text-white">
                            {cert.countLabel}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <h3 className="font-sans font-bold text-xl text-[#0A0A0A] leading-snug group-hover:text-black">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-emerald-700 mt-1">
                      {cert.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>

                  {/* Verification Footer Link */}
                  <div className="pt-5 mt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#888888]">
                      Official Microsoft Credential
                    </span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/5 hover:bg-black hover:text-white text-xs font-mono font-bold text-[#0A0A0A] transition-all shrink-0 cursor-pointer"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
