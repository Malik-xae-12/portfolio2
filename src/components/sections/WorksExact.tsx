import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useInView } from 'framer-motion';

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  previewImage: string;
  customFontClass?: string;
}

export const WorksExact = () => {
  const [hoveredId, setHoveredId] = useState<string | null>('graphichunters');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  const projects: ProjectItem[] = [
    {
      id: 'graphichunters',
      name: 'GraphicHunters',
      category: 'Design & Development',
      previewImage:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      customFontClass: 'font-condensed font-black tracking-tight',
    },
    {
      id: 'andyward',
      name: 'Andy Ward',
      category: 'Web and Strategy',
      previewImage:
        'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
      customFontClass: 'font-sans font-black tracking-tighter',
    },
    {
      id: 'avid',
      name: 'AVID',
      category: 'Film Production',
      previewImage:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      customFontClass: 'font-condensed font-black tracking-wider',
    },
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-[#FFFFFF] text-[#0A0A0A] pt-36 pb-28 sm:pt-44 sm:pb-32 px-6 sm:px-16 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Top Header Row (Matches Image 3 & Video Exactly): Statement on left + Circular Badge right beside it */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 sm:gap-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0.3, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="text-xl sm:text-2xl font-sans font-medium text-[#222222] leading-snug">
              Gared brings immense value to every project, consistently exceeding client expectations and setting new standards in the world of freelance design and development.
            </p>
          </motion.div>

          {/* Animated Circular "GET IN TOUCH" Badge placed right beside the text */}
          <motion.div
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#0A0A0A] flex flex-col items-center justify-center text-center p-2 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 shrink-0 cursor-pointer shadow-sm group relative"
          >
            <span className="text-xs font-sans font-extrabold tracking-widest leading-tight group-hover:tracking-wider transition-all duration-200">
              GET IN
            </span>
            <span className="text-xs font-sans font-extrabold tracking-widest leading-tight group-hover:tracking-wider transition-all duration-200">
              TOUCH
            </span>
          </motion.div>
        </div>

        {/* Small Section Header */}
        <motion.div
          initial={{ opacity: 0.3, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-sans font-bold text-[#888888] tracking-widest uppercase pt-6"
        >
          SELECTED WORKS
        </motion.div>

        {/* Dotted Dividers Project Table (Matches Image 3) */}
        <div className="border-t border-b border-dotted border-[#B0B0B0] divide-y divide-dotted divide-[#B0B0B0] relative">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0.3, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="py-10 sm:py-14 flex items-center justify-between group cursor-pointer transition-colors duration-200 hover:bg-[#FAFAFA] px-4 -mx-4 rounded-lg relative"
            >
              {/* Left Project Name with Hover Slide */}
              <h3
                className={`text-4xl sm:text-6xl md:text-7xl text-[#0A0A0A] group-hover:translate-x-3 transition-transform duration-300 ${
                  project.customFontClass || 'font-condensed font-black'
                }`}
              >
                {project.name}
              </h3>

              {/* Right Category Container + Card kept beside the right text */}
              <div className="relative flex items-center">
                {/* Embedded Floating Hover Card (Positioned directly beside the right text!) */}
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, x: 15 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="hidden md:flex absolute z-40 top-1/2 right-full mr-6 sm:mr-10 -translate-y-1/2 pointer-events-none w-80 h-52 sm:w-96 sm:h-60 rounded-xl overflow-hidden shadow-2xl border border-black/10 bg-[#0E1015] p-2 flex-col justify-between"
                    style={{
                      transform: `translate3d(${(cursorPos.x - 600) * 0.04}px, calc(-50% + ${(cursorPos.y - 300) * 0.04}px), 0)`,
                      transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* Mockup Screen Content like Image 3 (Empowering Innovation) */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#0A0C10] flex flex-col justify-between p-3.5 border border-white/10">
                      <img
                        src={project.previewImage}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Mockup Header */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/70">
                        <span>{project.name.toUpperCase()} // PROD</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>

                      {/* Mockup Center Title */}
                      <div className="relative z-10 space-y-1">
                        <div className="text-emerald-400 font-sans font-black text-xl leading-tight drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                          Empowering<br />Innovation
                        </div>
                        <div className="text-[10px] text-white/60 font-mono">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Right Category Text */}
                <span className="text-sm sm:text-base font-sans font-medium text-[#555555] group-hover:text-[#0A0A0A] transition-colors whitespace-nowrap">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Centered Link: View all our work */}
        <div className="pt-8 text-center">
          <button
            onClick={() => alert('Viewing full archive...')}
            className="text-sm font-sans font-medium text-[#222222] hover:text-black hover:underline cursor-pointer transition-all active:scale-95"
          >
            View all our work
          </button>
        </div>
      </div>
    </section>
  );
};
