'use client';

import React from 'react';
import { InspirationBoard } from '@/components/sections/InspirationBoard';
import { PageTransition } from '@/components/ui/PageTransition';

export default function CatalogPage() {
  return (
    <PageTransition>
      <main className="bg-black min-h-screen">
        {/* Header Spacer */}
        <div className="h-32 bg-black" />
        
        {/* The Catalog (Inspiration Board) */}
        <InspirationBoard />
        
        {/* Extra spacing for footer */}
        <div className="h-40 bg-black" />
      </main>
    </PageTransition>
  );
}
