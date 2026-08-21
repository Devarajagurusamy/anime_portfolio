'use client';

import React, { useState } from 'react';
import LetterGlitch from './LetterGlitch/LetterGlitch';
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Copy,
  CheckCircle2,
  FileDown
} from 'lucide-react';
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

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactEmail = 'devarajaguru2002@gmail.com';
  const contactPhone = '+91 6384139796';

  const handleCopyEmail = () => {
    soundFx.playClick();
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = () => {
    soundFx.playClick();
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(contactPhone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const scrollToTop = () => {
    soundFx.playClick();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-neutral-900/80 bg-[#020202] text-neutral-400">
      
      {/* 1. LetterGlitch Canvas Layer with Cyber Red, Black & White Palette */}
      <div className="absolute inset-0 pointer-events-none opacity-80 select-none">
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

      {/* 2. Ambient Vignette Overlay for High-Contrast Readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/95 via-black/70 to-black/95" />

      {/* Top Accent Gradient Line */}
      <div className="relative z-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e50914]/70 to-transparent" />

      {/* 3. Main Footer Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 space-y-8">
        
        {/* Main Grid: 3 Clean Symmetrical Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Col 1: Identity & Bio */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#e50914] shadow-[0_0_5px_#e50914] animate-bounce" />
              <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                DEVARAJA S G<span className="text-[#e50914]">.</span>
              </span>
              
            </div>
            <p className="text-xs font-sans text-neutral-400 leading-relaxed max-w-sm">
              Full Stack Developer specialized in high-performance production web applications, dynamic APIs, and modern responsive digital platforms.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#e50914] flex-shrink-0" />
              <span>Madurai, TN, India</span>
            </div>
          </div>

          {/* Col 2: Direct Contact Channels (Email & Phone) */}
          <div className="md:col-span-4 flex flex-col space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#e50914] flex items-center gap-2 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e50914]" />
              <span>DIRECT CONTACT</span>
            </div>

            {/* Email Channel */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-[#e50914] flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-white truncate" title={contactEmail}>
                  {contactEmail}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={() => soundFx.playHover()}
                className="px-2 py-1 rounded bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white transition-all flex items-center gap-1 text-[10px] font-mono cursor-pointer active:scale-95 flex-shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Channel */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all">
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-4 h-4 text-[#e50914] flex-shrink-0" />
                <a
                  href={`tel:${contactPhone.replace(/[\s+()\-]/g, '')}`}
                  className="text-xs font-mono font-bold text-white hover:text-[#e50914] transition-colors truncate"
                  title="Call Phone Number"
                >
                  {contactPhone}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                onMouseEnter={() => soundFx.playHover()}
                className="px-2 py-1 rounded bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white transition-all flex items-center gap-1 text-[10px] font-mono cursor-pointer active:scale-95 flex-shrink-0"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Col 3: Resume Download & Return to Top */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-0.5">
              DOCUMENTATION
            </div>
            
            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1wYVS6i6jlZW4tH1Ei0T7WFw3hUrjoRxg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="w-full py-2.5 px-4 rounded-lg bg-[#e50914] hover:bg-red-600 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(229,9,20,0.35)] active:scale-95 cursor-pointer select-none"
              title="Download Full Resume / CV"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* Return To Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              onMouseEnter={() => soundFx.playHover()}
              className="w-full py-2 px-4 rounded-lg border border-white/10 bg-black/60 hover:bg-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-2 text-xs font-mono active:scale-95 group cursor-pointer shadow-sm select-none"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#e50914] group-hover:-translate-y-0.5 transition-transform" />
              <span>RETURN TO TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar: Nav Links + Socials + Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          
          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  if (link.href === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="text-neutral-400 hover:text-white transition-colors uppercase tracking-wider relative group py-0.5 text-[11px]"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e50914] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex items-center gap-4">
            
            <div className="flex items-center gap-2">
              {[
                { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/Devarajagurusamy' },
                { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/devaraja-s-g' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  aria-label={social.name}
                  className="w-7 h-7 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/50 text-neutral-400 hover:text-white flex items-center justify-center transition-all active:scale-95"
                >
                  <social.icon className="w-3.5 h-3.5 text-neutral-300 hover:text-[#e50914] transition-colors" />
                </a>
              ))}
            </div>

            <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
              &copy; {new Date().getFullYear()} DEVARAJA S G
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}
