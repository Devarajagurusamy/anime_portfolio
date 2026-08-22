'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DomeGallery, { DomeImageItem } from './DomeGallery/DomeGallery';
import VerticalHeading from './VerticalHeading';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { soundFx } from './AudioSynth';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '01',
    name: 'Ananya Sundaram',
    role: 'Co-Founder & Creative Director',
    company: 'Curcuma Caesia',
    image: '/assets/clients/client_01.png',
    quote:
      'Devaraja completely transformed our brand’s online presence. His attention to detail, modern design sensibility, and fluid user interactions made our e-commerce platform an instant success.',
    rating: 5
  },
  {
    id: '02',
    name: 'Meenakshi Natarajan',
    role: 'Managing Director',
    company: 'HR Consult M',
    image: '/assets/clients/client_02.png',
    quote:
      'Working with Devaraja on our HR platform was a seamless experience. He delivered a robust, scalable system with dynamic admin panels well ahead of our launch deadline.',
    rating: 5
  },
  {
    id: '03',
    name: 'Dr. Senthil Murugan',
    role: 'Founder & CEO',
    company: 'Retail POS Systems',
    image: '/assets/clients/client_03.png',
    quote:
      'Devaraja built our POS application with exceptional speed and architectural precision. The database queries and real-time inventory synchronization are rock-solid.',
    rating: 5
  },
  {
    id: '04',
    name: 'K. Ramanathan',
    role: 'Managing Director',
    company: 'Heritage Naturals',
    image: '/assets/clients/client_04.png',
    quote:
      'A true full-stack professional who understands business goals. His clean code, responsive layouts, and reliable API integrations elevated our digital operations.',
    rating: 5
  },
  {
    id: '05',
    name: 'Lakshmi Saravanan',
    role: 'Principal Consultant',
    company: 'Global HR Advisory',
    image: '/assets/clients/client_05.png',
    quote:
      'Devaraja’s communication and problem-solving skills are outstanding. He converted complex workflow requirements into intuitive, elegant dashboard experiences.',
    rating: 5
  },
  {
    id: '06',
    name: 'Deepika Chandrasekar',
    role: 'Lead Product Manager',
    company: 'E-Commerce Hub',
    image: '/assets/clients/client_06.png',
    quote:
      'From authentication to product CRUD and cart checkout, Devaraja delivered high-performance code with zero bugs. His work ethic and technical expertise are top notch.',
    rating: 5
  },
  {
    id: '07',
    name: 'V. Muthukumarasamy',
    role: 'Chairman',
    company: 'Sri Krishna Logistics',
    image: '/assets/clients/client_07.png',
    quote:
      'Devaraja delivered our enterprise tracking platform with great stability and performance. He is dedicated, trustworthy, and extremely skilled in modern web stacks.',
    rating: 5
  },
  {
    id: '08',
    name: 'Radha Sundaram',
    role: 'Founder & Director',
    company: 'Wellness Coaching Hub',
    image: '/assets/clients/client_08.png',
    quote:
      'Our wellness coaching platform received overwhelming praise from our clients. Devaraja’s responsive design and booking workflows work flawlessly across mobile and desktop.',
    rating: 5
  },
  {
    id: '09',
    name: 'Keerthana Vijayaraghavan',
    role: 'VP of Growth',
    company: 'OmniStore Digital',
    image: '/assets/clients/client_09.png',
    quote:
      'Devaraja’s performance optimization increased our site speed drastically. His expertise in Next.js and Tailwind CSS created a visually stunning shopping experience.',
    rating: 5
  },
  {
    id: '10',
    name: 'Aravind Subramanian',
    role: 'Co-Founder & CTO',
    company: 'CloudFlow Systems',
    image: '/assets/clients/client_10.png',
    quote:
      'Devaraja has a rare knack for engineering clean, maintainable code with cutting-edge UI aesthetics. Collaborating with him remotely was an absolute breeze.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isNearViewport, setIsNearViewport] = useState(true);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
        }
      },
      { rootMargin: '800px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    soundFx.playClick();
    setDirection(-1);
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    soundFx.playClick();
    setDirection(1);
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    soundFx.playClick();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        setIsOpen(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const domeImages: DomeImageItem[] = TESTIMONIALS.map(t => ({
    src: t.image,
    alt: `${t.name} // ${t.role}`
  }));

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative z-10 w-full min-h-screen bg-transparent py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-center items-center select-none"
    >
      {/* Vertical Section Heading */}
      <VerticalHeading whiteText="TESTI" redText="MONIALS" />

      <div className="max-w-7xl w-full mx-auto relative z-10 flex items-center justify-center min-h-[580px] sm:min-h-[640px]">
        
        {/* 1. 3D Dome Gallery Background with Continuous Slight Rotation & Smooth Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto"
        >
          {isNearViewport && (
            <DomeGallery
              images={domeImages}
              fit={0.55}
              minRadius={520}
              maxRadius={900}
              segments={24}
              dragSensitivity={18}
              dragDampening={1.8}
              overlayBlurColor="#000000"
              grayscale={false}
              autoRotate={true}
              autoRotateSpeed={0.08}
              onSelect={idx => {
                soundFx.playClick();
                setDirection(idx >= currentIndex ? 1 : -1);
                setCurrentIndex(idx);
                setIsOpen(true);
              }}
            />
          )}
        </motion.div>

        {/* 2. Interactive Testimonial Card Modal (Appears Only When A Picture Is Clicked) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            >
              <div
                onClick={e => e.stopPropagation()}
                className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-10 w-full max-w-2xl"
              >
                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2 sm:p-3 text-white/70 hover:text-white transition-all transform hover:scale-125 active:scale-90 cursor-pointer select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] flex-shrink-0"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9 stroke-[2]" />
                </button>

                {/* Testimonial Card */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 15 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-[340px] sm:max-w-[370px] md:max-w-[390px] rounded-[28px] sm:rounded-[32px] border border-[#e50914] bg-[#0a0a0e]/95 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(229,9,20,0.25)] overflow-hidden flex flex-col"
                >
                  {/* Close 'X' Button on top-right of Card */}
                  <button
                    type="button"
                    onClick={handleClose}
                    onMouseEnter={() => soundFx.playHover()}
                    className="absolute top-3.5 right-3.5 z-30 p-1.5 rounded-full bg-black/60 hover:bg-[#e50914] text-white/80 hover:text-white transition-all cursor-pointer border border-white/10"
                    title="Close"
                  >
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, x: direction * 35 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -35 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full flex flex-col"
                    >
                      {/* Upper Photo with Full Framing & Gentle Bottom Fade */}
                      <div className="relative w-full h-[260px] sm:h-[290px] overflow-hidden bg-[#08080c]">
                        <img
                          src={current.image}
                          alt={current.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-[center_20%] pointer-events-none"
                          draggable={false}
                        />
                        {/* Soft Bottom Fade into Card Body */}
                        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/60 to-transparent pointer-events-none" />
                      </div>

                      {/* Lower Content Body */}
                      <div className="px-6 pb-6 pt-0 flex flex-col items-start text-left relative z-10 -mt-2">
                        
                        {/* Red Quote Symbol */}
                        <div className="text-[#e50914] mb-2 select-none">
                          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        {/* Testimonial Quote Text */}
                        <p className="text-neutral-200 text-xs sm:text-[13.5px] leading-relaxed font-sans font-normal mb-3 min-h-[50px]">
                          {current.quote}
                        </p>

                        {/* Subtle Thin Divider */}
                        <div className="w-6 h-[1px] bg-neutral-700/80 mb-3" />

                        {/* Author Name */}
                        <span className="text-[#e50914] text-xs sm:text-[13px] font-sans font-semibold tracking-wide block">
                          {current.name}
                        </span>

                        {/* Role & Company */}
                        <span className="text-neutral-400 text-[11px] font-sans block mt-0.5">
                          {current.role}, {current.company}
                        </span>

                        {/* 5 Red Stars */}
                        <div className="flex items-center gap-1 mt-2.5">
                          {[...Array(current.rating)].map((_, idx) => (
                            <svg
                              key={idx}
                              className="w-3.5 h-3.5 fill-[#e50914] text-[#e50914]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2 sm:p-3 text-white/70 hover:text-white transition-all transform hover:scale-125 active:scale-90 cursor-pointer select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] flex-shrink-0"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9 stroke-[2]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
