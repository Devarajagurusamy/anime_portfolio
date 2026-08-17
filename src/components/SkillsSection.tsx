'use client';

import React from 'react';
import OrbitImages from './OrbitImages/OrbitImages';
import { Cpu, Sparkles } from 'lucide-react';

const TECH_IMAGES = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 w-full min-h-screen bg-[#08080c] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-red-900/30 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(230,57,70,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header matching Reference */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>// TECHNICAL ARSENAL</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
            CORE <span className="text-[#e50914]">SKILLS</span>
          </h2>

          {/* Split dual-color underline */}
          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-8 sm:w-10 h-[3px] bg-[#e50914] rounded-full inline-block" />
            <span className="w-8 sm:w-10 h-[3px] bg-white rounded-full inline-block" />
          </div>

          <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-400 max-w-lg">
            [ ORBITAL TECH MATRIX // ACTIVE STACK TELEMETRY ]
          </p>
        </div>

        {/* Dynamic Orbiting Tech Logo Visualizer Frame */}
        <div className="relative w-full rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Cyber Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 mb-4 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-white font-semibold tracking-wider">
                ORBIT_MATRIX://ACTIVE_ROTATION
              </span>
            </div>
            <span className="text-red-400 font-bold tracking-widest uppercase text-[11px]">
              12 TECHNOLOGIES IN ORBIT
            </span>
          </div>

          {/* OrbitImages Component Container */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[560px] flex items-center justify-center">
            <OrbitImages
              images={TECH_IMAGES}
              shape="ellipse"
              radiusX={460}
              radiusY={160}
              rotation={-12}
              duration={24}
              itemSize={56}
              responsive={true}
              baseWidth={1200}
              showPath={true}
              pathColor="rgba(229, 9, 20, 0.25)"
              pathWidth={2}
              centerContent={
                <div className="relative flex flex-col items-center justify-center p-6 rounded-full border border-red-500/40 bg-black/80 backdrop-blur-xl shadow-[0_0_40px_rgba(229,9,20,0.3)] select-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed border-red-400/40 flex items-center justify-center animate-[spin_60s_linear_infinite] mb-2">
                    <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                  </div>
                  <span className="font-mono font-black text-xs sm:text-sm tracking-wider text-white">
                    DEVARAJA
                  </span>
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest mt-0.5">
                    CORE MATRIX
                  </span>
                </div>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}
