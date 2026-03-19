import React, { useEffect, useState } from 'react';

const RegistrationSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const targetDate = new Date("April 10, 2026 09:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 relative" id="registration">
      <div className="text-center opacity-100 w-full max-w-full" id="hero-seq-4">
        <h2 className="text-base sm:text-lg md:text-2xl font-cyber font-bold text-cyberYellow tracking-widest mb-2"><span className="extreme-glitch" data-text="ROUND 2 BEGINS IN">ROUND 2 BEGINS IN</span></h2>
        <div className="text-cyberYellow font-black tracking-[0.2em] text-[10px] md:text-[12px] mb-6 md:mb-8 opacity-60">10TH APRIL 2026</div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8" id="hero-countdown">
          <div className="countdown-box scale-90 sm:scale-100 origin-center">
            <div className="text-3xl sm:text-4xl md:text-6xl font-black" id="hero-days">{timeLeft.days}</div>
            <div className="text-[8px] md:text-[10px] font-bold opacity-80">DAYS</div>
          </div>
          <div className="countdown-box scale-90 sm:scale-100 origin-center">
            <div className="text-3xl sm:text-4xl md:text-6xl font-black" id="hero-hours">{timeLeft.hours}</div>
            <div className="text-[8px] md:text-[10px] font-bold opacity-80">HOURS</div>
          </div>
          <div className="countdown-box scale-90 sm:scale-100 origin-center">
            <div className="text-3xl sm:text-4xl md:text-6xl font-black" id="hero-minutes">{timeLeft.minutes}</div>
            <div className="text-[8px] md:text-[10px] font-bold opacity-80">MINUTES</div>
          </div>
          <div className="countdown-box scale-90 sm:scale-100 origin-center">
            <div className="text-3xl sm:text-4xl md:text-6xl font-black" id="hero-seconds">{timeLeft.seconds}</div>
            <div className="text-[8px] md:text-[10px] font-bold opacity-80">SECONDS</div>
          </div>
        </div>
        <div className="mt-6 md:mt-8">
          <button className="bg-black text-cyberYellow border border-cyberYellow px-6 sm:px-8 md:px-12 py-3 md:py-4 text-xs sm:text-sm md:text-base font-black uppercase skew-x-[-10deg] hover:bg-cyberYellow hover:text-black hover:scale-110 transition-all button-glitch shadow-[0_0_20px_rgba(255,251,0,0.4)] corrupt-on-hover" data-text="DATA_CORRUPTED">
            Initialize_Registration
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
