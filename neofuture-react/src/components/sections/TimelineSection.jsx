import React from 'react';

const TimelineSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-start px-8 md:px-20" id="timeline">
      <div className="hologram-panel glitch-border p-10 max-w-2xl" id="panel-timeline">
        <div className="blueprint-overlay"></div>
        <h2 className="text-4xl font-black mb-8 flex items-center gap-3 scan-line-text font-cyber">
          <span className="w-2 h-8 bg-cyberYellow"></span>
          <span className="extreme-glitch" data-text="OP_TIMELINE">OP_TIMELINE</span>
        </h2>
        <div className="space-y-6">
          <div className="relative pl-8 border-l-2 border-cyberYellow/30 group interactive-module py-4 bg-black">
            <div className="absolute -left-[9px] top-4 w-4 h-4 bg-cyberYellow rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(255,251,0,0.5)]"></div>
            <h4 className="text-xl font-bold tracking-tighter text-cyberYellow font-cyber">PHASE 01: IDEA_SUBMISSION (ONLINE)</h4>
            <p className="text-[10px] font-mono mb-2 text-cyberYellow font-black">ABSTRACT + PPT UPLOAD</p>
            <p className="text-xs font-bold leading-relaxed opacity-95 text-cyberYellow/90">Initial screening of problem statements and project architectures.</p>
          </div>
          <div className="relative pl-8 border-l-2 border-cyberYellow/30 group interactive-module py-4 bg-black">
            <div className="absolute -left-[9px] top-4 w-4 h-4 bg-cyberYellow rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(255,251,0,0.5)]"></div>
            <h4 className="text-xl font-bold tracking-tighter text-cyberYellow font-cyber">PHASE 02: D-DAY (10 APRIL 2026)</h4>
            <p className="text-[10px] font-mono mb-2 text-cyberYellow font-black">24-HOUR HACKATHON LIVE</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] font-bold mt-2 text-cyberYellow/80">
              <span>09:00 AM: REPORTING</span> <span>10:00 AM: OPENING</span>
              <span>11:00 AM: START_HACK</span> <span>07:00 PM: EVAL_R1</span>
              <span>10:00 PM: DAY_1_END</span> <span>D2 10:00 AM: PRIZE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
