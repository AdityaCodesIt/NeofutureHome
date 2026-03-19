import React, { useState } from 'react';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[150] px-3 md:px-6 py-3 md:py-4 flex justify-between items-center border-b border-cyberYellow/20 bg-cyberBlack/90 backdrop-blur-2xl opacity-0 translate-y-[-100%]" id="main-header">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4 mr-2 md:mr-4 items-center">
            <img src="/assets/SLRTCElogo.png" alt="SLRTCE" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
            <img src="/assets/rahul.png" alt="Rahul Education" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="text-xs sm:text-base md:text-xl font-black tracking-tighter italic extreme-glitch text-cyberYellow" data-text="NEOFUTURE">NEOFUTURE</div>
            <span className="text-[5px] sm:text-[6px] md:text-[7px] max-w-[120px] sm:max-w-none opacity-80 uppercase tracking-widest font-bold mt-0.5 md:mt-1 leading-tight md:leading-normal">10th April 2026 // Shree L.R Tiwari College of Engineering // Rahul Education // IEEE MAHARASHTRA</span>
          </div>
        </div>
        <nav className="hidden xl:flex gap-6 text-[9px] font-bold uppercase tracking-widest">
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#home">.Home</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#about">.About</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#timeline">.Timeline</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#tracks">.Tracks</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#prizes">.Prizes</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#faq">.FAQ</a>
        </nav>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex flex-col items-end text-cyberYellow group cursor-help">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyberYellow animate-pulse"></span>
              <span className="text-[9px] md:text-[11px] font-black tracking-[0.2em] leading-none uppercase">Round 1 Registrations</span>
            </div>
            <span className="text-[10px] md:text-[13px] font-black text-white/90 bg-cyberYellow px-2 py-0.5 mt-1 block skew-x-[-10deg] animate-pulse">
              <span className="inline-block skew-x-[10deg] text-black">OPEN UNTIL 6 APRIL 2026</span>
            </span>
          </div>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-black text-cyberYellow border border-cyberYellow px-4 sm:px-6 py-1.5 sm:py-2 text-[8px] sm:text-[10px] font-black uppercase skew-x-[-20deg] hover:bg-cyberYellow hover:text-black hover:shadow-[0_0_20px_rgba(255,251,0,0.7)] transition-all pointer-events-auto button-glitch corrupt-on-hover"
            data-text="DATA_CORRUPTED"
          >
            <span className="inline-block skew-x-[20deg]">Register_Now</span>
          </button>
        </div>
      </header>

      {/* Registration Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          onClick={() => setShowPopup(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <div
            className="relative w-[90%] max-w-md border border-cyberYellow/40 bg-cyberBlack/95 backdrop-blur-xl p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 0 60px rgba(255, 251, 0, 0.15), inset 0 0 60px rgba(255, 251, 0, 0.03)',
              clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyberYellow/60" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyberYellow/60" />
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyberYellow/60" />
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyberYellow/60" />

            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-5 text-cyberYellow/60 hover:text-cyberYellow text-xl font-mono transition-colors"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-[10px] font-bold tracking-[0.4em] text-cyberYellow/50 uppercase mb-2">// Authentication Required</div>
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-cyberYellow uppercase" style={{ textShadow: '0 0 20px rgba(255, 251, 0, 0.4)' }}>
                Register Now
              </h2>
              <div className="w-12 h-[2px] bg-cyberYellow/40 mx-auto mt-3" />
            </div>

            {/* Description */}
            <p className="text-[11px] md:text-xs text-white/50 text-center mb-8 font-mono tracking-wide leading-relaxed">
              Sign in with your Google account to register for NEOFUTURE 2026 hackathon.
            </p>

            {/* Google Sign-In Button */}
            <button
              onClick={() => {
                // Google sign-in logic can be added here
                console.log('Google Sign-In clicked');
              }}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] group"
            >
              {/* Google Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm tracking-wide">Sign in with Google</span>
            </button>

            {/* Footer text */}
            <p className="text-[9px] text-white/30 text-center mt-6 font-mono tracking-widest uppercase">
              Secure authentication via Google
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
