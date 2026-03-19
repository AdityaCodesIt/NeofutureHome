import React from 'react';

const StatusSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cyberBlack/70 backdrop-blur-2xl z-0"></div>
      <div className="relative z-10 text-center" id="panel-status">
        <h2 className="text-[12vw] font-black leading-none tracking-tighter italic text-transparent stroke-cyberYellow relative" style={{ WebkitTextStroke: '2px #fffb00' }}>
          <span className="extreme-glitch brightness-125" data-text="READY">READY</span><br/>
          <span className="opacity-40 text-[8vw]">FOR_UPLINK</span>
        </h2>
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="w-80 h-[3px] bg-cyberYellow/20 overflow-hidden relative">
            <div className="absolute inset-0 bg-cyberYellow animate-[loading_2s_linear_infinite] shadow-[0_0_15px_rgba(255,251,0,0.8)]"></div>
          </div>
          <p className="text-[11px] font-mono tracking-[1em] animate-pulse text-cyberYellow/80 uppercase font-bold">NEURAL_SYNC_ESTABLISHED</p>
        </div>
      </div>

      <div className="absolute bottom-12 right-10 z-20 text-right max-w-xs md:max-w-md">
        <div className="text-[11px] font-mono text-cyberYellow/60 uppercase tracking-[0.3em] mb-2 border-r-2 border-cyberYellow pr-3">Contact_Establishment</div>
        <div className="text-[14px] font-black text-cyberYellow leading-relaxed uppercase tracking-tighter">
          Shree L.R. Tiwari Educational Campus,<br/> 
          Mira Road–East, Thane-401 107
        </div>
        <div className="text-[12px] font-bold text-cyberYellow mt-4 bg-cyberYellow/10 py-1.5 px-4 inline-block skew-x-[-15deg]">
          <span className="inline-block skew-x-[15deg]">SYNC: +91 74011 11407 // +91 97028 87471</span>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;
