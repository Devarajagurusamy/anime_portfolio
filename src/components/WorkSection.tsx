'use client';

import React, { useRef } from 'react';
import CircularGallery, { GalleryItem, CircularGalleryHandle } from './CircularGallery/CircularGallery';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { soundFx } from './AudioSynth';

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    text: 'Nexa Store'
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
    text: 'Personal Portfolio'
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

  const handlePrev = () => {
    soundFx.playClick();
    galleryRef.current?.prev();
  };

  const handleNext = () => {
    soundFx.playClick();
    galleryRef.current?.next();
  };

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-screen bg-black py-16 sm:py-20 px-4 sm:px-8 flex flex-col justify-between items-center overflow-hidden"
    >
      {/* 1. Header Section Matching Reference (Hidden) */}
      {/* <div className="flex flex-col items-center justify-center text-center mt-2 mb-4">
        <span className="text-red-500 font-mono tracking-[0.3em] text-xs sm:text-sm font-bold uppercase mb-2">
          // WORK
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
          SELECTED <span className="text-[#e50914]">WORK</span>
        </h2>

        <div className="flex items-center justify-center gap-1.5 mt-3">
          <span className="w-7 sm:w-9 h-[3px] bg-white rounded-full inline-block" />
          <span className="w-7 sm:w-9 h-[3px] bg-[#e50914] rounded-full inline-block" />
        </div>
      </div> */}

      {/* 2. 3D Circular Gallery with Circular Left / Right Arrow Buttons */}
      <div className="relative w-full max-w-7xl h-[460px] sm:h-[540px] md:h-[600px] flex items-center justify-center my-4">
        {/* Left Arrow Button */}
        {/* <button
          type="button"
          onClick={handlePrev}
          onMouseEnter={() => soundFx.playHover()}
          aria-label="Previous project"
          className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-neutral-900 border border-white/20 hover:border-red-500 text-white hover:text-red-400 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button> */}

        {/* Circular Gallery WebGL Viewport */}
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

        {/* Right Arrow Button */}
        {/* <button
          type="button"
          onClick={handleNext}
          onMouseEnter={() => soundFx.playHover()}
          aria-label="Next project"
          className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-neutral-900 border border-white/20 hover:border-red-500 text-white hover:text-red-400 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95 group"
        >
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button> */}
      </div>

      {/* 3. Bottom Button Matching Reference */}
      {/* <div className="mt-4 mb-6 flex justify-center">
        <a
          href="#projects"
          onClick={() => soundFx.playClick()}
          onMouseEnter={() => soundFx.playHover()}
          className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-black border border-red-600/90 hover:border-red-500 hover:bg-red-950/20 text-white hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg group active:scale-98"
        >
          <span>VIEW ALL PROJECTS</span>
          <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
        </a>
      </div> */}
    </section>
  );
}
