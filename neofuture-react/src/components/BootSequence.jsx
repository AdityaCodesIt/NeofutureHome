import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BootSequence = ({ onComplete }) => {
  const terminalOutputRef = useRef(null);
  const bootSequenceRef = useRef(null);
  const streamContainerRef = useRef(null);
  const bootStatusRef = useRef(null);
  const systemOnlineAlertRef = useRef(null);

  const terminalLines = [
    "[INFO] INIT_KERNEL_v2.0.26_STABLE",
    "[SYS] MOUNTING_NETWORK_DRIVES... OK",
    "[SYS] ESTABLISHING_IEEE_LINK_SECURE (256-BIT AES)",
    "[SYS] SCANNING_HARDWARE_PERIPHERALS...",
    "[SYS] NEURAL_ENGINE_WAKEUP_SUCCESS",
    "[SYS] FRAGMENT_ASSEMBLY_MODE: ALPHA",
    "[INFO] SLRTCE_CORE_UPLINK: ONLINE",
    "[SYS] LOADING_VIRTUAL_NEOFUTURE_V2026",
    "[SYS] ANALYZING_TRACK_METRICS...",
    "[SYS] PRIZE_POOL_VERIFIED: 100K_INR_BOUUNTY",
    "[SYS] SCANNING_FOR_INNOVATORS...",
    "[INFO] 420_POTENTIAL_TARGETS_ACQUIRED",
    "[SYS] MAPPING_TRACK_RESOURCES",
    "[SYS] PREPARING_NEO_INJECTION...",
    "[READY] UPLINK_STANDBY"
  ];

  useEffect(() => {
    let i = 0;
    
    const createDataStream = () => {
      for (let j = 0; j < 20; j++) {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.left = `${Math.random() * 100}%`;
        stream.style.top = `${Math.random() * 100}%`;
        stream.textContent = Math.random().toString(16).substring(2, 20).toUpperCase();
        if (streamContainerRef.current) {
          streamContainerRef.current.appendChild(stream);
        }
        
        gsap.to(stream, {
          y: -200 - Math.random() * 500,
          opacity: 0,
          duration: 1 + Math.random() * 2,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 2
        });
      }
    };

    const showSystemOnline = () => {
      gsap.set(systemOnlineAlertRef.current, { display: 'block' });
      gsap.fromTo(systemOnlineAlertRef.current, 
        { scale: 2, opacity: 0, filter: "blur(20px)" }, 
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "expo.out" }
      );
      
      setTimeout(() => {
        gsap.to(bootSequenceRef.current, { 
          clipPath: "polygon(0 45%, 100% 45%, 100% 55%, 0 55%)",
          duration: 0.4,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.to(bootSequenceRef.current, {
              clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
              opacity: 0,
              duration: 0.2,
              onComplete: () => {
                if (onComplete) onComplete();
              }
            });
          }
        });
      }, 1000);
    };

    createDataStream();

    const interval = setInterval(() => {
      if (i < terminalLines.length) {
        if (terminalOutputRef.current) {
          const p = document.createElement('p');
          p.className = "mb-1 border-l-2 border-cyberYellow pl-2 bg-cyberYellow/10 py-1 font-black";
          p.textContent = terminalLines[i];
          terminalOutputRef.current.appendChild(p);
          terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
        }
        
        const progress = Math.round((i / terminalLines.length) * 100);
        if (bootStatusRef.current) {
          bootStatusRef.current.textContent = `SYSTEM_CHECK: ${progress}%`;
        }
        
        gsap.to("#boot-reticle", { x: (Math.random()-0.5)*10, y: (Math.random()-0.5)*10, duration: 0.1 });
        
        i++;
      } else {
        clearInterval(interval);
        if (bootStatusRef.current) {
          bootStatusRef.current.textContent = `SYSTEM_CHECK: 100% - SUCCESS`;
        }
        showSystemOnline();
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div id="boot-sequence" ref={bootSequenceRef}>
      <div className="boot-reticle" id="boot-reticle">
        <div className="w-32 h-32 border-4 border-cyberYellow/20 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 border-t-4 border-cyberYellow rounded-full animate-spin"></div>
          <div className="text-cyberYellow text-[12px] font-black tracking-widest animate-pulse">INIT</div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" id="stream-container" ref={streamContainerRef} ></div>
      <div className="terminal-output mt-48 px-6" id="terminal-text" ref={terminalOutputRef}></div>
      <div className="absolute bottom-10 left-10 text-[10px] opacity-40 font-mono" id="boot-status" ref={bootStatusRef}>SYSTEM_CHECK: 0%</div>
      <div className="mt-8 text-cyberYellow font-black text-3xl tracking-[0.8em] hidden" id="system-online-alert" ref={systemOnlineAlertRef}>
        NEOFUTURE_ACTIVE
      </div>
    </div>
  );
};

export default BootSequence;
