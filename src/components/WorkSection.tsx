'use client';

import React, { useRef } from 'react';
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

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-screen bg-black py-16 sm:py-20 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* 1. 3D Circular Gallery Viewport */}
      <div className="relative w-full max-w-7xl h-[460px] sm:h-[540px] md:h-[600px] flex items-center justify-center my-2">
        <div className="w-full h-full relative">
          <CircularGallery
            ref={galleryRef}
            items={GALLERY_ITEMS}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.03}
            scrollSpeed={2}
            fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
            font="bold 28px Orbitron"
          />
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

    </section>
  );
}
