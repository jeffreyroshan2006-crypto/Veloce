'use client';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { ArrowRight, Sparkles, Layers, Globe, Zap, Shield, Cpu } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';

// ============================================
// TYPES & DATA
// ============================================

type Category = 'All' | 'SaaS' | 'E-commerce' | 'Corporate' | 'Healthcare' | 'AI';

interface Theme {
    id: string;
    name: string;
    type: string;
    category: Category;
    description: string;
    techStack: string[];
    color: string;
    accentColor: string;
    img: string;
}

const themes: Theme[] = [
    {
        id: 'aura',
        name: 'Aura',
        type: 'SaaS / AI Product',
        category: 'SaaS',
        description: 'Ethereal interface with fluid animations and predictive UX patterns for next-gen SaaS platforms.',
        techStack: ['React', 'Three.js', 'Framer Motion', 'WebGL'],
        color: 'from-blue-500/30 to-purple-500/30',
        accentColor: '#8b5cf6',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'kinetix',
        name: 'Kinetix',
        type: 'High-End E-commerce',
        category: 'E-commerce',
        description: 'Dynamic shopping experience with real-time inventory and immersive product visualization.',
        techStack: ['Next.js', 'Stripe', 'Three.js', 'GSAP'],
        color: 'from-orange-500/30 to-red-500/30',
        accentColor: '#fb923c',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
        id: 'monolith',
        name: 'Monolith',
        type: 'Corporate / Real Estate',
        category: 'Corporate',
        description: 'Bold architectural presence with commanding typography and sophisticated data presentations.',
        techStack: ['Next.js', 'D3.js', 'Tailwind', 'Prisma'],
        color: 'from-emerald-500/30 to-teal-500/30',
        accentColor: '#10b981',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'pulse',
        name: 'Pulse',
        type: 'Healthcare / Wellness',
        category: 'Healthcare',
        description: 'Calming interface with biometric integrations and accessibility-first design principles.',
        techStack: ['React', 'TypeScript', 'WebRTC', 'TensorFlow.js'],
        color: 'from-cyan-500/30 to-blue-500/30',
        accentColor: '#06b6d4',
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'neural',
        name: 'Neural',
        type: 'AI / Machine Learning',
        category: 'AI',
        description: 'Futuristic dashboard with real-time data visualization and neural network animations.',
        techStack: ['Python', 'TensorFlow', 'React', 'WebGL'],
        color: 'from-violet-500/30 to-fuchsia-500/30',
        accentColor: '#a855f7',
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'vertex',
        name: 'Vertex',
        type: 'FinTech / Banking',
        category: 'Corporate',
        description: 'Secure, compliant interface with real-time trading data and institutional-grade performance.',
        techStack: ['Next.js', 'PostgreSQL', 'Redis', 'WebSockets'],
        color: 'from-amber-500/30 to-yellow-500/30',
        accentColor: '#f59e0b',
        img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop'
    }
];

const categories: Category[] = ['All', 'SaaS', 'E-commerce', 'Corporate', 'Healthcare', 'AI'];

// ============================================
// WEBGL PARTICLE FIELD
// ============================================

function ParticleField() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const { viewport, mouse } = useThree();
    const particleCount = 200;

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        return Array.from({ length: particleCount }, () => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ] as [number, number, number],
            scale: Math.random() * 0.5 + 0.2,
            speed: Math.random() * 0.5 + 0.2,
            phase: Math.random() * Math.PI * 2
        }));
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;

        particles.forEach((particle, i) => {
            const [x, y, z] = particle.position;

            // Floating motion
            const floatY = y + Math.sin(time * particle.speed + particle.phase) * 0.3;
            const floatX = x + Math.cos(time * particle.speed * 0.5 + particle.phase) * 0.2;

            // Mouse proximity effect
            const mouseInfluenceX = (mouse.x * viewport.width * 0.5 - floatX) * 0.02;
            const mouseInfluenceY = (mouse.y * viewport.height * 0.5 - floatY) * 0.02;

            // Pulsing scale
            const pulse = 1 + Math.sin(time * 2 + particle.phase) * 0.2;

            dummy.position.set(
                floatX + mouseInfluenceX,
                floatY + mouseInfluenceY,
                z
            );
            dummy.scale.setScalar(particle.scale * pulse);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </instancedMesh>
    );
}

function ParticleCanvas() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <ParticleField />
            </Canvas>
        </div>
    );
}

// ============================================
// ORBITAL GLOW RING
// ============================================

function OrbitalGlowRing() {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-30">
            <svg viewBox="0 0 400 400" className="w-full h-full animate-orbit-rotate">
                <defs>
                    <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fb923c" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="orbitalGlow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="url(#orbitalGradient)"
                    strokeWidth="1"
                    strokeDasharray="20 10 5 10"
                    filter="url(#orbitalGlow)"
                    opacity="0.6"
                />
                <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="#fb923c"
                    strokeWidth="0.5"
                    strokeDasharray="50 30"
                    opacity="0.4"
                />
            </svg>
        </div>
    );
}

// ============================================
// 3D INTERACTIVE CARD
// ============================================

