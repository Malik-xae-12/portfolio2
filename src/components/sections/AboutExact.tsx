import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExperienceModal } from './ExperienceModal';

const QUOTE_TEXT =
  'Abdul Malik is an accomplished Cloud & Data Engineer and Technical Architect specializing in Microsoft Fabric, Azure Analytics, and modern Full-Stack systems. With a passion for building resilient, high-throughput architectures and elegant digital products, Abdul Malik combines data engineering expertise with design and coding finesse to drive impactful enterprise solutions.';

const ABOUT_LETTERS = ['/', 'A', 'B', 'O', 'U', 'T'];

export const AboutExact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Trigger animations whenever the section enters the viewport
  const isInView = useInView(sectionRef, { amount: 0.15, once: false });

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const words = QUOTE_TEXT.split(' ');

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#000000] text-white min-h-screen flex flex-col justify-center select-none relative z-20 pt-20 sm:pt-24 pb-16 sm:pb-20 px-8 sm:px-16 md:px-24"
    >
      {/* Center Grid: Left (/ABOUT + Animated Arrow) & Right (Animated Quote + Loom Badge) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4 pb-6 sm:pb-8">
        {/* Left Column: Giant /ABOUT Headline & Animated Diagonal Arrow */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          {/* Animated /ABOUT Headline - Cascades and illuminates on scroll */}
          <h2 className="font-condensed font-black text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] tracking-tight uppercase leading-[0.82] select-none flex flex-wrap text-white">
            {ABOUT_LETTERS.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 45, color: '#252525' }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, color: '#FFFFFF' }
                    : { opacity: 0, y: 45, color: '#252525' }
                }
                transition={{
                  duration: 0.75,
                  delay: 0.15 + idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  color: '#FFFFFF',
                  transition: { duration: 0.15 },
                }}
                className="inline-block cursor-default select-none transition-colors"
              >
                {letter}
              </motion.span>
            ))}
          </h2>

          {/* ANIMATED ICON BELOW ABOUT US TEXT (The Diagonal Arrow ↗) */}
          <div className="flex items-center gap-6">
            <div
              onClick={handleScrollToWork}
              className="relative inline-block group cursor-pointer"
              title="Click to jump to Selected Works"
            >
              {/* Pulsing ambient glow halo */}
              <motion.div
                animate={{
                  scale: [0.95, 1.25, 0.95],
                  opacity: [0.1, 0.35, 0.1],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 rounded-full bg-white/10 blur-xl pointer-events-none"
              />

              {/* Entrance Spring + Rotation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4, rotate: -35 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.4, rotate: -35 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 text-[#555555] group-hover:text-white transition-colors duration-300"
              >
                {/* Continuous Diagonal Floating Motion */}
                <motion.div
                  animate={
                    isInView
                      ? {
                          x: [0, 10, 0],
                          y: [0, -10, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    scale: 1.15,
                    x: 14,
                    y: -14,
                    color: '#FFFFFF',
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full fill-none stroke-current filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Diagonal shaft with SVG path drawing */}
                    <motion.line
                      x1="20"
                      y1="80"
                      x2="78"
                      y2="22"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isInView ? 1 : 0 }}
                      transition={{
                        duration: 0.85,
                        delay: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                    {/* Arrowhead with SVG path drawing */}
                    <motion.polyline
                      points="32 22 78 22 78 68"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isInView ? 1 : 0 }}
                      transition={{
                        duration: 0.85,
                        delay: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Interactive hint beside arrow */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="hidden sm:flex flex-col text-[11px] font-mono tracking-widest text-[#666666] uppercase pointer-events-none"
            >
              <span className="text-[#999999] font-bold">SELECTED WORKS</span>
              <span>SCROLL OR CLICK ARROW ↗</span>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Cascading Animated Quote & Loom Badge */}
        <div className="lg:col-span-6 space-y-8 lg:pt-16 max-w-xl">
          {/* Animated Quote Paragraph - Word by Word reveal on scroll */}
          <p className="text-sm sm:text-base md:text-[17px] font-sans font-normal leading-[1.75] text-[#D0D0D0] flex flex-wrap">
            <span className="text-[#888888] mr-[0.2em] font-serif text-lg leading-none">&ldquo;</span>
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                transition={{
                  duration: 0.45,
                  delay: 0.25 + i * 0.012,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.28em] hover:text-white transition-colors duration-150"
              >
                {word}
              </motion.span>
            ))}
            <span className="text-[#888888] ml-[0.1em] font-serif text-lg leading-none">&rdquo;</span>
          </p>

          {/* Animated "Know More About Me" Button */}
          <div className="pt-2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left h-[1px] bg-white/15 mb-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-4"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-sans font-bold text-xs tracking-widest uppercase hover:bg-[#D9DDE0] hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl cursor-pointer"
              >
                <span>Know More About Me</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform text-sm">↗</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experience, Education & Skills Modal Drawer */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScrollToContact={handleScrollToContact}
      />
    </section>
  );
};
