# Anime Cyberpunk Portfolio — Design System & Theme Specification

This document extracts and defines the design language, color palette, typography, visual hierarchy, and component rules observed in the anime-cyberpunk interactive HUD portfolio (clean, matte, crisp vector aesthetic with NO glow effects, borderless box-free framing, and pure pitch-black `#000000` background).

---

## 1. Visual Theme Overview

- **Core Aesthetic**: Futuristic Anime / Cyberpunk HUD (Heads-Up Display) & Sci-Fi Command Terminal.
- **Atmosphere**: High-energy, crisp vector precision, clean contrast, structured, and immersive.
- **Key Motifs**:
  - Central anime illustrated avatar with crisp layers and sharp definition.
  - Concentric reticle rings, circular radar telemetry, and orbital graphics (solid/dashed strokes, no blur/glow).
  - Symmetrical floating HUD glassmorphism cards on Hero with cybernetic corner bracket accents.
  - Seamless, borderless components floating on pure pitch black `#000000` canvas.
  - Split dual-tone typography and high-contrast color blocks.

---

## 2. Color Palette & Tokens (Pitch Black #000000 & Crisp Red)

### Primary & Background Colors
| Token Name | Hex / RGBA | Role / Usage |
| :--- | :--- | :--- |
| `--bg-pitch-black` | `#000000` | Universal seamless pitch-black canvas background across all sections |
| `--bg-crimson-core` | `#E50914` | Dominant brand red, primary active accents, buttons, and highlight text |
| `--bg-crimson-accent`| `#C10913` | Crisp hover fills and secondary accents |
| `--bg-neutral-dark` | `#111111` / `#1A1A1A` | Subtle button and badge fills on pitch black canvas |

### HUD, Accents & Corner Bracket Tokens
| Token Name | Hex / RGBA | Role / Usage |
| :--- | :--- | :--- |
| `--cyber-gold` | `#FFBE0B` / `#FEE440` | Cyber targeting corner brackets (`::before`, `::after` crosshairs) |
| `--card-glass-bg` | `rgba(120, 8, 8, 0.45)` | Semi-transparent crimson glass card background on Hero HUD |
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

## 4. Component & UI Architecture (Seamless Box-Free)

1. **Background**: Universal `#000000` pitch black across all sections (`Hero`, `About`, `Skills`, `Experience`, `Work`, `Testimonials`, `Contact`).
2. **Borderless Floating Visuals**:
   - 3D Interactive Lanyard floats seamlessly without border frame.
   - Orbiting tech logo matrix floats directly on pitch black without enclosing rectangle containers or headers.
   - 3D Dome Gallery renders directly onto `#000000` without enclosing card boxes.
   - Experience timeline and Contact forms sit in an open, elegant, borderless layout.
3. **Hero Top Bar & HUD**: Symmetrical 6-node command matrix with fine vector dotted circuits.
