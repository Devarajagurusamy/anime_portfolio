'use client';

import React, { useState } from 'react';
import CurvedInput from './CurvedInput/CurvedInput';
import {
  Mail,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  MessageSquare,
  Zap,
  ArrowUp,
  Terminal,
  Radio
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

const TwitterIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const contactEmail = 'devarajagurusamy@gmail.com';

  const handleCopyEmail = () => {
    soundFx.playClick();
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleQuickSubmit = (val: string) => {
    if (!val.trim()) return;
    soundFx.playClick();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    soundFx.playClick();
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToTop = () => {
    soundFx.playClick();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 w-full min-h-screen bg-[#000000] py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-between"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10 my-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>// DIRECT COMM LINK & TRANSMISSION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase select-none">
            GET IN <span className="text-[#e50914]">TOUCH</span>
          </h2>

          {/* Split dual-color underline */}
          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="w-8 sm:w-10 h-[3px] bg-[#e50914] rounded-full inline-block" />
            <span className="w-8 sm:w-10 h-[3px] bg-white rounded-full inline-block" />
          </div>

          <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-400 max-w-xl">
            [ SECURE QUANTUM UPLINK // OPEN FOR FREELANCE, ROLES & COLLABORATIONS ]
          </p>
        </div>

        {/* Main Grid (No Box Wrappers) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                <span className="text-white font-bold tracking-wider">STATUS: AVAILABLE FOR NEW MISSIONS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight leading-tight">
                LET&apos;S BUILD THE <span className="text-[#e50914]">FUTURE</span> TOGETHER.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Have an innovative idea, a high-performance web project, or looking for an experienced fullstack engineer to level up your team? Initiate a transmission below.
              </p>
            </div>

            {/* Direct Info List */}
            <div className="space-y-4 pt-2">
              
              {/* Email Copy Item */}
              <div className="flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      Direct Email
                    </span>
                    <span className="text-sm font-mono font-bold text-white truncate">
                      {contactEmail}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-3 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400 font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Timezone */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">LOCATION</span>
                    <span className="text-xs font-mono font-bold text-white">Tamil Nadu, IN</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">TIMEZONE</span>
                    <span className="text-xs font-mono font-bold text-white">IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4">
                <span className="text-[11px] font-mono text-neutral-400 tracking-widest uppercase block mb-3">
                  [ MATRIX FREQUENCIES & SOCIALS ]
                </span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com' },
                    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
                    { name: 'Twitter / X', icon: TwitterIcon, href: 'https://twitter.com' },
                    { name: 'Discord', icon: MessageSquare, href: '#' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      onMouseEnter={() => soundFx.playHover()}
                      className="px-3.5 py-2 rounded bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white flex items-center gap-2 transition-all active:scale-95"
                    >
                      <social.icon className="w-3.5 h-3.5 text-red-500" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Curved Input Transmission Station */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Form Content / State Handling */}
            {isSubmitted ? (
              <div className="py-12 px-4 flex flex-col items-center justify-center text-center my-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-500/50 bg-green-500/10 flex items-center justify-center mb-6 shadow-md animate-bounce">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black font-mono text-white uppercase tracking-tight mb-2">
                  TRANSMISSION DISPATCHED!
                </h3>
                <p className="text-xs sm:text-sm font-sans text-neutral-300 max-w-md mb-6 leading-relaxed">
                  Your message packet has been routed successfully into the personal queue. Expect a response within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-6 py-2.5 rounded bg-[#e50914] hover:bg-red-600 text-white font-mono text-xs tracking-wider uppercase transition-all shadow-md active:scale-95"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <div className="flex flex-col flex-1 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-red-500" />
                      01. INSTANT DIRECT DISPATCH
                    </span>
                    <span className="text-[10px] font-mono text-red-400">
                      CURVED REACT BITS INTERFACE
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans mb-4">
                    Type your email below and click <strong className="text-white">Transmit</strong> for immediate contact initiation.
                  </p>

                  {/* 1. Quick Dispatch CurvedInput */}
                  <div className="w-full flex justify-center py-2">
                    <CurvedInput
                      placeholder="your.email@organization.com"
                      buttonText={isTransmitting ? 'Sending...' : 'Transmit'}
                      type="email"
                      theme="dark"
                      width="100%"
                      bend={20}
                      height={62}
                      cornerRadius={16}
                      fontSize={15}
                      backgroundColor="#0a0a0a"
                      borderColor="#222222"
                      buttonColor="#e50914"
                      buttonTextColor="#ffffff"
                      textColor="#ffffff"
                      placeholderColor="#7c809c"
                      shadowSize="md"
                      shadowColor="#000000"
                      onSubmit={handleQuickSubmit}
                    />
                  </div>
                </div>

                <div className="relative flex items-center justify-center my-2">
                  <div className="border-t border-neutral-800 w-full" />
                  <span className="bg-[#000000] px-3 font-mono text-[10px] text-neutral-500 uppercase tracking-widest absolute">
                    OR COMPLETE DETAILED INQUIRY
                  </span>
                </div>

                {/* 2. Detailed Curved Form Fields */}
                <div className="space-y-4">
                  {/* Name Curved Input */}
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                      02. IDENTIFIER / NAME
                    </label>
                    <CurvedInput
                      placeholder="Your Name / Call-Sign"
                      type="text"
                      theme="dark"
                      width="100%"
                      bend={-12}
                      height={54}
                      cornerRadius={14}
                      fontSize={14}
                      showButton={false}
                      backgroundColor="#0a0a0a"
                      borderColor="#222222"
                      textColor="#ffffff"
                      placeholderColor="#686c87"
                      value={formData.name}
                      onChange={v => setFormData(prev => ({ ...prev, name: v }))}
                    />
                  </div>

                  {/* Message Curved Input */}
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                      03. TRANSMISSION PAYLOAD / MESSAGE
                    </label>
                    <CurvedInput
                      placeholder="Tell me about your project, timeline, or query..."
                      type="text"
                      theme="dark"
                      width="100%"
                      bend={16}
                      height={58}
                      cornerRadius={14}
                      fontSize={14}
                      buttonText="Send Query"
                      backgroundColor="#0a0a0a"
                      borderColor="#222222"
                      buttonColor="#e50914"
                      buttonTextColor="#ffffff"
                      textColor="#ffffff"
                      placeholderColor="#686c87"
                      value={formData.message}
                      onChange={v => setFormData(prev => ({ ...prev, message: v }))}
                      onSubmit={() => handleQuickSubmit(formData.message || formData.name)}
                    />
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-wider">DEVARAJA.</span>
            <span>&copy; {new Date().getFullYear()} &bull; ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Back to Top button */}
            <button
              type="button"
              onClick={scrollToTop}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-white transition-all flex items-center gap-1.5 text-xs font-mono active:scale-95 group cursor-pointer"
              title="Return to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-red-500 group-hover:-translate-y-0.5 transition-transform" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
