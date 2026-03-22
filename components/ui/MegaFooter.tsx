'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const contactLinks = [
  {
    name: 'Instagram',
    handle: '@the.veloce',
    href: 'https://instagram.com/the.veloce',
    color: 'linear-gradient(45deg, #f9ce34 10%, #ee2a7b 50%, #6228d7 90%)',
    icon: <Instagram className="w-full h-full" strokeWidth={1} />,
  },
  {
    name: 'WhatsApp',
    handle: 'Chat with us',
    href: 'https://wa.me/veloce',
    color: '#25D366',
    icon: <MessageCircle className="w-full h-full" strokeWidth={1} />,
  },
  {
    name: 'Email',
    handle: 'hello@veloce.design',
    href: 'mailto:hello@veloce.design',
    color: '#5B4BD5',
    icon: <Mail className="w-full h-full" strokeWidth={1} />,
  },
];

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Security', href: '/security' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Catalog', href: '/catalog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export function MegaFooter() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Background color logic based on hover
  const getBgColor = () => {
    if (hoveredIndex === null) return '#0E1117'; // Default dark
    return 'transparent'; // Background handled by style
  };

  return (
    <footer
      className="relative w-full transition-all duration-500 ease-in-out py-20 pb-12 px-2 md:px-6 overflow-hidden"
      style={{
        background: hoveredIndex !== null ? contactLinks[hoveredIndex].color : '#0E1117'
      }}
    >

      {/* Immersive Contact Box */}
      <div className="max-w-[1440px] mx-auto relative z-10 bg-transparent rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 flex flex-col min-h-[85vh] justify-between overflow-hidden">

        {/* Top Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/60 text-lg md:text-2xl font-medium tracking-tight mb-2"
          >
            Have a vision or a question? Don't hesitate—get a free consultation call from our team and let's build something remarkable.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-5xl font-bold tracking-tighter"
          >
            Contact us using the contact details below
          </motion.h2>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 flex-grow">

          {/* Left Text Navigation */}
          <div className="flex flex-col items-start gap-4 md:gap-6 z-20">
            {contactLinks.map((link, i) => (
              <div
                key={link.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer group"
              >
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter transition-all duration-500 ${
                    hoveredIndex !== null && hoveredIndex !== i
                      ? 'text-white/20 blur-md scale-95'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
                
                {/* Handle reveal on hover */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 -bottom-6 text-white/50 text-sm md:text-lg font-bold tracking-widest uppercase"
                    >
                      {link.handle}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Icon Display */}
          <div className="relative w-full lg:w-[500px] h-[300px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 100 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10, y: -50 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] text-white/90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                  {hoveredIndex !== null && contactLinks[hoveredIndex]?.icon}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation Map */}
        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12 mt-20">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6">
            {footerNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">© 2026 VELOCE — All rights reserved.</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/10 italic">Engineering high-velocity digital ecosystems from INDIA</p>
          </div>
        </div>
      </div>

      {/* Extreme Bottom Background Logo */}
      <div className="absolute bottom-0 left-0 right-0 opacity-[0.03] pointer-events-none select-none z-0">
        <h3 className="text-[30vw] font-black text-white leading-none tracking-[2cm] text-center uppercase translate-y-1/2">
          VELOCE
        </h3>
      </div>
    </footer>
  );
}
