'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const text = "all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.";
const words = text.split(" ");

function Word({ word, index }: { word: string; index: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementTop = rect.top;
            const elementHeight = rect.height;
            
            const startScroll = windowHeight * 0.7;
            const endScroll = windowHeight * 0.3;
            
            const totalScroll = startScroll - endScroll;
            const currentScroll = startScroll - elementTop;
            
            let p = currentScroll / totalScroll;
            p = Math.max(0, Math.min(1, p));
            
            setProgress(p);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = progress > 0 ? Math.min(1, Math.max(0.15, progress)) : 0.15;
    const glowIntensity = progress > 0 ? Math.min(1, progress) : 0;

    return (
        <span 
            ref={ref}
            className="relative inline-block mr-2 mb-1 md:mr-3 md:mb-2 lg:mr-4 lg:mb-3"
            style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
        >
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
                        textShadow: glowIntensity > 0 
                            ? `0 0 ${20 * glowIntensity}px rgba(255,255,255,${0.9 * glowIntensity}), 0 0 ${40 * glowIntensity}px rgba(255,255,255,${0.6 * glowIntensity})`
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

    return (
        <section
            ref={containerRef}
            id="security"
            className="relative bg-black min-h-[180vh]"
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
                    style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
                >
                    YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
                </motion.h3>

                <p 
                    className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] flex flex-wrap justify-center max-w-4xl mx-auto"
                    style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
                >
                    {words.map((word, index) => (
                        <Word key={index} word={word} index={index} />
                    ))}
                </p>

                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-20" />
            </div>
        </section>
    );
}
