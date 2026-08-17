'use client';

import React from 'react';
import LetterGlitch from './LetterGlitch/LetterGlitch';
import { ArrowUp } from 'lucide-react';
import { soundFx } from './AudioSynth';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27z" />
  </svg>
);

const TwitterIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-neutral-900 bg-[#020202] text-neutral-400">
      
      {/* 1. LetterGlitch Canvas Layer with Cyber Red, Black & White Palette */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        <LetterGlitch
          glitchColors={[
            '#e50914',
            '#b20710',
            '#ff3b47',
            '#ffffff',
            '#cfcfcf',
            '#737373',
            '#2e2e2e'
          ]}
          glitchSpeed={55}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          characters="01DEVARAJA9876543210!@#$%^&*()_+-=[]{}|;:,.<>?/NETFLIX_ANIME_CYBER_MATRIX_ONLINE"
        />
      </div>

      {/* 2. Soft Ambient Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-black/85" />

      {/* Top Accent Line */}
      <div className="relative z-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e50914]/60 to-transparent" />

      {/* 3. Footer Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        
        {/* Upper Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center justify-between pb-10 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e50914] shadow-[0_0_10px_#e50914] animate-pulse" />
              <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                DEVARAJA<span className="text-[#e50914]">.</span>
              </span>
              <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-neutral-300">
                SYSTEM ONLINE
              </span>
            </div>
            <p className="text-xs font-sans text-neutral-400 max-w-sm leading-relaxed">
              Full-Stack Developer & Creative Engineer specialized in high-performance web applications, 3D interactive graphics, and anime-inspired digital experiences.
            </p>
          </div>

          {/* Center Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="text-neutral-400 hover:text-white transition-colors duration-200 uppercase tracking-wider relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e50914] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action: Scroll To Top */}
          <div className="md:col-span-3 flex md:justify-end items-center gap-3">
            <button
              type="button"
              onClick={scrollToTop}
              onMouseEnter={() => soundFx.playHover()}
              className="px-4 py-2.5 rounded-lg border border-white/10 bg-black/75 hover:bg-[#e50914]/25 hover:border-[#e50914]/60 text-white transition-all flex items-center gap-2 text-xs font-mono active:scale-95 group cursor-pointer shadow-sm backdrop-blur-md"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#e50914] group-hover:-translate-y-1 transition-transform" />
              <span className="tracking-wider font-bold">RETURN TO TOP</span>
            </button>
          </div>

        </div>

        {/* Lower Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          
          <div className="flex items-center gap-4 text-[11px]">
            <span>&copy; {new Date().getFullYear()} DEVARAJA GURUSAMY</span>
            <span>&bull;</span>
            <span className="text-neutral-400">DESIGNED & CRAFTED WITH PASSION</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { name: 'GitHub', icon: GithubIcon, href: 'https://github.com' },
              { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
              { name: 'Twitter / X', icon: TwitterIcon, href: 'https://twitter.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                aria-label={social.name}
                className="w-8 h-8 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/50 text-neutral-400 hover:text-white flex items-center justify-center transition-all active:scale-95"
              >
                <social.icon className="w-3.5 h-3.5 text-neutral-300 hover:text-[#e50914] transition-colors" />
              </a>
            ))}
          </div>

        </div>

      </div>

    </footer>
  );
}
