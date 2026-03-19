import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Spacer for Hero Sequence Scroll */}
      <section className="h-[300vh]" id="hero-trigger-spacer"></section>

      {/* Floating Hero Group */}
      <div className="opacity-0" id="floating-hero-group">
        <div className="floating-text-item top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 whitespace-nowrap" id="hero-seq-1">
          <div className="font-cyber text-3xl sm:text-4xl md:text-6xl font-black tracking-[0.2em] shadow-text extreme-glitch brightness-110" data-text="SLRTCE PRESENTS">SLRTCE PRESENTS</div>
        </div>
        <div className="floating-text-item top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 opacity-0 text-center w-full flex flex-col items-center" id="hero-seq-2">
          <div className="font-cyber text-xl sm:text-2xl md:text-3xl font-black tracking-[0.1em] mb-2 drop-shadow-lg text-cyberYellow">Technically co-sponsored by</div>
          <div className="font-cyber text-2xl sm:text-3xl md:text-5xl font-black tracking-widest text-cyberYellow shadow-text drop-shadow-xl whitespace-normal sm:whitespace-nowrap">IEEE Maharashtra Section</div>
        </div>
        <div className="floating-text-item top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 opacity-0 whitespace-nowrap" id="hero-seq-3">
          <div className="font-cyber text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter shadow-text extreme-glitch brightness-125" data-text="NEOFUTURE 2026">
            <div id="hero-glitch">NEOFUTURE 2026</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
