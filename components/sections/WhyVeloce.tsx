"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock, Eye, Code, CheckCircle, Zap, Globe } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const securityNodes = [
    { 
        label: "Veloce Infrastructure Guard", 
        icon: Shield, 
        color: "#4A3AFF", 
        x: -280, y: -120, z: 50,
        description: "Hardened automated infrastructure defense layers."
    },
    { 
        label: "Veloce Identity Protection", 
        icon: Lock, 
        color: "#9D4EDD", 
        x: -240, y: 160, z: -30,
        description: "Zero-trust identity and access management core."
    },
    { 
        label: "Veloce API Perimeter Scan", 
        icon: Eye, 
        color: "#fb923c", 
        x: 280, y: -160, z: 40,
        description: "Autonomous real-time perimeter threat intelligence."
    },
    { 
        label: "Veloce Policy-as-Code", 
        icon: Code, 
        color: "#22C55E", 
        x: -320, y: 20, z: -80,
        description: "Programmatic security compliance enforcement."
    },
    { 
        label: "Veloce Compliance Core", 
        icon: CheckCircle, 
        color: "#3B82F6", 
        x: 320, y: 40, z: -60,
        description: "Continuous global regulatory alignment."
    },
    { 
        label: "Veloce Zero-Trust Gateway", 
        icon: Globe, 
        color: "#EF4444", 
        x: 260, y: 180, z: 70,
        description: "Decentralized secure-entry network architecture."
    },
];

export default function WhyVeloce() {
    return (
        <section id="why-veloce" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0E1117]/70 relative overflow-hidden">
            {/* Massive Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] blur-[150px] rounded-full" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4A3AFF]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fb923c]/5 blur-[120px] rounded-full" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-32">
                    <motion.h2 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.95]"
                    >
                        <span className="pricing-script-text text-[#fb923c] text-4xl sm:text-5xl md:text-7xl inline-block -rotate-2 mr-3 mb-2">
                            Veloce Guard
                        </span>
                        <br className="hidden sm:block" />
                        SECURITY & <span className="text-white/20">ARCHITECTURE</span>
                        <br />
                        INFRASTRUCTURE EXCELLENCE
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-10"
                    >
                        We embed bulletproof security into every layer of your high-velocity stack. Our architectural defaults are hardened so your innovation stays fast and compliant.
                    </motion.p>
                </div>

                {/* 3D Graphical Component */}
                <div className="relative h-[700px] flex items-center justify-center perspective-[2000px]">
                    
                    {/* The Shield/Core 3D Assembly */}
                    <div className="relative flex items-center justify-center transform-style-3d">
                        
                        {/* Outer Rotating 3D Rngs */}
                        <motion.div
                            animate={{ rotate: 360, rotateX: [15, -15, 15] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[450px] h-[450px] border border-white/5 rounded-full flex items-center justify-center"
                        >
                            <div className="w-full h-full border border-white/10 rounded-full scale-95 opacity-50" />
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360, rotateY: [10, -10, 10] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] border-2 border-dashed border-white/5 rounded-full"
                        />

                        {/* Central Glass Core (VELOCE CORE) */}
                        <motion.div 
                            className="relative w-48 h-48 md:w-56 md:h-56 z-20 group"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="absolute inset-0 bg-[#4A3AFF]/20 blur-[60px] rounded-full animate-pulse group-hover:bg-[#4A3AFF]/30 transition-all" />
                            <div className="absolute inset-0 bg-[#fb923c]/10 blur-[40px] rounded-full translate-x-4 mix-blend-screen" />
                            
                            <div className="absolute inset-0 flex items-center justify-center p-2">
                                <div className="w-full h-full rounded-[2.5rem] bg-white/[0.03] backdrop-blur-[60px] border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:border-white/20">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                    <Zap className="w-10 h-10 text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                                    <div className="text-[10px] font-black tracking-[0.5em] text-white uppercase text-center">VELOCE<br/>CORE</div>
                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating 3D Service Nodes */}
                        {securityNodes.map((node, i) => (
                            <motion.div
                                key={i}
                                className="absolute z-30"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    x: node.x, 
                                    y: node.y,
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 70, 
                                        damping: 20, 
                                        delay: i * 0.1 
                                    } 
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center gap-4 px-6 py-4 rounded-[1.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-xl shadow-2xl group cursor-default min-w-[280px] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-12" style={{ backgroundColor: `${node.color}20`, border: `1px solid ${node.color}40` }}>
                                        <node.icon size={22} style={{ color: node.color }} className="drop-shadow-[0_0_8px_currentColor]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-black text-white leading-tight uppercase tracking-widest mb-1 group-hover:text-white transition-colors">
                                            {node.label}
                                        </span>
                                        <span className="text-[9px] font-medium text-white/30 uppercase tracking-tight leading-normal">
                                            {node.description}
                                        </span>
                                    </div>
                                    <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, ${node.color}, transparent)` }} />
                                </div>

                                {/* Intelligent Connection Beam */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                                    className="absolute top-1/2 left-1/2 h-[1px] origin-left pointer-events-none opacity-20"
                                    style={{
                                        width: Math.sqrt(node.x ** 2 + node.y ** 2) - 100,
                                        background: `linear-gradient(to right, ${node.color}, transparent)`,
                                        transform: `rotate(${Math.atan2(-node.y, -node.x) * 180 / Math.PI}deg) scaleY(0.5)`,
                                        transformOrigin: '0 0',
                                        left: 0,
                                        top: '50%'
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Marquee */}
                <div className="mt-32 pt-16 border-t border-white/5">
                    <Marquee className="py-4" duration={25}>
                        {[
                            "React", "Next.js", "Tailwind CSS", "TypeScript", "Supabase", 
                            "Framer Motion", "Three.js", "GSAP", "Vercel", "Node.js"
                        ].map((tech) => (
                            <div key={tech} className="flex items-center gap-4 mx-12">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <span className="text-2xl md:text-3xl font-black tracking-tighter text-white/20 whitespace-nowrap hover:text-white transition-colors cursor-default uppercase">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
