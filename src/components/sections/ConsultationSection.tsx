"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Mail,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ConsultationSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('malikxae12@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="consulting"
      className="relative w-full bg-[#D9DDE0] text-[#0A0A0A] pt-10 sm:pt-14 pb-14 sm:pb-20 px-6 sm:px-12 md:px-20 border-t border-black/10 overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto w-full space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="font-condensed font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.9] text-[#0A0A0A]">
                CONSULTING &amp; ADVISORY
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm font-sans text-[#555555] leading-relaxed text-left lg:text-right">
              Direct communication channels, rapid freelance engagement, and 1-on-1 architecture discovery sessions.
            </p>
          </div>

          <div className="h-[1px] bg-black/10 mt-5" />
        </div>

        {/* COMPACT SMALL BOXES: Available for Freelance & Book a Call side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          
          {/* CARD 1: Available for Freelance & Advisory */}
          <div className="bg-[#F5F6F8] rounded-2xl p-5 sm:p-6 border border-black/10 shadow-xs flex flex-col justify-between space-y-4 hover:border-black/20 hover:shadow-md transition-all duration-300">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#777777] uppercase tracking-wider">
                  DIRECT CHANNELS
                </span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#0A0A0A] leading-snug">
                  Available for Freelance &amp; Advisory
                </h3>
                <p className="text-xs font-sans text-[#555555] leading-relaxed mt-1">
                  Accepting select enterprise cloud data contracts, Microsoft Fabric platforms, and full-stack systems.
                </p>
              </div>
            </div>

            {/* 3 Compact Channel Rows */}
            <div className="space-y-2 pt-3 border-t border-black/5">
              {/* 1. Direct Email */}
              <div className="relative group/mail flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#0A0A0A] hover:text-white border border-black/10 transition-all shadow-2xs">
                <a
                  href="mailto:malikxae12@gmail.com"
                  className="flex items-center gap-2.5 min-w-0 flex-1"
                >
                  <div className="w-7 h-7 rounded-lg bg-black/5 group-hover/mail:bg-white/15 flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-black group-hover/mail:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-mono uppercase text-[#777777] group-hover/mail:text-white/70">Direct Email</span>
                    <span className="text-xs font-bold truncate">malikxae12@gmail.com</span>
                  </div>
                </a>

                {/* 1-Click Copy Button */}
                <div className="relative flex items-center">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-1.5 rounded-lg bg-black/5 group-hover/mail:bg-white/20 text-[#666666] group-hover/mail:text-white transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500 group-hover/mail:text-emerald-400 stroke-[3]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <AnimatePresence>
                    {copiedEmail && (
                      <motion.span
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.9 }}
                        className="absolute right-0 bottom-full mb-1.5 px-2 py-0.5 rounded-md bg-[#0A0A0A] text-white font-sans font-bold text-[9px] tracking-wider uppercase whitespace-nowrap shadow-md pointer-events-none"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* 2. GitHub */}
              <a
                href="https://github.com/Malik-xae-12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#0A0A0A] hover:text-white border border-black/10 transition-all shadow-2xs group/git"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-black/5 group-hover/git:bg-white/15 flex items-center justify-center shrink-0 transition-colors">
                    <GithubIcon className="w-3.5 h-3.5 text-black group-hover/git:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-mono uppercase text-[#777777] group-hover/git:text-white/70">Source Code &amp; Repos</span>
                    <span className="text-xs font-bold truncate">github.com/Malik-xae-12</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover/git:text-white group-hover/git:translate-x-0.5 group-hover/git:-translate-y-0.5 transition-all" />
              </a>

              {/* 3. LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdulmalikmohammed786/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#0A0A0A] hover:text-white border border-black/10 transition-all shadow-2xs group/in"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-black/5 group-hover/in:bg-white/15 flex items-center justify-center shrink-0 transition-colors">
                    <LinkedinIcon className="w-3.5 h-3.5 text-black group-hover/in:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-mono uppercase text-[#777777] group-hover/in:text-white/70">Professional Network</span>
                    <span className="text-xs font-bold truncate">linkedin.com/in/abdulmalikmohammed786</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover/in:text-white group-hover/in:translate-x-0.5 group-hover/in:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* CARD 2: Schedule a 30-Min Architecture Discovery */}
          <div className="bg-[#F5F6F8] rounded-2xl p-5 sm:p-6 border border-black/10 shadow-xs flex flex-col justify-between space-y-4 hover:border-black/20 hover:shadow-md transition-all duration-300">
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>DIRECT 1-ON-1 DISCOVERY</span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#0A0A0A] leading-snug">
                  Schedule a 30-Min Architecture Discovery
                </h3>
                <p className="text-xs font-sans text-[#555555] leading-relaxed mt-1">
                  Review your stack, discuss scaling bottlenecks, or plan an end-to-end Microsoft Fabric &amp; Azure data platform migration.
                </p>
              </div>

              {/* 3 Value Points */}
              <div className="space-y-2 pt-3 border-t border-black/5 text-xs font-sans text-[#333333]">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <span>30 Minutes &bull; Google Meet or Microsoft Teams</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <span>Free architectural roadmap &amp; stack assessment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <span>Direct discussion with Abdul Malik (No sales reps)</span>
                </div>
              </div>
            </div>

            {/* Call CTA Button */}
            <a
              href="mailto:malikxae12@gmail.com?subject=30-Min%20Architecture%20Discovery%20Call"
              className="w-full text-center py-3 rounded-xl bg-[#0A0A0A] text-white font-sans font-bold text-xs tracking-wider uppercase hover:bg-black active:scale-[0.99] transition-all shadow-md cursor-pointer mt-3 flex items-center justify-center gap-1.5"
            >
              <span>Book Consultation Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
