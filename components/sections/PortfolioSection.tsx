'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SIP & SOCIAL",
    category: "Social Platform",
    year: "2025",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop",
    color: "#F59E0B",
    description: "Social networking platform connecting beverage enthusiasts worldwide.",
    link: "https://sipnsocial08.github.io/Sip-Social/"
  },
  {
    title: "GENZ CRICKET",
    category: "Sports Club",
    year: "2025",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1600&auto=format&fit=crop",
    color: "#10B981",
    description: "Modern cricket club website with dynamic content and live scores.",
    link: "https://genzcricketclub-max.github.io/genzzz/"
  },
  {
    title: "PHIZOOE REHAB",
    category: "Healthcare",
    year: "2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    color: "#3B82F6",
    description: "Professional rehabilitation therapy center with appointment booking.",
    link: "https://contactphizeeosrehabtherapy-source.github.io/Phizooe/"
  },
  {
    title: "NEURALIS",
    category: "AI Platform",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    color: "#8B5CF6",
    description: "AI-driven interface for neural data visualization.",
    link: ""
  },
  {
    title: "AETHER",
    category: "E-commerce",
    year: "2025",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop",
    color: "#EC4899",
    description: "Luxury retail through immersive 3D shopping experiences.",
    link: ""
  },
  {
    title: "ZENITH",
    category: "Real Estate",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    color: "#06B6D4",
    description: "Premium architectural visualization with virtual tours.",
    link: ""
  }
];

const tooltips = [
  { label: "@sipnsocial", x: "8%", y: "22%", color: "#F59E0B" },
  { label: "@genzcricket", x: "88%", y: "18%", color: "#10B981" },
  { label: "@neuralis", x: "3%", y: "72%", color: "#8B5CF6" },
  { label: "@aether", x: "92%", y: "78%", color: "#EC4899" },
  { label: "@phizooe", x: "78%", y: "42%", color: "#3B82F6" },
];

function SemiCircleCard({ project, index, total }: { project: typeof projects[0]; index: number; total: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const centerIndex = (total - 1) / 2;
  const offsetFromCenter = index - centerIndex;
  
  const radius = 500;
  const angleRange = 50;
  const angle = (offsetFromCenter / centerIndex) * (angleRange / 2) * (Math.PI / 180);
  
  const targetX = Math.sin(angle) * radius;
  const targetY = (1 - Math.cos(angle)) * radius * 0.35;
  const targetRotate = offsetFromCenter * 10;

  const animationDelay = index * 0.5;

  return (
    <motion.div
      ref={cardRef}
      className="absolute"
      initial={{ 
        x: 0, 
        y: 200, 
        rotate: 0, 
        opacity: 0,
        scale: 0.3
      }}
      whileInView={{ 
        x: targetX, 
        y: targetY, 
        rotate: targetRotate, 
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: false, margin: "-400px" }}
      transition={{ 
        type: "spring",
        stiffness: 40,
        damping: 15,
        delay: index * 0.1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: isHovered ? 100 : index + 10 }}
    >
      <motion.div
        className="relative w-[280px] md:w-[340px] aspect-[16/10] rounded-xl overflow-hidden cursor-pointer"
        animate={isHovered ? { 
          scale: 1.12,
          y: -25,
        } : {
          y: [0, -15, 0],
          rotate: [0, 2, 0],
        }}
        transition={{ 
          duration: isHovered ? 0.5 : (4 + index * 0.3),
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          boxShadow: isHovered 
            ? `0 50px 100px -30px ${project.color}70, 0 0 80px ${project.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`
            : `0 25px 60px -25px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(135deg, ${project.color}50 0%, transparent 50%, ${project.color}25 100%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0.25 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={false}
          animate={{
            background: isHovered 
              ? `linear-gradient(115deg, transparent 20%, ${project.color}20 50%, transparent 80%)`
              : 'transparent',
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 rounded-xl border border-white/10" />

        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0.8, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span 
                className="px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md"
                style={{ 
                  backgroundColor: `${project.color}30`,
                  color: project.color,
                  border: `1px solid ${project.color}40`,
                  boxShadow: `0 2px 10px ${project.color}20`,
                }}
              >
                {project.category}
              </span>
            </motion.div>

            <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/50 text-[10px] font-mono">
              {project.year}
            </span>
          </div>

          <div>
            <motion.h3
              className="text-2xl md:text-2.5xl font-bold text-white mb-1"
              animate={{ color: isHovered ? project.color : '#ffffff' }}
              style={{
                textShadow: isHovered ? `0 0 40px ${project.color}60` : 'none',
              }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-white/50 text-sm mb-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: project.color,
                    boxShadow: `0 4px 20px ${project.color}50`,
                  }}
                >
                  <Eye size={12} />
                  View
                </a>
              )}
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                <ArrowUpRight size={12} />
                Case
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <path
              d="M0 80 L80 80 L80 30 L60 0 L0 0 Z"
              fill="none"
              stroke={project.color}
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        <div 
          className="absolute -bottom-6 -right-4 text-[100px] font-black leading-none pointer-events-none select-none"
          style={{ 
            color: project.color, 
            opacity: 0.05,
            WebkitTextStroke: `1px ${project.color}30`,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingTooltip({ label, x, y, color }: { label: string; x: string; y: string; color: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.div
        className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md"
        style={{ 
          backgroundColor: `${color}15`,
          color: color,
          border: `1px solid ${color}30`,
          boxShadow: `0 4px 20px ${color}15`,
        }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative min-h-screen bg-black py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#007FFF]/8 rounded-full blur-[180px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-[180px]"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {tooltips.map((tooltip, i) => (
        <FloatingTooltip key={i} {...tooltip} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-[#007FFF]/10 border border-[#007FFF]/30 text-[#007FFF] text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            Selected Works
          </motion.span>
          
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85]">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block"
            >
              A place to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] via-purple-400 to-[#007FFF]"
              style={{ backgroundSize: '200% auto' }}
            >
              display your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-white/10"
            >
              masterpiece.
            </motion.span>
          </h2>
        </motion.div>

        <div className="relative h-[500px] md:h-[550px] flex items-center justify-center mb-28">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {projects.map((project, index) => (
              <SemiCircleCard
                key={index}
                project={project}
                index={index}
                total={projects.length}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-[#007FFF] hover:text-white transition-all"
            style={{
              boxShadow: '0 10px 40px rgba(255,255,255,0.1)',
            }}
          >
            View All Projects
            <ExternalLink size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
