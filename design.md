# Anime Cyberpunk Portfolio — Design System & Theme Specification

This document extracts and defines the design language, color palette, typography, visual hierarchy, and component rules observed in the anime-cyberpunk interactive HUD portfolio (clean, matte, crisp vector aesthetic with NO glow effects).

---

## 1. Visual Theme Overview

- **Core Aesthetic**: Futuristic Anime / Cyberpunk HUD (Heads-Up Display) & Sci-Fi Command Terminal.
- **Atmosphere**: High-energy, crisp vector precision, clean contrast, structured, and immersive.
- **Key Motifs**:
  - Central anime illustrated avatar with crisp layers and sharp definition.
  - Concentric reticle rings, circular radar telemetry, and orbital graphics (solid/dashed strokes, no blur/glow).
  - Symmetrical floating HUD glassmorphism cards with cybernetic corner bracket accents.
  - Dotted circuit vector connector lines with target nodes directing focus inward.
  - Split dual-tone typography and high-contrast color blocks.

---

## 2. Color Palette & Tokens (No Glow / Clean Matte)

### Primary & Background Colors
| Token Name | Hex / RGBA | Role / Usage |
| :--- | :--- | :--- |
| `--bg-crimson-core` | `#E50914` | Dominant hero background, active accents, energetic brand color |
| `--bg-crimson-dark` | `#8B0000` / `#5A0808` | Dark crimson shadows, deep contrasting panels |
| `--bg-crimson-accent`| `#C10913` | Crisp hover fills and secondary border strokes |
| `--bg-noir` | `#08080C` / `#000000` | Deep contrast areas, dark section backgrounds, high-contrast text |

### HUD, Accents & Corner Bracket Tokens
| Token Name | Hex / RGBA | Role / Usage |
| :--- | :--- | :--- |
| `--cyber-gold` | `#FFBE0B` / `#FEE440` | Cyber targeting corner brackets (`::before`, `::after` crosshairs) |
| `--card-glass-bg` | `rgba(120, 8, 8, 0.45)` | Semi-transparent crimson glass card background |
| `--card-glass-hover` | `rgba(165, 12, 12, 0.70)` | Active/hover card background with crisp solid opacity shift |
| `--card-border` | `rgba(255, 255, 255, 0.28)` | Crisp frosted border stroke |
| `--card-border-hover`| `rgba(255, 255, 255, 0.75)` | High-visibility focus/hover border |
| `--circuit-line` | `rgba(255, 255, 255, 0.45)` | Dotted circuit routing lines connecting HUD cards to center |

### Typography Colors
| Token Name | Hex / RGBA | Role / Usage |
| :--- | :--- | :--- |
| `--text-primary` | `#FFFFFF` | Primary headers, HUD card titles, brand name |
| `--text-secondary` | `#FFD5D8` / `#FFAEB4` | HUD card subtext, descriptions, subtitle metadata |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Technical telemetry, scroll scrub hint |
| `--badge-bg` | `#FFFFFF` | Solid white block for high-contrast "DEVELOPER" tag |
| `--badge-text` | `#000000` | Bold black text inside the white block tag |

---

## 3. Typography Rules

| Element | Font Family | Weight | Size | Letter Spacing | Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Brand Logo** (`DEVARAJA.`) | `JetBrains Mono` / `Space Mono` | 900 (Black) | `1.5rem` - `1.75rem` | `0.08em` | Uppercase |
| **Brand Subtitle** (`LET'S BUILD`) | `JetBrains Mono` | 700 (Bold) | `0.6875rem` | `0.25em` | Uppercase |
| **HUD Card Title** | `JetBrains Mono` / `Orbitron` | 800 (ExtraBold) | `0.8125rem` | `0.12em` | Uppercase |
| **HUD Card Subtitle** | `Space Grotesk` / `Inter` | 400 (Regular) | `0.6875rem` | `0.02em` | Normal |
| **Hero Title 1** (`FULLSTACK`) | `Outfit` / `Space Grotesk` | 900 (Black) | `3.5rem` - `5rem` | `-0.02em` | Uppercase |
| **Hero Title 2** (`DEVELOPER`) | `Outfit` / `Space Grotesk` | 900 (Black) | `3.5rem` - `5rem` | `-0.02em` | Uppercase |
| **Scroll Hint** (`SCROLL TO SCRUB`) | `JetBrains Mono` | 600 (SemiBold) | `0.625rem` | `0.25em` | Uppercase |

---

## 4. Component & UI Architecture

