import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { motion } from 'framer-motion';

const logos = [
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    className: "h-8 w-auto grayscale brightness-0 invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21.svg",
    className: "h-8 w-auto grayscale brightness-0 invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    className: "h-8 w-auto grayscale brightness-0 invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg",
    className: "h-8 w-auto grayscale brightness-0 invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300",
  },
  {
    id: "logo-9",
    description: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    className: "h-8 w-auto grayscale brightness-0 invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300",
  },
  {
    id: "logo-10",
    description: "Framer Motion",
    image: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    className: "h-8 w-auto grayscale brightness-0 invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300",
  },
];

export function LogosSlider() {
  return (
    <div className='relative w-full mx-auto py-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative h-24 w-full overflow-hidden rounded-[2rem] bg-black/90 border border-white/5 backdrop-blur-sm'
      >
        <InfiniteSlider 
          className='flex h-full w-full items-center' 
          duration={30}
          gap={40}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={`${logo.id}-${i}`} 
              className='flex w-32 items-center justify-center filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]'
            >
              <img
                src={logo.image}
                alt={logo.description}
                className={logo.className.replace('h-8', 'h-9').replace('h-6', 'h-7')}
              />
            </div>
          ))}
        </InfiniteSlider>
        
        {/* Mask edges with ProgressiveBlur */}
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 left-0 h-full w-[150px] z-10'
          direction='left'
          blurIntensity={1.5}
        />
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 right-0 h-full w-[150px] z-10'
          direction='right'
          blurIntensity={1.5}
        />
      </motion.div>
    </div>
  );
}
