'use client';

import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text' | 'grab'>('default');
  const [isClicking, setIsClicking] = useState(false);

  const arrowRef = useRef<HTMLDivElement | null>(null);
  const textBeamRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
      }

      // Exact zero-offset positioning at coordinate (0, 0)
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      if (textBeamRef.current) {
        textBeamRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Text input detection
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.closest('input, textarea, [contenteditable="true"]')
      ) {
        setCursorType('text');
        return;
      }

      // Interactive / Clickable detection
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('cyber-hud-card') ||
        target.classList.contains('cyber-resume-btn') ||
        target.classList.contains('btn-primary') ||
        target.classList.contains('btn-secondary') ||
        target.closest('button, a, [role="button"], .cursor-pointer, .cyber-hud-card, .cyber-resume-btn, .btn-primary, .btn-secondary, [data-cursor="pointer"]')
      ) {
        setCursorType('hover');
        return;
      }

      setCursorType('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!enabled) return null;

  const isText = cursorType === 'text';
  const isHover = cursorType === 'hover';
  const hoverClass = isHover ? 'cursor-hover' : '';
  const activeClass = isClicking ? 'cursor-active' : '';

  return (
    <div
      className="custom-cursor-container"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Flat Solid White Text I-Beam for Form Inputs */}
      {isText ? (
        <div ref={textBeamRef} className="white-text-beam" />
      ) : (
        /* Sharp Solid White Pointer Arrow matching Image Reference */
        <div
          ref={arrowRef}
          className={`white-cursor-wrapper ${hoverClass} ${activeClass}`}
        >
          <svg
            className="white-cursor-svg"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 0 
                 L 0 21 
                 L 6 16 
                 L 16.5 16.5 
                 Z"
              fill="#FFFFFF"
              stroke="none"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
