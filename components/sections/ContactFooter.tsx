'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Instagram, MessageCircle, Mail, Twitter, Linkedin, Dribbble, Zap } from 'lucide-react';

type HoveredLink = 'instagram' | 'whatsapp' | 'email' | null;

const brandConfigs = {
    instagram: {
        gradient: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
        solid: '#E1306C',
        icon: Instagram,
        handle: '@veloce_agency',
        label: 'Instagram',
        href: 'https://instagram.com/veloce_agency'
    },
    whatsapp: {
        gradient: 'linear-gradient(135deg, #25D366 0%, #20BD5A 100%)',
        solid: '#25D366',
        icon: MessageCircle,
        handle: '+1 800 555 0199',
        label: 'WhatsApp',
        href: 'https://wa.me/1234567890'
    },
    email: {
        gradient: 'linear-gradient(135deg, #5B4BD5 0%, #7C3AED 100%)',
        solid: '#5B4BD5',
        icon: Mail,
        handle: 'hello@veloce.com',
        label: 'Email',
        href: 'mailto:hello@veloce.com'
    }
};

function ContactLink({
    brand,
    isHovered,
    otherHovered,
    onHover,
    onLeave
}: {
    brand: 'instagram' | 'whatsapp' | 'email',
    isHovered: boolean,
    otherHovered: boolean,
    onHover: () => void,
    onLeave: () => void
}) {
    const config = brandConfigs[brand];
    const Icon = config.icon;

    return (
        <a
            href={config.href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="block"
        >
            <motion.div
                className="flex items-center gap-5 py-4 px-2 rounded-2xl transition-all"
                animate={{
                    opacity: otherHovered ? 0.3 : 1,
                    filter: otherHovered ? 'blur(4px)' : 'blur(0px)'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0"
                    animate={{
                        backgroundColor: isHovered ? config.solid : 'rgba(255,255,255,0.08)',
                        scale: isHovered ? 1.08 : 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <Icon size={28} className="text-white" />
                </motion.div>

                <div className="flex flex-col flex-1 min-w-0">
                    <motion.span
                        className="text-2xl md:text-3xl font-bold text-white tracking-tight"
                        animate={{ x: isHovered ? 8 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        {config.label}
                    </motion.span>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.span
                                initial={{ opacity: 0, y: -8, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -8, height: 0 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                className="text-base md:text-lg text-white/50 font-medium mt-1 block overflow-hidden"
                            >
                                {config.handle}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
                    animate={{
                        backgroundColor: isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                        scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <ArrowUpRight size={20} className="text-white/50" />
                </motion.div>
            </motion.div>
        </a>
    );
}

function MassiveIcon({ brand }: { brand: 'instagram' | 'whatsapp' | 'email' | null }) {
    if (!brand) return null;

    const config = brandConfigs[brand];
    const Icon = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 15, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="flex items-center justify-center"
        >
            <div
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full flex items-center justify-center"
                style={{
                    background: `radial-gradient(circle, ${config.solid}50 0%, ${config.solid}20 50%, transparent 70%)`,
                    boxShadow: `0 0 80px ${config.solid}40, 0 0 120px ${config.solid}20`
                }}
            >
                <Icon size={100} className="text-white drop-shadow-lg" strokeWidth={1.5} />
            </div>
        </motion.div>
    );
}

function AmbientGlow() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4A3AFF]/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#9D4EDD]/10 blur-[120px]" />
        </div>
    );
}

export default function ContactFooter() {
    const [hoveredLink, setHoveredLink] = useState<HoveredLink>(null);

    return (
        <section id="contact" className="relative w-full z-10 flex flex-col pt-20 bg-[#f4f5f8]">

            {/* PART 1: "Maximum Attention" CTA Section */}
            <div className="relative w-full px-6 py-16 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-12"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/50 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#4A3AFF] animate-pulse" />
                        <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">Available for work</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-[75rem] mx-auto z-10 relative"
                >
                    <h2 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6.5rem] font-black text-[#0f1218] leading-[0.9] tracking-tighter uppercase inline-block">
                        We can dedicate <br />
                        <span className="contact-script-purple text-[#4A3AFF] normal-case -rotate-2 inline-block mx-4 text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] relative top-2 sm:top-6">
                            maximum
                        </span>
                        <br className="sm:hidden" />
                        attention to your <br className="hidden md:block" /> project
                        because <br className="hidden md:block" /> we only take on <br />
                        <span className="contact-script-purple text-[#4A3AFF] normal-case -rotate-2 inline-block mx-4 text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] relative top-2 sm:top-6">
                            2 projects
                        </span>
                        <br className="sm:hidden" />
                        per month
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 md:mt-24 z-10"
                >
                    <a href="mailto:hello@veloce.com" className="group relative inline-flex items-center justify-center px-10 md:px-16 py-6 md:py-8 rounded-full bg-[#4A3AFF] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(74,58,255,0.4)]">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9D4EDD] to-[#4A3AFF] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <span className="relative text-white font-black text-sm md:text-xl tracking-widest uppercase flex items-center gap-4">
                            Start a new project
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#4A3AFF] transition-all duration-500">
                                <ArrowRight size={24} />
                            </div>
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* PART 2: Branded Tagline & Contact Card (Dark Mode) */}
            <div className="relative w-full bg-[#0E1117] rounded-t-[4rem] md:rounded-t-[6rem] px-4 md:px-8 pt-24 pb-12 overflow-hidden z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.2)]">

                <AmbientGlow />

                {/* Tagline Content */}
                <div className="relative z-10 max-w-[80rem] mx-auto text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-12 flex justify-center"
                    >
                        <div className="p-6 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                            <img src="/logo.png" alt="VELOCE" className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl" />
                        </div>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-[6.5rem] font-black text-white leading-[1] tracking-tight uppercase"
                    >
                        Where ideas <br />
                        turn into <br />
                        <span 
                            className="contact-script-yellow text-[#F4D03F] normal-case -rotate-2 inline-block mt-4 md:mt-8 text-6xl md:text-8xl lg:text-[8.5rem] relative py-4"
                            style={{
                                textShadow: '0 0 20px rgba(244, 208, 63, 0.8), 0 0 40px rgba(244, 208, 63, 0.5), 0 0 60px rgba(244, 208, 63, 0.3)'
                            }}
                        >
                            world-class digital experiences
                        </span>
                    </motion.h3>
                </div>

                {/* Interactive Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative z-10 max-w-[85rem] mx-auto rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 lg:p-20 overflow-hidden border border-white/5 shadow-3xl"
                >
                    {/* Animated Background */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            background: hoveredLink
                                ? brandConfigs[hoveredLink].gradient
                                : '#1A1E24'
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    />

                    {/* Noise overlay */}
                    <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }} />

                    {/* Content Grid */}
                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* Left Column: Text & Links */}
                        <div className="lg:w-1/2 flex flex-col">
                            <h4 className="text-xl md:text-2xl font-bold text-white/40 mb-3">Do you have questions or need advice?</h4>
                            <p className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight mb-10">Please contact us for further details</p>

                            {/* Contact Links */}
                            <div className="space-y-2">
                                <ContactLink
                                    brand="instagram"
                                    isHovered={hoveredLink === 'instagram'}
                                    otherHovered={hoveredLink !== null && hoveredLink !== 'instagram'}
                                    onHover={() => setHoveredLink('instagram')}
                                    onLeave={() => setHoveredLink(null)}
                                />

                                <div className="h-px bg-white/10 mx-2" />

                                <ContactLink
                                    brand="whatsapp"
                                    isHovered={hoveredLink === 'whatsapp'}
                                    otherHovered={hoveredLink !== null && hoveredLink !== 'whatsapp'}
                                    onHover={() => setHoveredLink('whatsapp')}
                                    onLeave={() => setHoveredLink(null)}
                                />

                                <div className="h-px bg-white/10 mx-2" />

                                <ContactLink
                                    brand="email"
                                    isHovered={hoveredLink === 'email'}
                                    otherHovered={hoveredLink !== null && hoveredLink !== 'email'}
                                    onHover={() => setHoveredLink('email')}
                                    onLeave={() => setHoveredLink(null)}
                                />
                            </div>

                            <div className="mt-10 hidden lg:block">
                                <div className="w-16 h-1 bg-[#4A3AFF] rounded-full" />
                            </div>
                        </div>

                        {/* Right Column: Massive Icon */}
                        <div className="lg:w-1/2 flex items-center justify-center min-h-[280px] lg:min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {hoveredLink ? (
                                    <MassiveIcon key={hoveredLink} brand={hoveredLink} />
                                ) : (
                                    <motion.div
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full bg-white/5 flex items-center justify-center"
                                    >
                                        <Zap size={64} className="text-white/10" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* PART 3: Restored Original Veloce Footer */}
                <footer className="mt-32 md:mt-48 py-20 px-6 border-t border-white/5 bg-black/40 backdrop-blur-2xl relative overflow-hidden rounded-[3rem] mx-auto max-w-[90rem]">
                    <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                        <motion.div
                            className="h-[2px] bg-gradient-to-r from-transparent via-[#4A3AFF] to-transparent"
                            animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.8, 1, 0.8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0">
                            <div className="flex flex-col items-center md:items-start gap-5">
                                <motion.div
                                    className="flex items-center gap-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-xl">
                                        <img src="/logo.png" alt="VELOCE" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-4xl font-black tracking-tighter chromatic-text">VELOCE</span>
                                </motion.div>
                                <p className="text-white/30 text-base max-w-xs text-center md:text-left font-medium">
                                    Crafting digital excellence since 2024
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                                {[
                                    { name: 'Twitter', icon: Twitter },
                                    { name: 'LinkedIn', icon: Linkedin },
                                    { name: 'Dribbble', icon: Dribbble }
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href="#"
                                        className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all duration-500 relative group flex items-center gap-2"
                                        whileHover={{ y: -5 }}
                                    >
                                        <social.icon size={18} className="text-white/20 group-hover:text-[#4A3AFF] transition-colors" />
                                        {social.name}
                                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#4A3AFF] transition-all duration-500 group-hover:w-full" />
                                    </motion.a>
                                ))}
                            </div>

                            <div className="flex flex-col items-center md:items-end gap-2">
                                <div className="text-sm text-white/20 font-bold tracking-widest uppercase">
                                    © {new Date().getFullYear()} VELOCE Studio
                                </div>
                                <div className="text-[10px] text-white/10 tracking-[0.4em] uppercase">
                                    All rights reserved
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-8">
                                <div className="w-12 h-px bg-white/5" />
                                <p className="text-white/10 text-[10px] font-black tracking-[0.5em] uppercase text-center">
                                    Designed with passion. Built for impact.
                                </p>
                                <div className="w-12 h-px bg-white/5" />
                            </div>
                        </motion.div>
                    </div>
                </footer>

                <div className="absolute bottom-0 left-0 w-full h-[40rem] bg-gradient-to-t from-[#4A3AFF]/5 to-transparent pointer-events-none" />
            </div>

        </section>
    );
}
