import { HeroExact } from './components/sections/HeroExact';
import { AboutExact } from './components/sections/AboutExact';
import { MarqueeExact } from './components/sections/MarqueeExact';
import { WorksExact } from './components/sections/WorksExact';

export function App() {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#ECECEC] text-[#0A0A0A] font-sans antialiased overflow-x-hidden">
      {/* SECTION 1: Exact Hero Replication from Image 1 */}
      <HeroExact onScrollToAbout={handleScrollToAbout} />

      {/* SECTION 2: Exact About Us Replication from Video 00:06 */}
      <AboutExact />

      {/* Ticker Banner from Video 00:08 */}
      <MarqueeExact />

      {/* SECTION 3: Exact Selected Works Replication from Image 3 */}
      <WorksExact />
    </div>
  );
}

export default App;
