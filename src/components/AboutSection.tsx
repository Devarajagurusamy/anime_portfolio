'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';
import { soundFx } from './AudioSynth';

import VerticalHeading from './VerticalHeading';

// Dynamic import with ssr: false for Three.js & Rapier WebGL canvas
const Lanyard = dynamic(() => import('./Lanyard/Lanyard'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-3 bg-[#000000]">
      <div className="w-8 h-8 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
      <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
        INITIALIZING PHYSICS ENGINE...
      </span>
    </div>
  )
});

export default function AboutSection() {
  const [isNearViewport, setIsNearViewport] = React.useState(true);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
        }
      },
      { rootMargin: '800px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 w-full min-h-screen bg-transparent py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex items-center"
    >
      {/* Vertical Section Heading */}
      <VerticalHeading whiteText="ABOUT " redText="ME" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: 3D Interactive Lanyard ID Card Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full h-[480px] sm:h-[560px] lg:h-[650px] relative flex items-center justify-center"
          >
            {/* Interactive Badge Canvas */}
            <div className="w-full h-full relative">
              {isNearViewport ? (
                <Lanyard
                  position={[0, 0, 15]}
                  gravity={[0, -40, 0]}
                  fov={20}
                  lanyardWidth={1.5}
                  frontImage="/assets/lanyard/profile_original.jpg"
                  backImage="/assets/lanyard/profile_anime.png"
                  imageFit="cover"
                />
              ) : (
                <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-3 bg-[#000000]">
                  <div className="w-8 h-8 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
                  <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                    INITIALIZING PHYSICS ENGINE...
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Heading, Bio, Stats, and Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                I&apos;m <span className="text-white font-bold font-mono">DEVARAJA S G</span>, a Full Stack Developer with 2 years of experience building scalable web applications using React, Next.js, Nest.js, Laravel, and TypeScript. Passionate about creating clean, high-performance solutions and turning ideas into unique reliable products.
              </p>
              <p className="text-neutral-400 text-sm">
              Build modern, high-performance web applications by combining solid backend architecture with clean, responsive, and engaging frontend experiences.
              </p>
            </div>

            {/* Stats Matrix Grid (No Box Borders) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              {[
                { value: '2+', label: 'Years Exp', color: 'text-white' },
                { value: '10+', label: 'Projects Done', color: 'text-[#e50914]' },
                { value: '100%', label: 'Integrity', color: 'text-white' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="py-2"
                >
                  <span className={`text-3xl font-black font-mono ${stat.color} block`}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase mt-1 block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#e50914] hover:bg-red-600 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all group"
              >
                <span>EXPLORE MISSIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1wYVS6i6jlZW4tH1Ei0T7WFw3hUrjoRxg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all"
                title="View Resume"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
