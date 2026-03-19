import React from 'react';

const FinanceNodesSection = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-8 md:px-20" id="finance">
      <div className="hologram-panel glitch-border p-8 w-full max-w-4xl" id="panel-finance">
        <div className="blueprint-overlay"></div>
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3 scan-line-text font-cyber">
          <span className="w-2 h-6 bg-cyberYellow"></span>
          <span className="extreme-glitch" data-text="FINANCE_NODES">FINANCE_NODES</span>
        </h2>
        <div className="w-full flex items-center justify-center p-4">
          <img src="/assets/IEEEMaharashtra.png" alt="IEEE Maharashtra Section" className="max-h-64 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default FinanceNodesSection;
