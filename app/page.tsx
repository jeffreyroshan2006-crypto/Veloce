'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Play, ArrowUpRight } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import ServicePillars from '@/components/sections/ServicePillars';
import WhyVeloce from '@/components/sections/WhyVeloce';
import CustomerSuccess from '@/components/sections/CustomerSuccess';
import TechStackGrid from '@/components/sections/TechStackGrid';
import { InteractiveMarquee } from '@/components/ui/InteractiveMarquee';
import { PremiumHeroText } from '@/components/ui/PremiumHeroText';
import { GradientWave } from '@/components/ui/gradient-wave';
import PricingSection from '@/components/sections/PricingSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import { InspirationBoard } from '@/components/sections/InspirationBoard';

// Magnetic button component
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <PageTransition>
      <div ref={containerRef} className="relative min-h-screen font-sans selection:bg-[#007FFF]/30 overflow-x-hidden">
        {/* WebGL Background */}
        <GradientWave colors={["#002147", "#d2b48c"]} />

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#007FFF] via-purple-500 to-pink-500 z-[200] origin-left"
          style={{ scaleX: smoothProgress }}
        />

        {/* Premium Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="glass-wrap mx-auto w-full">
            <div className="glass-premium flex flex-col items-center justify-center" style={{ 
              height: 800, 
              width: 'calc(100vw - 2cm)', 
              marginLeft: 'auto', 
              marginRight: 'auto', 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              borderRadius: '32px',
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.15) inset,
                0 0 80px rgba(255,255,255,0.05) inset,
                0 25px 50px -12px rgba(0,0,0,0.4),
                0 0 150px -20px rgba(255,255,255,0.1)
              `,
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)'
            }}>
              <div className="flex flex-col items-center text-center justify-center h-full w-full px-8 md:px-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 border border-white/20 text-[10px] font-black tracking-[0.3em] uppercase text-uptic-orange"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uptic-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-uptic-orange"></span>
                  </span>
                  World-Class Digital Ecosystems
                </motion.div>

                <div className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.8]">
                  <PremiumHeroText text="VELOCE" />
                </div>

                <div className="w-full max-w-4xl overflow-hidden mb-12">
                  <InteractiveMarquee
                    text="We build, enhance, and modernize applications and platforms for brands that refuse to settle for the ordinary."
                    speed={0.045}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6 items-center"
                >
                  <MagneticButton className="group relative px-10 py-5 rounded-full bg-white text-black font-black text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      Start Your Project <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </MagneticButton>
                  <button className="flex items-center gap-3 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm font-bold text-lg text-white hover:bg-white/20 transition-all duration-300 border border-white/20 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Play size={16} fill="currentColor" />
                    </div>
                    Our Service
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10">
          <ServicePillars />

          <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between aspect-square md:aspect-video"
                    >
                        <div>
                            <div className="text-purple-500 font-black tracking-widest text-[10px] uppercase mb-4">The Process</div>
                            <h3 className="text-4xl font-bold text-white mb-6">How we bring your <br /> vision to life.</h3>
                        </div>
                        <a href="/process" className="inline-flex items-center gap-2 text-white font-bold group">
                            Explore our process <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-12 rounded-[3rem] bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex flex-col justify-between aspect-square md:aspect-video"
                    >
                        <div>
                            <div className="text-[#F59E0B] font-black tracking-widest text-[10px] uppercase mb-4">Security First</div>
                            <h3 className="text-4xl font-bold text-white mb-6">Built on a foundation <br /> of absolute trust.</h3>
                        </div>
                        <a href="/security" className="inline-flex items-center gap-2 text-[#F59E0B] font-bold group">
                            View architecture <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
          </section>

          <WhyVeloce />
          <CustomerSuccess />
          <TechStackGrid />
          <PricingSection />
          <InspirationBoard />
          <PortfolioSection />
        </div>
      </div>
    </PageTransition>
  );
}
