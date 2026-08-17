'use client';

import React from 'react';
import OrbitImages from './OrbitImages/OrbitImages';
import { Cpu, Sparkles, Code, GeorgianLari, Cog } from 'lucide-react';
import { GreaterCompare } from 'three';

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
      className="relative z-10 w-full min-h-screen bg-[#000000] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header (Hidden) */}
        {/* <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>// TECHNICAL ARSENAL</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
            CORE <span className="text-[#e50914]">SKILLS</span>
          </h2>

          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-8 sm:w-10 h-[3px] bg-[#e50914] rounded-full inline-block" />
            <span className="w-8 sm:w-10 h-[3px] bg-white rounded-full inline-block" />
          </div>

          <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-400 max-w-lg">
            [ ORBITAL TECH MATRIX // ACTIVE STACK TELEMETRY ]
          </p>
        </div> */}

        {/* OrbitImages Component Container (No Enclosing Box) */}
        <div className="relative w-full h-[420px] sm:h-[520px] md:h-[580px] flex items-center justify-center">
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
            pathColor="rgba(206, 205, 205, 0.25)"
            pathWidth={1.5}
            centerContent={
              <div className="relative flex flex-col items-center justify-center p-6 rounded-full bg-black select-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20  flex items-center justify-center animate-[spin_60s_linear_infinite] mb-2">
                  <Cog className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                </div>
                <span className="font-mono font-black text-xs sm:text-sm tracking-wider text-white">
                  SKILLS
                </span>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest mt-0.5">
                  CORE MATRIX
                </span>
              </div>
            }
          />
        </div>

      </div>
    </section>
  );
}
