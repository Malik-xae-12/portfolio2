import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StairsPreloader } from './components/sections/StairsPreloader';
import { HeroExact } from './components/sections/HeroExact';
import { AboutExact } from './components/sections/AboutExact';
import { MarqueeExact } from './components/sections/MarqueeExact';
import { WorksExact } from './components/sections/WorksExact';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReplayPreloader = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative w-full bg-[#ECECEC] text-[#0A0A0A] font-sans antialiased overflow-x-hidden">
      {/* Skiper 9 Stairs Preloader (Stepped Geometric Lift Reveal) */}
      <AnimatePresence mode="wait">
        {isLoading && <StairsPreloader key="stairs-preloader" />}
      </AnimatePresence>

      {/* SECTION 1: Exact Hero Replication from Image 1 */}
      <HeroExact
        onScrollToAbout={handleScrollToAbout}
        onReplayPreloader={handleReplayPreloader}
      />

      {/* SECTION 2: Exact About Us Replication with High-End Animations */}
      <AboutExact />

      {/* Ticker Banner from Video 00:08 */}
      <MarqueeExact />

      {/* SECTION 3: Exact Selected Works Replication from Image 3 */}
      <WorksExact />
    </div>
  );
}

export default App;
