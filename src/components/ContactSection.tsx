'use client';

import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { soundFx } from './AudioSynth';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const email = 'devaraj.contact@example.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    soundFx.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <Terminal className="w-3.5 h-3.5 text-[#ff1e42]" />
          <span className="mono-tag text-xs">SUMMON // INITIATE_COMMUNICATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] to-[#00f0ff]">Transmission</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-xl">
          Have an epic project, collaborative quest, or full-time opportunity? Let&apos;s build something extraordinary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Contact Info & Fast Channel */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="glass-panel p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Direct Frequency</h3>
            <p className="text-gray-400 text-xs font-mono mb-6">
              Instant access transmission channel.
            </p>

            <div className="p-4 bg-black/50 rounded-xl border border-white/10 flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-4 h-4 text-[#ff1e42] flex-shrink-0" />
                <span className="text-xs font-mono text-gray-200 truncate">{email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer flex-shrink-0"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                External Coordinates
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-300 hover:text-white transition-all flex items-center justify-center"
                  onMouseEnter={() => soundFx.playHover()}
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-300 hover:text-[#00f0ff] transition-all flex items-center justify-center"
                  onMouseEnter={() => soundFx.playHover()}
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-300 hover:text-[#ff1e42] transition-all flex items-center justify-center"
                  onMouseEnter={() => soundFx.playHover()}
                  title="Twitter / X"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Transmission Form */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8">
          {submitted ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Transmission Broadcasted!</h3>
              <p className="text-gray-400 text-xs font-mono max-w-sm">
                Message successfully routed. I will respond to your frequency shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase tracking-wider">
                  Pilot / Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#ff1e42] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase tracking-wider">
                  Return Frequency / Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#ff1e42] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase tracking-wider">
                  Encrypted Payload / Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project scope, vision, or inquiry..."
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#ff1e42] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center py-3.5 mt-2"
                onMouseEnter={() => soundFx.playHover()}
              >
                <Send className="w-4 h-4" />
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
        <div>
          © {new Date().getFullYear()} DEVARAJ. Handcrafted with Next.js & HTML5 Canvas.
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>
      </footer>
    </section>
  );
}
