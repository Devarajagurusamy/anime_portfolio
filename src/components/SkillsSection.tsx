'use client';

import React from 'react';
import { motion } from 'motion/react';
import OrbitImages from './OrbitImages/OrbitImages';
import VerticalHeading from './VerticalHeading';
import { Cog } from 'lucide-react';

const TECH_IMAGES = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 w-full min-h-screen bg-transparent py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Vertical Section Heading */}
      <VerticalHeading whiteText="SKILLS " redText="MATRIX" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* OrbitImages Component Container with Smooth Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[420px] sm:h-[520px] md:h-[580px] flex items-center justify-center"
        >
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center animate-[spin_60s_linear_infinite] mb-2">
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
        </motion.div>

      </div>
    </section>
  );
}
