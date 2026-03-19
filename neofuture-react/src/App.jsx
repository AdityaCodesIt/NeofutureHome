import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BootSequence from './components/BootSequence';
import CanvasParticles from './components/CanvasParticles';
import Header from './components/Header';
import Footer from './components/Footer';

import HeroSection from './components/sections/HeroSection';
import RegistrationSection from './components/sections/RegistrationSection';
import AboutSection from './components/sections/AboutSection';
import FinanceNodesSection from './components/sections/FinanceNodesSection';
import TracksSection from './components/sections/TracksSection';
import TimelineSection from './components/sections/TimelineSection';
import PrizesSection from './components/sections/PrizesSection';
import FaqSection from './components/sections/FaqSection';
import StatusSection from './components/sections/StatusSection';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const videoRef = useRef(null);

  // Force-play helper that retries on failure
  const forcePlay = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true; // ensure muted (required for autoplay on mobile)
    const p = vid.play();
    if (p && p.catch) {
      p.catch(() => {
        // Retry after a short delay (handles race conditions on mobile)
        setTimeout(() => {
          if (vid) vid.play().catch(() => {});
        }, 300);
      });
    }
  }, []);

  // Programmatic play when video mounts + touch fallback for stubborn browsers
  useEffect(() => {
    if (!bootComplete) return;
    // Small delay to let the video element mount
    const timer = setTimeout(forcePlay, 100);

    // Fallback: play on first user touch (some iOS versions need this)
    const handleTouch = () => {
      forcePlay();
      document.removeEventListener('touchstart', handleTouch);
    };
    document.addEventListener('touchstart', handleTouch, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('touchstart', handleTouch);
    };
  }, [bootComplete, forcePlay]);

  // Resume playback when tab/app regains focus
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') forcePlay();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [forcePlay]);

  useEffect(() => {
    if (!bootComplete) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      setupAnimations();
    }
  }, [bootComplete]);

  const setupAnimations = () => {
    // Initial reveal animations
    gsap.to("#main-header", { opacity: 1, y: 0, duration: 1.5, ease: "expo.out" });
    gsap.to("#main-footer", { opacity: 1, y: 0, duration: 1.5, ease: "expo.out", delay: 0.3 });
    gsap.to("#main-content", { opacity: 1, duration: 2 });
    gsap.to("#floating-hero-group", { opacity: 1, duration: 2 });

    // Sequence scroll for the fixed hero titles
    const tlHero = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-trigger-spacer",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    tlHero.to("#hero-seq-1", { opacity: 0, y: -80, filter: "blur(20px)", duration: 1 });

    tlHero.fromTo("#hero-seq-2",
      { opacity: 0, y: 80, filter: "blur(20px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
      "-=0.5"
    );
    tlHero.to("#hero-seq-2", { opacity: 0, y: -80, filter: "blur(20px)", duration: 1, delay: 0.5 });

    tlHero.fromTo("#hero-seq-3",
      { opacity: 0, scale: 0.5, filter: "blur(30px)" },
      {
        opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, onStart: () => {
          const el = document.getElementById('hero-glitch');
          if (el) el.classList.add('active-glitch');
        }
      },
      "-=0.5"
    );
    tlHero.to("#hero-seq-3", { opacity: 0, scale: 1.5, filter: "blur(30px)", duration: 1, delay: 0.5 });

    // Registration block
    gsap.from("#hero-seq-4", {
      scrollTrigger: {
        trigger: "#registration",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power4.out"
    });

    // High velocity flash
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const vel = Math.abs(self.getVelocity());
        if (vel > 2500) {
          gsap.fromTo("#shutter-flash", { opacity: 0.2 }, { opacity: 0, duration: 0.3 });
        }
      }
    });

    // Hologram Panel 3D hover effect - ONLY ON DESKTOP
    if (window.innerWidth >= 1024) {
      const panels = document.querySelectorAll('.hologram-panel');
      const handleMouseMove = (e) => {
        panels.forEach(panel => {
          const rect = panel.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const moveX = (e.clientX - centerX) / 80;
            const moveY = (e.clientY - centerY) / 80;
            gsap.to(panel, { rotateY: moveX, rotateX: -moveY, x: moveX / 2, y: moveY / 2, duration: 1, ease: "power2.out" });
          }
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }

    // Section scroll animations
    const sections = ['about', 'finance', 'tracks', 'timeline', 'prizes', 'faq'];
    sections.forEach((s, idx) => {
      const panel = document.querySelector(`#panel-${s}`);
      if (!panel) return;
      const isEven = idx % 2 === 0;

      const isMobile = window.innerWidth < 768;
      gsap.fromTo(panel,
        { 
          opacity: 0, 
          x: isMobile ? (isEven ? -40 : 40) : (isEven ? -150 : 150), 
          scale: 0.9, 
          filter: isMobile ? "blur(5px)" : "blur(30px)", 
          rotateY: isMobile ? 0 : (isEven ? -20 : 20) 
        },
        {
          scrollTrigger: {
            trigger: `#${s}`,
            start: "top 95%",
            once: true,
          },
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          rotateY: 0,
          duration: isMobile ? 1 : 2,
          ease: "expo.out"
        }
      );
    });
  };

  return (
    <div className="antialiased select-none min-h-screen">
      <div className="fixed inset-0 -z-[10] bg-black" id="background-container">
        {bootComplete && (
          <div className="w-full h-full relative" style={{ backgroundColor: '#000000' }}>
            <video
              ref={videoRef}
              src="/assets/v4.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              webkit-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="false"
              className="w-full h-full object-cover pointer-events-none mix-blend-screen opacity-50"
              style={{ willChange: 'transform' }}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-80" />
          </div>
        )}
      </div>
      <div id="shutter-flash"></div>
      <div className="heartbeat-bg"></div>
      <CanvasParticles />

      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}

      {bootComplete && (
        <>
          <Header />
          <div className="central-void" id="void-zone"></div>
          <main className="scroll-container relative z-10 opacity-0" id="main-content">
            <HeroSection />
            <RegistrationSection />
            <AboutSection />
            <FinanceNodesSection />
            <TracksSection />
            <TimelineSection />
            <PrizesSection />
            <FaqSection />
            <StatusSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
