"use client"
import React from 'react';
import { CardStack } from '../../components/ui/card-stack';

const portfolioItems = [
  {
    id: 1,
    title: "Veloce",
    description: "Modern web development with Next.js and TypeScript",
    imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    href: "https://veloce.dev",
    ctaLabel: "View Live Site",
  },
  {
    id: 2,
    title: "Portfolio Site",
    description: "Personal portfolio with advanced animations",
    imageSrc: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&h=600&fit=crop",
    href: "https://example.com",
    ctaLabel: "View Live Site",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured online shopping experience",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f5205d?w=800&h=600&fit=crop",
    href: "https://example.com",
    ctaLabel: "View Live Site",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "Analytics and management dashboard",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "https://example.com",
    ctaLabel: "View Live Site",
  },
  {
    id: 5,
    title: "Mobile App Landing",
    description: "Responsive landing page for mobile apps",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "https://example.com",
    ctaLabel: "View Live Site",
  }
];

export const GlassCardsSection: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <CardStack
        items={portfolioItems}
        initialIndex={0}
        autoAdvance
        intervalMs={3000}
        pauseOnHover
        showDots
        cardWidth={480}
        cardHeight={320}
        maxVisible={5}
        className="w-full max-w-6xl"
      />
    </div>
  );
};

export default GlassCardsSection;
