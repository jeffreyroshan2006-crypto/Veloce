'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface PremiumHeroTextProps {
    text: string;
}

export function PremiumHeroText({ text }: PremiumHeroTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position tracking for 3D parallax effect
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate mouse position relative to center of container (-1 to 1)
            const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Transform mouse values to subtle rotations and translations
    const rotateX = useTransform(mouseY, [-1, 1], [15, -15]);
    const rotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

    const layer1X = useTransform(mouseX, [-1, 1], [-10, 10]);
    const layer1Y = useTransform(mouseY, [-1, 1], [-10, 10]);

    const layer2X = useTransform(mouseX, [-1, 1], [10, -10]);
    const layer2Y = useTransform(mouseY, [-1, 1], [10, -10]);

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
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 100,
            rotateX: 90,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div
            ref={containerRef}
            className="relative cursor-crosshair perspective-1000 select-none z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                mouseX.set(0);
                mouseY.set(0);
            }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative"
            >
                {/* Background Layer (Blur/Shadow) */}
                <motion.div
                    className="absolute inset-0 text-[#007FFF]/30 blur-[20px] mix-blend-screen flex justify-center w-full"
                    style={{ x: layer2X, y: layer2Y, translateZ: -50 }}
                >
                    {text}
                </motion.div>

                {/* Middle Layer (Chromatic/Glass) */}
                <motion.div
                    className="absolute inset-0 chromatic-text opacity-50 flex justify-center w-full"
                    style={{ x: layer1X, y: layer1Y, translateZ: 25 }}
                >
                    {text}
                </motion.div>

                {/* Front Animated Layer */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="relative flex justify-center w-full"
                    style={{ translateZ: 50 }}
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            className={`inline-block ${isHovered ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'shimmer-text'} transition-all duration-300`}
                            whileHover={{
                                scale: 1.1,
                                rotate: Math.random() * 10 - 5,
                                color: "#007FFF"
                            }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
