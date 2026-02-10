'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useInView, PanInfo } from 'framer-motion';
import { ArrowRight, Play, Globe, Zap, Shield, Cpu, Layers, Sparkles, Smartphone } from 'lucide-react';
import Script from 'next/script';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Background Customization State
  const [bgImage, setBgImage] = useState('https://lh3.googleusercontent.com/d/1dHeOC1Nk2uENkYpZsoR4BMq6Ap2kVhEC=s0');
  const [brightness, setBrightness] = useState(85);
  const [contrast, setContrast] = useState(100);
  const [bgOpacity, setBgOpacity] = useState(1);

  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolioRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [step, setStep] = useState(0);
  
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 35, mass: 0.5 });

  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["start end", "end start"]
  });

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const heroY = useTransform(scrollY, [0, 400], [0, 100]);
  
  const services = [
    { 
      title: "Social Media Creative Pack", 
      desc: "Stop the scroll with custom-built, on-brand templates for Instagram, LinkedIn, and YouTube. Empower your team to produce world-class content in minutes, not hours.", 
      icon: <Smartphone className="w-8 h-8" />, 
      tags: ["Instagram", "LinkedIn", "YouTube Thumbnails"],
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "#007FFF"
    },
    { 
      title: "Ad & Campaign Creatives", 
      desc: "High-impact static and animated ads engineered for maximum click-through rates. We optimize every pixel for clarity, brand recall, and conversion performance.", 
      icon: <Zap className="w-8 h-8" />, 
      tags: ["Social Ads", "Display Campaigns", "Motion Graphics"],
      color: "from-purple-500/20 to-pink-500/20",
      accent: "#BF40BF"
    },
    { 
      title: "Brand Template System", 
      desc: "A complete, ready-to-use library of flyers, pitch decks, and posters. Locked to your brand's DNA so every future design stays perfectly consistent.", 
      icon: <Layers className="w-8 h-8" />, 
      tags: ["Pitch Decks", "Brand Guidelines", "Asset Library"],
      color: "from-orange-500/20 to-yellow-500/20",
      accent: "#FFA500"
    },
    { 
      title: "Poster, Flyer & Print Design", 
      desc: "From event posters to business cards, we deliver print-ready assets that command attention in the physical world and translate seamlessly to digital.", 
      icon: <Globe className="w-8 h-8" />, 
      tags: ["Print-Ready", "Brochures", "Event Graphics"],
      color: "from-green-500/20 to-emerald-500/20",
      accent: "#00FF7F"
    },
    { 
      title: "Short Video & Promo Assets", 
      desc: "Dominate Reels, Shorts, and TikTok with high-velocity promotional clips. Clean motion, trending audio, and sharp text that drives engagement.", 
      icon: <Play className="w-8 h-8" />, 
      tags: ["Reels/TikTok", "Promo Clips", "Motion Design"],
      color: "from-red-500/20 to-orange-500/20",
      accent: "#FF4500"
    },
    { 
      title: "Festival & Seasonal Packs", 
      desc: "Pre-planned creative packs for launches and sale seasons. Plug in your offers and publish instantly with localized, high-conversion styling.", 
      icon: <Sparkles className="w-8 h-8" />, 
      tags: ["Seasonal Sales", "Launch Packs", "Holiday Creative"],
      color: "from-cyan-500/20 to-blue-500/20",
      accent: "#00CED1"
    },
    { 
      title: "Brand Refresh & Upgrade", 
      desc: "We take your existing creatives and inject world-class layouts, typography, and color theory—elevating your brand without its core identity.", 
      icon: <Shield className="w-8 h-8" />, 
      tags: ["Creative Audit", "Visual Upgrade", "Consistency"],
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "#3EB489"
    },
  ];

  const [tilt, setTilt] = useState<{ x: number; y: number; id: number | null }>({ x: 0, y: 0, id: null });
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: xPos * 20, y: yPos * -20, id });
  };

  const projects = [
    {
      title: "NEURALIS",
      category: "AI Platform • 2026",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
      color: "from-blue-600 to-cyan-400",
      description: "A revolutionary AI-driven interface for neural data visualization."
    },
    {
      title: "AETHER",
      category: "E-commerce • 2025",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
      color: "from-rose-600 to-orange-400",
      description: "Redefining luxury retail through immersive 3D shopping experiences."
    },
    {
      title: "KINETIC",
      category: "SaaS Dashboard • 2026",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      color: "from-emerald-600 to-teal-400",
      description: "High-velocity data processing for global logistics enterprises."
    },
    {
      title: "ORBITAL",
      category: "Fintech • 2025",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop",
      color: "from-violet-600 to-fuchsia-400",
      description: "The next generation of decentralized finance management."
    },
    {
      title: "VORTEX",
      category: "Web3 • 2026",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=2070&auto=format&fit=crop",
      color: "from-cyan-600 to-blue-400",
      description: "Decentralized liquidity protocol with real-time visualization."
    },
    {
      title: "ZENITH",
      category: "Real Estate • 2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      color: "from-amber-600 to-orange-400",
      description: "Premium architectural visualization for the next generation of living."
    }
  ];

  const adExamples = [
    {
      title: "Social Creative Pack",
      type: "Instagram/LinkedIn",
      image: "https://images.unsplash.com/photo-1611162617cy-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      benefit: "3x Faster Content Production"
    },
    {
      title: "Campaign Ad",
      type: "High-Conversion Static",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      benefit: "+45% Click-Through Rate"
    },
    {
      title: "Short Video Promo",
      type: "Reels/TikTok Vertical",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1932&auto=format&fit=crop",
      benefit: "Viral Brand Recall"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const opacity = Math.max(0, Math.min(1, rect.top / (window.innerHeight * 0.8)));
        setBgOpacity(opacity);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const updateStep = useCallback(() => {
    if (firstCardRef.current && secondCardRef.current) {
      const firstRect = firstCardRef.current.getBoundingClientRect();
      const secondRect = secondCardRef.current.getBoundingClientRect();
      const measuredStep = Math.abs(secondRect.left - firstRect.left);
      if (measuredStep > 0) {
        setStep(measuredStep);
        return measuredStep;
      }
    }
    if (firstCardRef.current) {
      const cardWidth = firstCardRef.current.offsetWidth;
      const parent = firstCardRef.current.parentElement;
      const gap = parent ? parseInt(window.getComputedStyle(parent).gap) || 48 : 48;
      const fallback = cardWidth + gap;
      setStep(fallback);
      return fallback;
    }
    return 0;
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      updateStep();
    });
    
    if (constraintsRef.current) observer.observe(constraintsRef.current);
    if (firstCardRef.current) observer.observe(firstCardRef.current);
    
    const timer = setTimeout(updateStep, 150);
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [updateStep, projects.length]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    isDragging.current = false;
    const currentStep = updateStep() || step;
    if (currentStep === 0) return;
    
    const currentX = x.get();
    const velocity = info.velocity.x;
    const predictedX = currentX + velocity * 0.12; 
    
    const nearestIndex = Math.round(Math.abs(predictedX) / currentStep);
    const clampedIndex = Math.max(0, Math.min(nearestIndex, projects.length - 1));
    
    setActiveIndex(clampedIndex);
    x.set(-clampedIndex * currentStep);
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (!isDragging.current) {
        const currentStep = step || updateStep();
        if (currentStep !== 0) {
          const targetX = -latest * (projects.length - 1) * currentStep;
          x.set(targetX);
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, x, projects.length, step, updateStep]);

  const dragConstraints = useMemo(() => ({
    left: -(projects.length - 1) * (step || 1000),
    right: 0
  }), [step, projects.length]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#007FFF]/30 overflow-x-hidden">
      <div className="fixed inset-0 -z-50 bg-black" />
      
      <div
        className="fixed inset-0 -z-40 transition-all duration-300"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: `brightness(${brightness}%) contrast(${contrast}%)`,
          opacity: bgOpacity
        }}
      />

      <div 
        data-us-project="b8oiIiLJeUCUdCx3azAA" 
        className="fixed inset-0 -z-30 w-full h-full pointer-events-none"
      />

      <Script 
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js" 
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.UnicornStudio) {
            // @ts-ignore
            window.UnicornStudio.init();
          }
        }}
      />
      
      <div className="fixed inset-0 -z-20 bg-[#007FFF]/20 pointer-events-none" />

      <button
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className="fixed bottom-8 right-8 z-[70] w-14 h-14 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform border-[#007FFF]/30 shadow-[0_0_20px_rgba(0,127,255,0.4)]"
        aria-label="Customization Settings"
      >
        <Zap className="w-6 h-6 text-[#007FFF]" />
      </button>

      <div className={`fixed bottom-24 right-8 z-[70] w-80 glass p-6 rounded-3xl border border-[#007FFF]/20 transition-all duration-500 ${isSettingsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-[#007FFF] rounded-full animate-pulse" />
          Customization
        </h3>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40">Background URL</label>
            <input
              type="text"
              value={bgImage}
              onChange={(e) => setBgImage(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#007FFF]/50 transition-colors"
              placeholder="Paste image URL..."
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Brightness</label>
              <span className="text-xs text-[#007FFF]">{brightness}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(parseInt(e.target.value))}
              className="w-full accent-[#007FFF]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Contrast</label>
              <span className="text-xs text-[#007FFF]">{contrast}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(parseInt(e.target.value))}
              className="w-full accent-[#007FFF]"
            />
          </div>

          <button
            onClick={() => {
              setBgImage('https://lh3.googleusercontent.com/d/1dHeOC1Nk2uENkYpZsoR4BMq6Ap2kVhEC=s0');
              setBrightness(85);
              setContrast(100);
            }}
            className="w-full py-2 rounded-xl glass-dark border border-white/10 text-xs font-bold hover:bg-white/5 transition-colors"
          >
            Reset to Default
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[150] bg-black/40 backdrop-blur-[45px] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-black/20 border-l border-white/10 p-10 flex flex-col gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="self-end text-white/50 hover:text-white p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Zap className="w-8 h-8 rotate-45" />
          </button>
          <nav className="flex flex-col gap-6 text-2xl font-bold">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#007FFF] transition-colors" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </nav>
        </div>
      </div>

      <nav className="fixed top-0 w-full z-[100] px-6 py-10">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex justify-between items-center border-white/10"
        >
          <a href="#home" className="text-2xl font-black tracking-tighter chromatic-text">VELOCE</a>
          
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-white/50">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#007FFF] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-black hover:bg-[#007FFF] hover:text-white transition-all duration-500">
              START PROJECT <ArrowRight size={14} />
            </a>
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </motion.div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="max-w-7xl w-full relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-dark border border-[#007FFF]/30 text-[10px] font-black tracking-[0.3em] uppercase text-[#007FFF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007FFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007FFF]"></span>
              </span>
              Available for Q3 2026 Projects
            </div>

            <h1 className="text-[12vw] md:text-[10vw] font-black mb-6 tracking-tighter leading-[0.8] text-white mix-blend-difference">
              <span className="block">DIGITAL</span>
              <span className="block chromatic-text">VELOCITY</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We craft high-performance digital ecosystems for brands that refuse to settle for the ordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a href="#contact" className="group relative px-10 py-5 rounded-full bg-[#007FFF] text-white font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,127,255,0.4)] overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Elevate Your Brand <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <button className="flex items-center gap-3 px-10 py-5 rounded-full glass-dark font-bold text-lg hover:bg-white/10 transition-all border border-white/10 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#007FFF] transition-colors">
                  <Play size={16} fill="currentColor" />
                </div>
                Showreel 2026
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="py-40 px-6 relative overflow-hidden bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="reveal">
              <div className="text-[#007FFF] font-black tracking-[0.5em] uppercase text-[10px] mb-6">Our Capabilities</div>
              <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8] mb-4">
                CREATIVE <br />
                <span className="text-white/10">ENGINEERING.</span>
              </h2>
            </div>
            <div className="max-w-sm border-l-2 border-[#007FFF] pl-8 py-2">
              <p className="text-white/40 text-xl font-light leading-relaxed">
                We don't just design; we build <span className="text-white font-medium">visual systems</span> that scale your brand's impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                onMouseMove={(e) => handleTilt(e, i)}
                onMouseLeave={() => setTilt({ x: 0, y: 0, id: null })}
                className="group relative perspective-1000"
              >
                <motion.div
                  animate={{ 
                    rotateX: tilt.id === i ? tilt.y : 0,
                    rotateY: tilt.id === i ? tilt.x : 0,
                    scale: tilt.id === i ? 1.02 : 1
                  }}
                  className="relative h-full glass p-12 rounded-[3rem] border-white/5 overflow-hidden bg-white/[0.01] flex flex-col justify-between min-h-[450px]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                  <div className="relative z-10">
                    <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 text-white transition-all duration-700 group-hover:bg-white group-hover:text-black group-hover:rotate-[360deg]">
                      {service.icon}
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-white tracking-tighter group-hover:text-[#007FFF] transition-colors">{service.title}</h3>
                    <p className="text-white/40 leading-relaxed mb-10 group-hover:text-white/80 transition-colors font-light text-lg">{service.desc}</p>
                  </div>
                  <div className="relative z-10 flex flex-wrap gap-3">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/30 group-hover:text-white transition-all">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" ref={portfolioRef} className="relative bg-black py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="reveal">
              <div className="text-[#007FFF] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Selected Works</div>
              <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8] mb-4">
                MOVING <br />
                <span className="text-white/20">BOUNDARIES.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-6 items-start md:items-end">
              <p className="text-white/40 text-lg max-w-xs font-light border-l border-[#007FFF]/30 pl-6 mb-4">
                A curated selection of digital artifacts that redefine excellence.
              </p>
              <button onClick={() => setIsPortfolioModalOpen(true)} className="group flex items-center gap-3 px-8 py-4 rounded-full glass border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                View Full Portfolio <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div ref={constraintsRef} className="relative w-full overflow-visible cursor-grab active:cursor-grabbing touch-pan-y">
          <motion.div 
            drag="x"
            dragConstraints={dragConstraints}
            onDragEnd={handleDragEnd}
            style={{ x: springX }}
            className="flex gap-12 px-6 md:px-[10vw]"
          >
            {projects.map((project, i) => (
              <div key={i} ref={i === 0 ? firstCardRef : i === 1 ? secondCardRef : null} className="relative flex-shrink-0 w-[85vw] md:w-[55vw] group">
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 transition-all duration-700 group-hover:border-[#007FFF]/50">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="glass px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest text-white/80 border-white/10">{project.category}</div>
                      <div className="w-16 h-16 rounded-full glass flex items-center justify-center border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500 -rotate-45 group-hover:rotate-0">
                        <ArrowRight size={28} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6 group-hover:text-[#007FFF] transition-colors">{project.title}</h3>
                      <p className="text-white/60 text-lg md:text-xl font-light max-w-md leading-relaxed opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="glass p-12 md:p-24 rounded-[4rem] border-white/10 relative overflow-hidden">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-[#007FFF] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(0,127,255,0.4)]">
                  <Zap size={40} className="text-white" />
                </div>
                <h2 className="text-5xl font-bold text-white mb-6 tracking-tighter">IGNITION CONFIRMED.</h2>
                <p className="text-white/50 text-xl font-light mb-10">Expect a response within 4 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="px-10 py-4 rounded-full glass border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Send Another Brief</button>
              </div>
            ) : (
              <>
                <div className="text-center mb-16">
                  <div className="text-[#007FFF] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Get in Touch</div>
                  <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">READY TO <br /><span className="text-white/20">ACCELERATE?</span></h2>
                </div>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <input required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:border-[#007FFF] transition-all" placeholder="Your Name" />
                    <input required type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:border-[#007FFF] transition-all" placeholder="email@company.com" />
                  </div>
                  <textarea required rows={5} className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-[#007FFF] transition-all resize-none" placeholder="Tell us about your vision..." />
                  <button disabled={formStatus === 'submitting'} className="w-full py-6 rounded-3xl bg-white text-black font-black text-xl hover:bg-[#007FFF] hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group">
                    {formStatus === 'submitting' ? <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" /> : <>INITIATE PROJECT <ArrowRight className="group-hover:translate-x-2 transition-transform" /></>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter chromatic-text">VELOCE</div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Dribbble</a>
          </div>
          <div className="text-sm text-white/20">© 2026 VELOCE Studio. All rights reserved.</div>
        </div>
      </footer>

      <AnimatePresence>
        {isPortfolioModalOpen && (
         
