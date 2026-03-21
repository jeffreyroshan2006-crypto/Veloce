'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface PremiumHeroTextProps {
    text: string;
}

export function PremiumHeroText({ text }: PremiumHeroTextProps) {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 100,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="relative perspective-1000 select-none z-10">
            <motion.div className="relative">
                {/* Fixed Background Glow */}
                <div className="absolute inset-0 text-[#007FFF]/20 blur-[30px] mix-blend-screen flex justify-center w-full select-none pointer-events-none">
                    {text}
                </div>

                {/* Main Static Text */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="relative flex justify-center w-full"
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            className="inline-block shimmer-text transition-all duration-300"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
