'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Code2, Star, ArrowUpRight } from 'lucide-react';
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
      'Developed multiple projects in web development, UI/UX, and problem-solving to enhance technical skills and real-world experience.'
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Track scroll progress across the experience section
      const totalScrollable = rect.height - windowHeight * 0.3;
      const currentScroll = windowHeight * 0.6 - rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));
      setScrollProgress(progress);

      // Determine active card based on viewport visibility
      const cardElements = cardsRef.current;
      let currentActive = 0;
      cardElements.forEach((card, idx) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          if (cardRect.top <= windowHeight * 0.65) {
            currentActive = idx;
          }
        }
      });
      setActiveStep(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderIcon = (type: ExperienceItem['iconType'], isActive: boolean) => {
    const iconClass = `w-5 h-5 ${isActive ? 'text-[#e50914]' : 'text-white/80'}`;
    switch (type) {
      case 'work':
      case 'intern':
        return <Briefcase className={iconClass} />;
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
      className="relative z-10 w-full min-h-screen bg-black py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col items-center"
    >
      <div className="max-w-5xl w-full relative z-10">
        
        {/* 1. Header Matching Reference */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
          <span className="text-[#e50914] font-mono tracking-[0.25em] text-xs sm:text-sm font-bold uppercase mb-2">
            // EXPERIENCE
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
            MY <span className="text-[#e50914]">EXPERIENCE</span>
          </h2>

          {/* Split dual-color underline (Red on left, White on right) */}
          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-8 sm:w-10 h-[3px] bg-[#e50914] rounded-full inline-block" />
            <span className="w-8 sm:w-10 h-[3px] bg-white rounded-full inline-block" />
          </div>
        </div>

        {/* 2. Timeline List with Stepper on Left and Cards on Right */}
        <div className="relative w-full">
          
          {/* Vertical Track Line connecting all stepper nodes */}
          <div className="absolute left-[20px] sm:left-[24px] top-6 bottom-6 w-[2px] pointer-events-none">
            {/* Background Dashed Line */}
            <div className="w-full h-full border-l-2 border-dashed border-white/20" />
            
            {/* Animated Solid Red Progress Line */}
            <div
              className="absolute top-0 left-0 w-full bg-[#e50914] shadow-[0_0_10px_#ff1e42] transition-all duration-200"
              style={{
                height: `${Math.min(100, Math.max(0, (scrollProgress / 0.85) * 100))}%`
              }}
            />
          </div>

          {/* Experience Items Container */}
          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCES.map((item, index) => {
              const isActive = activeStep >= index;
              const isCurrentlyActive = activeStep === index;

              return (
                <div
                  key={item.id}
                  ref={el => {
                    cardsRef.current[index] = el;
                  }}
                  className="relative flex items-center gap-4 sm:gap-8 group"
                >
                  {/* STEPPER NODE (01, 02, 03, 04) */}
                  <div className="relative z-20 flex-shrink-0">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono text-sm sm:text-base font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-black border-2 border-[#e50914] text-[#e50914] shadow-[0_0_18px_rgba(229,9,20,0.6)] scale-105'
                          : 'bg-black border-2 border-white/30 text-white/90 group-hover:border-white/60'
                      }`}
                    >
                      {item.number}
                    </div>

                    {/* Active Pulsing Indicator */}
                    {isCurrentlyActive && (
                      <div className="absolute inset-0 rounded-full border border-[#e50914] animate-ping pointer-events-none opacity-40" />
                    )}
                  </div>

                  {/* EXPERIENCE CARD CONTAINER */}
                  <div
                    onMouseEnter={() => soundFx.playHover()}
                    className={`flex-1 rounded-2xl p-5 sm:p-7 transition-all duration-300 relative border overflow-hidden ${
                      isActive
                        ? 'bg-black/90 border-[#e50914] shadow-[0_0_30px_rgba(229,9,20,0.15)]'
                        : 'bg-black/60 border-white/15 hover:border-white/30'
                    }`}
                  >
                    {/* PRESENT BADGE (Top Right) */}
                    {item.badge && (
                      <div className="absolute top-0 right-0 bg-[#e50914] text-white font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-bl-lg tracking-wider uppercase shadow-md">
                        {item.badge}
                      </div>
                    )}

                    {/* Card Inner Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      
                      {/* Left Side: Icon, Role, Company, Date, Location */}
                      <div className="md:col-span-6 flex items-start sm:items-center gap-4">
                        {/* Circular Icon Container */}
                        <div
                          className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors ${
                            isActive
                              ? 'border-[#e50914] bg-red-950/20'
                              : 'border-white/20 bg-white/5'
                          }`}
                        >
                          {renderIcon(item.iconType, isActive)}
                        </div>

                        <div className="flex flex-col">
                          <h3 className="text-base sm:text-lg font-bold font-sans text-white tracking-tight">
                            {item.role}
                          </h3>
                          <span className="text-xs sm:text-sm font-sans font-medium text-[#e50914] mt-0.5">
                            {item.company}
                          </span>

                          <div className="flex flex-col gap-1 mt-2 text-[11px] sm:text-xs text-neutral-400 font-sans">
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
                      </div>

                      {/* Right Side: Description with Red Bullet Point */}
                      <div className="md:col-span-6 md:border-l md:border-white/10 md:pl-6 flex items-center">
                        <div className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] flex-shrink-0 mt-1.5 inline-block" />
                          <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* 3. Bottom Button Matching Reference */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <a
            href="#experience"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-black border border-red-600/90 hover:border-red-500 hover:bg-red-950/20 text-white font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-[0_0_18px_rgba(229,9,20,0.18)] hover:shadow-[0_0_25px_rgba(229,9,20,0.35)] group active:scale-98"
          >
            <span>VIEW FULL JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 text-[#e50914] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
