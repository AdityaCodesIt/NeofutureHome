import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-start px-8 md:px-20" id="about">
      <div className="hologram-panel glitch-border p-10 max-w-2xl" id="panel-about">
        <div className="blueprint-overlay"></div>
        <h2 className="text-4xl font-black mb-6 flex items-center gap-3 scan-line-text font-cyber">
          <span className="w-2 h-8 bg-cyberYellow"></span>
          <span className="extreme-glitch" data-text="ABOUT_NEOFUTURE">ABOUT_NEOFUTURE</span>
        </h2>
        <p className="text-sm leading-relaxed mb-6 font-bold text-cyberYellow">
          Organized by the Department of Computer Engineering at Shree L.R Tiwari College of Engineering, NEOFUTURE 2026 is a premier 24-hour hybrid hackathon. Technically Co-Sponsored by IEEE Maharashtra Section, we invite the sharpest minds to architect the next era of digital civilization.
        </p>
        <div className="grid grid-cols-2 gap-4 text-[10px] font-mono border-t border-cyberYellow/30 pt-6">
          <div className="interactive-module p-2 bg-black border border-cyberYellow/10">ORG: <span className="text-cyberYellow font-black">COMP_DEPT_SLRTCE</span></div>
          <div className="interactive-module p-2 bg-black border border-cyberYellow/10">SPONSOR: <span className="text-cyberYellow font-black">IEEE_MH_SECTION</span></div>
          <div className="interactive-module p-2 bg-black border border-cyberYellow/10">MODE: <span className="text-cyberYellow font-black">HYBRID_UPLINK</span></div>
          <div className="interactive-module p-2 bg-black border border-cyberYellow/10">PRIZE: <span className="text-cyberYellow font-black">₹1,00,000+</span></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
