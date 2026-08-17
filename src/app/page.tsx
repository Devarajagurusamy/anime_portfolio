'use client';

import React from 'react';
import HeroCanvas from '@/components/HeroCanvas';

export default function Home() {
  return (
    <main className="relative w-full bg-black min-h-screen">
      {/* Fixed Fullscreen Canvas Hero Animation */}
      <HeroCanvas />

      {/* Scroll track providing smooth scrubbing duration for Hero sequence */}
      <div className="relative w-full h-[500vh] pointer-events-none" />
    </main>
  );
}
