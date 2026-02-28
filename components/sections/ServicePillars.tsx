"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const services = [
    {
        title: "Development",
        description: "Build, enhance, and modernize applications and platforms.",
        items: [
            "New applications from MVPs to SaaS platforms",
            "Modernization of legacy systems for speed and reliability",
            "Web, mobile, and cross-platform UX",
            "AI-powered apps with LLMs and agentic workflows",
        ],
        graphic: (
            <div className="relative w-full h-48 flex items-center justify-center">
                {/* Abstract 3D Glass Stack Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl transform rotate-3" />
                <div className="relative w-32 h-32 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl" />
                <div className="absolute w-24 h-24 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl -translate-y-8 translate-x-8" />
            </div>
        ),
    },
    {
        title: "Platforms",
        description: "Accelerate delivery, enhance developer experience, and scale platforms.",
        items: [
            "Internal developer platforms (IDP) that boost velocity",
            "CI/CD pipelines that are automated and secure",
            "Infrastructure as code (IaC) with built-in compliance",
            "Cloud migration and architecture optimization",
        ],
        graphic: (
            <div className="relative w-full h-48 flex items-center justify-center">
                {/* Abstract 3D Ring/Circle Placeholder */}
                <div className="absolute w-40 h-40 border-[1px] border-white/10 rounded-full animate-spin-slow" />
                <div className="absolute w-32 h-32 border-[1px] border-white/20 rounded-full animate-reverse-spin" />
                <div className="relative w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-lg transform rotate-45" />
            </div>
        ),
    },
    {
        title: "Operate & Innovate",
        description: "Ongoing operation and support with continuous innovation from the same engineers that build your platform.",
        items: [
            "Managed cloud and hybrid platforms",
            "Proactive 24/7 monitoring and performance tuning",
            "Continuous feature enhancements and scalability",
            "End-to-end security monitoring and CVE management",
        ],
        graphic: (
            <div className="relative w-full h-48 flex items-center justify-center">
                {/* Abstract Connection Placeholder */}
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12" />
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12" />
                <div className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
                    <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40" />
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
                </div>
            </div>
        ),
    },
];

export default function ServicePillars() {
    return (
        <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-uptic-orange mb-4 block">
                        Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Three service pillars. <br />
                        <span className="text-gray-500">One partner for development, <br /> platforms, and operations.</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        From build to run, we've got you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bento-card group flex flex-col h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                <motion.div
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </motion.div>
                            </div>

                            <p className="text-[#a1a1aa] mb-8 line-clamp-2">
                                {service.description}
                            </p>

                            <div className="flex-grow mb-8">
                                {service.graphic}
                            </div>

                            <ul className="space-y-4 pt-6 border-t border-white/5">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                                        <div className="mt-1 w-4 h-4 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-2.5 h-2.5" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
