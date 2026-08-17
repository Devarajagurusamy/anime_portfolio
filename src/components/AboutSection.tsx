'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Terminal, Cpu, Sparkles, Code2, ArrowRight, FileText, Mail } from 'lucide-react';
import { soundFx } from './AudioSynth';

// Dynamic import with ssr: false for Three.js & Rapier WebGL canvas
const Lanyard = dynamic(() => import('./Lanyard/Lanyard'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
      <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
        INITIALIZING PHYSICS ENGINE...
      </span>
    </div>
  )
});

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 w-full min-h-screen bg-[#08080c] py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-red-900/30 overflow-hidden flex items-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(230,57,70,0.1),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: 3D Interactive Lanyard ID Card Badge */}
          <div className="lg:col-span-6 w-full h-[480px] sm:h-[560px] lg:h-[650px] relative flex items-center justify-center">
            {/* Ambient Card Backlight Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-red-600/10 blur-[90px]" />
            </div>

            {/* Interactive Badge Canvas */}
            <div className="w-full h-full relative">
              <Lanyard
                position={[0, 0, 15]}
                gravity={[0, -40, 0]}
                fov={20}
                lanyardWidth={1.5}
              />
            </div>

            {/* Interaction Hint at bottom of badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span>DRAG & TOSS ID BADGE</span>
            </div>
          </div>

          {/* RIGHT SIDE: Heading, Bio, Stats, and Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>// ABOUT ME</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight uppercase leading-tight">
              CREATIVE FULLSTACK <span className="text-[#e50914]">DEVELOPER</span>
            </h2>

            {/* Split underline */}
            <div className="flex items-center gap-1.5 mt-3 mb-6">
              <span className="w-8 h-[3px] bg-white rounded-full inline-block" />
              <span className="w-8 h-[3px] bg-[#e50914] rounded-full inline-block" />
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                I&apos;m <span className="text-white font-bold font-mono">DEVARAJA</span>, a passionate fullstack engineer specializing in crafting immersive web applications, high-performance WebGL graphics, and cinematic anime-styled digital experiences.
              </p>
              <p className="text-neutral-400 text-sm">
                Bridging engineering precision with cutting-edge visual aesthetics, I design and build modern architectures from robust backend distributed services down to sub-millisecond fluid frontend interactions.
              </p>
            </div>

            {/* Stats Matrix Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                <span className="text-2xl font-black font-mono text-white block">5+</span>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase mt-0.5 block">
                  Years Exp
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                <span className="text-2xl font-black font-mono text-[#e50914] block">40+</span>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase mt-0.5 block">
                  Projects Done
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                <span className="text-2xl font-black font-mono text-white block">100%</span>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase mt-0.5 block">
                  Code Integrity
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                <span className="text-2xl font-black font-mono text-amber-400 block">60 FPS</span>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase mt-0.5 block">
                  Performance
                </span>
              </div>
            </div>

            {/* Core Tech Stack Matrix */}
            <div className="mb-8">
              <span className="text-[11px] font-mono text-neutral-400 tracking-widest uppercase block mb-2.5">
                [ CORE CAPABILITIES & TECH ]
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'React / Next.js',
                  'TypeScript',
                  'Three.js & WebGL',
                  'OGL & GLSL Shaders',
                  'Node.js & Go',
                  'TailwindCSS',
                  'State Architectures',
                  'Physics Engines'
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-200 hover:border-red-500/50 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e50914] hover:bg-red-600 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(229,9,20,0.4)] group"
              >
                <span>EXPLORE MISSIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#resume"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
