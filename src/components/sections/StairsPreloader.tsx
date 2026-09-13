import { motion } from 'framer-motion';

interface StairsPreloaderProps {
  phrase?: string;
}

export const StairsPreloader = ({
  phrase = 'Design by Matthew. Creative Developer & Designer.',
}: StairsPreloaderProps) => {
  const words = phrase.split(' ');

  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-auto select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      {/* 1. REFINED EDITORIAL INTRO TYPOGRAPHY */}
      <div className="absolute inset-0 z-20 flex h-full w-full items-center justify-center text-center px-6">
        <motion.h1
          className="text-xs sm:text-sm md:text-base font-sans font-semibold tracking-[0.28em] uppercase text-white/90 max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.45,
                delay: 0.09 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-2 sm:mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* 2. THE 5 STAIRS COLUMNS (Skiper 9 Staircase Effect) */}
      <div className="pointer-events-none fixed inset-0 z-10 flex h-screen w-screen overflow-hidden">
        {[0, 1, 2, 3, 4].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: '100%' }}
            animate={{ height: '100%' }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25 + 0.07 * (4 - i),
              ease: [0.33, 1, 0.68, 1],
            }}
            className="h-full w-[20vw] bg-[#0A0A0A] border-r border-white/5 last:border-r-0"
          />
        ))}
      </div>
    </motion.div>
  );
};
