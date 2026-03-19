import React from 'react';

const TracksSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-end px-8 md:px-20" id="tracks">
      <div className="hologram-panel glitch-border p-10 max-w-2xl" id="panel-tracks">
        <div className="blueprint-overlay"></div>
        <h2 className="text-4xl font-black mb-6 flex items-center gap-3 scan-line-text font-cyber">
          <span className="w-2 h-8 bg-cyberYellow"></span>
          <span className="extreme-glitch" data-text="MISSION_TRACKS">MISSION_TRACKS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: '01', title: 'Smart Campus & Student Experience' },
            { id: '02', title: 'Intelligent Systems, AI & Gamified Experiences' },
            { id: '03', title: 'Rural Innovation & AgriTech' },
            { id: '04', title: 'Cybersecurity, FinTech & Digital Trust' },
            { id: '05', title: 'HealthTech & Wellbeing' },
            { id: '06', title: 'Open Innovation' }
          ].map(track => (
            <div key={track.id} className="interactive-module bg-black p-4 border border-cyberYellow/20 hover:border-cyberYellow transition-all group cursor-pointer">
              <div className="text-cyberYellow font-black mb-1">TRACK_{track.id}</div>
              <div className="text-[10px] font-bold leading-tight group-hover:text-cyberYellow text-cyberYellow/90">{track.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
