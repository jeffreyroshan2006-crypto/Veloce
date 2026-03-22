"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';

const text = "ALL YOUR PERSONAL DATA AND TRANSACTIONS ARE ENCRYPTED AND SECURED. THERE’S NO ROOM FOR MISTAKES BECAUSE WE DIDN’T LEAVE ANY";
const words = text.split(" ");

function GlowingWord({ word, index, scrollYProgress }: { word: string; index: number; scrollYProgress: any }) {
    const duration = 1 / words.length;
    const start = index * duration;
    // Make the word snap to full opacity in 60% of its turn for "faster" feel
    const snapEnd = start + duration * 0.6;
    const end = (index + 1) * duration;

    // Advanced Typographic Transitions
    const opacity = useTransform(scrollYProgress, [start, snapEnd], [0.1, 1]);
    const scale = useTransform(scrollYProgress, [start, snapEnd], [0.95, 1]);
    const blur = useTransform(scrollYProgress, [start, snapEnd], ["blur(8px)", "blur(0px)"]);
    const letterSpacing = useTransform(scrollYProgress, [start, snapEnd], ["-0.02em", "0.02em"]);
    
    // Dynamic Glow Burst
    const glow = useTransform(scrollYProgress, [start, start + duration * 0.3, snapEnd], [0, 1, 0.5]);

    return (
        <motion.span
            style={{ opacity, scale, filter: blur, letterSpacing }}
            className="relative inline-block mx-[0.2em] my-[0.1em]"
        >
            <span className="text-[6vh] md:text-[10vh] font-black uppercase tracking-tighter text-white leading-[0.9]">
                {word}
            </span>
            
            {/* High-Velocity Light Flash */}
            <motion.div
                style={{ opacity: glow }}
                className="absolute inset-0 bg-white/40 blur-[40px] rounded-full pointer-events-none"
            />
            <motion.div
                style={{ opacity: glow }}
                className="absolute inset-0 text-white blur-[15px] pointer-events-none select-none"
            >
                <span className="text-[6vh] md:text-[10vh] font-black uppercase tracking-tighter leading-[0.9]">
                    {word}
                </span>
            </motion.div>
        </motion.span>
    );
}

export default function SecuritySection() {
    const wordsContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: wordsScroll } = useScroll({
        target: wordsContainerRef,
        offset: ["start 75%", "end 45%"] // Tighter range for faster scrolling velocity
    });

    return (
        <section
            id="security"
            className="relative bg-[#0E1117] min-h-[150vh] overflow-hidden"
        >
            {/* Global Ambience Architecture - Made absolute to remove it from flex flow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fb923c]/5 rounded-full blur-[200px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px]" />
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center pt-32 pb-20">
                {/* Static Branding Intro */}
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-12"
                    >
                        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
                            <ShieldCheck size={16} className="text-[#fb923c]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Infrastructure Excellence</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase max-w-5xl">
                            <span className="pricing-script-text text-[#fb923c] lowercase text-4xl md:text-8xl normal-case italic inline-block -rotate-3 mr-4">
                                Veloce
                            </span>
                            <br />
                            Guard —
                        </h2>
                    </motion.div>
                </div>

                {/* Immersive Scroll Block */}
                <div 
                    ref={wordsContainerRef}
                    className="w-full max-w-[90vw] mx-auto flex flex-wrap justify-center items-center text-center"
                >
                    {words.map((word, index) => (
                        <GlowingWord 
                            key={index} 
                            word={word} 
                            index={index} 
                            scrollYProgress={wordsScroll} 
                        />
                    ))}
                </div>

                {/* Bottom Final CTA / Detail */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 mb-20 text-center"
                >
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-white/40 text-lg md:text-2xl font-light tracking-tight max-w-2xl px-6">
                            Engineering digital fortresses where security is embedded into the DNA of every line of code.
                        </p>
                        <div className="w-px h-24 bg-gradient-to-b from-[#fb923c] to-transparent mt-8" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
