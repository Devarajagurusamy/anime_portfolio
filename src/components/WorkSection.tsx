'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import CircularGallery, { GalleryItem, CircularGalleryHandle } from './CircularGallery/CircularGallery';

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    text: 'Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    text: 'Verto Creative'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    text: 'Novus Analytics'
  },
  {
    image: 'https://images.unsplash.com/photo-1510519138197-06b8628cbf47?w=800&auto=format&fit=crop&q=80',
    text: 'FitLens App'
  },
  {
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    text: 'Portfolio'
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    text: 'Aura Studio'
  },
  {
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80',
    text: 'Quantum Vault'
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

  // Deep-space emergence: scales smoothly from 0.2 directly out of the pitch darkness to full 1.0
  const scale = useTransform(smoothProgress, [0, 0.55, 1], [0.2, 1, 1]);
  // Smooth void fade-in
  const opacity = useTransform(smoothProgress, [0, 0.4, 1], [0, 1, 1]);
  // Deep-space bloom from dark blur to sharp crisp focus
  const filter = useTransform(
    smoothProgress,
    [0, 0.45],
    ['blur(8px) brightness(0.3)', 'blur(0px) brightness(1)']
  );

  const [isNearViewport, setIsNearViewport] = React.useState(false);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '350px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative z-10 w-full h-[220vh] bg-transparent"
    >
      {/* Sticky Viewport: Locks in the center of the screen during zoom-in without vertical drift */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8">
        
        <motion.div
          style={{ scale, opacity, filter }}
          className="w-full flex flex-col items-center justify-center origin-center select-none"
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
                  scrollEase={0.03}
                  scrollSpeed={2}
                  font="bold 26px var(--font-jetbrains-mono), monospace"
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

          </div>
        </motion.div>

      </div>
    </section>
  );
}
