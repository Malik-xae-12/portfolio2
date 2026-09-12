import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  previewImage: string;
  customFontClass?: string;
}

export const WorksExact = () => {
  const [hoveredId, setHoveredId] = useState<string | null>('graphichunters'); // default or hover
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: ProjectItem[] = [
    {
      id: 'graphichunters',
      name: 'GraphicHunters',
      category: 'Design & Development',
      previewImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      customFontClass: 'font-condensed font-black tracking-tight',
    },
    {
      id: 'andyward',
      name: 'Andy Ward',
      category: 'Web and Strategy',
      previewImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
      customFontClass: 'font-display font-black tracking-tighter',
    },
    {
      id: 'avid',
      name: 'AVID',
      category: 'Film Production',
      previewImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
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
      className="w-full bg-[#FFFFFF] text-[#0A0A0A] py-28 px-6 sm:px-16 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Top Header Row (Matches Image 3 Exactly): Statement on left + Circular Badge on right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xl sm:text-2xl font-sans font-medium text-[#222222] leading-snug">
              Gared brings immense value to every project, consistently exceeding client expectations and setting new standards in the world of freelance design and development.
            </p>
          </div>

          {/* Circular "GET IN TOUCH" Badge (Matches Image 3) */}
          <div className="w-32 h-32 rounded-full border border-[#0A0A0A] flex flex-col items-center justify-center text-center p-2 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 shrink-0 self-start md:self-auto cursor-pointer shadow-sm group">
            <span className="text-xs font-sans font-extrabold tracking-widest leading-tight">
              GET IN
            </span>
            <span className="text-xs font-sans font-extrabold tracking-widest leading-tight">
              TOUCH
            </span>
          </div>
        </div>

        {/* Small Section Header */}
        <div className="text-xs font-sans font-bold text-[#888888] tracking-widest uppercase pt-6">
          SELECTED WORKS
        </div>

        {/* Dotted Dividers Project Table (Matches Image 3) */}
        <div className="border-t border-b border-dotted border-[#B0B0B0] divide-y divide-dotted divide-[#B0B0B0] relative">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="py-10 sm:py-14 flex items-center justify-between group cursor-pointer transition-colors duration-200 hover:bg-[#FAFAFA] px-4 -mx-4 rounded-lg relative"
            >
              {/* Left Project Name */}
              <h3 className={`text-4xl sm:text-6xl md:text-7xl text-[#0A0A0A] ${project.customFontClass || 'font-condensed font-black'}`}>
                {project.name}
              </h3>

              {/* Right Category */}
              <span className="text-sm sm:text-base font-sans font-medium text-[#555555] group-hover:text-[#0A0A0A] transition-colors">
                {project.category}
              </span>

              {/* Embedded Floating Hover Card (Matches Image 3 Placement) */}
              {hoveredId === project.id && (
                <div
                  className="hidden md:flex absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-80 h-52 sm:w-96 sm:h-60 rounded-xl overflow-hidden shadow-2xl border border-black/10 bg-[#0E1015] p-2 flex-col justify-between"
                  style={{
                    transform: `translate3d(calc(-50% + ${(cursorPos.x - 500) * 0.08}px), calc(-50% + ${(cursorPos.y - 300) * 0.08}px), 0)`,
                    transition: 'transform 0.15s ease-out',
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
                      <div className="text-emerald-400 font-display font-black text-xl leading-tight drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                        Empowering<br />Innovation
                      </div>
                      <div className="text-[10px] text-white/60 font-mono">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Centered Link: View all our work */}
        <div className="pt-8 text-center">
          <button
            onClick={() => alert('Viewing full archive...')}
            className="text-sm font-sans font-medium text-[#222222] hover:text-black hover:underline cursor-pointer transition-all"
          >
            View all our work
          </button>
        </div>
      </div>
    </section>
  );
};
