import React, { useEffect, useRef } from 'react';

const CanvasParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: -500, y: -500 };
    let animationFrameId;

    const initParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const particleCount = window.innerWidth < 768 ? 50 : 150;
      for(let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          len: Math.random() * 20 + 5,
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: Math.random() > 0.9 ? '#ff003c' : (Math.random() > 0.9 ? '#00f0ff' : '#fffb00')
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.y += p.speed;
        if(p.y > canvas.height) p.y = -30;
        
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        let driftX = 0;
        let extraLen = 0;

        if(dist < 300) {
          const force = (1 - dist/300);
          driftX = (dx / dist) * -30 * force;
          extraLen = force * 20;
          
          if(dist < 100 && Math.random() > 0.95) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.3 * force;
            ctx.moveTo(p.x + driftX, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = p.opacity;
        ctx.moveTo(p.x + driftX, p.y);
        ctx.lineTo(p.x + driftX, p.y + p.len + extraLen);
        ctx.stroke();
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', initParticles);
    window.addEventListener('mousemove', handleMouseMove);

    initParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" ref={canvasRef}></canvas>;
};

export default CanvasParticles;
