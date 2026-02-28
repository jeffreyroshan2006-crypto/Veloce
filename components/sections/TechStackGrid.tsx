"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "Core Languages",
        tools: ["React", "React Native", "Flutter", "Python", "C#", ".NET"],
    },
    {
        title: "Databases & Data",
        tools: ["Postgres", "Polars", "Elasticsearch"],
    },
    {
        title: "DevOps & CICD",
        tools: ["Github", "Akido", "Gitlab", "Sentry"],
    },
    {
        title: "Platform Engineering",
        tools: ["Grafana", "Terraform", "Helm", "Prometheus"],
    },
    {
        title: "Platforms",
        tools: ["Azure", "AWS"],
    },
];

export default function TechStackGrid() {
    return (
        <section id="tech-stack" className="py-40 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                    <div>
                        <span className="text-xs font-semibold tracking-[0.4em] uppercase text-uptic-orange mb-6 block">
                            Platform Engineering
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white">
                            MODERN <br />
                            <span className="text-gray-600 italic">STACK.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed border-l-2 border-uptic-orange/30 pl-8">
                        We leverage a world-class ecosystem of tools to build resilient,
                        high-performance digital infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 scale-100">
                    {/* Core Languages - Large Card */}
                    <motion.div
                        className="md:col-span-8 bento-card flex flex-col justify-between group h-[400px] relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-uptic-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-white">Core Ecosystem</h3>
                            <p className="text-gray-500 text-sm mb-8">Primary languages & frameworks</p>
                        </div>
                        <div className="flex flex-wrap gap-4 relative z-10">
                            {categories[0].tools.map((tool, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold flex items-center gap-3 group/tool"
                                >
                                    <div className="w-2 h-2 rounded-full bg-uptic-orange" />
                                    {tool}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Databases - Vertical Card */}
                    <motion.div
                        className="md:col-span-4 bento-card flex flex-col justify-between group h-[400px] border-blue-500/20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-white">Intelligence</h3>
                            <p className="text-gray-500 text-sm mb-8">Data infrastructure</p>
                        </div>
                        <div className="space-y-4">
                            {categories[1].tools.map((tool, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-blue-500/30 transition-all">
                                    <span className="font-bold text-gray-300">{tool}</span>
                                    <div className="w-8 h-[2px] bg-blue-500/30" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* DevOps - Wide Card */}
                    <motion.div
                        className="md:col-span-5 bento-card flex flex-col justify-between group h-[350px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-white">Automation</h3>
                            <p className="text-gray-500 text-sm">CI/CD & Delivery</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {categories[2].tools.map((tool, i) => (
                                <div key={i} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-xs font-black uppercase text-gray-400 text-center">
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Platforms & Cloud - Square Card */}
                    <motion.div
                        className="md:col-span-7 bento-card flex flex-col justify-between group h-[350px] bg-gradient-to-br from-white/[0.05] to-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Global Scale</h3>
                                <p className="text-gray-500 text-sm">Cloud Native Platforms</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bold">AWS</div>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold">AZR</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {categories[3].tools.map((tool, i) => (
                                <span key={i} className="text-[10px] font-black tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full text-white/60 border border-white/5 group-hover:bg-white/20 transition-all">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
