'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function PricingOldCTA() {
  return (
    <section className="bg-[#F8F9FB] py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BD5] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Available for work</span>
        </motion.div>

        {/* Main Typed Headline */}
        <div className="text-center max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl md:text-8xl font-black text-[#1a1a1a] tracking-tighter leading-[0.9] uppercase"
          >
            We can dedicate<br />
            <span className="pricing-script-text text-[#5B4BD5] lowercase px-4 tracking-normal italic inline-block -rotate-3 mb-2">
              maximum
            </span>
            attention to<br />
            your project because<br />
            we only take on<br />
            <span className="pricing-script-text text-[#5B4BD5] lowercase px-4 tracking-normal italic inline-block -rotate-3 mb-2">
              2 projects
            </span>
            per month
          </motion.h2>
        </div>

        {/* Button CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#5B4BD5] text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-[#4a3bc2] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(91,75,213,0.3)] shadow-lg shadow-gray-200"
          >
            Start a new project
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight size={14} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
