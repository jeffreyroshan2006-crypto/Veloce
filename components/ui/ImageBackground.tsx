'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InteractiveClouds } from './InteractiveClouds';

export function ImageBackground() {
  const { scrollY } = useScroll();

  // Optimized parallax effect: moves slower and within a tighter range
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [0.8, 0.4]);

  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/bgveloce.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Render interactive 3D clouds over the background image */}
        <InteractiveClouds />
      </div>

      {/* Dynamic light flare */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-[#007FFF]/5 rounded-full blur-[150px] pointer-events-none"
      />
    </div>
  );
}
