'use client';

import React from 'react';
import { ArrowDown, Flame, Compass, Eye } from 'lucide-react';
import { soundFx } from './AudioSynth';

interface StoryOverlaysProps {
  progress: number;
}

export default function StoryOverlays({ progress }: StoryOverlaysProps) {
  // Phase 1: 0% to 25% (Character intro)
  const opacity1 = Math.max(0, 1 - progress * 4);
  // Phase 2: 25% to 65% (Zooming in)
  const opacity2 = Math.max(0, Math.min(1, (progress - 0.25) * 4) * Math.min(1, (0.65 - progress) * 4));
  // Phase 3: 65% to 95% (Deep eye zoom)
  const opacity3 = Math.max(0, Math.min(1, (progress - 0.65) * 4) * Math.min(1, (1.0 - progress) * 4));

  return (
    <div className="relative z-10 pointer-events-none w-full" style={{ height: '350vh' }}>
      {/* Milestone 1: Top Hero Welcome */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 pointer-events-auto"
        style={{
          opacity: opacity1,
          display: opacity1 > 0.01 ? 'flex' : 'none',
        }}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-6 backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-[#ff1e42] animate-bounce" />
          <span className="mono-tag text-[#ff1e42] font-semibold text-[11px]">
            NEXT GEN ANIME PORTFOLIO
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-4 drop-shadow-2xl">
          DEVARAJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] to-[#ff758c]">.DEV</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-lg max-w-xl mb-8 font-mono leading-relaxed drop-shadow">
          Full-Stack Architect & Creative Technologist engineering visionary web applications.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="btn-primary"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
          >
            Explore Projects
          </a>
          <a
            href="#about"
            className="btn-secondary"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
          >
            View Lore & Stats
          </a>
        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-gray-400 text-xs font-mono animate-bounce">
          <span>SCROLL TO DIVE INTO THE VISION</span>
          <ArrowDown className="w-4 h-4 text-[#ff1e42]" />
        </div>
      </div>

      {/* Milestone 2: Mid-Zoom Milestone */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center items-center text-center px-6 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: opacity2,
          display: opacity2 > 0.01 ? 'flex' : 'none',
        }}
      >
        <div className="max-w-2xl bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-3 text-[#00f0ff] font-mono text-xs tracking-widest uppercase">
            <Compass className="w-4 h-4 text-[#00f0ff]" />
            <span>FOCUS & ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
            Where Precision Meets Creativity
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-mono">
            Crafting high-speed, interactive digital universes with Next.js, WebGL, TypeScript, and modern design systems.
          </p>
        </div>
      </div>

      {/* Milestone 3: Deep Eye Portal */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center items-center text-center px-6 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: opacity3,
          display: opacity3 > 0.01 ? 'flex' : 'none',
        }}
      >
        <div className="max-w-xl bg-black/70 backdrop-blur-xl p-8 rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/20">
          <div className="flex items-center justify-center gap-2 mb-3 text-[#ff1e42] font-mono text-xs tracking-widest uppercase">
            <Eye className="w-4 h-4 text-[#ff1e42]" />
            <span>UNLOCKED REALM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
            The Digital Arsenal
          </h2>
          <p className="text-gray-300 text-sm font-mono">
            Scroll down to inspect profile stats, technology stack, and deployed projects.
          </p>
        </div>
      </div>
    </div>
  );
}
