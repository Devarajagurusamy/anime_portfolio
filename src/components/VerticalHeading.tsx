'use client';

import React from 'react';
import { motion } from 'motion/react';

interface VerticalHeadingProps {
  whiteText: string;
  redText?: string;
  className?: string;
  align?: 'left' | 'right';
}

export default function VerticalHeading({
  whiteText,
  redText,
  className = '',
  align = 'left'
}: VerticalHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`hidden md:flex absolute ${align === 'left' ? 'left-3 sm:left-6 md:left-8' : 'right-3 sm:right-6 md:right-8'} top-1/2 -translate-y-1/2 z-20 select-none pointer-events-none flex-col items-center gap-4 ${className}`}
      aria-hidden="true"
    >
      {/* Top Red Accent Spine */}
      <span className="w-[1.5px] h-8 sm:h-12 bg-[#e50914]" />

      {/* Single Straight Vertical Line Heading (Top-to-Bottom, White & Red combo) */}
      <div className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-mono text-xs sm:text-sm font-black tracking-[0.45em] uppercase leading-none">
        <span className="text-white">{whiteText}</span>
        {redText && <span className="text-[#e50914]">{redText}</span>}
      </div>

      {/* Bottom Neutral Accent Spine */}
      <span className="w-[1.5px] h-8 sm:h-12 bg-neutral-800" />
    </motion.div>
  );
}
