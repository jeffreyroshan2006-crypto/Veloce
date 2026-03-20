'use client';

import React from 'react';
import SecuritySection from '@/components/sections/SecuritySection';
import { PageTransition } from '@/components/ui/PageTransition';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe, Lock } from 'lucide-react';

export default function SecurityPage() {
  return (
    <PageTransition>
      <main className="bg-black pt-32 min-h-screen">
        {/* Hero Header for Security */}
        <section className="px-6 py-20 max-w-7xl mx-auto border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#F59E0B] font-black uppercase tracking-[0.4em] text-[10px] mb-8">
                <ShieldCheck size={16} />
                Infrastructure & Security
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-12">
                FORGED IN <br />
                <span className="text-white/20">SILICON & STEEL.</span>
              </h1>
              <p className="text-white/40 text-xl font-medium leading-relaxed max-w-xl">
                We don't just build websites; we engineer bulletproof digital fortresses. 
                Our architecture is designed for extreme load, absolute privacy, and total reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {[
                { icon: Lock, label: 'Encryption', val: 'AES-256' },
                { icon: Globe, label: 'Uptime', val: '99.99%' },
                { icon: Cpu, label: 'latency', val: '<50ms' },
                { icon: ShieldCheck, label: 'Audited', val: '24/7' }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <stat.icon size={20} className="text-[#F59E0B] mb-4" />
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-xl font-bold text-white uppercase">{stat.val}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* The Interactive Security Section */}
        <div className="mt-[-10vh]">
          <SecuritySection />
        </div>

        {/* Feature Grid */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Global Edge Networking', desc: 'Deploying assets to 300+ edge locations worldwide for instantaneous loading regardless of user location.' },
              { title: 'DDoS Immunity', desc: 'Integrated layer 7 protection that filters malicious traffic before it ever touches your application core.' },
              { title: 'Zero Trust Access', desc: 'Implementing rigorous identity verification for every single request in your system architecture.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
