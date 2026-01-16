'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Background Customization State
  const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop');
  const [brightness, setBrightness] = useState(85); // Increased from 60 to 85
  const [contrast, setContrast] = useState(100);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#007FFF]/30 overflow-x-hidden">
      {/* Custom Background Image Layer */}
      <div 
        className="fixed inset-0 -z-20 transition-all duration-500" 
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: `brightness(${brightness}%) contrast(${contrast}%)`
        }} 
      />

      {/* Settings Toggle Button */}
      <button 
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className="fixed bottom-8 right-8 z-[70] w-14 h-14 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform border-[#007FFF]/30 shadow-[0_0_20px_rgba(0,127,255,0.2)]"
        aria-label="Customization Settings"
      >
        <svg className="w-6 h-6 text-[#007FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Settings Panel */}
      <div className={`fixed bottom-24 right-8 z-[70] w-80 glass p-6 rounded-3xl border-[#007FFF]/20 transition-all duration-500 ${isSettingsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
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
              setBgImage('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop');
              setBrightness(60);
              setContrast(100);
            }}
            className="w-full py-2 rounded-xl glass-dark border border-white/10 text-xs font-bold hover:bg-white/5 transition-colors"
          >
            Reset to Default
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[45px] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-black/20 border-l border-white/10 p-10 flex flex-col gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <button 
            className="self-end text-white/50 hover:text-white p-2" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <nav className="flex flex-col gap-6 text-2xl font-bold">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#007FFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#007FFF] rounded-lg" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </nav>
        </div>
      </div>

      {/* Futuristic Background Overlay Layer */}
      <div className="fixed inset-0 -z-10 mesh-gradient">
        <div className="absolute inset-0 futuristic-grid opacity-30" />
        
        {/* Neural Network Nodes */}
        <div className="neural-node top-[15%] left-[25%]" style={{ animationDelay: '0s' }} />
        <div className="neural-node top-[45%] left-[15%]" style={{ animationDelay: '1s' }} />
        <div className="neural-node top-[75%] left-[35%]" style={{ animationDelay: '2s' }} />
        <div className="neural-node top-[25%] right-[25%]" style={{ animationDelay: '1.5s' }} />
        <div className="neural-node top-[65%] right-[15%]" style={{ animationDelay: '0.5s' }} />

        {/* Horizontal Data Streams */}
        <div className="data-line top-[20%] left-0" style={{ animationDelay: '0s' }} />
        <div className="data-line top-[50%] left-0" style={{ animationDelay: '3s' }} />
        <div className="data-line top-[80%] left-0" style={{ animationDelay: '6s' }} />
        <div className="data-line top-[35%] right-0" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }} />
        <div className="data-line top-[65%] right-0" style={{ animationDelay: '4.5s', animationDirection: 'reverse' }} />

        {/* Orbital Rings around Floating Shapes */}
        <div className="absolute top-[10%] left-[5%] w-96 h-96 flex items-center justify-center">
          <div className="orbital-ring w-[120%] h-[120%] animate-[spin_20s_linear_infinite]" />
          <div className="orbital-ring w-[140%] h-[140%] animate-[spin_30s_linear_infinite_reverse] opacity-50" />
        </div>
        
        {/* Floating Abstract Shapes */}
        <div className="floating-shape w-96 h-96 top-[10%] left-[5%] opacity-20" style={{ animationDelay: '0s' }} />
        <div className="floating-shape w-[500px] h-[500px] bottom-[10%] right-[5%] opacity-10" style={{ animationDelay: '-5s', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
        <div className="floating-shape w-64 h-64 top-[40%] right-[15%] opacity-15" style={{ animationDelay: '-10s', borderRadius: '50%' }} />

        {/* Animated Light Streaks */}
        <div className="glow-line left-[20%] delay-0 opacity-20" />
        <div className="glow-line left-[50%] delay-[4s] opacity-20" />
        <div className="glow-line left-[80%] delay-[2s] opacity-20" />
        
        {/* Removed Floating Blobs with blur-[150px] */}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4" role="navigation" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center border-white/5">
          <a href="#home" className="text-2xl font-black tracking-tighter chromatic-text focus:outline-none" aria-label="VELOCE Home">VELOCE</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors focus:text-white focus:outline-none">{item}</a>
            ))}
          </div>

          <button className="hidden md:block px-5 py-2 rounded-xl glass-dark text-sm font-bold hover:bg-white/10 transition-all border border-white/10 focus:ring-2 focus:ring-[#007FFF] outline-none">
            Start Project
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 reveal" aria-labelledby="hero-heading">
        <div className="max-w-5xl w-full glass p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden border-white/10 shadow-[0_0_100px_rgba(0,127,255,0.1)]">
          {/* Decorative Background Elements for Hero */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/10 rounded-full opacity-10 animate-ping" style={{ animationDuration: '4s' }} />
          
          {/* Removed Inner Glow Effects with blur-[80px] */}
          
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass-dark border border-[#007FFF]/30 text-xs font-bold tracking-[0.2em] uppercase text-[#007FFF] animate-pulse">
              Next-Gen Web Agency
            </div>
            <h1 id="hero-heading" className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-[#007FFF] to-[#FFF0F5]/40">
              VELOCE
            </h1>
            <p className="text-xl md:text-3xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              We engineer <span className="text-[#007FFF] font-semibold italic">high-velocity</span> digital experiences that redefine the boundaries of the modern web.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-5 rounded-2xl bg-white text-black font-black text-xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
              <button className="px-10 py-5 rounded-2xl glass-dark font-bold text-xl hover:bg-white/10 transition-all border border-white/20 backdrop-blur-xl">
                Explore Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto" aria-labelledby="services-heading">
        <div className="mb-16 text-center reveal">
          <h2 id="services-heading" className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#007FFF]">Our Expertise</h2>
          <p className="text-[#007FFF]/50">Cutting-edge solutions for modern businesses.</p>
        </div>
        <div className="bento-grid">
          {[
            { title: "Custom UI/UX", desc: "Immersive interfaces that convert.", icon: "🎨", size: "large" },
            { title: "Full-Stack Dev", desc: "Scalable, robust architectures.", icon: "⚙️" },
            { title: "AI Integration", desc: "Smart features for the future.", icon: "🤖" },
            { title: "E-commerce", desc: "High-performance digital stores.", icon: "🛍️" },
            { title: "Performance", desc: "Lightning fast load times.", icon: "⚡", size: "large" },
            { title: "Mobile-First", desc: "Seamless on every device.", icon: "📱" },
          ].map((service, i) => (
            <div key={i} className={`glass chromatic-shine p-8 rounded-3xl hover:translate-y-[-8px] group reveal ${service.size === 'large' ? 'bento-item-large' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block drop-shadow-[0_0_15px_rgba(0,127,255,0.4)]">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#007FFF] transition-colors">{service.title}</h3>
              <p className="text-[#FFF0F5]/60">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 bg-[#007FFF]/5" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 reveal">
            <div>
              <h2 id="portfolio-heading" className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#007FFF]">Portfolio</h2>
              <p className="text-[#007FFF]/50">Selected works from our studio.</p>
            </div>
            <button className="hidden md:block text-[#007FFF] font-medium hover:text-white transition-colors">View All Projects →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <div key={item} className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass chromatic-shine reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1025]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-8">
                  <h4 className="text-xl font-bold text-white">Project Name {item}</h4>
                  <p className="text-sm text-[#DECFEE]/70 mb-4">Web Application • 2024</p>
                  <button className="w-fit px-4 py-2 rounded-lg glass text-xs font-bold border-[#987FFE]/30 hover:bg-[#987FFE]/20">View Case Study</button>
                </div>
                <div className="absolute inset-0 bg-[#987FFE]/10 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Why VELOCE?</h2>
            <div className="space-y-8">
              {[
                { year: "2021", title: "Founded", desc: "Started with a vision for better web." },
                { year: "2023", title: "100+ Projects", desc: "Delivered excellence across industries." },
                { year: "2025", title: "Global Reach", desc: "Partnering with brands worldwide." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-cyan-400 font-mono font-bold pt-1">{item.year}</div>
                  <div className="glass p-6 rounded-2xl flex-1">
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
            <div className="aspect-square glass rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 liquid-bg opacity-10" />
              <div className="text-center z-10">
                <div className="text-7xl font-black mb-2">99%</div>
                <div className="text-white/50 uppercase tracking-widest text-sm">Client Retention</div>
              </div>
            </div>
            {/* Floating Orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 glass rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto glass p-12 rounded-[3rem] relative overflow-hidden reveal">
          {formStatus === 'success' ? (
            <div className="text-center py-20 success-message" role="alert">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl font-bold mb-4">Message Sent!</h2>
              <p className="text-[#FFF0F5]/60">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-8 px-8 py-3 rounded-xl glass border-[#007FFF]/30 text-sm font-bold"
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <h2 id="contact-heading" className="text-4xl font-bold mb-8 text-center">Let's Build Something</h2>
              <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact Form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/50 ml-2">Name</label>
                    <input required id="name" name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#007FFF]/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/50 ml-2">Email</label>
                    <input required id="email" name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#007FFF]/50 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/50 ml-2">Message</label>
                  <textarea required id="message" name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#007FFF]/50 transition-colors" placeholder="Tell us about your project..." />
                </div>
                <button 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-[#FFF0F5] transition-all disabled:opacity-50 relative overflow-hidden group"
                >
                  <span className={formStatus === 'submitting' ? 'opacity-0' : 'opacity-100'}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </span>
                  {formStatus === 'submitting' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                    </div>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter chromatic-text">VELOCE</div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Dribbble</a>
          </div>
          <div className="text-sm text-white/20">
            © 2026 VELOCE Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
