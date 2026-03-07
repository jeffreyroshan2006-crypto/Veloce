"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const securityText = "all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.";

const words = securityText.split(" ");

export default function SecuritySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section 
            ref={sectionRef}
            className="min-h-[150vh] bg-black relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F59E0B]/3 rounded-full blur-[150px]" />
            </div>

            <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-6 py-20">
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-10"
                    >
                        <div className="relative">
                            <Shield size={52} className="text-[#F59E0B]" strokeWidth={1.5} />
                            <motion.div
                                className="absolute inset-0 -z-10 rounded-full"
                                animate={{
                                    boxShadow: [
                                        '0 0 30px rgba(245,158,11,0.3)',
                                        '0 0 60px rgba(245,158,11,0.5)',
                                        '0 0 30px rgba(245,158,11,0.3)'
                                    ]
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-16"
                    >
                        <span className="inline-block px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B]">
                            Your Data Isn't Our Business. Keeping It Safe Is.
                        </span>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2 max-w-4xl mx-auto">
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight"
                                initial={{ 
                                    opacity: 0.15,
                                    color: "rgba(255,255,255,0.25)",
                                    filter: "blur(4px)"
                                }}
                                whileInView={{ 
                                    opacity: 1,
                                    color: "#ffffff",
                                    filter: "blur(0px)"
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.06,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                style={{
                                    textShadow: "0 0 25px rgba(255,255,255,0.25)",
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="mt-20 flex justify-center"
                    >
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                            <Lock size={16} className="text-[#F59E0B]" />
                            <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                                End-to-End Encryption
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
