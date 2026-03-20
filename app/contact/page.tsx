'use client';

import React from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="bg-black pt-32 min-h-screen">
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20"
          >
            <div>
              <div className="text-[#007FFF] font-black uppercase tracking-[0.4em] text-[10px] mb-8">Get In Touch</div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
                LET'S <br />
                <span className="text-white/20">TALK.</span>
              </h1>
              <p className="text-white/40 text-xl font-medium leading-relaxed max-w-xl mb-12">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll 
                get back to you within 24 hours to schedule a free strategy session.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', val: 'hello@veloce.design', href: 'mailto:hello@veloce.design' },
                  { icon: MessageCircle, label: 'WhatsApp', val: '+380 93 123 45 67', href: 'https://wa.me/380931234567' },
                  { icon: Send, label: 'Telegram', val: '@veloce_agency', href: 'https://t.me/veloce' }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#007FFF]/10 flex items-center justify-center text-[#007FFF] group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">{item.label}</div>
                      <div className="text-lg font-bold text-white uppercase">{item.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-4">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white outline-none focus:border-[#007FFF] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-4">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white outline-none focus:border-[#007FFF] transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-4">Message</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-5 text-white outline-none focus:border-[#007FFF] transition-colors h-40 resize-none" placeholder="Tell us about your project..." />
                </div>
                
                <MagneticButton className="w-full py-6 rounded-full bg-[#007FFF] text-white font-black text-sm uppercase tracking-widest hover:bg-[#005fb3] transition-colors flex items-center justify-center gap-3">
                  Send Message <ArrowRight size={16} />
                </MagneticButton>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}
