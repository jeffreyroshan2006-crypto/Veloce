'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Sparkles } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';

// ============================================
// TYPES & DATA
// ============================================

interface ServiceItem {
    title: string;
    price: string;
    priceSuffix?: string;
    time: string;
    description: string;
    deliverables: string[];
}

const services: ServiceItem[] = [
    {
        title: 'WEBSITE\nDEVELOPMENT',
        price: '$2,000',
        priceSuffix: '+',
        time: '20-30 days',
        description: 'We develop everything from scratch: from research and design to website development and integration with CRM and analytics.',
        deliverables: [
            'Research & competitor analysis',
            'UI/UX design with all pages',
            'Responsive development',
            'CMS integration',
            'CRM & analytics setup',
            'SEO optimization',
            'Performance optimization',
            '30-day post-launch support'
        ]
    },
    {
        title: 'BRAND IDENTITY\nCREATION',
        price: '$1,500',
        time: '15-20 days',
        description: 'We create a complete visual identity that conveys your brand\'s core values and resonates with your audience.',
        deliverables: [
            'Brand strategy & positioning',
            'Logo design (3 concepts)',
            'Color palette & typography system',
            'Brand guidelines document',
            'Social media templates',
            'Business card & stationery design'
        ]
    },
    {
        title: 'SOCIAL MEDIA\nCREATIVE PACK',
        price: '$500',
        priceSuffix: '+',
        time: '5-10 days',
        description: 'We create stunning social media content and templates designed to stop the scroll and drive engagement.',
        deliverables: [
            'Custom post templates (10+)',
            'Story & Reel templates',
            'Content calendar strategy',
            'Platform-specific optimization',
            'Brand-consistent styling'
        ]
    },
    {
        title: 'AD & CAMPAIGN\nCREATIVES',
        price: '$500',
        priceSuffix: '+',
        time: '5-10 days',
        description: 'We create high-impact static and animated ad designs for Meta, Google Ads, and other platforms.',
        deliverables: [
            'Static banner designs (all sizes)',
            'Animated ad variations',
            'A/B test variants',
            'Platform-specific formats',
            'Performance-optimized assets'
        ]
    }
];

const conceptDeliverables = [
    'Design references that suit your project',
    'Site structure flowchart',
    'Development project plan with timeline',
];

// ============================================
// ACCORDION ITEM
// ============================================

