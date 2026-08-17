'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Code2, Star } from 'lucide-react';
import { soundFx } from './AudioSynth';

interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  iconType: 'work' | 'intern' | 'code' | 'star';
  description: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: '01',
    number: '01',
    role: 'Junior Developer',
    company: 'HappyCoders Private Limited',
    period: 'Jan 2024 – May 2024',
    location: 'Thoothukudi, Tamil Nadu (Remote)',
    badge: 'PRESENT',
    iconType: 'work',
    description:
      'Worked on developing and maintaining web applications using modern technologies. Collaborated with the team to deliver efficient and scalable solutions.'
  },
  {
    id: '02',
    number: '02',
    role: 'Web Developer Intern',
    company: 'HappyCoders Private Limited',
    period: 'Sep 2023 – Dec 2023',
    location: 'Thoothukudi, Tamil Nadu (Remote)',
    iconType: 'intern',
    description:
      'Assisted in building and testing web applications. Gained hands-on experience in frontend development and backend integration.'
  },
  {
    id: '03',
    number: '03',
    role: 'Freelance Developer',
    company: 'Self Employed',
    period: 'Jun 2023 – Aug 2023',
    location: 'Remote',
    iconType: 'code',
    description:
      'Built responsive websites and custom solutions for clients. Focused on creating clean UI and seamless user experiences.'
  },
  {
    id: '04',
    number: '04',
    role: 'Student Projects',
    company: 'Academic',
    period: '2021 – 2023',
    location: 'College Projects',
    iconType: 'star',
    description:
      'Developed various fullstack and web design projects during coursework, building strong fundamentals in software engineering and modern web stacks.'
  }
];

export default function ExperienceSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollable = rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      setScrollProgress(progress);

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top <= windowHeight * 0.65) {
          setActiveStep(prev => Math.max(prev, idx));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderIcon = (type: ExperienceItem['iconType'], isActive: boolean) => {
    const iconClass = `w-5 h-5 transition-colors ${
      isActive ? 'text-[#e50914]' : 'text-neutral-500'
    }`;
    switch (type) {
      case 'work':
        return <Briefcase className={iconClass} />;
      case 'intern':
        return <Code2 className={iconClass} />;
      case 'code':
        return <Code2 className={iconClass} />;
      case 'star':
        return <Star className={iconClass} />;
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative z-10 w-full min-h-screen bg-[#000000] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col items-center"
    >
      <div className="max-w-5xl w-full relative z-10">
        
        {/* Header (Hidden) */}
        {/* <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
          <span className="text-[#e50914] font-mono tracking-[0.25em] text-xs sm:text-sm font-bold uppercase mb-2">
            // EXPERIENCE
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
            MY <span className="text-[#e50914]">EXPERIENCE</span>
          </h2>

          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-8 sm:w-10 h-[3px] bg-[#e50914] rounded-full inline-block" />
            <span className="w-8 sm:w-10 h-[3px] bg-white rounded-full inline-block" />
          </div>
        </div> */}

        {/* Vertical Stepper Timeline (No Box Wrappers) */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Vertical Progress Spine */}
          <div className="absolute left-10 sm:left-14 top-4 bottom-8 w-[2px] pointer-events-none">
            <div className="w-full h-full border-l-2 border-dashed border-white/20" />
            <div
              className="absolute top-0 left-0 w-full bg-[#e50914] transition-all duration-200"
              style={{
                height: `${Math.min(100, Math.max(0, (scrollProgress / 0.85) * 100))}%`
              }}
            />
          </div>

          {/* Experience Items Container */}
          <div className="space-y-10 sm:space-y-12">
            {EXPERIENCES.map((item, index) => {
              const isActive = activeStep >= index;
              const isCurrentlyActive = activeStep === index;

              return (
                <div
                  key={item.id}
                  ref={el => {
                    cardsRef.current[index] = el;
                  }}
                  className="relative flex items-start gap-6 sm:gap-10 group"
                >
                  {/* STEPPER NODE */}
                  <div className="relative z-20 flex-shrink-0 mt-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono text-sm sm:text-base font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-black border-2 border-[#e50914] text-[#e50914] scale-105'
                          : 'bg-black border-2 border-white/20 text-neutral-400'
                      }`}
                    >
                      {item.number}
                    </div>

                    {isCurrentlyActive && (
                      <div className="absolute inset-0 rounded-full border border-[#e50914] animate-ping pointer-events-none opacity-40" />
                    )}
                  </div>

                  {/* EXPERIENCE CONTENT (Pure Borderless Layout on Pitch Black) */}
                  <div
                    onMouseEnter={() => soundFx.playHover()}
                    className="flex-1 py-1"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
                      
                      {/* Left: Role, Company, Period, Location */}
                      <div className="md:col-span-5 flex flex-col">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
                            {item.role}
                          </h3>
                          {item.badge && (
                            <span className="bg-[#e50914] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <span className="text-sm font-sans font-medium text-[#e50914] mt-0.5">
                          {item.company}
                        </span>

                        <div className="flex flex-col gap-1 mt-2 text-xs text-neutral-400 font-sans">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Description */}
                      <div className="md:col-span-7 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] flex-shrink-0 mt-2 inline-block" />
                        <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
