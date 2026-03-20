'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, MotionValue } from 'framer-motion';
import { Lock } from 'lucide-react';

const text = `ALLYOUR\nPERSONAL\nDATA\nAND\nTRANSACTIONS\nARE\nENCRYPTED\nAND\nSECURED.\nTHERE’S\nNO\nROOM\nFOR\nMISTAKES\nBECAUSE\nWE\nDIDN’T\nLEAVE`;
const words = text.split(/\s+/);

 function Word({ word, index, progress, fontSize = 32 }: { word: string; index: number; progress: MotionValue<number>; fontSize?: number }) {
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
        <span className="relative inline-block mx-2 my-1">
            <span 
                className="text-white/20 select-none"
                style={{ 
                    opacity: 1,
                    fontFamily: '"Clash Display", "Satoshi", "General Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: `${fontSize}px`
                }}
            >
                {word.toUpperCase()}
            </span>
            <span
                className="absolute inset-0 text-white z-10 flex items-center justify-center"
                style={{ opacity }}
            >
                <span
                    style={{
                        fontFamily: '"Clash Display", "Satoshi", "General Sans", sans-serif',
                        fontWeight: 600,
                    fontSize: `${fontSize}px`,
                        textShadow: glow > 0
                            ? `0 0 ${30 * glow}px rgba(255,255,255,${0.9 * glow}), 0 0 ${60 * glow}px rgba(255,255,255,${0.5 * glow})`
                            : 'none',
                    }}
                >
                    {word.toUpperCase()}
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
            
            <div className="relative z-10 max-w-7xl mx-auto px-8 text-center py-20">
                <div className="mb-32 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] uppercase">
                            <span className="pricing-script-text text-[#F59E0B] text-3xl sm:text-4xl md:text-5xl inline-block -rotate-2 mr-3 mb-4 lowercase opacity-100 normal-case">
                                Veloce Security & Architecture
                            </span>
                            <br className="hidden sm:block" />
                            VELOCE GUARD - <br />
                            <span className="text-white/30 tracking-tight">Infrastructure Excellence.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-2 max-w-3xl mx-auto">
                    {words.map((word, index) => (
                        <Word 
                            key={index} 
                            word={word} 
                            index={index} 
                            progress={scrollYProgress} 
                            fontSize={32} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
