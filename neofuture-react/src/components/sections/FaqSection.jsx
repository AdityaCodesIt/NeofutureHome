import React from 'react';

const FaqSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8" id="faq">
      <div className="hologram-panel glitch-border p-10 w-full max-w-3xl" id="panel-faq">
        <div className="blueprint-overlay"></div>
        <h2 className="text-4xl font-black mb-8 flex items-center gap-3 scan-line-text font-cyber">
          <span className="w-2 h-8 bg-cyberYellow"></span>
          <span className="extreme-glitch" data-text="SYSTEM_FAQ">SYSTEM_FAQ</span>
        </h2>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
          <div className="border border-cyberYellow/30 p-4 bg-black interactive-module">
            <div className="font-black text-[10px] text-cyberYellow mb-1 uppercase">Q: Who is eligible?</div>
            <div className="text-[11px] font-bold text-cyberYellow">Open to all college students from recognized institutions.</div>
          </div>
          <div className="border border-cyberYellow/30 p-4 bg-black interactive-module">
            <div className="font-black text-[10px] text-cyberYellow mb-1 uppercase">Q: What is the team size?</div>
            <div className="text-[11px] font-bold text-cyberYellow">Teams must consist of 2 to 4 members.</div>
          </div>
          <div className="border border-cyberYellow/30 p-4 bg-black interactive-module">
            <div className="font-black text-[10px] text-cyberYellow mb-1 uppercase">Q: Is there a registration fee?</div>
            <div className="text-[11px] font-bold text-cyberYellow">A processing fee of ₹500 is required per team.</div>
          </div>
          <div className="border border-cyberYellow/30 p-4 bg-black interactive-module">
            <div className="font-black text-[10px] text-cyberYellow mb-1 uppercase">Q: Mode of hackathon?</div>
            <div className="text-[11px] font-bold text-cyberYellow">The event is conducted in Hybrid mode (Online + In-person).</div>
          </div>
          <div className="border border-cyberYellow/30 p-4 bg-black interactive-module">
            <div className="font-black text-[10px] text-cyberYellow mb-1 uppercase">Q: Will certificates be provided?</div>
            <div className="text-[11px] font-bold text-cyberYellow">Yes, all participants will receive digital/physical certificates.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
