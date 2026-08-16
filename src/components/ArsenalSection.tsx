'use client';

import React, { useState } from 'react';
import { Code2, Database, Layout, Sparkles, Terminal, Layers, Box, Cpu } from 'lucide-react';
import { soundFx } from './AudioSynth';

interface SkillItem {
  name: string;
  level: string;
  category: 'frontend' | 'backend' | 'creative' | 'tools';
  icon: string;
}

export default function ArsenalSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'creative' | 'tools'>('all');

  const skills: SkillItem[] = [
    { name: 'Next.js 14/15 / React', level: 'Master', category: 'frontend', icon: '⚡' },
    { name: 'TypeScript / JavaScript (ES6+)', level: 'Master', category: 'frontend', icon: '🔷' },
    { name: 'HTML5 Canvas / WebGL', level: 'Expert', category: 'creative', icon: '🎨' },
    { name: 'Tailwind CSS & CSS Modules', level: 'Master', category: 'frontend', icon: '💎' },
    { name: 'Node.js & Express / NestJS', level: 'Expert', category: 'backend', icon: '🟢' },
    { name: 'PostgreSQL / Prisma / Supabase', level: 'Expert', category: 'backend', icon: '🐘' },
    { name: 'GraphQL & RESTful APIs', level: 'Master', category: 'backend', icon: '🔗' },
    { name: 'Three.js / GSAP / Framer', level: 'Expert', category: 'creative', icon: '✨' },
    { name: 'Docker / CI/CD / GitHub Actions', level: 'Proficient', category: 'tools', icon: '🐳' },
    { name: 'Vercel / AWS / Cloudflare', level: 'Expert', category: 'tools', icon: '☁️' },
    { name: 'Web Audio API / Sound Synthesis', level: 'Advanced', category: 'creative', icon: '🔊' },
    { name: 'Git / Agile / Architecture Design', level: 'Master', category: 'tools', icon: '🛠️' },
  ];

  const filteredSkills = activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="arsenal" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <Code2 className="w-3.5 h-3.5 text-[#00f0ff]" />
          <span className="mono-tag text-xs text-[#00f0ff]">TACTICAL // TECH_ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">Abilities</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-xl">
          An arsenal optimized for high performance, dynamic rendering, and immaculate aesthetics.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-black/50 border border-white/10 rounded-xl backdrop-blur-md">
          {(['all', 'frontend', 'backend', 'creative', 'tools'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(tab);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#ff1e42] to-[#9d4edd] text-white font-bold shadow-lg shadow-red-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="glass-panel p-5 flex items-center gap-4 group cursor-default"
            onMouseEnter={() => soundFx.playHover()}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-[#00f0ff] transition-all">
              {skill.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                {skill.name}
              </span>
              <span className="text-[11px] font-mono text-gray-400">
                Tier: <span className="text-gray-200 font-semibold">{skill.level}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
