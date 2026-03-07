'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, MotionValue } from 'framer-motion';
import { Lock } from 'lucide-react';

const text = "all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.";
const words = text.split(" ");

function Word({ word, index, progress }: { word: string; index: number; progress: MotionValue<number> }) {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    const [opacity, setOpacity] = useState(0.15);
    const [glow, setGlow] = useState(0);

    useEffect(() => {
        const unsubscribe = progress.on("change", (latest) => {
            const start = index / words.length;
            const end = start + (1 / words.length);
            
            if (latest < start) {
                setOpacity(0.15);
                setGlow(0);
            } else if (latest > end) {
                setOpacity(1);
                setGlow(1);
            } else {
                const ratio = (latest - start) / (end - start);
                setOpacity(0.15 + ratio * 0.85);
                setGlow(ratio);
            }
        });
        
        return () => unsubscribe();
    }, [index, progress]);

    return (
        <span className="relative inline-block mr-2 mb-1 md:mr-3 md:mb-2 lg:mr-4 lg:mb-3">
            <span 
                className="text-white/15 select-none"
                style={{ opacity: 1 }}
            >
                {word}
            </span>
            <span
                className="absolute left-0 top-0 text-white z-10"
                style={{ opacity }}
            >
                <span
                    style={{
                        fontFamily: '"Inter", "SF Pro Display", -apple-system, system-ui, sans-serif',
                        fontWeight: 800,
                        fontSize: 'inherit',
                        letterSpacing: '-0.02em',
                        textShadow: glow > 0 
                            ? `0 0 ${20 * glow}px rgba(255,255,255,${0.9 * glow}), 0 0 ${40 * glow}px rgba(255,255,255,${0.6 * glow})`
                            : 'none',
                    }}
                >
                    {word}
                </span>
            </span>
        </span>
    );
}

export default function SecuritySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section
            ref={containerRef}
            id="security"
            className="relative bg-black min-h-[200vh]"
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 py-20">
                <motion.div
                    className="mb-10 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Lock className="w-14 h-14 text-[#F59E0B]" />
                </motion.div>

                <motion.h3
                    className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-[#F59E0B] mb-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
                </motion.h3>

                <p 
                    className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] flex flex-wrap justify-center max-w-4xl mx-auto uppercase"
                    style={{
                        fontFamily: '"Inter", "SF Pro Display", -apple-system, system-ui, sans-serif',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                    }}
                >
                    {words.map((word, index) => (
                        <Word 
                            key={index} 
                            word={word} 
                            index={index} 
                            progress={scrollYProgress} 
                        />
                    ))}
                </p>

                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-20" />
            </div>
        </section>
    );
}
