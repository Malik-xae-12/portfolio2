import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <section className="relative w-full h-screen overflow-hidden bg-[#D9DDE0] text-[#0A0A0A] select-none flex flex-col justify-between">
      {/* 2. UPPER-LEFT SUBTEXT: "Freelance / Designer & Developer" */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-20 sm:top-24 left-8 sm:left-14 z-20 space-y-0 pointer-events-none text-left leading-tight"
      >
        <div className="text-[13px] sm:text-sm font-sans font-medium text-[#2A2A28]">
          Freelance
        </div>
        <div className="text-[13px] sm:text-sm font-sans font-medium text-[#2A2A28]">
          Designer &amp; Developer
        </div>
      </motion.div>

      {/* 3. MINIMALIST WIREFRAME CIRCLES WITH ORBITING DOTS (Exact Video Match) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full stroke-[#222222] stroke-[1.2]"
          strokeOpacity="0.32"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Top-left circle with orbiting dot */}
          <motion.g
            style={{ transformOrigin: '160px 110px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="160" cy="110" r="330" />
            {/* Hollow ring dot on circumference (Matches video frame) */}
            <circle
              cx={160 + 330}
              cy="110"
              r="5"
              fill="#D9DDE0"
              stroke="#222222"
              strokeWidth="1.4"
            />
          </motion.g>

          {/* Bottom-right circle with orbiting dot */}
          <motion.g
            style={{ transformOrigin: '1260px 980px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="1260" cy="980" r="440" />
            {/* Hollow ring dot on circumference (Matches video frame) */}
            <circle
              cx={1260 + 440}
              cy="980"
              r="5"
              fill="#D9DDE0"
              stroke="#222222"
              strokeWidth="1.4"
            />
          </motion.g>
        </svg>
      </motion.div>

      {/* 4. GIANT KINETIC TEXT BEHIND CUTOUT (Centered vertically & horizontally) */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none overflow-hidden z-10"
        style={{
          transform: `translate3d(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.25}px, 0)`,
        }}
      >
        <div className="animate-kinetic-slow flex items-center whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="font-condensed font-black text-[34vw] sm:text-[30vw] md:text-[27vw] leading-none tracking-tight text-[#0A0A0A] mr-16 select-none uppercase inline-block"
            >
              ABDUL MALIK
            </span>
          ))}
        </div>
      </div>

      {/* 5. FOREGROUND CUTOUT PORTRAIT (DEAD CENTER HORIZONTALLY, WITH SMOOTH ENTRANCE & PARALLAX) */}
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 inset-x-0 z-20 pointer-events-none flex justify-center items-end h-[85vh] sm:h-[88vh] md:h-[91vh]"
      >
        <img
          src="/malik.png"
          alt="Abdul Malik - Freelance Designer & Developer"
          className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]"
          style={{
            transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.12}px, 0)`,
            transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          draggable={false}
        />
      </motion.div>

      {/* 6. LOWER-RIGHT SUBTEXT: "Scroll down ↓" WITH INTERACTIVE HOVER & BOUNCE */}
      <motion.div
        onClick={onScrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-8 right-8 sm:right-16 z-30 flex flex-col items-center gap-1.5 text-[#444444] pointer-events-auto cursor-pointer hover:text-black transition-colors group"
      >
        <span className="text-[12px] font-sans font-medium tracking-wide">
          Scroll down
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </motion.div>
      </motion.div>
    </section>
  );
};
