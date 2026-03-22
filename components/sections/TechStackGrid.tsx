"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Cpu, Layers, Database, Cloud } from 'lucide-react';
import { LogosSlider } from './LogosSlider';

const categories = [
    {
        title: "Frontend Ecosystem",
        icon: <Layers className="w-5 h-5" />,
        tools: [
            { name: "React", color: "#61DAFB" },
            { name: "React Native", color: "#61DAFB" },
            { name: "Next.js", color: "#ffffff" },
            { name: "Flutter", color: "#02569B" },
            { name: "TypeScript", color: "#3178C6" },
        ],
        accent: "#3B82F6",
    },
    {
        title: "Backend & Data",
        icon: <Database className="w-5 h-5" />,
        tools: [
            { name: "Postgres", color: "#336791" },
            { name: "Python", color: "#3776AB" },
            { name: ".NET Core", color: "#512BD4" },
            { name: "Elasticsearch", color: "#005571" },
            { name: "Node.js", color: "#339933" },
        ],
        accent: "#10B981",
    },
    {
        title: "Platform & Infra",
        icon: <Cpu className="w-5 h-5" />,
        tools: [
            { name: "Docker", color: "#2496ED" },
            { name: "Kubernetes", color: "#326CE5" },
            { name: "Terraform", color: "#7B42BC" },
            { name: "Grafana", color: "#F46800" },
            { name: "Prometheus", color: "#E6522C" },
        ],
        accent: "#F59E0B",
    },
    {
        title: "Cloud Giants",
        icon: <Cloud className="w-5 h-5" />,
        tools: [
            { name: "Azure", color: "#0078D4" },
            { name: "AWS", color: "#FF9900" },
            { name: "Google Cloud", color: "#4285F4" },
        ],
        accent: "#EC4899",
    },
];

function ToolPill({ tool }: { tool: any }) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3 transition-colors hover:border-white/20 hover:bg-white/10"
        >
            <div 
                className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]" 
                style={{ backgroundColor: tool.color, color: tool.color }} 
            />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/80">
                {tool.name}
            </span>
        </motion.div>
    );
}

function PremiumBentoCard({ category, index }: { category: typeof categories[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Smooth 3D Motion using useMotionValue & useSpring (Lag-Free)
    const xRange = useMotionValue(0);
    const yRange = useMotionValue(0);

    const mouseXSpring = useSpring(xRange, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(yRange, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        xRange.set(x);
        yRange.set(y);
    };

    const resetTilt = () => {
        xRange.set(0);
        yRange.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
            }}
            className={`relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden group transition-all duration-500 border border-white/10 ${
                index % 3 === 0 ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-12 lg:col-span-4'
            }`}
        >
            {/* 90% Black Deep Glass Base - High-Fidelity Desktop, Smooth Mobile */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md md:backdrop-blur-2xl z-0" />
            
            {/* Interactive Holographic Glint (Follows Mouse) */}
            <motion.div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: useTransform(
                        [mouseXSpring, mouseYSpring],
                        ([x, y]: any) => `radial-gradient(circle at ${50 + x * 100}% ${50 + y * 100}%, rgba(255,255,255,0.08) 0%, transparent 50%)`
                    )
                }}
            />

            {/* 3D Interactive Graphical Layer (Technical Orbit) - Hidden on Mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 hidden md:block">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full [perspective:1000px] [transform-style:preserve-3d]">
                    {/* Outer Orbit */}
                    <motion.div
                        animate={{ rotateZ: 360, rotateX: [10, 30, 10], rotateY: [10, -10, 10] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square border-2 border-dashed border-white/[0.03] rounded-full [transform-style:preserve-3d]"
                    />
                    {/* Inner Orbit */}
                    <motion.div
                        animate={{ rotateZ: -360, rotateX: [-10, -30, -10], rotateY: [-10, 10, -10] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-square border border-white/[0.05] rounded-full [transform-style:preserve-3d]"
                    >
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white/20 blur-sm rounded-full" />
                    </motion.div>

                    {/* Technical Mesh/Grid Floor Overlay */}
                    <div 
                        className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)] [transform:rotateX(60deg)] opacity-40 brightness-150" 
                    />
                </div>
            </div>

            {/* Corner Accent Glow */}
            <div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-1000 z-0"
                style={{ backgroundColor: category.accent }}
            />

            {/* Content Content Container */}
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-sm pointer-events-auto"
                        style={{ backgroundColor: `${category.accent}15`, color: category.accent }}
                    >
                        {category.icon}
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white pointer-events-auto">
                        {category.title}
                    </h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pointer-events-auto">
                    {category.tools.map((tool, i) => (
                        <ToolPill key={i} tool={tool} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function TechStackGrid() {
    return (
        <section id="tech-stack" className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-[#0E1117]/70 relative overflow-hidden">
            
            {/* Premium Header Architecture (Centered) */}
            <div className="max-w-7xl mx-auto mb-24 md:mb-40 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12"
                >
                    <Sparkles size={14} className="text-[#fb923c]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Platform Engineering</span>
                </motion.div>

                <div className="relative inline-block mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase"
                    >
                        <span className="pricing-script-text text-[#fb923c] lowercase text-4xl md:text-8xl normal-case italic inline-block -rotate-3 mr-4">
                            modern
                        </span>
                        <br />
                        Stack.
                    </motion.h2>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-white/40 max-w-2xl text-lg md:text-2xl font-light leading-relaxed border-t border-white/10 pt-10"
                >
                    We leverage a world-class ecosystem of tools to build resilient, 
                    <br className="hidden md:block" />
                    high-performance digital infrastructure that redefines speed.
                </motion.p>
            </div>

            {/* Premium Bento Grid Architecture */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                {categories.map((category, index) => (
                    <PremiumBentoCard key={index} category={category} index={index} />
                ))}
            </div>

            <div className="mt-20 px-6 md:px-12 lg:px-24">
                <LogosSlider />
            </div>
        </section>
    );
}
