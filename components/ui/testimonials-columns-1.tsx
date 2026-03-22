"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-2xl max-w-[320px] w-full group hover:bg-white/[0.05] transition-all duration-500 hover:border-white/10" 
                key={`${index}-${i}`}
              >
                <div className="text-white/80 leading-relaxed font-medium mb-6 text-sm italic">"{text}"</div>
                <div className="flex items-center gap-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 p-[1px]">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white font-bold tracking-tight text-sm uppercase">{name}</div>
                    <div className="text-white/30 text-[10px] font-black tracking-widest uppercase">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
