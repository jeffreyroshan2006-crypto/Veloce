"use client";

import { motion } from "framer-motion";

const nodes = [
    { label: "Veloce Infrastructure Guard", x: -150, y: -80 },
    { label: "Veloce Identity Protection", x: -100, y: 150 },
    { label: "Veloce API Perimeter Scan", x: 120, y: -140 },
    { label: "Veloce Policy-as-Code", x: -180, y: 30 },
    { label: "Veloce Compliance Core", x: 180, y: -20 },
    { label: "Veloce Zero-Trust Gateway", x: 150, y: 100 },
];

export default function WhyVeloce() {
    return (
        <section id="why-veloce" className="py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden relative">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-uptic-orange/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div className="mb-24">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-uptic-orange mb-4 block">
                        Veloce Security & Architecture
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        VELOCE GUARD - <br />
                        <span className="text-gray-500">Infrastructure Excellence.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We embed security into every layer of your stack. From Veloce scanning and identity to
                        policy-as-code, our defaults are secure so your delivery stays fast and compliant.
                    </p>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Central Wireframe Sphere Placeholder using SVGs */}
                    <div className="relative w-96 h-96">
                        <motion.div
                            className="absolute inset-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        >
                            <svg viewBox="0 0 200 200" className="w-full h-full text-white/10">
                                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                <ellipse cx="100" cy="100" rx="30" ry="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </svg>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 scale-75 rotate-45"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                            <svg viewBox="0 0 200 200" className="w-full h-full text-white/5">
                                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                                <ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        </motion.div>

                        {/* Central Core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-full border border-white/20 flex items-center justify-center">
                            <div className="w-16 h-16 bg-uptic-orange/20 blur-2xl rounded-full animate-pulse" />
                            <div className="text-[10px] font-bold tracking-widest text-white/60">VELOCE CORE</div>
                        </div>
                    </div>

                    {/* Floating Nodes */}
                    {nodes.map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            whileInView={{ x: node.x, y: node.y, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1.5, type: "spring" }}
                        >
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl group hover:border-uptic-orange/50 transition-colors cursor-default">
                                <div className="w-2 h-2 rounded-full bg-uptic-orange animate-pulse" />
                                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">
                                    {node.label}
                                </span>
                            </div>

                            {/* Dynamic Connection Line (Visual Only) */}
                            <div
                                className="absolute top-1/2 left-1/2 w-[1px] bg-gradient-to-t from-uptic-orange/0 via-uptic-orange/20 to-uptic-orange/0 origin-bottom"
                                style={{
                                    height: Math.sqrt(node.x ** 2 + node.y ** 2),
                                    transform: `rotate(${Math.atan2(node.y, node.x) * 180 / Math.PI + 90}deg)`,
                                    left: '50%',
                                    top: '50%',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
