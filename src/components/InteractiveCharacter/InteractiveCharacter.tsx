'use client';

import React, { useEffect, useRef, useState } from 'react';
import './InteractiveCharacter.css';

type Direction = 'center' | 'left' | 'right' | 'up' | 'down';

interface InteractiveCharacterProps {
  className?: string;
  enableTracking?: boolean;
}

export default function InteractiveCharacter({
  className = '',
  enableTracking = true
}: InteractiveCharacterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Group motion refs
  const headGroupRef = useRef<HTMLDivElement | null>(null);
  const handGroupRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLImageElement | null>(null);
  const collarRef = useRef<HTMLImageElement | null>(null);

  // State for active directional sprite
  const [activeDirection, setActiveDirection] = useState<Direction>('center');
  const activeDirectionRef = useRef<Direction>('center');

  // Animation values
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!enableTracking) return;

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.3; // Focus center at eye level

      // Relative offset normalized (-1 to 1)
      const rawX = (e.clientX - centerX) / (window.innerWidth * 0.4);
      const rawY = (e.clientY - centerY) / (window.innerHeight * 0.4);

      const clampedX = Math.max(-1.2, Math.min(1.2, rawX));
      const clampedY = Math.max(-1.2, Math.min(1.2, rawY));

      targetX.current = clampedX;
      targetY.current = clampedY;

      // Determine active gaze direction based on dominant cursor quadrant
      let nextDir: Direction = 'center';
      const absX = Math.abs(clampedX);
      const absY = Math.abs(clampedY);

      if (absX < 0.22 && absY < 0.22) {
        nextDir = 'center';
      } else if (absX > absY) {
        nextDir = clampedX < 0 ? 'left' : 'right';
      } else {
        nextDir = clampedY < 0 ? 'up' : 'down';
      }

      if (nextDir !== activeDirectionRef.current) {
        activeDirectionRef.current = nextDir;
        setActiveDirection(nextDir);
      }
    };

    const handleMouseLeave = () => {
      targetX.current = 0;
      targetY.current = 0;
      activeDirectionRef.current = 'center';
      setActiveDirection('center');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;

    const animate = () => {
      timeRef.current += 0.03;
      const breath = Math.sin(timeRef.current) * 0.6;

      // Smooth 60fps lerp
      const ease = 0.08;
      currentX.current += (targetX.current - currentX.current) * ease;
      currentY.current += (targetY.current - currentY.current) * ease;

      const cx = currentX.current;
      const cy = currentY.current;

      // 1. Body & Collar Parallax (Subtle breathing + micro sway)
      if (bodyRef.current) {
        const bx = cx * 1.5;
        const by = cy * 1.0 + breath * 0.3;
        bodyRef.current.style.transform = `translate3d(${bx.toFixed(2)}px, ${by.toFixed(2)}px, 0)`;
      }
      if (collarRef.current) {
        const cxPos = cx * 1.5;
        const cyPos = cy * 1.0 + breath * 0.3;
        collarRef.current.style.transform = `translate3d(${cxPos.toFixed(2)}px, ${cyPos.toFixed(2)}px, 0)`;
      }

      // 2. Head Group Motion (Continuous translation & 3D tilt across sprite transitions)
      if (headGroupRef.current) {
        const hx = cx * 7.0;
        const hy = cy * 5.0 + breath * 0.6;
        const hRot = cx * 3.0;
        headGroupRef.current.style.transformOrigin = '50% 70%';
        headGroupRef.current.style.transform = `translate3d(${hx.toFixed(2)}px, ${hy.toFixed(2)}px, 0) rotate(${hRot.toFixed(2)}deg)`;
      }

      // 3. Hand Group Motion (Wrist rotation + translation)
      if (handGroupRef.current) {
        const handX = cx * 6.0;
        const handY = cy * 4.0 + breath * 0.5;
        const handRot = cx * 5.0;
        handGroupRef.current.style.transformOrigin = '15% 90%';
        handGroupRef.current.style.transform = `translate3d(${handX.toFixed(2)}px, ${handY.toFixed(2)}px, 0) rotate(${handRot.toFixed(2)}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enableTracking]);

  const directions: Direction[] = ['center', 'left', 'right', 'up', 'down'];

  return (
    <div
      ref={containerRef}
      className={`interactive-character-container ${className}`}
      aria-label="Interactive Character"
    >
      {/* 1. BODY BASE LAYER (Vest, Shirt, Sleeves) */}
      <img
        ref={bodyRef}
        src="/character/body.png"
        alt="Character Body"
        className="character-sprite-layer z-10"
        draggable={false}
      />

      {/* 2. MULTI-DIRECTIONAL HEAD LAYER GROUP */}
      <div ref={headGroupRef} className="character-motion-group z-20">
        {directions.map(dir => (
          <img
            key={dir}
            src={`/character/head-${dir}.png`}
            alt={`Head looking ${dir}`}
            className="character-sprite-layer"
            style={{
              opacity: activeDirection === dir ? 1 : 0
            }}
            draggable={false}
          />
        ))}
      </div>

      {/* 3. FRONT SHIRT COLLAR OVERLAY (Tucks neck naturally inside collar) */}
      <img
        ref={collarRef}
        src="/character/collar-overlay.png"
        alt="Shirt Collar"
        className="character-sprite-layer z-25"
        draggable={false}
      />

      {/* 4. MULTI-DIRECTIONAL THUMBS-UP HAND LAYER GROUP */}
      <div ref={handGroupRef} className="character-motion-group z-30">
        {directions.map(dir => (
          <img
            key={dir}
            src={`/character/hand-${dir}.png`}
            alt={`Hand pointing ${dir}`}
            className="character-sprite-layer"
            style={{
              opacity: activeDirection === dir ? 1 : 0
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
