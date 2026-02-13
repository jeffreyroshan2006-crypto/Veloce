'use client';

import { useEffect, useRef } from 'react';

/**
 * Unicorn Studio Background
 * 
 * Uses Unicorn Studio's WebGL background with watermark hidden.
 * Project ID: g9rHFbwIlMmuxNd2ZrGj
 */

export function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Initialize Unicorn Studio
    const initUnicornStudio = () => {
      // @ts-ignore
      if (window.UnicornStudio && window.UnicornStudio.init) {
        // @ts-ignore
        window.UnicornStudio.init();
      }
    };

    // Check if UnicornStudio is already loaded
    // @ts-ignore
    if (window.UnicornStudio) {
      initUnicornStudio();
    } else {
      // Load the script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';
      script.onload = initUnicornStudio;
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Unicorn Studio doesn't have a destroy method, so we just leave it
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        data-us-project="g9rHFbwIlMmuxNd2ZrGj" 
        className="fixed inset-0 -z-10 w-full h-full"
        style={{ width: '100vw', height: '100vh' }}
      />
      {/* Hidden watermark overlay - CSS to hide Unicorn Studio watermark */}
      <style jsx global>{`
        /* Hide Unicorn Studio Watermark */
        [data-us-project] > a,
        [data-us-project] a,
        [data-us-project] [class*="credit"],
        [data-us-project] [class*="watermark"],
        [data-us-project] [class*="logo"],
        [data-us-project]::after,
        [data-us-project]::before,
        .unicorn-studio-watermark,
        .us-watermark,
        .us-credit,
        [class*="unicorn-studio"],
        [class*="unicorn"] a,
        [class*="unicorn"] [class*="watermark"],
        [class*="unicorn"] [class*="credit"],
        [class*="unicorn"] [class*="logo"],
        div[class*="unicorn"] > a,
        span[class*="unicorn"],
        a[href*="unicornstudio"],
        a[href*="unicorn.studio"],
        canvas + a,
        [data-us-project] canvas + * {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
          font-size: 0 !important;
          line-height: 0 !important;
        }
      `}</style>
    </>
  );
}
