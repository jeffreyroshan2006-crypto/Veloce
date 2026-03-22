'use client';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';
import { awwwardsSites, categories } from '@/lib/data/awwwards';

// ============================================
// MARQUEE CARD
// ============================================

function MarqueeCard({ site, isPaused }: { site: typeof awwwardsSites[0]; isPaused: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 block mx-4 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, zIndex: 50 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative w-[340px] md:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#161618] border border-white/[0.05] group-hover:border-[#fb923c]/40 transition-all duration-500 shadow-2xl">
                {/* Image - Optimized for performance */}
                <img
                    src={site.thumbnail}
                    alt={site.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                    loading="lazy"
                    decoding="async"
                />
                
                {/* Simplified gradient overlay for performance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-black text-white mb-1 truncate tracking-tight">{site.name}</h3>
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                                    site.award === 'SOTM' 
                                        ? 'bg-[#fb923c] text-black shadow-[0_0_15px_rgba(251,146,60,0.4)]' 
                                        : 'bg-white/10 text-white/70'
                                }`}>
                                    {site.award}
                                </span>
                                <p className="text-[10px] text-white/40 truncate uppercase font-bold tracking-widest">{site.agency}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glass reflection shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                </div>
            </div>
        </motion.a>
    );
}

// ============================================
// MARQUEE ROW
// ============================================

function MarqueeRow({ sites, direction = 1, speed = 50, isPaused }: { 
    sites: typeof awwwardsSites; 
    direction?: 1 | -1; 
    speed?: number;
    isPaused: boolean;
}) {
    // We duplicate the list to ensure seamless looping
    const duplicatedSites = [...sites, ...sites, ...sites];

    return (
        <div className="relative overflow-hidden py-4 group/row select-none">
            <div 
                className={`flex w-max will-change-transform ${isPaused ? 'pause-animation' : ''}`}
                style={{
                    animation: `marquee-${direction === 1 ? 'right' : 'left'} ${speed}s linear infinite`,
                    animationPlayState: isPaused ? 'paused' : 'running'
                }}
            >
                {duplicatedSites.map((site, index) => (
                    <MarqueeCard key={`${site.id}-${index}`} site={site} isPaused={isPaused} />
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .pause-animation {
                    animation-play-state: paused !important;
                }
            `}</style>
        </div>
    );
}

// ============================================
// GRID CARD
// ============================================

function GridCard({ site }: { site: typeof awwwardsSites[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 backdrop-blur-sm border border-white/[0.08] group hover:border-white/20 transition-colors duration-300">
                <img
                    src={site.thumbnail}
                    alt={site.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                        boxShadow: `inset 0 0 60px ${site.award === 'SOTM' ? 'rgba(251, 146, 60, 0.25)' : 'rgba(139, 92, 246, 0.25)'}`
                    }}
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                        site.award === 'SOTM' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black' : 'bg-white/10 text-white border border-white/20'
                    }`}>
                        {site.award}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-black/50 backdrop-blur-sm text-white/70 border border-white/10">
                        {site.category}
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-white truncate">{site.name}</h3>
                            <p className="text-[10px] text-white/50 truncate">{site.agency}</p>
                        </div>
                        <motion.div
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 ml-2 border border-white/20"
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                        >
                            <ExternalLink size={12} className="text-white" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function InspirationBoard() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [count, setCount] = useState(0);

    const filteredSites = useMemo(() => {
        if (activeCategory === 'All') return awwwardsSites;
        return awwwardsSites.filter(s => s.category === activeCategory);
    }, [activeCategory]);

    // Split into rows for marquee
    const marqueeRows = useMemo(() => {
        const rowSize = Math.ceil(filteredSites.length / 4);
        return [
            filteredSites.slice(0, rowSize),
            filteredSites.slice(rowSize, rowSize * 2),
            filteredSites.slice(rowSize * 2, rowSize * 3),
            filteredSites.slice(rowSize * 3)
        ];
    }, [filteredSites]);

    // Animated counter
    useEffect(() => {
        const target = filteredSites.length;
        const duration = 600;
        const start = count;
        const diff = target - start;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(start + diff * easeProgress));

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [filteredSites.length]);

    return (
        <section id="catalog" className="py-32 relative overflow-hidden bg-[#0a0a0b]">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#fb923c]/[0.03] rounded-full blur-[200px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8b5cf6]/[0.03] rounded-full blur-[180px]" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles size={14} className="text-[#fb923c]" />
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
                            Find Your Vision
                        </span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
                        <TextReveal>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
                                AWWWARDS
                            </h2>
                        </TextReveal>

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fb923c]/20 to-[#f97316]/20 border border-[#fb923c]/30"
                        >
                            <span className="text-[#fb923c] font-black text-xl tracking-tight">
                                {count}+ SITES
                            </span>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/40 max-w-xl mx-auto text-base leading-relaxed"
                    >
                        Curated collection of award-winning websites. Hover to pause, click to visit.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 px-6">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setIsExpanded(false); }}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeCategory === cat
                                    ? 'bg-white text-black'
                                    : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/10'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {!isExpanded ? (
                        // MARQUEE VIEW
                        <motion.div
                            key="marquee"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="perspective-[2000px] py-10 relative"
                        >
                            {/* Cinematic Edge Masks */}
                            <div className="absolute inset-y-0 left-0 w-40 z-20 bg-gradient-to-r from-[#0a0a0b] to-transparent pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-40 z-20 bg-gradient-to-l from-[#0a0a0b] to-transparent pointer-events-none" />
                            
                            <div className="rotate-x-12 -rotate-y-6 skew-x-[-4deg] scale-110">
                                <MarqueeRow sites={marqueeRows[0]} direction={1} speed={150} isPaused={isPaused} />
                                <MarqueeRow sites={marqueeRows[1]} direction={-1} speed={180} isPaused={isPaused} />
                                <MarqueeRow sites={marqueeRows[2]} direction={1} speed={160} isPaused={isPaused} />
                                <MarqueeRow sites={marqueeRows[3]} direction={-1} speed={190} isPaused={isPaused} />
                            </div>
                        </motion.div>
                    ) : (
                        // GRID VIEW
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="px-6"
                        >
                            <div className="max-w-[1600px] mx-auto">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
                                    {filteredSites.map((site) => (
                                        <GridCard key={site.id} site={site} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* View Toggle Button */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group relative flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-500"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#fb923c] to-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center gap-3">
                            {isExpanded ? (
                                <>← Back to Animated View</>
                            ) : (
                                <>View Full Catalog ({filteredSites.length}) <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
