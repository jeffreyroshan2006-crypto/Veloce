'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-10 overflow-hidden"
        >
          {/* Large Background Identity */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute text-[40vw] font-black text-white pointer-events-none select-none tracking-tighter uppercase"
          >
            VELOCE
          </motion.div>

          <div className="relative z-10 w-full max-w-md flex flex-col items-center">
            {/* Logo and Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 mb-24"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-3xl">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white tracking-tighter uppercase leading-none">VELOCE</span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mt-2">WORLD CLASS DIGITAL ECOSYSTEM</span>
              </div>
            </motion.div>

            {/* Percentage Indicator */}
            <motion.div 
                key={Math.floor(progress)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-8xl md:text-9xl font-black text-white tracking-tighter mb-12 tabular-nums"
            >
              {Math.floor(progress)}%
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#007FFF] to-purple-500"
              />
            </div>

            {/* Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-[10px] font-black text-white/20 uppercase tracking-[0.5em] flex items-center gap-4"
            >
              <span className="w-1 h-1 rounded-full bg-[#fb923c] animate-pulse" />
              Engineered for velocity
              <span className="w-1 h-1 rounded-full bg-[#fb923c] animate-pulse" />
            </motion.div>
          </div>

          {/* Decorative Corners */}
          <div className="absolute top-10 left-10 w-20 h-[1px] bg-white/10" />
          <div className="absolute top-10 left-10 h-20 w-[1px] bg-white/10" />
          
          <div className="absolute top-10 right-10 w-20 h-[1px] bg-white/10" />
          <div className="absolute top-10 right-10 h-20 w-[1px] bg-white/10" />

          <div className="absolute bottom-10 left-10 w-20 h-[1px] bg-white/10" />
          <div className="absolute bottom-10 left-10 h-20 w-[1px] bg-white/10" />

          <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-white/10" />
          <div className="absolute bottom-10 right-10 h-20 w-[1px] bg-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
