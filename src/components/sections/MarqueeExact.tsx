export const MarqueeExact = () => {
  const items = [
    'DESIGN BY MATTHEW',
    'DIGITAL PRODUCT AND BRAND',
    'DESIGN BY MATTHEW',
    'DIGITAL PRODUCT AND BRAND',
  ];

  return (
    <div className="w-full bg-[#000000] text-white py-5 overflow-hidden border-t border-b border-black select-none">
      <div className="animate-kinetic flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-base sm:text-lg font-sans font-extrabold tracking-wider uppercase">
            <span>{text}</span>
            <span className="text-sm">✸</span>
          </div>
        ))}
      </div>
    </div>
  );
};

