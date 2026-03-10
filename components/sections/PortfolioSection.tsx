'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';
import { ExternalLink, Sparkles, Zap, Palette, Rocket } from 'lucide-react';

const portfolioItems: CardStackItem[] = [
  {
    id: 1,
    title: "SIP & SOCIAL",
    description: "A social networking platform connecting beverage enthusiasts worldwide.",
    imageSrc: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
    href: "https://sipnsocial08.github.io/Sip-Social/",
    tag: "@sipnsocial"
  },
  {
    id: 2,
    title: "GENZ CRICKET",
    description: "Modern cricket club website with dynamic content and live scores.",
    imageSrc: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
    href: "https://genzcricketclub-max.github.io/genzzz/",
    tag: "@genzcricket"
  },
  {
    id: 3,
    title: "PHIZOOE REHAB",
    description: "Professional rehabilitation therapy center with appointment booking.",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    href: "https://contactphizeeosrehabtherapy-source.github.io/Phizooe/",
    tag: "@phizooe"
  },
  {
    id: 4,
    title: "NEURALIS",
    description: "AI-driven interface for neural data visualization.",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    href: "",
    tag: "@neuralis"
  },
  {
    id: 5,
    title: "AETHER",
    description: "Luxury retail through immersive 3D shopping experiences.",
    imageSrc: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop",
    href: "",
    tag: "@aether"
  },
  {
    id: 6,
    title: "ZENITH",
    description: "Premium architectural visualization with virtual tours.",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "",
    tag: "@zenith"
  }
];

const features = [
  { icon: Sparkles, text: "Premium Design", color: "#F59E0B" },
  { icon: Zap, text: "Fast Performance", color: "#10B981" },
  { icon: Palette, text: "Creative Excellence", color: "#8B5CF6" },
  { icon: Rocket, text: "Innovation First", color: "#EC4899" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative min-h-screen bg-black py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-[#007FFF]/4 rounded-full blur-[150px]"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-purple-500/4 rounded-full blur-[150px]"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-[2000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              A place to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] via-purple-400 to-[#007FFF]"
              style={{ backgroundSize: '200% auto' }}
            >
              display your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white/10"
            >
              masterpiece.
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-5 md:gap-6 mb-10"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full"
              style={{
                backgroundColor: `${feature.color}12`,
                border: `1px solid ${feature.color}30`,
              }}
            >
              <feature.icon size={16} style={{ color: feature.color }} />
              <span className="text-[12px] font-semibold" style={{ color: feature.color }}>
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-20"
        >
          <div className="w-full max-w-3xl">
            <CardStack
              items={portfolioItems}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={520}
              cardHeight={320}
              overlap={0.48}
              spreadDeg={48}
              className="w-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-[#007FFF] hover:text-white transition-all"
            style={{
              boxShadow: '0 10px 40px rgba(255,255,255,0.12)',
            }}
          >
            View All Projects
            <ExternalLink size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
