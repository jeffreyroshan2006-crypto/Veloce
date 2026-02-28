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

    // Create a continuous movement
    useAnimationFrame((t, delta) => {
        let moveBy = currentSpeed.get() * (delta / 1000) * -100;

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
            className="overflow-hidden whitespace-nowrapflex items-center w-full relative py-4 mask-edges"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <motion.div className="flex whitespace-nowrap gap-16 text-xl md:text-3xl lg:text-4xl font-black tracking-wide text-white/60 uppercase" style={{ x }}>
                {/* We need multiple copies to ensure seamless infinite looping */}
                {[...Array(4)].map((_, i) => (
                    <span
                        key={i}
                        className="transition-all duration-700 ease-out hover:text-white hover:tracking-wider cursor-default min-w-max"
                    >
                        {text} <span className="text-uptic-orange/80 px-6 text-2xl">◆</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
