'use client';

import React from 'react';
import DomeGallery, { DomeImageItem } from './DomeGallery/DomeGallery';
import { Sparkles } from 'lucide-react';
import VerticalHeading from './VerticalHeading';

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
      className="relative z-10 w-full min-h-screen bg-[#000000] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Vertical Section Heading */}
      <VerticalHeading whiteText="TESTI" redText="MONIALS" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header (Hidden) */}
        {/* <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>// TRANSMISSIONS & ENDORSEMENTS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
            SOCIAL PROOF & <span className="text-[#e50914]">TESTIMONIALS</span>
          </h2>

          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-8 sm:w-10 h-[3px] bg-[#e50914] rounded-full inline-block" />
            <span className="w-8 sm:w-10 h-[3px] bg-white rounded-full inline-block" />
          </div>

          <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-400 max-w-lg">
            [ 3D DOME MATRIX // DRAG & CLICK TILES TO INSPECT VERIFIED ENDORSEMENTS ]
          </p>
        </div> */}

        {/* 3D Dome Gallery Viewport (No Enclosing Box) */}
        <div className="relative w-full h-[450px] sm:h-[520px] md:h-[600px] flex items-center justify-center">
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
            overlayBlurColor="#000000"
            grayscale={false}
          />

          {/* Interaction Hint */}
          {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-1.5 text-[11px] font-mono text-white/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span>DRAG 3D DOME &bull; CLICK ANY TILE TO ENLARGE</span>
          </div> */}
        </div>

      </div>
    </section>
  );
}
