'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import HeroHUD from './HeroHUD';

export default function HeroCanvas() {
  const TOTAL_FRAMES = 180;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animationFrameIdRef = useRef<number | null>(null);

  // Helper to format frame path (001 to 180)
  const getFrameUrl = (index: number) => {
    const padded = String(index + 1).padStart(3, '0');
    return `/scrollingImages/ezgif-frame-${padded}.jpg`;
  };

  // Render a specific frame with object-fit: cover behavior
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      // Slight vertical adjustment for early frames so character head has ample top breathing room
      offsetY = (canvasHeight - drawHeight) / 2;
      if (frameIndex < 10) {
        offsetY = Math.max(offsetY, (canvasHeight - drawHeight) * 0.4);
      }
    } else {
      drawWidth = canvasHeight * imgRatio;
      drawHeight = canvasHeight;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    // Match frame-001 crimson red backdrop
    ctx.fillStyle = '#b80a0a';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // Handle Resize to match viewport and devicePixelRatio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    const frameToDraw = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentFrameRef.current))
    );
    renderFrame(frameToDraw);
  }, [TOTAL_FRAMES, renderFrame]);

  // Handle Scroll calculation based on whole page scroll
  const handleScroll = useCallback(() => {
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollMax <= 0) return;

    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const progress = Math.min(1, Math.max(0, scrollTop / scrollMax));

    setScrollProgress(progress);
    targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
  }, [TOTAL_FRAMES]);

  // Animation Loop with lerp dampening for ultra-smooth scrubbing
  useEffect(() => {
    const animate = () => {
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * 0.12;
      const frameToDraw = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      if (frameToDraw !== lastDrawnFrameRef.current) {
        renderFrame(frameToDraw);
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [TOTAL_FRAMES, renderFrame]);

  // Preload Images
  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        loaded++;
        const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
        setLoadProgress(pct);

        if (i === 0 && lastDrawnFrameRef.current === -1) {
          handleResize();
          renderFrame(0);
        }

        if (loaded >= TOTAL_FRAMES) {
          setTimeout(() => {
            setIsLoaded(true);
            handleResize();
          }, 200);
        }
      };

      img.onerror = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
      };

      imgs.push(img);
    }

    imagesRef.current = imgs;

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [TOTAL_FRAMES, handleResize, handleScroll, renderFrame]);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-50 bg-[#ba0c0c] flex flex-col items-center justify-center transition-all duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-64 flex flex-col items-center gap-3">
          <span className="font-black text-xl tracking-wider text-white font-mono">
            DEVARAJA .
          </span>
          <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden p-[1px]">
            <div
              className="h-full bg-white rounded-full transition-all duration-150"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-red-100 tracking-widest uppercase">
            Synchronizing HUD {loadProgress}%
          </span>
        </div>
      </div>

      {/* Fixed Fullscreen Canvas */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0 bg-[#ba0c0c]">
        <canvas
          ref={canvasRef}
          id="hero-canvas"
          className="w-full h-full block"
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>

      {/* Pixel-Perfect Cyber Hero HUD Overlay */}
      <HeroHUD scrollProgress={scrollProgress} />
    </>
  );
}
