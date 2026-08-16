'use client';

import React from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, Code } from 'lucide-react';
import { soundFx } from './AudioSynth';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  status: string;
  link: string;
  github: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Aetheria Anime Streaming & Community Hub',
      tagline: 'High-Performance Media & Interactive Discovery Engine',
      description: 'Engineered a next-gen anime streaming discovery portal with instant fuzzy search, real-time community chat, custom video player with frame scrubbing, and personalized recommendation algorithms.',
      tags: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'WebSockets', 'Prisma'],
      gradient: 'from-[#ff1e42] to-[#ff758c]',
      status: 'PRODUCTION READY',
      link: '#',
      github: '#',
    },
    {
      title: 'CyberCanvas WebGL & Frame Sequence Framework',
      tagline: 'Scroll-Driven Visual Storytelling Engine',
      description: 'An open-source high-framerate canvas animation engine optimized for 120+ FPS canvas rendering, lerp dampening, dynamic aspect-ratio cover calculations, and GPU memory caching.',
      tags: ['HTML5 Canvas', 'TypeScript', 'Web Audio API', 'requestAnimationFrame'],
      gradient: 'from-[#00f0ff] to-[#0072ff]',
      status: 'OPEN SOURCE',
      link: '#',
      github: '#',
    },
    {
      title: 'NeuralBlade AI Visual Novel Generator',
      tagline: 'Procedural Anime Story & Character Generator',
      description: 'An interactive generative AI suite creating real-time character dialogs, branching anime questlines, and dynamic scene backgrounds with speech synthesis.',
      tags: ['React', 'Node.js', 'OpenAI API', 'Vector DB', 'CSS Glass'],
      gradient: 'from-[#9d4edd] to-[#e0aaff]',
      status: 'BETA RELEASE',
      link: '#',
      github: '#',
    },
    {
      title: 'QuantumForge E-Commerce & Merch Universe',
      tagline: 'Interactive 3D Merch Showcase with Seamless Checkout',
      description: 'Full-stack merchandise marketplace with interactive 3D product previews, instant Stripe checkout integration, inventory webhooks, and anime-themed checkout receipts.',
      tags: ['Next.js App Router', 'Stripe API', 'Three.js', 'PostgreSQL'],
      gradient: 'from-[#ff9f1c] to-[#ff4000]',
      status: 'DEPLOYED',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <Layers className="w-3.5 h-3.5 text-[#9d4edd]" />
          <span className="mono-tag text-xs text-[#9d4edd]">DEPLOYMENTS // FEATURED_PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Visionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#ff1e42]">Creations</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-xl">
          Showcasing production web applications, experimental creative coding, and interactive platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            onMouseEnter={() => soundFx.playHover()}
          >
            {/* Top Accent Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}
            />

            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/10 px-2.5 py-1 rounded-md border border-[#00f0ff]/20">
                  {project.status}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    title="View Source Code"
                    onClick={() => soundFx.playClick()}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-[#ff1e42] transition-colors"
                    title="Live Demo"
                    onClick={() => soundFx.playClick()}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#ff1e42] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-4">{project.tagline}</p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
