'use client';

import React from 'react';
import HeroCanvas from '@/components/HeroCanvas';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  const handleSelectSection = (sectionId: string) => {
    const targetId = sectionId === 'work' ? 'projects' : sectionId;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full bg-[#08080c] min-h-screen text-white">
      {/* 1. Hero Section with Scroll-Scrubbed Canvas Sequence */}
      <HeroCanvas onSelectSection={handleSelectSection} />

      {/* 2. About Section with 3D Lanyard on Left, Heading & Bio on Right */}
      <AboutSection />

      {/* 3. Work Section with 3D Circular Gallery */}
      <WorkSection />
    </main>
  );
}
