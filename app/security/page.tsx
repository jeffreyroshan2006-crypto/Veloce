'use client';

import React from 'react';
import SecuritySection from '@/components/sections/SecuritySection';
import { PageTransition } from '@/components/ui/PageTransition';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe, Lock } from 'lucide-react';

export default function SecurityPage() {
  return (
    <PageTransition>
      <main className="bg-black min-h-screen">
        {/* The Interactive Security Section (Primary Focus) */}
        <div className="relative">
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
