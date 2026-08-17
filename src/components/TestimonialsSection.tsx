'use client';

import React from 'react';
import DomeGallery, { DomeImageItem } from './DomeGallery/DomeGallery';
import { Sparkles, ShieldCheck } from 'lucide-react';

const DOME_IMAGES: DomeImageItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=774&auto=format&fit=crop',
    alt: 'Elena Rostova // VP of Engineering'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop',
    alt: 'Marcus Vance // Chief Architect'
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop',
    alt: 'Sarah Lin // Creative Director'
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=774&auto=format&fit=crop',
    alt: 'David Chen // Founder & CEO'
  },
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=774&auto=format&fit=crop',
    alt: 'Maya Thorne // Lead 3D Artist'
  },
  {
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774&auto=format&fit=crop',
    alt: 'Alexandre Roy // Product Director'
  }
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative z-10 w-full min-h-screen bg-[#08080c] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-red-900/30 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(230,57,70,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* 1. Header Matching Reference */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>// TRANSMISSIONS & ENDORSEMENTS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
            SOCIAL PROOF & <span className="text-[#e50914]">TESTIMONIALS</span>
          </h2>

          {/* Split dual-color underline */}
          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-8 sm:w-10 h-[3px] bg-[#e50914] rounded-full inline-block" />
            <span className="w-8 sm:w-10 h-[3px] bg-white rounded-full inline-block" />
          </div>

          <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-400 max-w-lg">
            [ 3D DOME MATRIX // DRAG & CLICK TILES TO INSPECT VERIFIED ENDORSEMENTS ]
          </p>
        </div>

        {/* 2. 3D Dome Gallery Frame */}
        <div className="relative w-full rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Cyber Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 mb-2 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-semibold tracking-wider">
                DOME_FEED://LIVE_TRANSMISSIONS
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-neutral-500 hidden sm:inline">AUTHENTICATED CLIENTS</span>
              <span className="text-red-400 font-bold tracking-widest uppercase flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400 inline" />
                VERIFIED REVIEWS
              </span>
            </div>
          </div>

          {/* 3D Dome Gallery Viewport */}
          <div className="relative w-full h-[420px] sm:h-[500px] md:h-[580px] flex items-center justify-center">
            <DomeGallery
              images={DOME_IMAGES}
              fit={0.55}
              minRadius={520}
              maxRadius={900}
              segments={32}
              dragSensitivity={18}
              dragDampening={1.8}
              openedImageWidth="300px"
              openedImageHeight="380px"
              imageBorderRadius="18px"
              openedImageBorderRadius="24px"
              overlayBlurColor="#08080c"
              grayscale={false}
            />

            {/* Interaction Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/80 shadow-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span>DRAG 3D DOME &bull; CLICK ANY TILE TO ENLARGE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
