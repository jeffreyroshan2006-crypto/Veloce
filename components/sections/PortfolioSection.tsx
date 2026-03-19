'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Zap, Palette, Rocket, Eye, SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "SIP & SOCIAL",
    description: "A social networking platform connecting beverage enthusiasts worldwide.",
    imageSrc: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
    href: "https://sipnsocial08.github.io/Sip-Social/",
    ctaLabel: "View Site",
    tag: "@sipnsocial"
  },
  {
    id: 2,
    title: "GENZ CRICKET",
    description: "Modern cricket club website with dynamic content and live scores.",
    imageSrc: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
    href: "https://genzcricketclub-max.github.io/genzzz/",
    ctaLabel: "View Site",
    tag: "@genzcricket"
  },
  {
    id: 3,
    title: "PHIZOOE REHAB",
    description: "Professional rehabilitation therapy center with appointment booking.",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    href: "https://contactphizeeosrehabtherapy-source.github.io/Phizooe/",
    ctaLabel: "View Site",
    tag: "@phizooe"
  },
  {
    id: 4,
    title: "NEURALIS",
    description: "AI-driven interface for neural data visualization.",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    href: "",
    ctaLabel: "View Site",
    tag: "@neuralis"
  },
  {
    id: 5,
    title: "AETHER",
    description: "Luxury retail through immersive 3D shopping experiences.",
    imageSrc: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop",
    href: "",
    ctaLabel: "View Site",
    tag: "@aether"
  },
  {
    id: 6,
    title: "ZENITH",
    description: "Premium architectural visualization with virtual tours.",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "",
    ctaLabel: "View Site",
    tag: "@zenith"
  }
];

const features = [
  { icon: Sparkles, text: "Premium Design", color: "#F59E0B" },
  { icon: Zap, text: "Fast Performance", color: "#10B981" },
  { icon: Palette, text: "Creative Excellence", color: "#8B5CF6" },
  { icon: Rocket, text: "Innovation First", color: "#EC4899" },
];

function PortfolioCard({ item, active }: { item: CardStackItem; active: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* image */}
      <div className="absolute inset-0">
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover"
            draggable={false}
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary text-sm text-muted-foreground">
            No image
          </div>
        )}
      </div>

      {/* subtle gradient overlay at bottom for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {item.tag && (
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3 bg-white/10 text-white/80 border border-white/10">
              {item.tag}
            </span>
          )}
          <div className="text-2xl font-bold text-white mb-2">
            {item.title}
          </div>
          {item.description ? (
            <div className="mb-4 line-clamp-2 text-sm text-white/70">
              {item.description}
            </div>
          ) : null}

          {/* View Site Button */}
          {item.href ? (
            <Link
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-[#007FFF] hover:text-white transition-all shadow-lg"
            >
              <SquareArrowOutUpRight size={14} />
              View Site
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 text-white/60 cursor-not-allowed">
              <Eye size={14} />
              Coming Soon
            </span>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative min-h-[120vh] bg-black/50 backdrop-blur-xl pt-40 pb-28 overflow-hidden flex flex-col justify-center border-t border-white/5">
      <div className="relative z-10 max-w-[2000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Where
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] via-purple-400 to-[#007FFF]"
              style={{ backgroundSize: '200% auto' }}
            >
              Innovation
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white/10"
            >
              Meets Excellence.
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-5 md:gap-6 mb-16"
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

        {/* Card Stack Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1400px] mx-auto mb-20"
        >
          <CardStack
            items={projects}
            initialIndex={0}
            autoAdvance={true}
            intervalMs={3500}
            pauseOnHover={true}
            showDots={true}
            maxVisible={5}
            cardWidth={640}
            cardHeight={360}
            overlap={0.45}
            spreadDeg={35}
            activeScale={1.05}
            inactiveScale={0.92}
            renderCard={(item, { active }) => (
              <PortfolioCard item={item} active={active} />
            )}
          />
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
