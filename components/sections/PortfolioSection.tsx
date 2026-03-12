'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight, ExternalLink, Crown, Diamond, Flame, Stars } from 'lucide-react';

const projects = [
  {
    title: "SIP & SOCIAL",
    category: "Social Platform",
    year: "2025",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
    color: "#F59E0B",
    description: "A social networking platform connecting beverage enthusiasts worldwide.",
    link: "https://sipnsocial08.github.io/Sip-Social/",
    tag: "@sipnsocial"
  },
  {
    title: "GENZ CRICKET",
    category: "Sports Club",
    year: "2025",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
    color: "#10B981",
    description: "Modern cricket club website with dynamic content and live scores.",
    link: "https://genzcricketclub-max.github.io/genzzz/",
    tag: "@genzcricket"
  },
  {
    title: "PHIZOOE REHAB",
    category: "Healthcare",
    year: "2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    color: "#3B82F6",
    description: "Professional rehabilitation therapy center with appointment booking.",
    link: "https://contactphizeeosrehabtherapy-source.github.io/Phizooe/",
    tag: "@phizooe"
  },
  {
    title: "NEURALIS",
    category: "AI Platform",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    color: "#8B5CF6",
    description: "AI-driven interface for neural data visualization.",
    link: "",
    tag: "@neuralis"
  },
  {
    title: "AETHER",
    category: "E-commerce",
    year: "2025",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop",
    color: "#EC4899",
    description: "Luxury retail through immersive 3D shopping experiences.",
    link: "",
    tag: "@aether"
  },
  {
    title: "ZENITH",
    category: "Real Estate",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    color: "#06B6D4",
    description: "Premium architectural visualization with virtual tours.",
    link: "",
    tag: "@zenith"
  }
];

const features = [
  { icon: Crown, text: "World-Class Design", color: "#F59E0B" },
  { icon: Diamond, text: "Unmatched Quality", color: "#10B981" },
  { icon: Flame, text: "Industry Leading", color: "#8B5CF6" },
  { icon: Stars, text: "Future Forward", color: "#EC4899" },
];

function VeloceLogo({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 40"
      className={className}
      fill="none"
      animate={{
        filter: [
          "drop-shadow(0 0 10px rgba(245,158,11,0.4))",
          "drop-shadow(0 0 20px rgba(245,158,11,0.6))",
          "drop-shadow(0 0 10px rgba(245,158,11,0.4))"
        ]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <motion.path
        d="M20 5L8 35h6l2-5h8l2 5h6L20 5z"
        fill="#F59E0B"
      />
      <motion.path
        d="M45 8h5l3 12 3-12h5l5 22h-6l-1-5h-10l-1 5h-5L45 8z"
        fill="white"
      />
      <motion.path
        d="M78 8h6v4h4v3h-4v7h-3v-7h-7v-4h4V8z"
        fill="#F59E0B"
      />
      <circle cx="100" cy="20" r="12" stroke="#F59E0B" strokeWidth="2" fill="none" />
      <circle cx="100" cy="20" r="6" fill="#F59E0B" />
    </motion.svg>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const yOffset = index % 2 === 0 ? -15 : 15;
  const rotate = index % 2 === 0 ? -1.5 : 1.5;

  return (
    <motion.div
      className="absolute"
      initial={{ 
        x: 600, 
        opacity: 0,
        scale: 0.8,
        rotate: 0
      }}
      whileInView={{ 
        x: 0, 
        opacity: 1,
        scale: 1,
        rotate: rotate
      }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ 
        type: "spring",
        stiffness: 40,
        damping: 12,
        delay: index * 0.15,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        y: yOffset,
        zIndex: isHovered ? 100 : index + 1
      }}
    >
      <motion.div
        className="relative w-[360px] md:w-[420px] aspect-[16/9] rounded-xl overflow-hidden cursor-pointer"
        animate={isHovered ? { 
          scale: 1.06,
          y: -30,
          rotate: 0,
          zIndex: 100
        } : {}}
        transition={{ 
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        style={{
          background: '#0a0a0a',
          boxShadow: isHovered 
            ? `0 40px 80px -30px ${project.color}55, 0 0 70px ${project.color}25`
            : `0 15px 40px -15px rgba(0,0,0,0.5)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
            transition={{ duration: 0.3 }}
          >
            <span 
              className="inline-block px-3 py-1.5 rounded text-[9px] font-bold uppercase tracking-wider mb-2"
              style={{ 
                backgroundColor: project.color,
                color: '#000',
              }}
            >
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-white/60 text-[11px] mb-2.5 leading-snug">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[9px] font-semibold uppercase tracking-wider bg-white text-black hover:bg-white/90 transition-colors"
              >
                <Eye size={11} />
                View
              </a>
            )}
          </motion.div>
        </div>

        <div className="absolute top-4 right-4">
          <span 
            className="px-2.5 py-1 rounded text-[9px] font-mono"
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.55)',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            {project.year}
          </span>
        </div>
      </motion.div>

      {project.tag && (
        <motion.div
          className="absolute -bottom-3.5 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          <span 
            className="px-3 py-1 rounded-full text-[9px] font-medium whitespace-nowrap"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {project.tag}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative min-h-screen bg-black py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-[#F59E0B]/4 rounded-full blur-[150px]"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <VeloceLogo className="w-24 h-10 mx-auto" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Where Vision
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FF6B6B] to-[#8B5CF6]"
              style={{ backgroundSize: '200% auto' }}
            >
              Meets Reality
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white/10"
            >
              In Every Pixel
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
          className="relative h-[380px] md:h-[420px] flex items-center justify-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-7xl flex justify-center items-center">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${(index - 2.5) * 200}px)`,
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
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
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-[#F59E0B] hover:text-black transition-all"
            style={{
              boxShadow: '0 10px 40px rgba(255,255,255,0.12)',
            }}
          >
            Explore All Projects
            <ExternalLink size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
