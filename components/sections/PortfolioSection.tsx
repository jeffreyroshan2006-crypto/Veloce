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

  const yOffset = index % 2 === 0 ? -30 : 30;
  const rotate = index % 2 === 0 ? -3 : 3;

  return (
    <motion.div
      className="absolute"
      initial={{ 
        x: 400, 
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
      viewport={{ once: true, margin: "-150px" }}
      transition={{ 
        type: "spring",
        stiffness: 50,
        damping: 16,
        delay: index * 0.12,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        y: yOffset,
        zIndex: isHovered ? 100 : index + 1
      }}
    >
      <motion.div
        className="relative w-[220px] md:w-[260px] aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
        animate={isHovered ? { 
          scale: 1.08,
          y: -20,
          rotate: 0,
          zIndex: 100
        } : {}}
        transition={{ 
          type: "spring",
          stiffness: 280,
          damping: 22,
        }}
        style={{
          background: '#0a0a0a',
          boxShadow: isHovered 
            ? `0 30px 60px -20px ${project.color}50, 0 0 50px ${project.color}25`
            : `0 10px 30px -10px rgba(0,0,0,0.5)`,
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        
        <div className="absolute inset-0 p-3 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.25 }}
          >
            <span 
              className="inline-block px-2 py-1 rounded text-[7px] font-semibold uppercase tracking-wider mb-1"
              style={{ 
                backgroundColor: project.color,
                color: '#000',
              }}
            >
              {project.category}
            </span>
            <p className="text-white/80 text-[9px] mb-1.5 leading-snug">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[7px] font-medium uppercase tracking-wider bg-white text-black"
              >
                <Eye size={8} />
                View
              </a>
            )}
          </motion.div>
        </div>

        <div className="absolute top-2 right-2">
          <span 
            className="px-1.5 py-0.5 rounded text-[7px] font-mono"
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            {project.year}
          </span>
        </div>
      </motion.div>

      {project.tag && (
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.5 }}
        >
          <span 
            className="px-2 py-0.5 rounded-full text-[7px] font-medium whitespace-nowrap"
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
    <section id="portfolio" className="relative min-h-screen bg-black py-24 overflow-hidden">
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

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
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

        <div className="relative h-[450px] md:h-[500px] flex items-center justify-center mb-20">
          <div className="relative w-full max-w-5xl flex justify-center items-center">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${(index - 2.5) * 140}px)`,
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </div>
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
