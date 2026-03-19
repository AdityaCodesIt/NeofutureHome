import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrizesSection = () => {
  useEffect(() => {
    const prizeElement = document.getElementById('prize-counter');
    if (!prizeElement) return;

    const targetValue = 99999;
    const counterProxy = { value: 0 };

    gsap.to(counterProxy, {
      value: targetValue,
      duration: 4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#panel-prizes",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        prizeElement.textContent = Math.floor(counterProxy.value).toLocaleString();
        if (Math.random() > 0.8) {
          prizeElement.style.color = '#ff003c';
          setTimeout(() => prizeElement.style.color = '#fffb00', 50);
        }
      }
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6" id="prizes">
      <div className="hologram-panel glitch-border p-12 text-center max-w-4xl bg-black" id="panel-prizes">
        <div className="blueprint-overlay"></div>
        <h2 className="text-2xl font-black tracking-[0.5em] mb-4 opacity-70 text-cyberYellow font-cyber">NETWORK_REWARDS</h2>
        <div className="text-7xl md:text-9xl font-black mb-4 tracking-tighter extreme-glitch font-cyber drop-shadow-2xl text-cyberYellow" data-text="₹99,999+">
          ₹<span id="prize-counter">0</span>+ <span className="text-2xl md:text-4xl block mt-2 opacity-90 uppercase tracking-normal text-cyberYellow">from 6 tracks</span>
        </div>
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-90 font-black text-cyberYellow/80">Accumulated Bounty Pool for Innovation Architects</p>
      </div>
    </section>
  );
};

export default PrizesSection;
