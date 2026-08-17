'use client';

import React, { useState } from 'react';
import CurvedInput from './CurvedInput/CurvedInput';
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  MessageSquare,
  ArrowUp,
  ArrowRight
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

// SVG Chip Icons for CurvedInput
const UserChip = (
  <g transform="translate(0, 0)">
    <rect x="-15" y="-11" width="30" height="22" rx="5" fill="#e50914" />
    <circle cx="0" cy="-2.5" r="3" fill="#ffffff" />
    <path d="M -5 6 C -5 2.5 5 2.5 5 6 Z" fill="#ffffff" />
  </g>
);

const MailChip = (
  <g transform="translate(0, 0)">
    <rect x="-15" y="-11" width="30" height="22" rx="5" fill="#e50914" />
    <rect x="-6" y="-4" width="12" height="8.5" rx="1.2" fill="none" stroke="#ffffff" strokeWidth="1.2" />
    <path d="M -6 -3.5 L 0 1 L 6 -3.5" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

const PhoneChip = (
  <g transform="translate(0, 0)">
    <rect x="-15" y="-11" width="30" height="22" rx="5" fill="#e50914" />
    <path d="M -3.5 -4.5 C -4.8 -3.2 -4.8 2.8 2.8 4.2 C 3.6 4.2 4 3.4 3.6 2.6 L 2.8 1.8 C 2.4 1.4 2 1.4 1.6 1.8 L 0.8 2.6 C -0.8 1.8 -1.6 1 -2.4 -0.6 L -1.6 -1.4 C -1.2 -1.8 -1.2 -2.2 -1.6 -2.6 L -2.4 -3.4 C -3.2 -4.2 -3.6 -3.8 -3.5 -4.5 Z" fill="#ffffff" />
  </g>
);

const MessageChip = (
  <g transform="translate(0, 0)">
    <rect x="-15" y="-11" width="30" height="22" rx="5" fill="#e50914" />
    <path d="M -5 -4 L 5 -4 C 6 -4 6 -3 6 -2 L 6 2 C 6 3 5 3 4 3 L 1 3 L -2.5 5.5 L -2.5 3 L -5 3 C -6 3 -6 2 -6 1 L -6 -3 C -6 -4 -5 -4 -5 -4 Z" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" />
  </g>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

  const handleSubmit = (e?: React.FormEvent) => {
    if (e?.preventDefault) e.preventDefault();
    if (!formData.name && !formData.email && !formData.message) return;
    soundFx.playClick();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    soundFx.playClick();
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
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
        
        {/* Main Grid */}
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
                Have an innovative idea, a high-performance web project, or looking for an experienced fullstack engineer to level up your team? Fill out the form or reach out directly.
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

          {/* Right Column: Redesigned 4-Field Curved Input Form */}
          <div className="lg:col-span-7 flex flex-col">
            
            {isSubmitted ? (
              <div className="py-12 px-4 flex flex-col items-center justify-center text-center my-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-500/50 bg-green-500/10 flex items-center justify-center mb-6 shadow-md animate-bounce">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black font-mono text-white uppercase tracking-tight mb-2">
                  TRANSMISSION DISPATCHED!
                </h3>
                <p className="text-xs sm:text-sm font-sans text-neutral-300 max-w-md mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name || 'Friend'}</strong>. Your message has been received and will be reviewed within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-6 py-2.5 rounded bg-[#e50914] hover:bg-red-600 text-white font-mono text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                
                {/* 1. Name Field */}
                <div>
                  <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    NAME
                  </label>
                  <CurvedInput
                    placeholder="Enter your name"
                    type="text"
                    theme="dark"
                    width="100%"
                    bend={8}
                    height={56}
                    cornerRadius={14}
                    fontSize={14}
                    showButton={false}
                    shadowSize="none"
                    icon={UserChip}
                    backgroundColor="#0a0a0a"
                    borderColor="#222222"
                    buttonColor="#e50914"
                    iconColor="#e50914"
                    textColor="#ffffff"
                    placeholderColor="#686c87"
                    value={formData.name}
                    onChange={v => setFormData(prev => ({ ...prev, name: v }))}
                  />
                </div>

                {/* 2. Email ID Field */}
                <div>
                  <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    EMAIL ID
                  </label>
                  <CurvedInput
                    placeholder="Enter your email address"
                    type="email"
                    theme="dark"
                    width="100%"
                    bend={8}
                    height={56}
                    cornerRadius={14}
                    fontSize={14}
                    showButton={false}
                    shadowSize="none"
                    icon={MailChip}
                    backgroundColor="#0a0a0a"
                    borderColor="#222222"
                    buttonColor="#e50914"
                    iconColor="#e50914"
                    textColor="#ffffff"
                    placeholderColor="#686c87"
                    value={formData.email}
                    onChange={v => setFormData(prev => ({ ...prev, email: v }))}
                  />
                </div>

                {/* 3. Phone Number (Optional) Field */}
                <div>
                  <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    PHONE NUMBER (OPTIONAL)
                  </label>
                  <CurvedInput
                    placeholder="Enter your phone number (optional)"
                    type="tel"
                    theme="dark"
                    width="100%"
                    bend={8}
                    height={56}
                    cornerRadius={14}
                    fontSize={14}
                    showButton={false}
                    shadowSize="none"
                    icon={PhoneChip}
                    backgroundColor="#0a0a0a"
                    borderColor="#222222"
                    buttonColor="#e50914"
                    iconColor="#e50914"
                    textColor="#ffffff"
                    placeholderColor="#686c87"
                    value={formData.phone}
                    onChange={v => setFormData(prev => ({ ...prev, phone: v }))}
                  />
                </div>

                {/* 4. Message Field */}
                <div>
                  <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    MESSAGE
                  </label>
                  <CurvedInput
                    placeholder="Tell me about your project, idea, or query..."
                    type="text"
                    theme="dark"
                    width="100%"
                    bend={12}
                    height={58}
                    cornerRadius={14}
                    fontSize={14}
                    showButton={false}
                    shadowSize="none"
                    icon={MessageChip}
                    backgroundColor="#0a0a0a"
                    borderColor="#222222"
                    buttonColor="#e50914"
                    iconColor="#e50914"
                    textColor="#ffffff"
                    placeholderColor="#686c87"
                    value={formData.message}
                    onChange={v => setFormData(prev => ({ ...prev, message: v }))}
                    onSubmit={() => handleSubmit()}
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    onMouseEnter={() => soundFx.playHover()}
                    disabled={isTransmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#e50914] hover:bg-red-600 disabled:opacity-50 text-white font-mono text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-md"
                  >
                    {isTransmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
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
