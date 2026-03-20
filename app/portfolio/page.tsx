'use client';

import React from 'react';
import PortfolioSection from '@/components/sections/PortfolioSection';
import { PageTransition } from '@/components/ui/PageTransition';

export default function PortfolioPage() {
  return (
    <PageTransition>
      <main className="bg-black min-h-screen">
        {/* Top Spacer / Gradient for header visibility */}
        <div className="h-20 bg-gradient-to-b from-black to-transparent" />
        
        <PortfolioSection />
        
        {/* Portfolio Stats Section */}
        <section className="py-32 px-6 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Successful Launches', val: '120+' },
              { label: 'Lines of Code', val: '4.2M' },
              { label: 'Happy Clients', val: '85' },
              { label: 'Design Awards', val: '12' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
