'use client';

import React from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <PageTransition>
      <main className="bg-black pt-32 min-h-screen text-white/60">
        <section className="px-6 py-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-20 text-center">
              Privacy <span className="text-white/20">Policy</span>
            </h1>
            
            <div className="space-y-12 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">1. Data Collection</h2>
                <p>We respect your privacy. Veloce only collects essential information required to provide our services and communicate with our clients. We do not sell or trade your personal data.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">2. Usage of Information</h2>
                <p>Your data is used solely for project management, communication, and improving our internal delivery processes. We use industry-standard encryption to protect all digital communications.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">3. Third Parties</h2>
                <p>We do not share your project details or personal information with third parties without your explicit consent. All the tools we use (like Slack, GitHub, or AWS) are audited for their own privacy standards.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">4. Cookies</h2>
                <p>Our website uses minimal cookies for performance optimization and analytics to ensure a seamless premium experience for all visitors.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}
