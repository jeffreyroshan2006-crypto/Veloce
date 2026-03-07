'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, MotionValue } from 'framer-motion';
import { Lock } from 'lucide-react';

const text = "all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.";
const words = text.split(" ");

function Word({ word, index, progress }: { word: string; index: number; progress: MotionValue<number> }) {
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
        <span className="relative inline-block mx-1 my-1">
            <span 
                className="text-white/20 select-none"
                style={{ 
                    opacity: 1,
                    fontFamily: '"Clash Display", "Satoshi", "General Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: 'inherit'
                }}
            >
                {word}
            </span>
            <span
                className="absolute inset-0 text-white z-10 flex items-center justify-center"
                style={{ opacity }}
            >
                <span
                    style={{
                        fontFamily: '"Clash Display", "Satoshi", "General Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 'inherit',
                        textShadow: glow > 0 
                            ? `0 0 ${30 * glow}px rgba(255,255,255,${0.9 * glow}), 0 0 ${60 * glow}px rgba(255,255,255,${0.5 * glow})`
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
            className="relative bg-black min-h-[120vh] flex items-center justify-center overflow-hidden"
        >
            <style jsx global>{`
                @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@700,900&display=swap');
            `}</style>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[120px]" />
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Lock className="w-5 h-5 text-[#F59E0B]" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#F59E0B]">
                            Security
                        </span>
                    </div>
                </motion.div>

                <motion.h3
                    className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-white/50 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
                </motion.h3>

                <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 md:gap-x-3 md:gap-y-3 max-w-3xl mx-auto">
                    {words.map((word, index) => (
                        <Word 
                            key={index} 
                            word={word} 
                            index={index} 
                            progress={scrollYProgress} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
