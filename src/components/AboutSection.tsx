'use client';

import React from 'react';
import { Shield, Zap, Terminal, Trophy, Cpu, Activity } from 'lucide-react';
import { soundFx } from './AudioSynth';

export default function AboutSection() {
  const stats = [
    { label: 'Frontend Mastery & React/Next.js', value: 96, color: 'from-[#ff1e42] to-[#ff5c8a]' },
    { label: 'Backend Systems & API Architecture', value: 92, color: 'from-[#00f0ff] to-[#00a8ff]' },
    { label: 'Canvas, WebGL & Micro-Animations', value: 94, color: 'from-[#9d4edd] to-[#c77dff]' },
    { label: 'Performance Tuning & SEO Strategy', value: 95, color: 'from-[#ffbe0b] to-[#fb5607]' },
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <Terminal className="w-3.5 h-3.5 text-[#ff1e42]" />
          <span className="mono-tag text-xs">SYSTEM // PROFILE_OVERVIEW</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Protagonist <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] to-[#ff758c]">Lore & Stats</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl">
          Blending the aesthetics of anime storytelling with rigorous full-stack software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Character RPG Card */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-8 flex flex-col justify-between border-red-500/20 scanlines relative overflow-hidden">
          <div className="relative z-10">
            {/* Header / Class */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[11px] font-mono text-[#ff1e42] tracking-widest uppercase">CLASS SPEC</span>
                <h3 className="text-xl font-bold text-white font-mono">Full-Stack Sorcerer</h3>
              </div>
              <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-lg text-right">
                <span className="text-[10px] text-gray-400 block font-mono">RANK</span>
                <span className="text-sm font-bold text-[#ff1e42] font-mono">LVL. 99</span>
              </div>
            </div>

            {/* Core Stats */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> VITALITY / CODING STAMINA
                </span>
                <span className="text-emerald-400 font-bold">100% [OPTIMAL]</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-full animate-pulse" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                <span className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#00f0ff]" /> MANA / PROBLEM SOLVING
                </span>
                <span className="text-[#00f0ff] font-bold">98.4 / 100</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-[#00f0ff] rounded-full w-[98%]" />
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                <Shield className="w-4 h-4 text-[#ff1e42] mb-1.5" />
                <div className="text-lg font-bold text-white font-mono">4+ Years</div>
                <div className="text-[11px] text-gray-400">Engineering Exp</div>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                <Trophy className="w-4 h-4 text-[#9d4edd] mb-1.5" />
                <div className="text-lg font-bold text-white font-mono">30+ Shipped</div>
                <div className="text-[11px] text-gray-400">Web Experiences</div>
              </div>
            </div>
          </div>
        </div>

        {/* Story & Skill Bars */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="glass-panel p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#ff1e42]" />
              The Mission Philosophy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-sans">
              I specialize in creating next-generation web platforms where performance, architectural integrity, and visual immersion meet. Whether building complex distributed backend services or cutting-edge interactive canvas experiences, every line of code is written with precision.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Inspired by cyberpunk narratives and fluid animation dynamics, I push web standards beyond static pages into memorable interactive journeys.
            </p>
          </div>

          {/* Proficiency Bars */}
          <div className="glass-panel p-6 sm:p-8 space-y-4">
            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
              Combat Proficiency Metrics
            </h4>
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-200">{stat.label}</span>
                  <span className="text-white font-bold">{stat.value}%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
