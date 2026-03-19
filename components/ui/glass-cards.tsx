import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const cardData = [
  {
    id: 1,
    title: "01. Research and Analysis",
    description: "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
    color: "rgba(59, 130, 246, 0.4)" // blue transparency adjusted for stack look
  },
  {
    id: 2,
    title: "02. Wireframing and Prototyping",
    description: "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design.",
    color: "rgba(139, 92, 246, 0.4)" // purple
  },
  {
    id: 3,
    title: "03. Design Creation",
    description: "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    color: "rgba(236, 72, 153, 0.4)" // pink
  },
  {
    id: 4,
    title: "04. Development and Testing",
    description: "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
    color: "rgba(34, 197, 94, 0.4)" // green
  },
  {
    id: 5,
    title: "05. Launch and Support",
    description: "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
    color: "rgba(245, 158, 11, 0.4)" // yellow
  }
];

export const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${cardData.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        if (index === 0) return; // First card is already in place

        tl.fromTo(card,
          {
            y: '100vh', // Start off-screen
            scale: 0.9,
            opacity: 0
          },
          {
            // This pulls it up to its natural CSS 'top' position
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          },
          index * 0.5 // Staggered start time
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main style={{ background: 'transparent' }} className="relative z-10 w-full overflow-hidden">
      {/* Hero Section */}
      <section style={{
        height: '70vh',
        width: '100%',
        display: 'grid',
        placeContent: 'center',
        position: 'relative',
        color: '#ffffff'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                    `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
        }} />
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-center leading-[1.1] px-8 relative z-10 tracking-tighter">
          Our Proven <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] to-purple-500">Process</span>
        </h1>
        <p className="text-center text-white/60 mt-6 text-xl mx-auto block z-10 font-bold uppercase tracking-widest text-[10px]">
          Scroll down to explore 👇
        </p>
      </section>

      {/* Exact GSAP Pinned Cards Section matching demo behavior */}
      <div
        ref={containerRef}
        className="w-full h-screen flex items-center justify-center overflow-hidden bg-transparent perspective-[1200px]"
      >
        <div className="relative w-[90%] max-w-[1100px] h-[450px]">
          {cardData.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="absolute left-0 w-full h-full rounded-[32px] border border-white/10 shadow-2xl overflow-hidden glass-card"
              style={{
                background: `linear-gradient(135deg, ${card.color}, rgba(255,255,255,0.02))`,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                // IMPORTANT: Fixed Top Offset creating the visible overlap tabs
                top: `${i * 30}px`,
                zIndex: i,
                transformStyle: 'preserve-3d',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              {/* Enhanced Glass reflection overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
                pointerEvents: 'none',
              }} />

              {/* Glass shine effect */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                right: '10px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                borderRadius: '1px',
                pointerEvents: 'none'
              }} />

              {/* Frosted glass texture */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 1px, transparent 2px),
                    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04) 1px, transparent 2px),
                    radial-gradient(circle at 40% 80%, rgba(255,255,255,0.03) 1px, transparent 2px)
                `,
                backgroundSize: '30px 30px, 25px 25px, 35px 35px',
                pointerEvents: 'none',
              }} />

              {/* Actual Text Rendered Inside Glass Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-center px-10 md:px-16 lg:px-24">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">{card.title}</h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl drop-shadow-md">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
