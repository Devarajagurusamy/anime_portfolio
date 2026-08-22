'use client';

import React from 'react';
import {
  User,
  Code2,
  Mail,
  Briefcase,
  Folder,
  Star,
  Home,
  FileText,
  MessageSquareQuote,
} from 'lucide-react';
import { soundFx } from './AudioSynth';

interface HeroHUDProps {
  scrollProgress: number;
  onSelectSection?: (sectionId: string) => void;
}

export default function HeroHUD({ scrollProgress, onSelectSection }: HeroHUDProps) {
  // Fade out HUD smoothly during the initial scroll
  const opacity = Math.max(0, 1 - scrollProgress * 5.5);
  const pointerEvents = opacity > 0.05 ? 'auto' : 'none';

  const handleCardClick = (id: string) => {
    soundFx.playClick();
    if (onSelectSection) {
      onSelectSection(id);
    }
  };

  return (
    <div
      className="fixed inset-0 z-20 pointer-events-none select-none overflow-hidden will-change-[opacity]"
      style={{
        opacity,
        pointerEvents: pointerEvents as 'auto' | 'none',
      }}
    >
      {/* Background Reticle / Circular HUD Graphic centered behind head */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[480px] h-[480px] md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] rounded-full border border-red-500/15 flex items-center justify-center -translate-y-8">
          {/* Inner ring */}
          <div className="w-[360px] h-[360px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] rounded-full border border-dashed border-red-400/15 animate-[spin_80s_linear_infinite]" />
        </div>
      </div>

      {/* TOP BAR */}
      <header className="absolute top-0 left-0 right-0 z-30 px-5 sm:px-12 md:px-16 pt-5 sm:pt-8 flex items-center justify-between pointer-events-auto">
        {/* Brand */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
              DEVARAJA
            </span>
            <span className="text-xl sm:text-2xl font-black text-white">.</span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-red-200 uppercase font-semibold mt-0.5">
            LET&apos;S BUILD
          </span>
        </div>

        {/* Top Right Resume Button */}
        <div>
          <a
            href="https://drive.google.com/file/d/1wYVS6i6jlZW4tH1Ei0T7WFw3hUrjoRxg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-resume-btn group py-1.5 px-3 sm:py-2 sm:px-4.5"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-105 transition-transform" />
            <span className="font-mono font-bold text-xs sm:text-sm tracking-wider text-white">
              RESUME
            </span>
          </a>
        </div>
      </header>

      {/* LEFT SIDE NAVIGATION BUTTONS & SPREAD CIRCUITS (Desktop only, hidden on mobile to prevent character overlap) */}
      <div className="hidden lg:flex absolute left-6 sm:left-10 md:left-14 lg:left-20 top-[18%] bottom-[20%] w-[240px] sm:w-[260px] md:w-[280px] flex-col justify-between pointer-events-auto z-30">
        {/* 1. ABOUT ME */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => handleCardClick('about')}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-hud-card w-full text-left cursor-pointer"
          >
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-[13px] tracking-wider text-white uppercase group-hover:text-yellow-200 transition-colors">
                ABOUT ME
              </span>
              <span className="text-[11px] text-red-100/90 font-sans tracking-wide leading-tight mt-0.5">
                Get to know more about me
              </span>
            </div>
          </button>
          {/* Angled SVG Connector Line (Angling down-right towards head) */}
          <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-28 xl:w-36 pointer-events-none">
            <svg className="w-full h-12 overflow-visible" viewBox="0 0 140 40" fill="none">
              <path
                d="M 0 10 L 60 10 L 100 28 L 130 28"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="130" cy="28" r="2.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* 2. SKILLS */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => handleCardClick('skills')}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-hud-card w-full text-left cursor-pointer"
          >
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-5 h-5 text-white stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-[13px] tracking-wider text-white uppercase group-hover:text-yellow-200 transition-colors">
                SKILLS
              </span>
              <span className="text-[11px] text-red-100/90 font-sans tracking-wide leading-tight mt-0.5">
                Technologies I work with
              </span>
            </div>
          </button>
          {/* Straight / Angled SVG Connector Line */}
          <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-28 xl:w-36 pointer-events-none">
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 140 20" fill="none">
              <path
                d="M 0 10 L 80 10 L 110 5 L 130 5"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="130" cy="5" r="2.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* 3. CONTACT */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => handleCardClick('contact')}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-hud-card w-full text-left cursor-pointer"
          >
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-[13px] tracking-wider text-white uppercase group-hover:text-yellow-200 transition-colors">
                CONTACT
              </span>
              <span className="text-[11px] text-red-100/90 font-sans tracking-wide leading-tight mt-0.5">
                Let&apos;s connect and build something
              </span>
            </div>
          </button>
          {/* Angled SVG Connector Line (Angling up-right towards shoulder) */}
          <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-28 xl:w-36 pointer-events-none">
            <svg className="w-full h-12 overflow-visible" viewBox="0 0 140 40" fill="none">
              <path
                d="M 0 30 L 60 30 L 100 12 L 130 12"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="130" cy="12" r="2.5" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE NAVIGATION BUTTONS & SPREAD CIRCUITS (Desktop only, hidden on mobile to prevent character overlap) */}
      <div className="hidden lg:flex absolute right-6 sm:right-10 md:right-14 lg:right-20 top-[18%] bottom-[20%] w-[240px] sm:w-[260px] md:w-[280px] flex-col justify-between pointer-events-auto z-30">
        {/* 1. EXPERIENCE */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => handleCardClick('experience')}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-hud-card w-full text-left cursor-pointer"
          >
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5 text-white stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-[13px] tracking-wider text-white uppercase group-hover:text-yellow-200 transition-colors">
                EXPERIENCE
              </span>
              <span className="text-[11px] text-red-100/90 font-sans tracking-wide leading-tight mt-0.5">
                My work experience and journey
              </span>
            </div>
          </button>
          {/* Angled SVG Connector Line (Angling down-left towards head) */}
          <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 w-28 xl:w-36 pointer-events-none">
            <svg className="w-full h-12 overflow-visible" viewBox="0 0 140 40" fill="none">
              <path
                d="M 140 10 L 80 10 L 40 28 L 10 28"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="10" cy="28" r="2.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* 2. PROJECTS */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => handleCardClick('projects')}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-hud-card w-full text-left cursor-pointer"
          >
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Folder className="w-5 h-5 text-white stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-[13px] tracking-wider text-white uppercase group-hover:text-yellow-200 transition-colors">
                PROJECTS
              </span>
              <span className="text-[11px] text-red-100/90 font-sans tracking-wide leading-tight mt-0.5">
                Things I&apos;ve built and explored
              </span>
            </div>
          </button>
          {/* Straight / Angled SVG Connector Line */}
          <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 w-28 xl:w-36 pointer-events-none">
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 140 20" fill="none">
              <path
                d="M 140 10 L 60 10 L 30 5 L 10 5"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="10" cy="5" r="2.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* 3. TESTIMONIALS */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => handleCardClick('testimonials')}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-hud-card w-full text-left cursor-pointer"
          >
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <MessageSquareQuote className="w-5 h-5 text-white stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-[13px] tracking-wider text-white uppercase group-hover:text-yellow-200 transition-colors">
                TESTIMONIALS
              </span>
              <span className="text-[11px] text-red-100/90 font-sans tracking-wide leading-tight mt-0.5">
                Client feedback and reviews
              </span>
            </div>
          </button>
          {/* Angled SVG Connector Line (Angling up-left towards shoulder) */}
          <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 w-28 xl:w-36 pointer-events-none">
            <svg className="w-full h-12 overflow-visible" viewBox="0 0 140 40" fill="none">
              <path
                d="M 140 30 L 80 30 L 40 12 L 10 12"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="10" cy="12" r="2.5" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* BOTTOM RESPONSIVE "FULLSTACK DEVELOPER" BANNER */}
      <footer className="absolute bottom-3 sm:bottom-5 left-0 right-0 z-30 px-3 sm:px-6 flex justify-center items-center pointer-events-auto">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center tracking-tight max-w-full gap-1.5 sm:gap-0">
          {/* FULLSTACK text with responsive techno font */}
          <span className="font-black text-6xl xs:text-7xl sm:text-6xl md:text-7xl lg:text-[86px] text-white font-mono tracking-tighter sm:pr-4 md:pr-5 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] leading-none select-none">
            FULLSTACK
          </span>

          {/* DEVELOPER white box badge with bold black font */}
          <div className="bg-white px-2.5 sm:px-6 py-0.5 sm:py-2 rounded-[3px] shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex items-center justify-center select-none">
            <span className="font-black text-6xl xs:text-7xl sm:text-5xl md:text-6xl lg:text-[74px] text-black font-mono tracking-normal leading-none">
              DEVELOPER
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
