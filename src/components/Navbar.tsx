'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal, Layers, Code, Mail } from 'lucide-react';
import { soundFx } from './AudioSynth';

export default function Navbar() {
  const [muted, setMuted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const isNowMuted = soundFx.toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      soundFx.playClick();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080c]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
      style={{
        paddingLeft: 'clamp(1rem, 5vw, 3rem)',
        paddingRight: 'clamp(1rem, 5vw, 3rem)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 text-white no-underline group"
          onMouseEnter={() => soundFx.playHover()}
          onClick={() => soundFx.playClick()}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#ff1e42] to-[#9d4edd] p-[1px] flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:shadow-red-500/50 transition-all">
            <div className="w-full h-full bg-[#0d0e15] rounded-[7px] flex items-center justify-center">
              <span className="font-bold text-xs tracking-tighter text-[#ff1e42]">DEV</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wider font-mono text-white flex items-center gap-1.5">
              DEVARAJ <span className="text-[#ff1e42]">/</span> PROTOCOL
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              Creative Engineer
            </span>
          </div>
        </a>

        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-mono text-gray-300 tracking-wide">AVAILABLE FOR PROJECTS</span>
        </div>

        {/* Navigation Links & SFX Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs text-gray-300">
            <a
              href="#about"
              className="hover:text-[#ff1e42] transition-colors py-1 flex items-center gap-1.5"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
            >
              <Terminal className="w-3.5 h-3.5 text-[#ff1e42]" />
              <span>01. ABOUT</span>
            </a>
            <a
              href="#arsenal"
              className="hover:text-[#00f0ff] transition-colors py-1 flex items-center gap-1.5"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
            >
              <Code className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>02. ARSENAL</span>
            </a>
            <a
              href="#projects"
              className="hover:text-[#9d4edd] transition-colors py-1 flex items-center gap-1.5"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
            >
              <Layers className="w-3.5 h-3.5 text-[#9d4edd]" />
              <span>03. PROJECTS</span>
            </a>
            <a
              href="#contact"
              className="hover:text-[#ff1e42] transition-colors py-1 flex items-center gap-1.5"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
            >
              <Mail className="w-3.5 h-3.5 text-[#ff1e42]" />
              <span>04. CONTACT</span>
            </a>
          </nav>

          {/* Sound Synthesizer toggle */}
          <button
            type="button"
            onClick={handleAudioToggle}
            aria-label="Toggle SFX"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
            title={muted ? 'Enable SFX' : 'Mute SFX'}
          >
            {muted ? (
              <>
                <VolumeX className="w-4 h-4 text-red-400" />
                <span className="hidden sm:inline text-[10px] text-red-400">SFX OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline text-[10px] text-emerald-400">SFX ON</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