function AccordionItem({ service, index }: { service: ServiceItem; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="pricing-accordion-item"
        >
            {/* Divider line */}
            <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

            <div
                className="py-8 md:py-10 cursor-pointer group"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Main row */}
                <div className="flex items-start justify-between gap-4">
                    {/* Service name + description */}
                    <div className="flex-1 max-w-[50%]">
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] whitespace-pre-line group-hover:text-[#5B4BD5] transition-colors duration-300">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base mt-3 leading-relaxed max-w-md">
                            {service.description}
                        </p>
                    </div>

                    {/* Price + time */}
                    <div className="flex items-start gap-4 md:gap-12">
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                                {service.price}
                                {service.priceSuffix && (
                                    <sup className="text-xl md:text-3xl align-super">{service.priceSuffix}</sup>
                                )}
                            </div>
                            <div className="text-gray-400 text-xs md:text-sm mt-1">
                                <span className="block">Time:</span>
                                <span className="font-bold text-gray-600">{service.time}</span>
                            </div>
                        </div>

                        {/* Toggle button */}
                        <motion.button
                            className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 mt-2 shrink-0"
                            style={{
                                backgroundColor: isOpen ? '#fb923c' : 'transparent',
                                border: isOpen ? 'none' : '2px solid #e5e7eb',
                                color: isOpen ? '#fff' : '#9ca3af'
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={isOpen ? 'Collapse' : 'Expand'}
                        >
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </motion.button>
                    </div>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 md:pt-8">
                                <div className="text-xs font-bold uppercase tracking-widest text-[#5B4BD5] mb-4">
                                    What&apos;s included
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {service.deliverables.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05, duration: 0.3 }}
                                            className="flex items-center gap-3 text-gray-600 text-sm"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#fb923c] shrink-0" />
                                            {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// ============================================
// FLOATING BLOB
// ============================================

function FloatingBlob({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
            animate={{
                x: [0, 30, -20, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
        />
    );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function PricingSection() {
    return (
        <section id="pricing" className="relative">
            {/* ===== HERO ===== */}
            <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden pricing-hero-gradient">
                {/* Animated blobs */}
                <FloatingBlob className="w-[500px] h-[500px] bg-[#7c6bdb]/30 top-[10%] left-[10%]" delay={0} />
                <FloatingBlob className="w-[400px] h-[400px] bg-[#fb923c]/20 top-[20%] right-[15%]" delay={2} />
                <FloatingBlob className="w-[350px] h-[350px] bg-[#5B4BD5]/25 bottom-[15%] left-[30%]" delay={4} />

                {/* Grain overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }} />

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    {/* Breadcrumbs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-3 mb-12"
                    >
                        <a href="#home" className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50 hover:text-white/80 transition-colors">HOME</a>
                        <span className="text-white/30">/</span>
                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/80">PRICING</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.95]">
                            <span className="pricing-script-text text-[#fb923c] text-4xl sm:text-5xl md:text-7xl inline-block -rotate-2 mr-3 mb-2">
                                The cost
                            </span>
                            <br className="hidden sm:block" />
                            IS DETERMINED{' '}
                            <br />
                            BASED ON <span className="text-white/40">SCOPE OF WORK</span>
                        </h2>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-8 leading-relaxed font-light"
                    >
                        First, we conduct a strategic consultation (free). Then, we present the website concept and project plan with deadlines and costs
                    </motion.p>
                </div>
            </div>

            {/* ===== PRICE LIST CARD ===== */}
            <div className="relative px-4 md:px-6 -mt-16 z-10 pb-20">
                {/* Background transition gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c8c0e8]/30 to-[#d4cfe6]/60 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="max-w-[1100px] mx-auto bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.1)] overflow-hidden relative z-10"
                >
                    {/* Price List heading */}
                    <div className="px-6 md:px-16 pt-10 md:pt-16 pb-4">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight text-center"
                        >
                            <span className="font-black">PRICE</span>{' '}
                            <span className="font-light">LIST</span>
                        </motion.h3>
                    </div>

                    {/* Service items */}
                    <div className="px-6 md:px-16 pb-10 md:pb-16">
                        {services.map((service, i) => (
                            <AccordionItem key={i} service={service} index={i} />
                        ))}
                        {/* Final divider */}
                        <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                    </div>
                </motion.div>
            </div>

            {/* ===== CONCEPT PROMO SECTION ===== */}
            <div className="relative px-4 md:px-6 pb-32">
                <div className="absolute inset-0 bg-gradient-to-b from-[#d4cfe6]/60 via-[#d4cfe6]/30 to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="max-w-[1100px] mx-auto relative z-10"
                >
                    <div className="bg-[#5B4BD5] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7c6bdb]/40 rounded-full blur-[120px] pointer-events-none" />

                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10">
                            {/* Left content */}
                            <div className="flex-1">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-2">
                                        GET A FREE
                                        <br />
                                        <span className="text-white/40">CONSULTATION</span>
                                    </h3>
                                    <div className="pricing-script-text text-[#fb923c] text-3xl md:text-5xl -rotate-2 inline-block mt-1 mb-8">
                                        in 3 days
                                    </div>
                                </motion.div>

                                {/* What you'll receive */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    <p className="text-white/50 text-sm font-medium mb-4">You will receive</p>

                                    {conceptDeliverables.map((item, i) => (
                                        <div key={i}>
                                            <div className="w-full h-px bg-white/20" />
                                            <motion.p
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                                                className="text-white/90 text-sm md:text-base py-4"
                                            >
                                                {item}
                                            </motion.p>
                                        </div>
                                    ))}
                                    <div className="w-full h-px bg-white/20" />
                                </motion.div>

                                {/* CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                    className="flex items-center gap-4 mt-8"
                                >
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#fb923c] text-black font-black text-sm uppercase tracking-wider hover:bg-[#f97316] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(251,146,60,0.3)]"
                                    >
                                        I WANT CONSULTATION
                                        <ArrowRight size={16} />
                                    </a>
                                    <span className="text-white/40 text-sm font-light">It&apos;s free</span>
                                </motion.div>
                            </div>

                            {/* Right content - Team cards */}
                            <div className="flex flex-col gap-4 lg:w-[340px]">
                                {/* Creative Director card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="bg-white rounded-2xl p-5 flex items-center gap-4"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#fb923c]/20 flex items-center justify-center shrink-0 border-4 border-[#fb923c]/30 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-[#fb923c] to-[#f97316] flex items-center justify-center">
                                            <Sparkles size={28} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs leading-tight">The concept&apos;s coming<br />straight from our</p>
                                        <p className="text-gray-500 text-xs">Creative Director</p>
                                        <p className="font-black text-gray-900 text-lg mt-1">Lead Designer</p>
                                    </div>
                                </motion.div>

                                {/* Project Manager card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="bg-white rounded-2xl p-5 flex items-center gap-4"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#5B4BD5]/20 flex items-center justify-center shrink-0 border-4 border-[#5B4BD5]/30 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-[#5B4BD5] to-[#7c6bdb] flex items-center justify-center">
                                            <Sparkles size={28} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs leading-tight">The consultation<br />is conducted by</p>
                                        <p className="text-gray-500 text-xs">the Project Manager</p>
                                        <p className="font-black text-gray-900 text-lg mt-1">Project Lead</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
