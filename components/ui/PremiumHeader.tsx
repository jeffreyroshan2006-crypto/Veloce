'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import Link from 'next/link';

export function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Process', 'Security', 'Portfolio', 'Pricing', 'Contact'];

  return (
    <>
      {/* Upper Header Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        className={`fixed top-8 left-1/2 z-[220] flex items-center justify-between px-8 py-4 rounded-full transition-all duration-700 w-[95%] max-w-5xl ${
          isMenuOpen 
            ? 'bg-white shadow-xl' 
            : isScrolled 
              ? 'bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100' 
              : 'bg-white shadow-xl border border-gray-50'
        }`}
      >
        {/* Left: Hamburger / Close Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 group cursor-pointer w-8 h-8 items-start justify-center"
        >
          <motion.div 
            animate={isMenuOpen ? { rotate: 45, y: 4, width: 32 } : { rotate: 0, y: 0, width: 32 }}
            className="h-[1.5px] bg-black transition-all duration-500" 
          />
          <motion.div 
            animate={isMenuOpen ? { rotate: -45, y: -4, width: 32 } : { rotate: 0, y: 0, width: 20 }}
            className="h-[1.5px] bg-black transition-all duration-500" 
          />
        </button>

        {/* Center: Brand Identity */}
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 md:gap-4 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 group-hover:scale-110 transition-transform duration-500">
             <img src="/logo.png" alt="VELOCE" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span className="text-lg font-black tracking-tight text-black leading-none uppercase">VELOCE</span>
            <span className="hidden sm:block text-[9px] font-bold tracking-[0.2em] text-black/30 uppercase border-l border-gray-200 pl-3">WORLD CLASS DIGITAL ECOSYSTEM</span>
          </div>
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase">
            <span className="text-black hover:text-[#fb923c] cursor-pointer transition-colors">EN</span>
            <span className="text-black/30 hover:text-black cursor-pointer transition-colors">FR</span>
          </div>

          <MagneticButton>
            <button className="bg-[#facc15] hover:bg-black hover:text-white text-black text-[10px] font-black tracking-widest px-8 py-3 rounded-full transition-all duration-500 uppercase shadow-lg shadow-yellow-500/10 active:scale-95">
              Start Project
            </button>
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[210] bg-white flex flex-col items-center justify-center pt-32 pb-12 px-10 overflow-hidden select-none"
          >
            <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-20 h-full relative z-10 px-6">
              
              {/* LEFT COLUMN: Navigation Links (Vertically Centered) */}
              <div className="flex flex-col items-start justify-center gap-2 md:gap-4 h-full">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                  >
                    <Link 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[8vh] md:text-[11vh] font-black tracking-tighter leading-[0.85] uppercase transition-all duration-500 hover:pl-10 text-black hover:text-uptic-orange"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT COLUMN: Branding & Info (Properly Arranged) */}
              <div className="flex flex-col justify-center items-center lg:items-end h-full">
                {/* Unified Branding Block */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex flex-col items-center lg:items-end w-full"
                >
                  {/* Digital Ecosystem Logo */}
                  <div className="relative group mb-10">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full group-hover:bg-blue-500/40 transition-colors duration-700" />
                    <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-50 shadow-2xl transition-transform duration-700 transform hover:scale-105">
                      <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Brand Typography */}
                  <div className="text-center lg:text-right space-y-2">
                    <h3 className="text-6xl md:text-[9rem] font-black tracking-tighter text-black uppercase leading-[0.8]">VELOCE</h3>
                    <p className="text-[10px] md:text-[14px] font-black tracking-[0.5em] text-black/20 uppercase">WORLD CLASS DIGITAL ECOSYSTEM</p>
                  </div>

                  {/* Properly Aligned Info Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-20 w-full lg:w-auto">
                    <div className="lg:text-right">
                      <h4 className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] mb-4">Inquiry</h4>
                      <div className="space-y-1">
                        <a href="mailto:hello@veloce.design" className="text-2xl md:text-3xl font-bold text-black border-b-2 border-transparent hover:border-uptic-orange transition-all tracking-tighter block">hello@veloce.design</a>
                        <p className="text-lg md:text-xl font-bold text-black/40 tracking-tight">+380 93 123 45 67</p>
                      </div>
                    </div>

                    <div className="lg:text-right">
                      <h4 className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] mb-4">Portals</h4>
                      <div className="flex flex-wrap lg:justify-end gap-x-8 gap-y-4 text-[12px] font-black text-black uppercase tracking-widest">
                        {['Instagram', 'Behance', 'Dribbble'].map((social) => (
                          <a key={social} href="#" className="hover:text-uptic-orange transition-all relative group overflow-hidden">
                            {social}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-uptic-orange translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Extremely Faint Backdrop - Reduced Opacity further to prevent overlapping UI */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.015 }}
               transition={{ duration: 2 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60vw] font-black text-black pointer-events-none select-none z-0 uppercase tracking-tighter"
            >
              VELOCE
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
