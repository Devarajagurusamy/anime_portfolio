'use client';

import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
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

import { soundFx } from '@/components/AudioSynth';

const SECTIONS = [
  { id: 'home', label: 'Home' },
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

  const sidebarRef = useRef(false);
  const activeIndexRef = useRef<number | null>(0);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Virtual Momentum Smooth Scrolling with crisp, responsive configuration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Cinematic smooth scrolling controller that glides gracefully across all intermediate sections
  const smoothScrollToTarget = (targetElementOrY: HTMLElement | number) => {
    const currentY = window.scrollY || window.pageYOffset || 0;
    let targetY = 0;

    if (typeof targetElementOrY === 'number') {
      targetY = targetElementOrY;
    } else {
      const rect = targetElementOrY.getBoundingClientRect();
      targetY = rect.top + currentY;
    }

    const distance = Math.abs(targetY - currentY);
    const duration = Math.min(1.8, Math.max(0.9, 0.7 + Math.pow(distance / 5000, 0.5) * 0.8));

    const customEasing = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetY, {
        duration,
        easing: customEasing,
        lock: false,
      });
    } else {
      const startTime = performance.now();
      const durationMs = duration * 1000;
      const startY = currentY;
      const diff = targetY - startY;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        const eased = customEasing(progress);
        window.scrollTo(0, startY + diff * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  };

  const handleSelectSection = (sectionId: string) => {
    soundFx.playClick();
    if (sectionId === 'home') {
      smoothScrollToTarget(0);
      return;
    }

    const targetId =
      sectionId === 'projects'
        ? 'work'
        : sectionId === 'achievements'
        ? 'testimonials'
        : sectionId;

    const el = document.getElementById(targetId) || document.getElementById(sectionId);
    if (el) {
      smoothScrollToTarget(el);
    }
  };

  // Cached layout offsets to avoid forced layout thrashing on scroll
  useEffect(() => {
    let sectionOffsets: { id: string; top: number; height: number }[] = [];

    const measureSections = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      sectionOffsets = SECTIONS.map(s => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: 0, height: 0 };
        const rect = el.getBoundingClientRect();
        return {
          id: s.id,
          top: rect.top + scrollY,
          height: rect.height
        };
      });
    };

    measureSections();
    window.addEventListener('resize', measureSections, { passive: true });

    let ticking = false;

    const checkScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const heroThreshold = window.innerHeight * 0.75;
      const isPastHero = scrollY > heroThreshold;

      if (isPastHero !== sidebarRef.current) {
        sidebarRef.current = isPastHero;
        setShowSidebar(isPastHero);
      }

      if (!isPastHero) {
        if (activeIndexRef.current !== 0) {
          activeIndexRef.current = 0;
          setActiveSectionIndex(0);
        }
        ticking = false;
        return;
      }

      const scrollCenter = scrollY + window.innerHeight / 2;
      let currentIndex = 1;

      if (
        typeof document !== 'undefined' &&
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 150
      ) {
        currentIndex = SECTIONS.length - 1;
      } else {
        for (let i = 1; i < sectionOffsets.length; i++) {
          const { top, height } = sectionOffsets[i];
          if (height > 0) {
            if (scrollCenter >= top && scrollCenter < top + height) {
              currentIndex = i;
              break;
            } else if (scrollCenter >= top) {
              currentIndex = i;
            }
          }
        }
      }

      if (currentIndex !== activeIndexRef.current) {
        activeIndexRef.current = currentIndex;
        setActiveSectionIndex(currentIndex);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measureSections);
    };
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
          particleCount={160}
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
          pixelRatio={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.25) : 1}
          isActive={showSidebar}
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
          itemGap={30}
          fontSize={0.72}
          smoothing={180}
          onItemClick={(index) => {
            soundFx.playClick();
            const target = SECTIONS[index];
            if (target.id === 'home') {
              smoothScrollToTarget(0);
              return;
            }
            const el = document.getElementById(target.id);
            if (el) {
              smoothScrollToTarget(el);
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
