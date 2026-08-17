'use client';

import React from 'react';
import HeroCanvas from '@/components/HeroCanvas';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorkSection from '@/components/WorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const handleSelectSection = (sectionId: string) => {
    const targetId =
      sectionId === 'work'
        ? 'projects'
        : sectionId === 'achievements'
        ? 'testimonials'
        : sectionId;

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full bg-[#000000] min-h-screen text-white">
      {/* 1. Hero Section with Scroll-Scrubbed Canvas Sequence & HUD */}
      <HeroCanvas onSelectSection={handleSelectSection} />

      {/* 2. About Section with 3D Lanyard on Left, Heading & Bio on Right */}
      <AboutSection />

      {/* 3. Skills Section with OrbitImages Tech Visualizer */}
      <SkillsSection />

      {/* 4. Experience Section with Curved Checkpoint Progress Stepper */}
      <ExperienceSection />

      {/* 5. Work Section with 3D Circular Gallery */}
      <WorkSection />

      {/* 6. Social Proof & Testimonials Section with 3D Dome Gallery */}
      <TestimonialsSection />

      {/* 7. Contact Section with React Bits CurvedInput */}
      <ContactSection />
    </main>
  );
}
