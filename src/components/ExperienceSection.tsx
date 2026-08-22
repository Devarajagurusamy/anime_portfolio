'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Calendar, MapPin, Briefcase, Code2, TrendingUp, Search, Megaphone } from 'lucide-react';
import { soundFx } from './AudioSynth';
import VerticalHeading from './VerticalHeading';

interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  iconType: 'work' | 'intern' | 'seo';
  description?: string;
  highlights?: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: '01',
    number: '01',
    role: 'Junior Developer',
    company: 'Happycoders Private Limited',
    period: 'Mar 2024 – Feb 2026',
    location: 'Thoothukudi, TN (Remote)',
    badge: 'RECENT',
    iconType: 'work',
    highlights: [
      'Developed scalable full-stack web applications and dynamic admin panels using Next.js, Nest.js, Laravel-PHP, TypeScript, and MySQL.',
      'Built responsive UIs, integrated RESTful APIs, optimized performance, and shipped reliable releases via Git and CI/CD pipelines.'
    ]
  },
  {
    id: '02',
    number: '02',
    role: 'Digital Marketing Intern',
    company: 'Happycoders Private Limited',
    period: 'Nov 2023 – Jan 2024',
    location: 'Thoothukudi, TN (Remote)',
    iconType: 'intern',
    highlights: [
      'Contributed to the execution of comprehensive digital marketing campaigns for Happycoders, gaining practical experience across digital marketing strategies.'
    ]
  },
  {
    id: '03',
    number: '03',
    role: 'Search Engine Optimization Intern',
    company: 'Drawlead Private Limited',
    period: 'Aug 2023 – Oct 2023',
    location: 'Chennai, TN',
    iconType: 'seo',
    highlights: [
      'Assisted in implementing effective SEO strategies to enhance online visibility and improve search engine rankings for Drawlead.'
    ]
  }
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  // Scroll Progress tied smoothly to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const activeIndicesRef = useRef<number[]>([]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', latest => {
      const newActive: number[] = [];
      EXPERIENCES.forEach((_, idx) => {
        const threshold = (idx + 0.25) / EXPERIENCES.length;
        if (latest >= threshold) {
          newActive.push(idx);
        }
      });
      if (newActive.length !== activeIndicesRef.current.length) {
        activeIndicesRef.current = newActive;
        setActiveIndices(newActive);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative z-10 w-full min-h-screen bg-transparent py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col items-center"
    >
      {/* Vertical Section Heading */}
      <VerticalHeading whiteText="EXPERI" redText="ENCE" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl w-full relative z-10"
      >
        
        {/* Alternating Timeline Container */}
        <div className="relative w-full">
          
          {/* Central Vertical Spine Line (Desktop center) / Left Spine (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] pointer-events-none">
            {/* Background dashed track */}
            <div className="w-full h-full border-l-2 border-dashed border-neutral-800" />
            
            {/* Smooth animated solid red laser trace */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#e50914] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-24 md:space-y-28">
            {EXPERIENCES.map((item, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeIndices.includes(index);

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  {/* Left Side (50% on desktop) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:pr-14">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={() => soundFx.playHover()}
                        className="flex flex-col md:items-end md:text-right space-y-2"
                      >
                        <div className="flex items-center gap-2 md:justify-end">
                          {item.badge && (
                            <span className="bg-[#e50914] text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                              {item.badge}
                            </span>
                          )}
                          <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight">
                            {item.role}
                          </h3>
                        </div>

                        <span className="text-sm sm:text-base font-sans font-medium text-[#e50914]">
                          {item.company}
                        </span>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-neutral-400 md:justify-end pt-1">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {item.highlights && item.highlights.length > 0 ? (
                          <ul className="space-y-2 pt-2 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-lg text-left">
                            {item.highlights.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-[#e50914] font-bold mt-0.5 select-none flex-shrink-0">›</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : item.description ? (
                          <p className="text-sm text-neutral-300 font-sans leading-relaxed pt-2 max-w-lg">
                            {item.description}
                          </p>
                        ) : null}
                      </motion.div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Central Stepper Checkpoint Node with Icons */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        backgroundColor: isActive ? '#e50914' : '#000000',
                        borderColor: isActive ? '#e50914' : '#333333',
                        color: isActive ? '#ffffff' : '#777777'
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 select-none shadow-none cursor-default"
                      title={item.role}
                    >
                      {item.iconType === 'work' ? (
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      ) : item.iconType === 'intern' ? (
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      ) : item.iconType === 'seo' ? (
                        <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      ) : (
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      )}
                    </motion.div>
                  </div>

                  {/* Right Side (50% on desktop) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-14">
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={() => soundFx.playHover()}
                        className="flex flex-col md:items-start md:text-left space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight">
                            {item.role}
                          </h3>
                          {item.badge && (
                            <span className="bg-[#e50914] text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <span className="text-sm sm:text-base font-sans font-medium text-[#e50914]">
                          {item.company}
                        </span>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-neutral-400 pt-1">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {item.highlights && item.highlights.length > 0 ? (
                          <ul className="space-y-2 pt-2 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-lg text-left">
                            {item.highlights.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-[#e50914] font-bold mt-0.5 select-none flex-shrink-0">›</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : item.description ? (
                          <p className="text-sm text-neutral-300 font-sans leading-relaxed pt-2 max-w-lg">
                            {item.description}
                          </p>
                        ) : null}
                      </motion.div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </motion.div>
    </section>
  );
}
