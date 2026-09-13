"use client";

import React, { useState } from 'react';
import { Send, Check, ArrowUpRight } from 'lucide-react';
import StackTower from '@/components/ui/stack-tower';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <section
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center bg-[#000000] text-white pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 px-6 sm:px-12 md:px-16 overflow-hidden select-none"
    >
      {/* Hairline Grid Texture Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* 2-Column Split: StackTower on Left & Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT HALF: 3D Typographic Stack Tower centered with soft top/bottom cuts */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            <StackTower
              words={["DO NOT MISS", "A CHANCE"]}
              rowCount={16}
              accentColor="#F16D14"
              className="w-full min-h-[460px] lg:min-h-[520px] max-h-[75vh]"
            />
          </div>

          {/* RIGHT HALF: Form centered in right column - Enlarged generous box */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-2xl mx-auto bg-[#0B0C0E]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col justify-between space-y-6"
            >
              {/* Form Fields: Name, Email & Project Brief */}
              <div className="space-y-5">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-[#14151B] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 focus:bg-[#181920] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-[#14151B] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 focus:bg-[#181920] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Project Brief & Objectives */}
                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Project Brief &amp; Objectives
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your system goals, timelines, architecture requirements, or technical challenges..."
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-[#14151B] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 focus:bg-[#181920] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 sm:py-4.5 rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg cursor-pointer ${
                    submitted
                      ? 'bg-emerald-500 text-black'
                      : 'bg-white text-black hover:bg-neutral-200 active:scale-[0.99]'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5 text-black stroke-[3]" />
                      <span>Inquiry Sent Successfully! Talk to you soon.</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Brief</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
