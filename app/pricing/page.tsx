import React from 'react';
import PricingSection from '@/components/sections/PricingSection';
import { PricingOldCTA } from '@/components/sections/PricingOldCTA';
import { PageTransition } from '@/components/ui/PageTransition';

export default function PricingPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <PricingSection />
        <PricingOldCTA />
      </main>
    </PageTransition>
  );
}
