'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import CircularGallery, { GalleryItem, CircularGalleryHandle } from './CircularGallery/CircularGallery';

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: '/assets/works/hrConsultancy.png',
    text: 'HR Consult M',
    link: 'https://hr-consult-m.vercel.app/'
  },
  {
    image: '/assets/works/pos.png',
    text: 'POS System',
    link: 'https://pos-two-ruddy.vercel.app/'
  },
  {
    image: '/assets/works/curcuma-caesia.png',
    text: 'Curcuma Caesia',
    link: 'https://curcuma-caesia.vercel.app/'
  },
  {
    image: '/assets/works/employeeManagement.png',
    text: 'Employee Dashboard',
    link: 'https://employee-management-dashboard-delta-jade.vercel.app/'
  },
  {
    image: '/assets/works/ecom.png',
    text: 'E-Commerce App',
    link: 'https://e-commerce-crud-app.vercel.app/'
  },
  {
    image: '/assets/works/wellnessCoach.png',
    text: 'Wellness Coach',
    link: 'https://wah-coach-1.vercel.app/'
  }
];

export default function WorkSection() {
  const galleryRef = useRef<CircularGalleryHandle | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  // Scroll Progress tied to the Work section scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    restDelta: 0.001
  });

  // Deep-space emergence: scales smoothly from 0.92 directly out of the pitch darkness to full 1.0
  const scale = useTransform(smoothProgress, [0, 0.45, 1], [0.95, 1, 1]);
  // Smooth void visibility
  const opacity = useTransform(smoothProgress, [0, 0.1, 1], [1, 1, 1]);

  const [isNearViewport, setIsNearViewport] = React.useState(true);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
        }
      },
      { rootMargin: '500px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative z-10 w-full h-[220vh] bg-transparent"
    >
      {/* Sticky Viewport: Locks in the center of the screen during zoom-in without vertical drift */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8">
        
        <motion.div
          style={{ scale, opacity }}
          className="w-full flex flex-col items-center justify-center origin-center select-none will-change-transform"
        >
          {/* 1. 3D Circular Gallery Viewport */}
          <div className="relative w-full max-w-7xl h-[460px] sm:h-[540px] md:h-[600px] flex items-center justify-center my-2">
            <div className="w-full h-full relative">
              {isNearViewport && (
                <CircularGallery
                  ref={galleryRef}
                  items={GALLERY_ITEMS}
                  bend={3}
                  textColor="#ffffff"
                  borderRadius={0.05}
                  scrollEase={0.04}
                  scrollSpeed={2}
                  autoRotate={true}
                  autoRotateSpeed={0.045}
                  font="bold 48px var(--font-jetbrains-mono), monospace"
                />
              )}
            </div>
          </div>

          {/* 2. WORK Section Center Heading with Top Spacing and White Dotted Arc */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center mt-6 sm:mt-10 mb-2 relative z-20 select-none">
            
            {/* WORK Center Heading with 'O' in Red */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-[0.45em] sm:tracking-[0.6em] text-white pl-2 sm:pl-3 uppercase flex items-center mb-3">
              <span>W</span>
              <span className="text-[#e50914] mx-0.5">O</span>
              <span>R</span>
              <span>K</span>
              <span>S</span>
            </h2>

            {/* White Dotted Curved Orbit Arc */}
            <div className="w-full max-w-4xl h-8 pointer-events-none opacity-50">
              <svg className="w-full h-full" viewBox="0 0 1000 40" fill="none" preserveAspectRatio="none">
                <path
                  d="M 10,38 Q 500,-10 990,38"
                  stroke="url(#whiteDottedGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                />
                <defs>
                  <linearGradient id="whiteDottedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="25%" stopColor="#ffffff" stopOpacity="0.35" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="75%" stopColor="#ffffff" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Interactive Cyber Helper Badge */}
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-white/10 text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-widest mt-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] animate-pulse" />
              <span>DRAG TO ROTATE • CLICK CARD TO OPEN LIVE SITE</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
