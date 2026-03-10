"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Core Languages",
        tools: [
            { name: "React", color: "#61DAFB", glow: "#61DAFB" },
            { name: "React Native", color: "#61DAFB", glow: "#61DAFB" },
            { name: "Flutter", color: "#02569B", glow: "#02569B" },
            { name: "Python", color: "#3776AB", glow: "#3776AB" },
            { name: "C#", color: "#512BD4", glow: "#512BD4" },
            { name: ".NET", color: "#512BD4", glow: "#512BD4" },
        ],
        accent: "#F59E0B",
    },
    {
        title: "Databases & Data",
        tools: [
            { name: "Postgres", color: "#336791", glow: "#336791" },
            { name: "Polars", color: "#ADE5F6", glow: "#ADE5F6" },
            { name: "Elasticsearch", color: "#FEC514", glow: "#FEC514" },
        ],
        accent: "#3B82F6",
    },
    {
        title: "DevOps & CICD",
        tools: [
            { name: "Github", color: "#F05032", glow: "#F05032" },
            { name: "Akido", color: "#5B47E5", glow: "#5B47E5" },
            { name: "Gitlab", color: "#FC6D26", glow: "#FC6D26" },
            { name: "Sentry", color: "#362D59", glow: "#362D59" },
        ],
        accent: "#10B981",
    },
    {
        title: "Platform Engineering",
        tools: [
            { name: "Grafana", color: "#F46800", glow: "#F46800" },
            { name: "Terraform", color: "#7B42BC", glow: "#7B42BC" },
            { name: "Helm", color: "#0F1689", glow: "#0F1689" },
            { name: "Prometheus", color: "#E6522C", glow: "#E6522C" },
        ],
        accent: "#8B5CF6",
    },
    {
        title: "Cloud Platforms",
        tools: [
            { name: "Azure", color: "#0078D4", glow: "#0078D4" },
            { name: "AWS", color: "#FF9900", glow: "#FF9900" },
        ],
        accent: "#EC4899",
    },
];

function FloatingParticle({ index }: { index: number }) {
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = 15 + Math.random() * 10;
    const randomSize = 2 + Math.random() * 4;
    
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
                left: `${randomX}%`,
                bottom: '-20px',
                width: randomSize,
                height: randomSize,
                background: `rgba(255,255,255,${0.1 + Math.random() * 0.2})`,
                boxShadow: `0 0 ${randomSize * 2}px rgba(255,255,255,0.3)`,
            }}
            animate={{
                y: [-20, -1000],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear",
            }}
        />
    );
}

function BentoCard({ category, index }: { category: typeof categories[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    const sizes = [
        "md:col-span-7",
        "md:col-span-5",
        "md:col-span-5",
        "md:col-span-7",
        "md:col-span-12",
    ];

    return (
        <motion.div
            ref={cardRef}
            className={`${sizes[index]} relative overflow-hidden rounded-2xl cursor-pointer group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Radial Gradient Spotlight */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: isHovered 
                        ? `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, ${category.accent}15, transparent 40%)`
                        : 'transparent',
                }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Card Background */}
            <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)',
                }}
            />
            
            {/* Border Glow on Hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    border: `1px solid ${isHovered ? category.accent : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: isHovered 
                        ? `0 0 40px -10px ${category.accent}40, inset 0 0 30px -10px ${category.accent}20`
                        : 'none',
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col">
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0.6, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span 
                        className="inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider mb-3"
                        style={{ 
                            backgroundColor: `${category.accent}20`,
                            color: category.accent,
                            border: `1px solid ${category.accent}30`,
                        }}
                    >
                        {category.title}
                    </span>
                </motion.div>

                <div className="flex-1 flex items-center">
                    <div className="flex flex-wrap gap-3">
                        {category.tools.map((tool, i) => (
                            <motion.div
                                key={i}
                                className="relative"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div
                                    className="px-5 py-2.5 rounded-xl flex items-center gap-2.5 relative overflow-hidden"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                    whileHover={{
                                        background: `${tool.color}15`,
                                        border: `${tool.color}30`,
                                    }}
                                >
                                    {/* Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            boxShadow: isHovered ? `0 0 20px ${tool.color}40` : 'none',
                                        }}
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    <motion.div
                                        className="w-2 h-2 rounded-full relative z-10"
                                        style={{
                                            backgroundColor: tool.color,
                                            boxShadow: `0 0 10px ${tool.color}`,
                                        }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                        }}
                                    />
                                    <span 
                                        className="text-[11px] font-bold uppercase tracking-wider relative z-10"
                                        style={{ 
                                            color: isHovered ? tool.color : '#ffffff',
                                        }}
                                    >
                                        {tool.name}
                                    </span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Corner Accent */}
                <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
                    style={{ opacity: isHovered ? 0.3 : 0.1 }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                            d="M0 100 L100 100 L100 50 L75 0 L0 0 Z"
                            fill="none"
                            stroke={category.accent}
                            strokeWidth="1"
                        />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}

function KineticText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
    return (
        <span className={className}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.5, 
                        delay: delay + i * 0.02,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}

export default function TechStackGrid() {
    const [particles, setParticles] = useState<number[]>([]);

    useEffect(() => {
        setParticles(Array.from({ length: 30 }));
    }, []);

    return (
        <section id="tech-stack" className="py-40 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
            {/* Floating Particles Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {particles.map((_, i) => (
                    <FloatingParticle key={i} index={i} />
                ))}
            </div>

            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#007FFF]/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20"
                >
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#F59E0B] mb-6 block"
                        >
                            Platform Engineering
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                            <KineticText text="MODERN" delay={0.1} />
                            <br />
                            <span className="text-white/10">
                                <KineticText text="STACK." delay={0.3} />
                            </span>
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-white/40 max-w-sm text-base font-light leading-relaxed border-l-2 border-[#F59E0B]/30 pl-6"
                    >
                        We leverage a world-class ecosystem of tools to build resilient, 
                        high-performance digital infrastructure.
                    </motion.p>
                </motion.div>

                {/* Marquee */}
                <div className="mb-16">
                    <Marquee pauseOnHover className="bg-white/5 border-y border-white/10">
                        {[
                            { name: "React", color: "#61DAFB" },
                            { name: "Next.js", color: "#ffffff" },
                            { name: "TypeScript", color: "#3178C6" },
                            { name: "Python", color: "#3776AB" },
                            { name: "PostgreSQL", color: "#336791" },
                            { name: "Docker", color: "#2496ED" },
                            { name: "Kubernetes", color: "#326CE5" },
                            { name: "AWS", color: "#FF9900" },
                            { name: "Azure", color: "#0078D4" },
                            { name: "GCP", color: "#4285F4" },
                            { name: "Redis", color: "#DC382D" },
                            { name: "GraphQL", color: "#E10098" },
                        ].map((tech, i) => (
                            <div
                                key={i}
                                className="mx-8 py-4 flex items-center gap-3"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
                                />
                                <span className="text-white/60 text-sm font-medium whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Neo-Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    {categories.map((category, index) => (
                        <BentoCard 
                            key={index} 
                            category={category} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