### 4.1. Top Navigation Bar
- **Left**: Monospace brand block (`DEVARAJA.`) with tracking sub-label `LET'S BUILD`.
- **Right**: Cyber `RESUME` button:
  - Frosted red glass background (`rgba(120, 8, 8, 0.35)`).
  - Document icon (`FileText`) + uppercase bold text.
  - Gold corner targeting bracket at the top-right corner.

### 4.2. Symmetrical 6-Node Navigation Matrix (HUD Cards)
The viewport is flanked by two columns of three cybernetic cards with angled vector connector lines:

- **Left Column**:
  1. `ABOUT ME` — *Get to know more about me* (User Icon `User`)
  2. `SKILLS` — *Technologies I work with* (Code Icon `Code2` / `< >`)
  3. `CONTACT` — *Let's connect and build something* (Mail Icon `Mail`)

- **Right Column**:
  1. `EXPERIENCE` — *My work experience and journey* (Briefcase Icon `Briefcase`)
  2. `PROJECTS` — *Things I've built and explored* (Folder Icon `Folder`)
  3. `ACHIEVEMENTS` — *Milestones and highlights* (Star Icon `Star`)

#### Card Visual Structure
- **Container**: `backdrop-blur(12px)` + `border: 1px solid rgba(255,255,255,0.3)`.
- **Corner Brackets**: Top-left and bottom-right `2px solid #FFBE0B` brackets (5px x 5px).
- **Hover Micro-Interaction**: `translateY(-2px) scale(1.02)`, crisp border highlight, solid shadow definition (no diffuse neon glow).
- **Audio Feedback**: Subtle high-tech sine wave click/hover SFX synthesized via Web Audio API.

### 4.3. Connector Circuit Lines
- Dotted stroke `stroke-dasharray="3 3"` in semi-transparent white (`rgba(255,255,255,0.45)`).
- Angled vectors routing from cards towards central character focus points.
- Terminal endpoint solid circular nodes (`circle r="2.5" fill="white"`).

### 4.4. Center Radar Reticle (Clean Vectors)
- Dual concentric circular lines behind the hero portrait (`480px` to `720px` responsive diameter).
- Outer ring with crisp stroke; inner ring with dashed stroke slowly rotating at `spin 80s linear infinite` (no blur glow overlay).

### 4.5. Bottom Hero Title Banner
- Dynamic split design:
  - Left side: `FULLSTACK` in massive white sans-serif / display font.
  - Right side: `DEVELOPER` in black text enclosed inside a clean white rectangular box.
- Telemetry prompt: `SCROLL TO SCRUB SEQUENCE` positioned centered above the banner.

---

## 5. CSS Utility Tokens

```css
:root {
  /* Colors */
  --color-crimson-core: #e50914;
  --color-crimson-accent: #c10913;
  --color-crimson-dark: #8b0000;
  --color-cyber-gold: #ffbe0b;
  --color-card-glass: rgba(120, 8, 8, 0.45);
  --color-card-border: rgba(255, 255, 255, 0.3);

  /* Typography */
  --font-display: 'Outfit', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-body: 'Space Grotesk', sans-serif;
}

/* Cyber Corner Accents Pattern */
.cyber-corner-brackets {
  position: relative;
}

.cyber-corner-brackets::before {
  content: "";
  position: absolute;
  top: -1.5px;
  left: -1.5px;
  width: 5px;
  height: 5px;
  border-top: 2px solid var(--color-cyber-gold);
  border-left: 2px solid var(--color-cyber-gold);
  pointer-events: none;
}

.cyber-corner-brackets::after {
  content: "";
  position: absolute;
  bottom: -1.5px;
  right: -1.5px;
  width: 5px;
  height: 5px;
  border-bottom: 2px solid var(--color-cyber-gold);
  border-right: 2px solid var(--color-cyber-gold);
  pointer-events: none;
}
```

---

## 6. Interaction & Animation Guidelines

1. **Scroll-Driven Canvas Scrubbing**: Smooth canvas image sequence scrubbing tied to vertical page scroll progress.
2. **HUD Dynamic Fade**: Hero HUD elements fade smoothly out during initial scroll (`opacity: Math.max(0, 1 - scrollProgress * 5.5)`).
3. **Card Transitions**: Smooth cubic-bezier transitions (`0.16, 1, 0.3, 1`) on card hover with slight scale, clean border brightening (no blur glow).
4. **Subtle Audio Synthesis**: Real-time synthesized web audio feedback on hover (high sine pitch) and click (triangle down-sweep).
