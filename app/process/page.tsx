'use client';

import React from 'react';
import { StackedCards } from '@/components/ui/glass-cards';
import { PageTransition } from '@/components/ui/PageTransition';

export default function ProcessPage() {
  return (
    <PageTransition>
      <main className="bg-black min-h-screen">
        <StackedCards />
        
        {/* Additional information after the cards */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase max-w-sm">
              Ready to <br />
              <span className="text-uptic-orange">Scale?</span>
            </h2>
            <div className="max-w-2xl space-y-8">
              <p className="text-white/40 text-xl font-medium leading-relaxed">
                Our process is designed for speed without sacrificing quality. We've refined these steps over 
                hundreds of successful deployments, ensuring that your project moves from discovery to 
                deployment with mathematical precision.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { q: "How long does a typical project take?", a: "Most website redesigns take 4-8 weeks, while complex platforms may take 12-16 weeks." },
                  { q: "Will I have a dedicated project manager?", a: "Yes, you'll have a single point of contact who understands your business goals as well as we do." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-2">{item.q}</h4>
                    <p className="text-white/40 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
