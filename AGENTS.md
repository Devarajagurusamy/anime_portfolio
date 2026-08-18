<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Anime Cyberpunk Portfolio — Agent Reference Guide

This document is the definitive technical and architectural reference for the **Anime Cyberpunk Interactive Portfolio** built for **Devaraj**.

---

## 1. Project Overview & Aesthetic Vision

- **Identity**: Interactive cinematic anime/cyberpunk developer portfolio and command terminal.
- **Core Aesthetic**:
  - Pure `#000000` pitch-black universal background.
  - `#E50914` crimson-red dominant accents and `#FFBE0B` cyber targeting gold brackets.
  - Borderless, box-free floating components (no enclosing rigid card boxes or unnecessary container borders).
  - High-precision vector graphics, reticle rings, scanlines, and dotted telemetry arcs.
  - Procedural sound effects via the Web Audio API on interactions.

---

## 2. Tech Stack & Dependencies

| Category | Technology / Package | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | High-performance React framework, static/hybrid rendering |
| **UI Library** | React 19 / TypeScript 5+ | Declarative UI and strict type safety |
| **Styling** | Tailwind CSS 3.4 / CSS Variables | Modular utility styling and global design tokens in `globals.css` |
| **3D Graphics** | Three.js `0.185.1` & `@react-three/fiber` `9.7.0` | 3D WebGL scene graph & canvas rendering |
| **Physics** | `@react-three/rapier` `2.2.0` | Rigid-body physics, rope joints, and collisions |
| **3D Meshes & Ribbons** | `meshline` `3.3.1` & `@react-three/drei` `10.7.8` | Dynamic cloth lanyard ribbon and 3D utilities |
| **Low-level WebGL** | `ogl` `1.0.11` | Lightweight hardware-accelerated particle starfield |
| **Animation** | `motion` (Motion v13) | Smooth spring physics, scroll-linked animations, and DOM transitions |
| **Gestures** | `@use-gesture/react` `10.3.1` | Touch/mouse dragging, trackpad inertia, and pointer handling |
| **Icons** | `lucide-react` `1.31.0` | Crisp modern vector iconography |

---

## 3. Directory & File Organization

```
anime_portfolio/
├── AGENTS.md                  # Comprehensive AI & developer reference guide
├── design.md                  # Design system, typography & color token specs
├── package.json               # Dependencies and build scripts
├── tsconfig.json              # TypeScript configuration
├── public/
│   ├── assets/
│   │   ├── character.png      # High-contrast cyber character illustration
│   │   └── lanyard/
│   │       ├── card.glb       # 3D model for ID card, clip, and clamp
│   │       ├── lanyard.png    # High-res lanyard strap texture
│   │       ├── profile_original.jpg # Front ID portrait
│   │       └── profile_anime.png    # Back ID anime illustration
│   └── scrollingImages/       # 180 frame JPG sequence for the Hero canvas scrub
└── src/
    ├── app/
    │   ├── globals.css        # Global CSS variables, scrollbars & HUD styles
    │   ├── layout.tsx         # Root HTML layout with Google Font links
    │   └── page.tsx           # Main page mounting all sections & global particles
    ├── types/
    │   └── global.d.ts        # TypeScript declarations for custom JSX and WebGL elements
    └── components/
        ├── AudioSynth.ts      # Web Audio API procedural sound engine (hover & click SFX)
        ├── VerticalHeading.tsx# Reusable vertical dual-tone section heading component
        ├── HeroCanvas.tsx     # 180-frame image sequence scrubbed canvas with lerp dampening
        ├── HeroHUD.tsx        # Hero HUD interface, targeting crosshairs & circuit paths
        ├── AboutSection.tsx   # About Me section mounting the 3D Rapier Lanyard
        ├── SkillsSection.tsx  # Core Skills section mounting the OrbitImages visualizer
        ├── ExperienceSection.tsx # Milestone timeline with scroll-tied laser track
        ├── WorkSection.tsx    # Project showcase mounting the 3D CircularGallery
        ├── TestimonialsSection.tsx # Endorsements section mounting the 3D DomeGallery
        ├── ContactSection.tsx # Contact form with CurvedInput & copyable email
        ├── Footer.tsx         # Terminal footer with LetterGlitch canvas background
        └── [3D Subcomponents]
            ├── CircularGallery/ # WebGL curved carousel with inertial scroll
            ├── CurvedInput/     # SVG-based arched input fields with chip icons
            ├── DomeGallery/     # Spherical 3D dome photo/endorsement explorer
            ├── InteractiveCharacter/ # Character interaction wrapper
            ├── Lanyard/         # Interactive 3D Rapier cloth physics ID badge
            ├── LetterGlitch/    # Matrix-styled canvas character glitch shader
            ├── LineSidebar/     # Magnetic proximity side line navigation
            ├── OrbitImages/     # Dual-axis elliptical rotating tech matrix
            └── Particles/       # Hardware-accelerated OGL cosmic starfield
```

---

## 4. Architectural Section-by-Section Details

