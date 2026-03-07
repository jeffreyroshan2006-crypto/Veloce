'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SIP & SOCIAL",
    category: "Social Platform",
    year: "2025",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop",
    color: "#F59E0B",
    description: "A social networking platform connecting beverage enthusiasts worldwide.",
    link: "https://sipnsocial08.github.io/Sip-Social/",
    tag: "@sipnsocial"
  },
  {
    title: "GENZ CRICKET",
    category: "Sports Club",
    year: "2025",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600&auto=format&fit=crop",
    color: "#10B981",
    description: "Modern cricket club website with dynamic content and live scores.",
    link: "https://genzcricketclub-max.github.io/genzzz/",
    tag: "@genzcricket"
  },
  {
    title: "PHIZOOE REHAB",
    category: "Healthcare",
    year: "2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    color: "#3B82F6",
    description: "Professional rehabilitation therapy center with appointment booking.",
    link: "https://contactphizeeosrehabtherapy-source.github.io/Phizooe/",
    tag: "@phizooe"
  },
  {
    title: "NEURALIS",
    category: "AI Platform",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    color: "#8B5CF6",
    description: "AI-driven interface for neural data visualization.",
    link: "",
    tag: "@neuralis"
  },
  {
    title: "AETHER",
    category: "E-commerce",
    year: "2025",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600&auto=format&fit=crop",
    color: "#EC4899",
    description: "Luxury retail through immersive 3D shopping experiences.",
    link: "",
    tag: "@aether"
  },
  {
    title: "ZENITH",
    category: "Real Estate",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    color: "#06B6D4",
    description: "Premium architectural visualization with virtual tours.",
    link: "",
    tag: "@zenith"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ 
        x: 300, 
        opacity: 0,
        scale: 0.9
      }}
      whileInView={{ 
        x: 0, 
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 60,
        damping: 18,
        delay: index * 0.15,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-[240px] md:w-[280px] aspect-[3/4] rounded-md overflow-hidden cursor-pointer"
        animate={isHovered ? { 
          scale: 1.02,
          y: -6,
        } : {}}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        style={{
          background: '#0a0a0a',
          boxShadow: isHovered 
            ? `0 20px 40px -15px ${project.color}35`
            : `0 6px 16px -6px rgba(0,0,0,0.35)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 p-3.5 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
            transition={{ duration: 0.25 }}
          >
            <span 
              className="inline-block px-2 py-1 rounded text-[7px] font-semibold uppercase tracking-wider mb-1.5"
              style={{ 
                backgroundColor: project.color,
                color: '#000',
              }}
            >
              {project.category}
            </span>
            <p className="text-white/75 text-[10px] mb-2 leading-snug">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[8px] font-medium uppercase tracking-wider bg-white text-black hover:bg-white/90 transition-colors"
              >
                <Eye size={9} />
                View
              </a>
            )}
          </motion.div>
        </div>

        <div className="absolute top-2.5 right-2.5">
          <span 
            className="px-1.5 py-0.5 rounded text-[8px] font-mono"
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.45)',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            {project.year}
          </span>
        </div>
      </motion.div>

      {project.tag && (
        <motion.div
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.4 }}
        >
          <span 
            className="px-2 py-0.5 rounded-full text-[8px] font-medium"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.65)',
              border: '1px solid rgba(255,255,255,0.12)',
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
    <section id="portfolio" className="relative min-h-screen bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-[#007FFF]/4 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-[10%] w-[450px] h-[450px] bg-purple-500/4 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              A place to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] via-purple-400 to-[#007FFF]"
              style={{ backgroundSize: '200% auto' }}
            >
              display your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block text-white/10"
            >
              masterpiece.
            </motion.span>
          </h2>
        </motion.div>

        <div className="flex flex-nowrap justify-center gap-3 md:gap-4 mb-14 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs uppercase tracking-wider hover:bg-[#007FFF] hover:text-white transition-colors"
          >
            View All Projects
            <ExternalLink size={12} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
