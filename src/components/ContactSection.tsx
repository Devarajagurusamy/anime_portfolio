'use client';

import React, { useState } from 'react';
import CurvedInput from './CurvedInput/CurvedInput';
import VerticalHeading from './VerticalHeading';
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  ArrowRight
} from 'lucide-react';
import { soundFx } from './AudioSynth';

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

  return (
    <section
      id="contact"
      className="relative z-10 w-full min-h-screen bg-transparent py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-center"
    >
      {/* Vertical Section Heading */}
      <VerticalHeading whiteText="CONTACT " redText="ME" />

      <div className="max-w-7xl w-full mx-auto relative z-10 my-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Character */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Portfolio Character */}
            <div className="w-full flex justify-center lg:justify-start">
              <img
                src="/assets/character.png"
                alt="Character Portrait"
                className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] h-auto object-contain select-none pointer-events-none"
                draggable={false}
              />
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

      </div>
    </section>
  );
}