function ThemeCard({ theme, index }: { theme: Theme; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ['8deg', '-8deg']);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-8deg', '8deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isFlipped) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const getTechIcon = (tech: string) => {
        if (tech.includes('React') || tech.includes('Next')) return <Layers size={12} />;
        if (tech.includes('Three') || tech.includes('WebGL')) return <Globe size={12} />;
        if (tech.includes('Tensor') || tech.includes('Python')) return <Cpu size={12} />;
        if (tech.includes('Stripe')) return <Zap size={12} />;
        return <Shield size={12} />;
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }}
            className="card-3d-wrapper"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="card-3d"
                style={{
                    rotateX: isFlipped ? 0 : rotateX,
                    rotateY: isFlipped ? 180 : rotateY,
                    transformStyle: 'preserve-3d'
                }}
                animate={{
                    rotateY: isFlipped ? 180 : 0
                }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
                {/* FRONT */}
                <div className="card-face card-front">
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                        <motion.img
                            src={theme.img}
                            alt={theme.name}
                            className="absolute inset-0 w-full h-full object-cover"
                            animate={{ scale: isHovered ? 1.05 : 1 }}
                            transition={{ duration: 0.6 }}
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${theme.color} opacity-60 mix-blend-overlay`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        {/* Scanline effect */}
                        <div className="scanline-effect" />

                        {/* Glass badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-semibold tracking-wider uppercase text-white/90 flex items-center gap-1.5">
                            <Sparkles size={12} style={{ color: theme.accentColor }} />
                            {theme.category}
                        </div>

                        {/* Shimmer overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: isHovered ? '100%' : '-100%' }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                    </div>

                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h3 className="text-3xl font-black text-white mb-1 tracking-tight">
                            {theme.name}
                        </h3>
                        <p className="text-white/60 text-sm tracking-wider uppercase font-medium">
                            {theme.type}
                        </p>
                    </div>

                    {/* Corner accent */}
                    <div
                        className="absolute bottom-0 right-0 w-24 h-24 opacity-40"
                        style={{
                            background: `radial-gradient(circle at bottom right, ${theme.accentColor}, transparent 70%)`
                        }}
                    />
                </div>

                {/* BACK */}
                <div
                    className="card-face card-back"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-black/80 backdrop-blur-xl border border-white/10">
                        {/* Background glow */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                background: `radial-gradient(circle at 50% 0%, ${theme.accentColor}, transparent 70%)`
                            }}
                        />

                        <div className="relative h-full flex flex-col p-6 z-10">
                            {/* Header */}
                            <div className="mb-4">
                                <span
                                    className="text-xs font-bold tracking-[0.2em] uppercase"
                                    style={{ color: theme.accentColor }}
                                >
                                    {theme.category}
                                </span>
                                <h3 className="text-2xl font-black text-white mt-1">
                                    {theme.name}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                                {theme.description}
                            </p>

                            {/* Tech stack */}
                            <div className="mb-6">
                                <span className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-2 block">
                                    Tech Stack
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {theme.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 flex items-center gap-1.5"
                                        >
                                            {getTechIcon(tech)}
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                                style={{
                                    backgroundColor: theme.accentColor,
                                    color: '#000'
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Select Theme
                                <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ============================================
// CATEGORY FILTER
// ============================================

function CategoryFilter({
    activeCategory,
    onCategoryChange
}: {
    activeCategory: Category;
    onCategoryChange: (category: Category) => void;
}) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
                <motion.button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${activeCategory === category
                        ? 'text-black'
                        : 'text-white/60 hover:text-white'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeFilter"
                            className="absolute inset-0 rounded-full bg-[#fb923c]"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </motion.button>
            ))}
        </div>
    );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function InspirationBoard() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [count, setCount] = useState(0);

    const filteredThemes = useMemo(() => {
        if (activeCategory === 'All') return themes;
        return themes.filter(t => t.category === activeCategory);
    }, [activeCategory]);

    // Animated counter
    useEffect(() => {
        const target = filteredThemes.length;
        const duration = 600;
        const start = count;
        const diff = target - start;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(start + diff * easeProgress));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [filteredThemes.length]);

    return (
        <section id="inspiration" className="py-40 px-6 relative overflow-hidden">
            {/* WebGL Particle Field */}
            <ParticleCanvas />

            {/* Subtle atmospheric glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#fb923c]/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Orbital Glow Ring */}
            <OrbitalGlowRing />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-semibold tracking-[0.4em] uppercase text-[#fb923c] mb-6 block"
                    >
                        Find Your Vision
                    </motion.span>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
                        <TextReveal>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
                                INSPIRATION
                            </h2>
                        </TextReveal>

                        {/* Animated Count Badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                            className="px-4 py-2 rounded-full bg-[#fb923c]/10 border border-[#fb923c]/30"
                        >
                            <span className="text-[#fb923c] font-black text-xl tracking-tight">
                                {count} THEMES
                            </span>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-400 max-w-lg mx-auto text-lg font-light leading-relaxed"
                    >
                        <span className="relative">
                            Browse our curated selection of award-winning digital experiences
                            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fb923c]/50 to-transparent" />
                        </span>
                    </motion.p>
                </div>

                {/* Category Filter */}
                <CategoryFilter
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* Cards Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
                    >
                        {filteredThemes.map((theme, index) => (
                            <ThemeCard key={theme.id} theme={theme} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* View Full Catalog Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-20 flex justify-center"
                >
                    <motion.button
                        className="group flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Full Catalog
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
