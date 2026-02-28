"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const testimonials = [
    {
        quote: "Veloce transformed our legacy infrastructure into a modern, scalable platform in weeks, not months.",
        author: "James Chen",
        role: "CTO, Bloom Financial",
        logo: "BLOOM",
        size: "large",
    },
    {
        quote: "The attention to detail in the UX and the stability of the backend is world-class.",
        author: "Sarah Jenkins",
        role: "Head of Product, Nexus Retail",
        logo: "NEXUS",
        size: "medium",
    },
    {
        quote: "Their security-first approach gave our stakeholders the confidence to scale globally.",
        author: "Marcus Thorne",
        role: "VP Engineering, SecureNet",
        logo: "SECURENET",
        size: "medium",
    },
    {
        quote: "A true partner that understands both business goals and deep technical architecture.",
        author: "Elena Rodriguez",
        role: "Director of IT, Global Logistics",
        logo: "GLOBAL",
        size: "small",
    },
];

export default function CustomerSuccess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="customer-success"
            ref={containerRef}
            className="py-24 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden"
        >
            {/* Moving Background Glow */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-uptic-orange/10 blur-[150px] rounded-full"
                style={{ y: y1, x: "-20%", opacity }}
            />
            <motion.div
                className="absolute right-0 w-[500px] h-[500px] bg-uptic-amber/5 blur-[120px] rounded-full"
                style={{ y: y2, x: "20%", opacity }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-uptic-orange mb-4 block">
                        Customer Success
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Real Results from <br />
                        <span className="text-gray-500">Forward-Thinking Teams.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`bento-card flex flex-col justify-between ${item.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div>
                                <div className="mb-8 opacity-40 grayscale group-hover:grayscale-0 transition-all font-black tracking-tighter text-2xl">
                                    {item.logo}
                                </div>
                                <blockquote className={`font-medium mb-8 leading-relaxed ${item.size === "large" ? "text-2xl md:text-3xl" : "text-lg"
                                    }`}>
                                    "{item.quote}"
                                </blockquote>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/5" />
                                <div>
                                    <div className="font-bold text-sm tracking-wide uppercase">{item.author}</div>
                                    <div className="text-xs text-gray-500 font-medium">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Brand Bar Placeholder */}
                <div className="mt-20 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0">
                    {["MICROSOFT", "AMAZON", "STRIPE", "VERCEL", "ADOBE"].map((brand) => (
                        <div key={brand} className="text-xl font-black tracking-tighter px-4 py-2 border border-white/10 rounded-lg">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
