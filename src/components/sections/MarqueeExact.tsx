import { motion } from 'framer-motion';

export const MarqueeExact = () => {
  const items = [
    'DESIGN BY MALIK',
    'DIGITAL PRODUCT AND BRAND',
    'DESIGN BY MALIK',
    'DIGITAL PRODUCT AND BRAND',
  ];

  return (
    <div className="w-full bg-[#000000] text-white py-6 overflow-hidden border-t border-b border-white/10 select-none relative z-20 group">
      <div className="animate-kinetic flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 text-base sm:text-lg font-sans font-extrabold tracking-wider uppercase"
          >
            <span className="text-white/90 group-hover:text-white transition-colors">
              {text}
            </span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="text-sm text-[#888888] inline-block"
            >
              ✸
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};
