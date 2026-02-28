'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface InteractiveMarqueeProps {
    text: string;
    speed?: number;
}

export function InteractiveMarquee({ text, speed = 1 }: InteractiveMarqueeProps) {
    const baseX = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const lastTimeRef = useRef<number>(0);

    // Ultra-smooth spring interpolation
    const targetSpeed = isHovered ? speed * 0.05 : speed;
    const currentSpeed = useSpring(targetSpeed, {
        stiffness: 30,
        damping: 25,
        mass: 0.5
    });

    // 60fps optimized animation loop with frame time capping
    useEffect(() => {
        let animationId: number;

        const animate = (timestamp: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const delta = timestamp - lastTimeRef.current;
            lastTimeRef.current = timestamp;

            // Cap delta at 16.67ms (60fps) for smooth consistency
            const smoothDelta = Math.min(delta, 16.67);

            const moveBy = currentSpeed.get() * (smoothDelta / 1000) * -30;
            const currentX = baseX.get();

            baseX.set(currentX + moveBy);

            // Seamless loop reset
            if (baseX.get() <= -25) {
                baseX.set(0);
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [baseX, currentSpeed]);

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
                className="flex whitespace-nowrap gap-24 text-base md:text-xl lg:text-2xl font-black tracking-[0.2em] text-white/40 uppercase"
                style={{
                    x,
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                }}
            >
                {/* Increased copies for seamless ultra-slow looping */}
                {[...Array(8)].map((_, i) => (
                    <span
                        key={i}
                        className="transition-all duration-1000 ease-out hover:text-white hover:tracking-[0.25em] cursor-default min-w-max select-none"
                        style={{
                            textShadow: '0 0 60px rgba(255,255,255,0.05)',
                            backfaceVisibility: 'hidden',
                        }}
                    >
                        {text} <span className="text-uptic-orange/50 px-10 text-lg">◆</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
