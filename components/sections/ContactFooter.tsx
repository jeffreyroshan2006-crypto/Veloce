'use client';

import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Instagram, MessageCircle, Mail, Twitter, Linkedin, Dribbble, Zap } from 'lucide-react';

// ============================================
// MAGNETIC HOVER COMPONENT for LINKS
// ============================================
function MagneticLink({ children, href, brandColor, icon: Icon, handle }: { children: string, href: string, brandColor: string, icon: any, handle: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    function handleMouseMove(e: React.MouseEvent) {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Limit displacement to avoid flying away
        const distanceX = (e.clientX - centerX) * 0.4;
        const distanceY = (e.clientY - centerY) * 0.4;
        x.set(distanceX);
        y.set(distanceY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="group relative flex flex-col items-start w-full p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
        >
            {/* Brand Background Glow on Hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ background: brandColor }}
            />

            {/* Brand Decorative Line */}
            <motion.div
                className="absolute top-0 left-0 w-2 h-0 group-hover:h-full transition-all duration-500"
                style={{ background: brandColor }}
            />

            <div className="relative z-10 flex items-center justify-between w-full mb-6">
                <div className="flex items-center gap-5">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <Icon size={28} />
                    </div>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-500">
                        {children}
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/40 transition-all duration-500">
                    <ArrowUpRight size={28} />
                </div>
            </div>

            <div className="relative z-10 w-full h-px bg-white/5 group-hover:bg-white/10 mb-6 transition-colors duration-500" />

            <p className="relative z-10 text-white/40 text-lg md:text-xl font-medium tracking-wide group-hover:text-white/80 transition-colors duration-500">
                {handle}
            </p>
        </motion.a>
    );
}

// ============================================
// FLOATING BLOB BACKGROUND
// ============================================
function AmbientGlow() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4A3AFF]/10 blur-[120px]"
                animate={{
                    x: [0, -40, 30, 0],
                    y: [0, 50, -30, 0],
                    scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#9D4EDD]/10 blur-[120px]"
                animate={{
                    x: [0, 50, -40, 0],
                    y: [0, -30, 60, 0],
                    scale: [1, 1.25, 0.85, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </div>
    );
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function ContactFooter() {
    return (
        <section id="contact" className="relative w-full z-10 flex flex-col pt-20 bg-[#f4f5f8]">

            {/* -------------------------------------------------------------
          PART 1: "Maximum Attention" CTA Section
          ------------------------------------------------------------- */}
            <div className="relative w-full px-6 py-16 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Subtle noise overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }} />

                {/* Small Logo accent */}
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

                {/* Huge Heading */}
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

                {/* CTA Button */}
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

            {/* -------------------------------------------------------------
          PART 2: Branded Tagline & Contact Card (Dark Mode)
          ------------------------------------------------------------- */}
            <div className="relative w-full bg-[#0E1117] rounded-t-[4rem] md:rounded-t-[6rem] px-4 md:px-8 pt-24 pb-12 overflow-hidden z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.2)]">

                <AmbientGlow />

                {/* Tagline Content */}
                <div className="relative z-10 max-w-[80rem] mx-auto text-center mb-24 md:mb-32">
                    {/* Logo Mark */}
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
                        <span className="contact-script-yellow text-[#F4D03F] normal-case -rotate-2 inline-block mt-4 md:mt-8 text-6xl md:text-8xl lg:text-[8.5rem] relative py-4">
                            world-class digital experiences
                        </span>
                    </motion.h3>
                </div>

                {/* Dark Slate Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative z-10 max-w-[85rem] mx-auto bg-[#1A1E24] rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 lg:p-24 overflow-hidden border border-white/5 shadow-3xl"
                >
                    {/* Noise on card */}
                    <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }} />

                    {/* Contact Content Grid */}
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Left Pillar: Text */}
                        <div className="lg:w-1/3 flex flex-col justify-center">
                            <h4 className="text-2xl md:text-3xl font-bold text-white/40 mb-4">Do you have questions or need advice?</h4>
                            <p className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">Please contact us for further details</p>

                            <div className="mt-12 hidden lg:block">
                                <div className="w-20 h-1 bg-[#4A3AFF] rounded-full" />
                            </div>
                        </div>

                        {/* Right Pillar: Links Grid */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                            {/* Instagram */}
                            <MagneticLink
                                href="https://instagram.com/veloce_agency"
                                brandColor="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
                                icon={Instagram}
                                handle="@veloce_agency"
                            >
                                Instagram
                            </MagneticLink>

                            {/* WhatsApp */}
                            <MagneticLink
                                href="https://wa.me/1234567890"
                                brandColor="#25D366"
                                icon={MessageCircle}
                                handle="+1 800 555 0199"
                            >
                                WhatsApp
                            </MagneticLink>

                            {/* Email */}
                            <MagneticLink
                                href="mailto:hello@veloce.com"
                                brandColor="#007FFF"
                                icon={Mail}
                                handle="hello@veloce.com"
                            >
                                Email
                            </MagneticLink>

                            {/* Placeholder/More block with Arrow */}
                            <div className="hidden md:flex flex-col items-center justify-center p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] text-white/20">
                                <Zap size={40} className="mb-4 opacity-10" />
                                <span className="text-xs font-black uppercase tracking-[0.3em]">Ignite your vision</span>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* -------------------------------------------------------------
            PART 3: Restored Original Veloce Footer
            ------------------------------------------------------------- */}
                <footer className="mt-32 md:mt-48 py-20 px-6 border-t border-white/5 bg-black/40 backdrop-blur-2xl relative overflow-hidden rounded-[3rem] mx-auto max-w-[90rem]">
                    {/* Animated gradient bottom glow */}
                    <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                        <motion.div
                            className="h-[2px] bg-gradient-to-r from-transparent via-[#4A3AFF] to-transparent"
                            animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.8, 1, 0.8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0">
                            {/* Logo and tagline */}
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

                            {/* Social Links with Premium Interaction */}
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

                            {/* Copyright & Info */}
                            <div className="flex flex-col items-center md:items-end gap-2">
                                <div className="text-sm text-white/20 font-bold tracking-widest uppercase">
                                    © {new Date().getFullYear()} VELOCE Studio
                                </div>
                                <div className="text-[10px] text-white/10 tracking-[0.4em] uppercase">
                                    All rights reserved
                                </div>
                            </div>
                        </div>

                        {/* Bottom accent line & Final Motto */}
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

                {/* Final Ambient Background Glow */}
                <div className="absolute bottom-0 left-0 w-full h-[40rem] bg-gradient-to-t from-[#4A3AFF]/5 to-transparent pointer-events-none" />
            </div>

        </section>
    );
}
