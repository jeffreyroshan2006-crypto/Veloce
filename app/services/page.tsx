'use client';

import React from 'react';
import ServicePillars from '@/components/sections/ServicePillars';
import { PageTransition } from '@/components/ui/PageTransition';
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/TextReveal';
import { Smartphone, Zap, Layers, Globe, Play, Sparkles, Shield } from 'lucide-react';

const detailedServices = [
  {
    title: "Social Media Creative Pack",
    desc: "Stop the scroll with custom-built, on-brand templates for Instagram, LinkedIn, and YouTube. Empower your team to produce world-class content in minutes, not hours.",
    icon: <Smartphone className="w-8 h-8" />,
    tags: ["Instagram", "LinkedIn", "YouTube Thumbnails"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Ad & Campaign Creatives",
    desc: "High-impact static and animated ads engineered for maximum click-through rates. We optimize every pixel for clarity, brand recall, and conversion performance.",
    icon: <Zap className="w-8 h-8" />,
    tags: ["Social Ads", "Display Campaigns", "Motion Graphics"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Brand Template System",
    desc: "A complete, ready-to-use library of flyers, pitch decks, and posters. Locked to your brand's DNA so every future design stays perfectly consistent.",
    icon: <Layers className="w-8 h-8" />,
    tags: ["Pitch Decks", "Brand Guidelines", "Asset Library"],
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Poster, Flyer & Print Design",
    desc: "From event posters to business cards, we deliver print-ready assets that command attention in the physical world and translate seamlessly to digital.",
    icon: <Globe className="w-8 h-8" />,
    tags: ["Print-Ready", "Brochures", "Event Graphics"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Short Video & Promo Assets",
    desc: "Dominate Reels, Shorts, and TikTok with high-velocity promotional clips. Clean motion, trending audio, and sharp text that drives engagement.",
    icon: <Play className="w-8 h-8" />,
    tags: ["Reels/TikTok", "Promo Clips", "Motion Design"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Festival & Seasonal Packs",
    desc: "Pre-planned creative packs for launches and sale seasons. Plug in your offers and publish instantly with localized, high-conversion styling.",
    icon: <Sparkles className="w-8 h-8" />,
    tags: ["Seasonal Sales", "Launch Packs", "Holiday Creative"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Brand Refresh & Upgrade",
    desc: "We take your existing creatives and inject world-class layouts, typography, and color theory—elevating your brand without losing its core identity.",
    icon: <Shield className="w-8 h-8" />,
    tags: ["Creative Audit", "Visual Upgrade", "Consistency"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="bg-black pt-32 min-h-screen">
        {/* Dynamic Header */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-uptic-orange font-black tracking-[0.4em] uppercase text-[10px] mb-8">Digital Ecosystems</div>
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
              OUR <br />
              <span className="text-white/20">CAPABILITIES.</span>
            </h1>
            <p className="text-white/40 text-xl font-medium leading-relaxed max-w-2xl">
              We provide end-to-end digital solutions that bridge the gap between 
              complex engineering and world-class aesthetic design.
            </p>
          </motion.div>
        </section>

        <ServicePillars />

        {/* Detailed Solutions Grid */}
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="mb-20">
                <div className="text-uptic-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4">Precision Engineering</div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.8]">
                  <TextReveal>GRANULAR</TextReveal>
                  <TextReveal delay={0.1}><span className="text-white/20">SOLUTIONS.</span></TextReveal>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {detailedServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all duration-500 hover:border-white/20"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-uptic-orange transition-colors">{service.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, j) => (
                        <span key={j} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 text-white/40 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
      </main>
    </PageTransition>
  );
}
