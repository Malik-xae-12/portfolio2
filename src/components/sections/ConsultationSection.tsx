"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Mail,
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

import { MeshGradientSVG } from '../ui/shader-svg';

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
      className="relative w-full bg-[#D9DDE0] text-[#0A0A0A] pt-6 sm:pt-8 pb-10 sm:pb-14 px-6 sm:px-12 md:px-20 border-t border-black/10 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* COMPACT EXPANDED CARD */}
        <div className="bg-[#F5F6F8] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 border border-black/10 shadow-xs hover:border-black/20 hover:shadow-md transition-all duration-300">
          
          {/* UPPER HEADING: CENTERED TITLE ONLY */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h3 className="font-sans font-bold text-lg sm:text-2xl md:text-3xl text-[#0A0A0A] tracking-tight leading-snug">
              Enterprise Cloud Data &amp; Architecture Advisory
            </h3>
          </div>

          {/* SEPARATOR LINE WITH ANIMATION */}
          <div className="relative w-full h-[1px] my-3.5 sm:my-4 bg-black/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-transparent via-[#0078D4] to-transparent"
              animate={{
                x: ['-100%', '700%'],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* TWO-COLUMN COMPACT INTERIOR: Animation on Left, 3 Points & Direct Channels on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
            
            {/* LEFT: Compact Interactive Shader Animation Stage */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full rounded-xl sm:rounded-2xl bg-[#0A0A0A] border border-black/15 overflow-hidden flex items-center justify-center py-2 sm:py-3 px-3 shadow-md group/avatar h-[190px] sm:h-[205px]">
                {/* Subtle Ambient Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(74,144,226,0.22),transparent_70%)] pointer-events-none" />
                
                {/* Scaled Avatar */}
                <MeshGradientSVG className="max-w-[145px] h-[165px]" />

                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-xs border border-white/10 text-[9px] font-mono text-white/75 pointer-events-none">
                  Tracks Cursor
                </div>
              </div>
            </div>

            {/* RIGHT: COMPACT 3 POINTS + Direct Channels */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
              
              {/* 3 Points - Compact */}
              <div className="space-y-1.5 text-xs font-sans text-[#333333]">
                {/* Point 1 */}
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-black/5 shadow-2xs">
                  <div className="w-6 h-6 rounded-md bg-black/5 border border-black/5 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#0A0A0A]" />
                  </div>
                  <div className="truncate text-xs">
                    <strong className="text-[#0A0A0A]">30 Minutes</strong> &bull; Google Meet or Microsoft Teams
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-black/5 shadow-2xs">
                  <div className="w-6 h-6 rounded-md bg-black/5 border border-black/5 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#0A0A0A]" />
                  </div>
                  <div className="truncate text-xs">
                    <strong className="text-[#0A0A0A]">Free Assessment:</strong> Architectural roadmap &amp; stack review
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-black/5 shadow-2xs">
                  <div className="w-6 h-6 rounded-md bg-black/5 border border-black/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A]" />
                  </div>
                  <div className="truncate text-xs">
                    <strong className="text-[#0A0A0A]">Direct 1-on-1:</strong> Technical talk with Abdul Malik (No sales reps)
                  </div>
                </div>
              </div>

              {/* Direct Channels & Action Row */}
              <div className="space-y-2 pt-2 border-t border-black/5">
                {/* 1. Direct Email with 1-Click Copy */}
                <div className="relative group/mail flex items-center justify-between p-2 rounded-lg bg-white hover:bg-[#0A0A0A] hover:text-white border border-black/10 transition-all shadow-2xs">
                  <a
                    href="mailto:malikxae12@gmail.com"
                    className="flex items-center gap-2 min-w-0 flex-1"
                  >
                    <div className="w-6 h-6 rounded-md bg-black/5 group-hover/mail:bg-white/15 flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-black group-hover/mail:text-white transition-colors" />
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[9px] font-mono uppercase text-[#777777] group-hover/mail:text-white/70">Email:</span>
                      <span className="text-xs font-bold truncate">malikxae12@gmail.com</span>
                    </div>
                  </a>

                  {/* Copy Button */}
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-1.5 rounded-md bg-black/5 group-hover/mail:bg-white/20 text-[#666666] group-hover/mail:text-white transition-all cursor-pointer"
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
                          className="absolute right-0 bottom-full mb-1 px-2 py-0.5 rounded-md bg-[#0A0A0A] text-white font-sans font-bold text-[9px] tracking-wider uppercase whitespace-nowrap shadow-md pointer-events-none"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* GitHub, LinkedIn, and Book Consultation Call in compact 3-column grid */}
                <div className="grid grid-cols-3 gap-2">
                  {/* GitHub */}
                  <a
                    href="https://github.com/Malik-xae-12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 p-2 rounded-lg bg-white hover:bg-[#0A0A0A] hover:text-white border border-black/10 transition-all shadow-2xs group/git text-xs font-bold"
                  >
                    <GithubIcon className="w-3 h-3 text-black group-hover/git:text-white transition-colors shrink-0" />
                    <span className="truncate">GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#888888] group-hover/git:text-white shrink-0" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/abdulmalikmohammed786/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 p-2 rounded-lg bg-white hover:bg-[#0A0A0A] hover:text-white border border-black/10 transition-all shadow-2xs group/in text-xs font-bold"
                  >
                    <LinkedinIcon className="w-3 h-3 text-black group-hover/in:text-white transition-colors shrink-0" />
                    <span className="truncate">LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#888888] group-hover/in:text-white shrink-0" />
                  </a>

                  {/* Book Call CTA Button */}
                  <a
                    href="mailto:malikxae12@gmail.com?subject=30-Min%20Architecture%20Discovery%20Call"
                    className="flex items-center justify-center gap-1 p-2 rounded-lg bg-[#0A0A0A] text-white hover:bg-black active:scale-[0.98] transition-all shadow-sm font-sans font-bold text-xs tracking-wider uppercase cursor-pointer"
                  >
                    <span className="truncate">Book Call</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
