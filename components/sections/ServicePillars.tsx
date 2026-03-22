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
                <div className="mb-24 text-center relative group">
                    {/* World-Class Digital Silk Background */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[450px] pointer-events-none z-0 overflow-hidden opacity-60">
                        <canvas id="silk-canvas" className="w-full h-full" />
                        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0E1117]/80 to-[#0E1117] pointer-events-none" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            {/* Sharp Section Descriptor */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mb-8 flex items-center gap-3"
                            >
                                <span className="h-px w-6 bg-gradient-to-r from-transparent to-black" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">The Ecosystem</span>
                                <span className="h-px w-6 bg-gradient-to-l from-transparent to-black" />
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] uppercase flex flex-col items-center">
                                <span className="pricing-script-text text-black text-2xl sm:text-3xl normal-case italic -rotate-1 mb-2">
                                    Service
                                </span>
                                <span className="relative inline-block">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 select-none">
                                        Three service pillars. <br />
                                        One partner for <br className="sm:hidden" />
                                        <span className="text-white/20">Development & Ops</span>
                                    </span>
                                </span>
                            </h2>

                            <motion.p 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-black text-base md:text-xl mt-10 max-w-2xl mx-auto font-light leading-relaxed tracking-tight px-6"
                            >
                                From initial prototype to global scale operations, <br className="hidden md:block" />
                                we engineer the foundations of your success.
                            </motion.p>

                            {/* Decorative Interaction Indicator */}
                            <div className="mt-12 w-px h-10 bg-gradient-to-b from-[#fb923c] to-transparent opacity-40" />
                        </motion.div>
                    </div>

                    {/* Canvas Initialization Script */}
                    <script dangerouslySetInnerHTML={{ __html: `
                        (function() {
                            const canvas = document.getElementById('silk-canvas');
                            if (!canvas) return;
                            const ctx = canvas.getContext('2d');
                            let w, h, particles = [];
                            
                            const resize = () => {
                                w = canvas.width = canvas.offsetWidth;
                                h = canvas.height = canvas.offsetHeight;
                            };
                            window.addEventListener('resize', resize);
                            resize();

                            if (w < 768) return; // Disable canvas animation on mobile to save frames
                            
                            let particleCount = 50;
                            if (w >= 768 && w < 1024) { // Tablet range
                                particleCount = 20; // Reduced for tablets
                            }

                            class Particle {
                                constructor() {
                                    this.reset();
                                }
                                reset() {
                                    this.x = Math.random() * w;
                                    this.y = Math.random() * h;
                                    this.vx = (Math.random() - 0.5) * 0.5;
                                    this.vy = (Math.random() - 0.5) * 0.5;
                                    this.life = Math.random() * 0.5 + 0.5;
                                    this.baseColor = Math.random() > 0.5 ? '#fb923c' : '#ffffff';
                                }
                                update() {
                                    this.x += this.vx;
                                    this.y += this.vy;
                                    if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
                                }
                                draw() {
                                    ctx.beginPath();
                                    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
                                    ctx.fillStyle = this.baseColor + '10';
                                    ctx.fill();
                                }
                            }
                            
                            for (let i = 0; i < particleCount; i++) particles.push(new Particle());
                            
                            const animate = () => {
                                ctx.clearRect(0, 0, w, h);
                                particles.forEach(p => {
                                    p.update();
                                    p.draw();
                                });
                                // Draw flowing lines
                                ctx.beginPath();
                                ctx.strokeStyle = '#ffffff05';
                                ctx.lineWidth = 0.5;
                                for (let i = 0; i < 5; i++) {
                                    const y = h/2 + Math.sin(Date.now() * 0.001 + i) * 100;
                                    ctx.moveTo(0, y);
                                    ctx.quadraticCurveTo(w/2, y + Math.cos(Date.now() * 0.001) * 200, w, y);
                                }
                                ctx.stroke();
                                requestAnimationFrame(animate);
                            };
                            animate();
                        })();
                    `}} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative p-8 md:p-10 rounded-[2.5rem] bg-black/[0.35] backdrop-blur-[40px] border border-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_0_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 hover:bg-black/[0.4] group flex flex-col h-full"
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
