"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const securityText = "all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.";

const words = securityText.split(" ");

function GlowingWord({ word, index, total }: { word: string; index: number; total: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.5"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
    const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
    return (
        <motion.span
            ref={ref}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight inline-block mx-1 md:mx-2"
            style={{ 
                opacity,
                color: "white",
            }}
        >
            <motion.span
                style={{
                    display: "inline-block",
                    textShadow: useTransform(
                        glow,
                        [0, 1],
                        [
                            "0 0 0px rgba(255,255,255,0), 0 0 0px rgba(245,158,11,0)",
                            "0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(245,158,11,0.4), 0 0 120px rgba(245,158,11,0.2)"
                        ]
                    ),
                }}
            >
                {word}
            </motion.span>
        </motion.span>
    );
}

export default function SecuritySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section 
            ref={sectionRef}
            className="min-h-[200vh] bg-black relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F59E0B]/3 rounded-full blur-[180px]" />
                <div className="absolute inset-0 opacity-[0.02]" 
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-6 py-20">
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-12"
                    >
                        <div className="relative">
                            <Shield size={56} className="text-[#F59E0B]" strokeWidth={1.5} />
                            <motion.div
                                className="absolute inset-0 -z-10 rounded-full"
                                animate={{
                                    boxShadow: [
                                        '0 0 40px rgba(245,158,11,0.4)',
                                        '0 0 80px rgba(245,158,11,0.6)',
                                        '0 0 40px rgba(245,158,11,0.4)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-20"
                    >
                        <span className="inline-block px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B]">
                            Your Data Isn't Our Business. Keeping It Safe Is.
                        </span>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-y-3 md:gap-y-4 max-w-5xl mx-auto leading-tight md:leading-tight">
                        {words.map((word, index) => (
                            <GlowingWord 
                                key={index} 
                                word={word} 
                                index={index} 
                                total={words.length} 
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="mt-24 flex justify-center"
                    >
                        <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Lock size={18} className="text-[#F59E0B]" />
                            <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                                End-to-End Encryption
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
