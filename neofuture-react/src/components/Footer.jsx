import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-[150] px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-cyberBlack/95 border-t border-cyberYellow/20 backdrop-blur-2xl gap-4 opacity-0 translate-y-[100%]" id="main-footer">
      <div className="flex flex-col text-center md:text-left mb-3 md:mb-0">
        <div className="text-[7px] md:text-[10px] opacity-70 tracking-widest font-mono text-cyberYellow max-w-[280px] sm:max-w-none mx-auto md:mx-0 break-words">
          NEOFUTURE 2026 // SLRTCE CAMPUS, MIRA ROAD-EAST, THANE-401 107
        </div>
        <div className="text-[8px] md:text-[10px] opacity-95 font-bold mt-1 text-cyberYellow">
          COMMS: +91 97028 87471 | +91 74011 11407
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
        <a className="text-[9px] md:text-[11px] font-bold hover:text-cyberYellow transition-all uppercase tracking-[0.2em] relative group button-glitch text-cyberYellow/80" href="#">
          LinkedIn
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyberYellow group-hover:w-full transition-all"></span>
        </a>
        <a className="text-[9px] md:text-[11px] font-bold hover:text-cyberYellow transition-all uppercase tracking-[0.2em] relative group button-glitch text-cyberYellow/80" href="#">
          Instagram
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyberYellow group-hover:w-full transition-all"></span>
        </a>
        <div className="hidden sm:block h-6 w-[1px] bg-cyberYellow/40 mx-1 md:mx-2"></div>
        <div className="text-[9px] md:text-[11px] font-mono text-cyberYellow bg-cyberYellow/20 px-2 md:px-3 py-1 font-black">V_2026.NEO</div>
      </div>
    </footer>
  );
};

export default Footer;
