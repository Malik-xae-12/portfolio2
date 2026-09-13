import { motion } from 'framer-motion';

export const AboutExact = () => {
  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#000000] text-white py-16 sm:py-24 px-8 sm:px-16 md:px-24 flex flex-col justify-between select-none relative z-30"
    >
      {/* Top Header Row with Index 02/05 on Right (Matches Video 00:06 Exactly) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full flex justify-end"
      >
        <span className="text-sm font-sans font-medium text-[#666666] tracking-wider">
          02/05
        </span>
      </motion.div>

      {/* Center Grid: Left (/ABOUT + Grey Arrow) & Right (Quote + Loom Badge) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Giant /ABOUT Headline & Thick Dark-Grey Arrow */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-10">
          {/* /ABOUT Typography with Smooth Video Illumination Animation (Charcoal to Pure White) */}
          <motion.h2
            initial={{ opacity: 0.2, color: '#2A2A2A' }}
            whileInView={{ opacity: 1, color: '#FFFFFF' }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-condensed font-black text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] tracking-tight uppercase leading-[0.82] select-none"
          >
            /ABOUT
          </motion.h2>

          {/* Thick Muted Grey Diagonal Arrow (Exact Match of Video Frame 00:06) */}
          <motion.div
            onClick={handleScrollToWork}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.08, x: 4, y: -4, color: '#CCCCCC' }}
            whileTap={{ scale: 0.95 }}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 text-[#4A4A4A] cursor-pointer transition-colors duration-200"
            title="Click to jump to Selected Works"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-none stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="20" y1="80" x2="78" y2="22" />
              <polyline points="32 22 78 22 78 68" />
            </svg>
          </motion.div>
        </div>

        {/* Right Column: Editorial Quote & Loom Badge (Matches Video Frame 00:06) */}
        <div className="lg:col-span-6 space-y-8 lg:pt-32 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-[17px] font-sans font-normal leading-[1.7] text-[#E0E0E0]"
          >
            &ldquo;Gared Matthew is a talented Freelance Designer &amp; Developer, known for his creative prowess and technical expertise. With a passion for crafting visually stunning and functional digital experiences, Gared combines design aesthetics with coding finesse to bring his clients&apos; visions to life. Whether it&apos;s building websites, designing user interfaces, or optimizing user experiences, Gared&apos;s dedication to excellence and innovation shines through in every project he undertakes.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            <span className="text-[11px] sm:text-xs font-sans tracking-widest text-[#707070] uppercase font-bold">
              CURRENTLY WORKING WITH LOOM CORPORATE AS A PRODUCT DESIGNER
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="max-w-7xl mx-auto w-full h-4" />
    </section>
  );
};