### 1. Hero Experience ([HeroCanvas.tsx](file:///src/components/HeroCanvas.tsx) & [HeroHUD.tsx](file:///src/components/HeroHUD.tsx))
- **Track Length**: `380vh` scroll height with `sticky` viewport pin.
- **Image Preloader**: Preloads 180 frames from `/scrollingImages/ezgif-frame-XXX.jpg` with a dedicated progress indicator.
- **Interpolation Loop**: Uses `requestAnimationFrame` and dampening `lerp` factor (`0.12`) to eliminate scroll stutter.
- **Hero HUD**: Six symmetrical cards connected via dotted SVG routing lines to target points on the avatar. Fades out smoothly as the user scrubs past the hero phase (`opacity = Math.max(0, 1 - scrollProgress * 5.5)`).

### 2. Global Cosmic Starfield & Sidebar Navigation
- **[Particles.tsx](file:///src/components/Particles/Particles.tsx)**: Embedded in `page.tsx`, hardware-accelerated via `OGL`. Fades in with smooth transition once the user leaves the Hero section.
- **[LineSidebar.tsx](file:///src/components/LineSidebar/LineSidebar.tsx)**: Fixed vertical line navigation on the right viewport margin. Calculates pointer proximity to dynamically translate and highlight active section markers.

### 3. Work Section ([WorkSection.tsx](file:///src/components/WorkSection.tsx) & [CircularGallery.tsx](file:///src/components/CircularGallery/CircularGallery.tsx))
- Renders an interactive 3D cylindrical project carousel using WebGL.
- Features touch/mouse dragging, inertial momentum dampening, and configurable curvature (`bend={3}`).

### 4. About Section ([AboutSection.tsx](file:///src/components/AboutSection.tsx) & [Lanyard.tsx](file:///src/components/Lanyard/Lanyard.tsx))
- **Physics Engine**: Uses `@react-three/rapier` with rope joints (`useRopeJoint`) and spherical joints (`useSphericalJoint`).
- **Interactive Drag & Toss**: Users can drag the ID badge across 3D space with pointer capture.
- **Dynamic Composite Texture**: Generates a composite canvas texture merging front and back photo artwork with a cyberpunk ID layout and barcode.
- **Safety Guards**: All vector translations and physics velocity updates are strictly guarded with `Number.isFinite()` and clamped `delta`/`lerpFactor` to prevent `NaN` values in `BufferGeometry`.

### 5. Skills Section ([SkillsSection.tsx](file:///src/components/SkillsSection.tsx) & [OrbitImages.tsx](file:///src/components/OrbitImages/OrbitImages.tsx))
- Renders devicon tech badges along an inclined elliptical orbital path (`radiusX=460`, `radiusY=160`, `rotation=-12deg`).
- Center gear rotates continuously with pure `#000000` depth masking.

### 6. Experience Timeline ([ExperienceSection.tsx](file:///src/components/ExperienceSection.tsx))
- Scroll-tied laser track powered by Motion springs (`useScroll`, `useSpring`, and `useTransform`).
- Checkpoint nodes highlight dynamically as the laser progress line reaches each milestone threshold.

### 7. Testimonials & Social Proof ([TestimonialsSection.tsx](file:///src/components/TestimonialsSection.tsx) & [DomeGallery.tsx](file:///src/components/DomeGallery/DomeGallery.tsx))
- 3D geodesic dome projection of verified testimonials and endorsements.
- Supports drag-to-rotate navigation and click-to-enlarge modal card views.

### 8. Contact Terminal ([ContactSection.tsx](file:///src/components/ContactSection.tsx) & [CurvedInput.tsx](file:///src/components/CurvedInput/CurvedInput.tsx))
- Character visual paired with direct email copy functionality (with temporary "COPIED" badge feedback).
- Custom curved SVG input fields (Name, Email, Phone, Message) with embedded iconography chips.

### 9. Terminal Footer ([Footer.tsx](file:///src/components/Footer.tsx) & [LetterGlitch.tsx](file:///src/components/LetterGlitch/LetterGlitch.tsx))
- Matrix-style animated canvas character glitch effect with custom crimson/black/white character sets.
- Integrated quick navigation links, system status indicators, and smooth scroll-to-top action.

### 10. Procedural Audio Engine ([AudioSynth.ts](file:///src/components/AudioSynth.ts))
- Lightweight Web Audio API synthesizer for zero-latency, zero-asset UI sound effects:
  - `playHover()`: High-frequency sine wave sweep (800Hz → 1200Hz).
  - `playClick()`: Triangle wave resonant chirp (520Hz → 260Hz).
  - Handles browser audio context suspension automatically.

---

## 5. Development & Contribution Conventions

1. **Client Components**: All Three.js, Canvas, and interactive components must specify `'use client'` at the top.
2. **Three.js SSR Isolation**: 3D canvases must be dynamically imported with `{ ssr: false }` or rendered only after mount to prevent hydration mismatches.
3. **No-NaN Geometry Rule**: Always validate vector translations (`Number.isFinite`) before passing coordinates into `CatmullRomCurve3`, `MeshLineGeometry.setPoints`, or Rapier velocity setters.
4. **Color Tokens**: Adhere strictly to the color palette in `design.md`:
   - Canvas: `#000000` (pitch black)
   - Primary: `#E50914` (crimson red)
   - Cyber Accent: `#FFBE0B` (cyber gold)
   - Neutral Fills: `#0A0A0A` / `#141414`
5. **Running Locally**:
   - `npm run dev` — Start development server on port 3000
   - `npm run build` — Build production bundle
   - `npm start` — Start production server
   - `npx tsc --noEmit` — Run TypeScript typecheck without emitting files
