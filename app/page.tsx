'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Globe, Zap, Shield, Layers, Sparkles, Smartphone, ExternalLink, Eye } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';
import { WebGLBackground } from '@/components/ui/WebGLBackground';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const services = [
    { 
      title: "Social Media Creative Pack", 
      desc: "Stop the scroll with custom-built, on-brand templates for Instagram, LinkedIn, and YouTube. Empower your team to produce world-class content in minutes, not hours.", 
      icon: <Smartphone className="w-8 h-8" />, 
      tags: ["Instagram", "LinkedIn", "YouTube Thumbnails"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      title: "Ad & Campaign Creatives", 
      desc: "High-impact static and animated ads engineered for maximum click-through rates. We optimize every pixel for clarity, brand recall, and conversion performance.", 
      icon: <Zap className="w-8 h-8" />, 
      tags: ["Social Ads", "Display Campaigns", "Motion Graphics"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    { 
      title: "Brand Template System", 
      desc: "A complete, ready-to-use library of flyers, pitch decks, and posters. Locked to your brand's DNA so every future design stays perfectly consistent.", 
      icon: <Layers className="w-8 h-8" />, 
      tags: ["Pitch Decks", "Brand Guidelines", "Asset Library"],
      color: "from-orange-500/20 to-yellow-500/20"
    },
    { 
      title: "Poster, Flyer & Print Design", 
      desc: "From event posters to business cards, we deliver print-ready assets that command attention in the physical world and translate seamlessly to digital.", 
      icon: <Globe className="w-8 h-8" />, 
      tags: ["Print-Ready", "Brochures", "Event Graphics"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    { 
      title: "Short Video & Promo Assets", 
      desc: "Dominate Reels, Shorts, and TikTok with high-velocity promotional clips. Clean motion, trending audio, and sharp text that drives engagement.", 
      icon: <Play className="w-8 h-8" />, 
      tags: ["Reels/TikTok", "Promo Clips", "Motion Design"],
      color: "from-red-500/20 to-orange-500/20"
    },
    { 
      title: "Festival & Seasonal Packs", 
      desc: "Pre-planned creative packs for launches and sale seasons. Plug in your offers and publish instantly with localized, high-conversion styling.", 
      icon: <Sparkles className="w-8 h-8" />, 
      tags: ["Seasonal Sales", "Launch Packs", "Holiday Creative"],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    { 
      title: "Brand Refresh & Upgrade", 
      desc: "We take your existing creatives and inject world-class layouts, typography, and color theory—elevating your brand without losing its core identity.", 
      icon: <Shield className="w-8 h-8" />, 
      tags: ["Creative Audit", "Visual Upgrade", "Consistency"],
      color: "from-emerald-500/20 to-teal-500/20"
    },
  ];

  const projects = [
    {
      title: "SIP & SOCIAL",
      category: "Social Platform",
      year: "2025",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
      color: "#F59E0B",
      description: "A social networking platform connecting beverage enthusiasts worldwide with real-time events and community features.",
      link: "https://sipnsocial08.github.io/Sip-Social/",
      tags: ["Community", "Events", "Social"]
    },
    {
      title: "GENZ CRICKET",
      category: "Sports Club",
      year: "2025",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1994&auto=format&fit=crop",
      color: "#10B981",
      description: "Modern cricket club website with dynamic content, live scores, and team management for the next generation.",
      link: "https://genzcricketclub-max.github.io/genzzz/",
      tags: ["Sports", "Live Scores", "Team"]
    },
    {
      title: "PHIZOOE REHAB",
      category: "Healthcare",
      year: "2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      color: "#3B82F6",
      description: "Professional rehabilitation therapy center with appointment booking and patient management system.",
      link: "https://contactphizeeosrehabtherapy-source.github.io/Phizooe/",
      tags: ["Healthcare", "Booking", "Therapy"]
    },
    {
      title: "NEURALIS",
      category: "AI Platform",
      year: "2026",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
      color: "#8B5CF6",
      description: "A revolutionary AI-driven interface for neural data visualization and predictive analytics.",
      link: "",
      tags: ["AI", "Data Viz", "Analytics"]
    },
    {
      title: "AETHER",
      category: "E-commerce",
      year: "2025",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
      color: "#EC4899",
      description: "Redefining luxury retail through immersive 3D shopping experiences and AR try-on features.",
      link: "",
      tags: ["E-commerce", "3D", "AR"]
    },
    {
      title: "ZENITH",
      category: "Real Estate",
      year: "2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      color: "#06B6D4",
      description: "Premium architectural visualization for the next generation of living with virtual tours.",
      link: "",
      tags: ["Real Estate", "3D Tours", "Premium"]
    }
  ];

  const stats = [
    { label: "Average CTR Increase", value: "45%" },
    { label: "Production Speed", value: "3x" },
    { label: "Client Retention", value: "98%" },
    { label: "Assets Delivered", value: "12k+" }
  ];

  const adExamples = [
    {
      title: "Social Creative Pack",
      type: "Instagram/LinkedIn",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#007FFF]/30 overflow-x-hidden">
      {/* WebGL Background */}
      <WebGLBackground />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#007FFF]/5 via-transparent to-transparent pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex justify-between items-center"
        >
          <a href="#home" className="text-2xl font-black tracking-tighter chromatic-text">VELOCE</a>
          
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-white/50">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#007FFF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-black hover:bg-[#007FFF] hover:text-white transition-all duration-300">
              START PROJECT <ArrowRight size={14} />
            </a>
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl w-full relative z-10 px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-[#007FFF]/30 text-[10px] font-black tracking-[0.3em] uppercase text-[#007FFF]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007FFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007FFF]"></span>
              </span>
              Available for Q3 2026 Projects
            </motion.div>

            <h1 className="text-[12vw] md:text-[15vw] font-black mb-6 tracking-tighter leading-[0.8] text-white">
              <TextReveal><span className="chromatic-text">VELOCE</span></TextReveal>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We craft high-performance digital ecosystems for brands that refuse to settle for the ordinary.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <a href="#contact" className="group relative px-10 py-5 rounded-full bg-[#007FFF] text-white font-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,127,255,0.4)] overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Elevate Your Brand <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <button className="flex items-center gap-3 px-10 py-5 rounded-full glass font-bold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#007FFF] transition-colors duration-300">
                  <Play size={16} fill="currentColor" />
                </div>
                Showreel 2026
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="relative z-10 bg-black/45 backdrop-blur-sm">
        {/* Services Section */}
        <section id="services" className="py-40 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
              <div>
                <div className="text-[#007FFF] font-black tracking-[0.5em] uppercase text-[10px] mb-6">Our Capabilities</div>
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8] mb-4">
                  <TextReveal>CREATIVE</TextReveal>
                  <TextReveal delay={0.1}><span className="text-white/10">ENGINEERING.</span></TextReveal>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="relative h-full glass p-12 rounded-[3rem] border-white/5 overflow-hidden bg-white/[0.01] flex flex-col justify-between min-h-[450px] transition-all duration-500 hover:border-[#007FFF]/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                        {service.icon}
                      </div>
                      <h3 className="text-4xl font-bold mb-6 text-white tracking-tighter group-hover:text-[#007FFF] transition-colors duration-300">{service.title}</h3>
                      <p className="text-white/40 leading-relaxed mb-10 group-hover:text-white/80 transition-colors duration-300 font-light text-lg">{service.desc}</p>
                    </div>
                    <div className="relative z-10 flex flex-wrap gap-3">
                      {service.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/30 group-hover:text-white transition-all duration-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Proof Section */}
        <section className="py-40 px-6 relative overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-24">
              <div className="text-[#007FFF] font-black tracking-[0.5em] uppercase text-[10px] mb-6">Live Proof</div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none mb-8">
                <TextReveal>MEASURABLE</TextReveal>
                <TextReveal delay={0.1}><span className="chromatic-text">VELOCITY.</span></TextReveal>
              </h2>
              <p className="text-white/40 text-xl max-w-2xl font-light">
                Real-world performance data from our latest creative deployments. We don't just deliver assets; we deliver <span className="text-white">growth</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {adExamples.map((example, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="group relative glass rounded-[2.5rem] overflow-hidden border-white/5 hover:border-[#007FFF]/30 transition-all duration-500"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img src={example.image} alt={example.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-[#007FFF] rounded-full animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{example.type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{example.title}</h3>
                      <div className="inline-block px-4 py-2 rounded-full bg-[#007FFF] text-white text-xs font-black tracking-wider">
                        {example.benefit}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-24">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section - Premium Redesigned */}
        <section id="portfolio" className="relative py-40 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#007FFF]/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <div className="text-[#007FFF] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Selected Works</div>
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8] mb-4">
                  <TextReveal>MOVING</TextReveal>
                  <TextReveal delay={0.1}><span className="text-white/20">BOUNDARIES.</span></TextReveal>
                </h2>
              </div>
              <div className="flex flex-col gap-6 items-start md:items-end">
                <p className="text-white/40 text-lg max-w-xs font-light border-l border-[#007FFF]/30 pl-6 mb-4">
                  A curated selection of digital artifacts that redefine excellence.
                </p>
                <button onClick={() => setIsPortfolioModalOpen(true)} className="group flex items-center gap-3 px-8 py-4 rounded-full glass border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  View Full Portfolio <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Premium Portfolio Grid */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div 
                    className="relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer"
                    style={{ 
                      boxShadow: hoveredProject === i ? `0 25px 50px -12px ${project.color}40` : 'none',
                      transition: 'box-shadow 0.5s ease'
                    }}
                  >
                    {/* Image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Animated Border */}
                    <div 
                      className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        boxShadow: `inset 0 0 0 2px ${project.color}`,
                      }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      {/* Top Section */}
                      <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                          {project.tags.map((tag, j) => (
                            <span 
                              key={j} 
                              className="text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-white/40 font-mono text-sm">{project.year}</span>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div 
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{project.category}</span>
                        </div>
                        
                        <h3 
                          className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 transition-colors duration-300"
                          style={{ color: hoveredProject === i ? project.color : 'white' }}
                        >
                          {project.title}
                        </h3>
                        
                        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                          {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                              style={{ 
                                backgroundColor: project.color,
                                color: 'white'
                              }}
                            >
                              <Eye size={14} />
                              View Live Site
                            </a>
                          )}
                          <button 
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                          >
                            <ExternalLink size={14} />
                            Case Study
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div 
                      className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="glass p-12 md:p-24 rounded-[4rem] border-white/10 relative overflow-hidden">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-[#007FFF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(0,127,255,0.4)]">
                    <Zap size={40} className="text-white" />
                  </div>
                  <h2 className="text-5xl font-bold text-white mb-6 tracking-tighter">IGNITION CONFIRMED.</h2>
                  <p className="text-white/50 text-xl font-light mb-10">Expect a response within 4 hours.</p>
                  <button onClick={() => setFormStatus('idle')} className="px-10 py-4 rounded-full glass border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">Send Another Brief</button>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-16">
                    <div className="text-[#007FFF] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Get in Touch</div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                      <TextReveal>READY TO</TextReveal>
                      <TextReveal delay={0.1}><span className="text-white/20">ACCELERATE?</span></TextReveal>
                    </h2>
                  </div>
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <input required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:border-[#007FFF] transition-all duration-300" placeholder="Your Name" />
                      <input required type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:border-[#007FFF] transition-all duration-300" placeholder="email@company.com" />
                    </div>
                    <textarea required rows={5} className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-[#007FFF] transition-all duration-300 resize-none" placeholder="Tell us about your vision..." />
                    <button disabled={formStatus === 'submitting'} className="w-full py-6 rounded-3xl bg-white text-black font-black text-xl hover:bg-[#007FFF] hover:text-white transition-all duration-300 flex items-center justify-center gap-4 group">
                      {formStatus === 'submitting' ? <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" /> : <>INITIATE PROJECT <ArrowRight className="group-hover:translate-x-2 transition-transform" /></>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black tracking-tighter chromatic-text">VELOCE</div>
            <div className="flex gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
              <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Dribbble</a>
            </div>
            <div className="text-sm text-white/20">© 2026 VELOCE Studio. All rights reserved.</div>
          </div>
        </footer>
      </div>

      {/* Portfolio Modal */}
      <AnimatePresence>
        {isPortfolioModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl p-6 md:p-20 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">PROJECT ARCHIVE</h2>
                <button 
                  onClick={() => setIsPortfolioModalOpen(false)}
                  className="w-16 h-16 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Zap className="w-8 h-8 rotate-45" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 border border-white/10">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-[#007FFF] hover:text-white transition-all duration-300"
                          >
                            <Eye size={16} />
                            View Live Site
                          </a>
                        )}
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm hover:bg-white hover:text-black transition-all duration-300">
                          <ExternalLink size={16} />
                          Case Study
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[#007FFF] text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</div>
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                      </div>
                      <div className="text-white/20 font-mono">0{i + 1}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
