'use client';

import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface InteractiveMarqueeProps {
    text: string;
    speed?: number;
}

export function InteractiveMarquee({ text, speed = 1 }: InteractiveMarqueeProps) {
    const baseX = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    // Smoothly interpolate speed down when hovered
    const targetSpeed = isHovered ? speed * 0.1 : speed;
    const currentSpeed = useSpring(targetSpeed, { stiffness: 50, damping: 20 });

    // Create a continuous movement with 60fps optimization
    useAnimationFrame((t, delta) => {
        // Cap delta to maintain smooth 60fps even if frame drops
        const smoothDelta = Math.min(delta, 20);
        let moveBy = currentSpeed.get() * (smoothDelta / 1000) * -50;

        // reset to loop seamlessly
        baseX.set(baseX.get() + moveBy);

        // if it goes too far left, wrap it
        if (baseX.get() <= -50) {
            baseX.set(0);
        }
    });

    const x = useTransform(baseX, (v) => `${v}%`);

    return (
        <div
            className="overflow-hidden whitespace-nowrap flex items-center w-full relative py-6 mask-edges"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <motion.div
                className="flex whitespace-nowrap gap-20 text-lg md:text-2xl lg:text-3xl font-black tracking-[0.15em] text-white/50 uppercase will-change-transform"
                style={{
                    x,
                    translateZ: 0, // Force GPU acceleration
                }}
            >
                {/* We need multiple copies to ensure seamless infinite looping */}
                {[...Array(6)].map((_, i) => (
                    <span
                        key={i}
                        className="transition-all duration-1000 ease-out hover:text-white hover:tracking-[0.2em] cursor-default min-w-max select-none"
                        style={{
                            textShadow: '0 0 40px rgba(255,255,255,0.1)',
                        }}
                    >
                        {text} <span className="text-uptic-orange/60 px-8 text-xl">◆</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
