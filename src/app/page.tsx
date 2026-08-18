'use client';

import React, { useEffect, useState } from 'react';
import HeroCanvas from '@/components/HeroCanvas';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorkSection from '@/components/WorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LineSidebar from '@/components/LineSidebar/LineSidebar';
import Particles from '@/components/Particles/Particles';

const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
];

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(0);

  const handleSelectSection = (sectionId: string) => {
    const targetId =
      sectionId === 'work'
        ? 'projects'
        : sectionId === 'achievements'
        ? 'testimonials'
        : sectionId;

    const el = document.getElementById(targetId) || document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Hide during Hero/HUD (top of page)
      const heroThreshold = window.innerHeight * 0.75;
      const isPastHero = window.scrollY > heroThreshold;
      setShowSidebar(isPastHero);

      if (!isPastHero) {
        setActiveSectionIndex(null);
        return;
      }

      // Calculate which section is most centered in the viewport
      const scrollCenter = window.scrollY + window.innerHeight / 3;
      let currentIndex = 0;

      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollCenter >= top && scrollCenter < top + height) {
            currentIndex = i;
            break;
          } else if (scrollCenter >= top) {
            currentIndex = i;
          }
        }
      }

      setActiveSectionIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full bg-[#000000] min-h-screen text-white">
      {/* Dynamic Cosmic Space Starfield Background — Fades in after Hero scrolling animation */}
      <div
        className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
          showSidebar ? 'opacity-90' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <Particles
          particleCount={260}
          particleSpread={24}
          speed={0.15}
          particleColors={['#ffffff', '#ffffff', '#e50914', '#ffe8e8', '#d6e8ff', '#ffffff']}
          moveParticlesOnHover={true}
          particleHoverFactor={0.6}
          alphaParticles={true}
          particleBaseSize={90}
          sizeRandomness={1.2}
          cameraDistance={22}
          disableRotation={false}
          pixelRatio={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1}
        />
      </div>

      {/* Floating Compact LineSidebar from React Bits — Active across all sections except Hero */}
      <aside
        className={`fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 hidden xl:block ${
          showSidebar
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
        aria-label="Section Navigation"
      >
        <LineSidebar
          items={SECTIONS.map(s => s.label)}
          activeItem={activeSectionIndex}
          accentColor="#e50914"
          textColor="#ffffff"
          markerColor="#404040"
          showIndex
          showMarker
          proximityRadius={140}
          maxShift={10}
          falloff="smooth"
          markerLength={24}
          markerGap={10}
          tickScale={0.45}
          scaleTick
          itemGap={38}
          fontSize={0.72}
          smoothing={180}
          onItemClick={(index) => {
            const targetId = SECTIONS[index].id;
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </aside>

      {/* 1. Hero Section with Scroll-Scrubbed Canvas Sequence & HUD (No LineSidebar here) */}
      <HeroCanvas onSelectSection={handleSelectSection} />

      {/* 2. Work Section with 3D Circular Gallery */}
      <WorkSection />

      {/* 3. About Section with 3D Lanyard on Left, Heading & Bio on Right */}
      <AboutSection />

      {/* 4. Skills Section with OrbitImages Tech Visualizer */}
      <SkillsSection />

      {/* 5. Experience Section with Curved Checkpoint Progress Stepper */}
      <ExperienceSection />

      {/* 6. Social Proof & Testimonials Section with 3D Dome Gallery */}
      <TestimonialsSection />

      {/* 7. Contact Section */}
      <ContactSection />

      {/* 8. Footer with Cyber LetterGlitch Background */}
      <Footer />
    </main>
  );
}
