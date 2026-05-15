# Salt & Tide Creative — Design Brainstorm

Three distinct directions explored before committing. Each pulls hard at the tails of the distribution rather than the safe center.

<response>
<text>
**Direction 1 — Editorial Cartography ("Atlas of Local Business")**

- **Design Movement:** Editorial print + map-aesthetic minimalism. Think *The Atlantic* meets a 1960s nautical chart.
- **Core Principles:** Editorial restraint; cartographic motifs (latitude lines, depth markers, compass roses); information density treated as luxury; documentary photography sensibility.
- **Color Philosophy:** Off-white parchment (`#F4F0E6`), deep navy ink (`#0E1A2B`), faded brick accent (`#A6432B`), seafoam wash (`#9DBFB0`). Emotionally, it says "this agency is the trusted cartographer who maps your business's coastline."
- **Layout Paradigm:** Asymmetric editorial grid (12-column with deliberate offset). Section headers numbered like map plates ("Plate 01 — Hero"). Side-running marginalia in tracked uppercase, like a chart legend.
- **Signature Elements:** Thin contour-line dividers between sections; a slowly-rotating compass rose as logo mark; latitude/longitude coordinates of Edmonds (47.8107° N, 122.3774° W) as a recurring motif in the footer and CTA section.
- **Interaction Philosophy:** Restrained. A hover should *reveal*, never *bounce*. Underline-grow on links; ink-bleed effect on button presses; section transitions feel like turning a page.
- **Animation:** Subtle SVG line-draws for dividers and the compass; text reveals via `clip-path` (vertical mask sliding open, like a printing-press impression); parallax limited to ±10px so it feels like a settling page, not a parallax site.
- **Typography:** Display = **GT Sectra** (serif with surgical edges, very editorial). Body = **Söhne** or **Inter** at 17px. Accent = **JetBrains Mono** for marginalia/coordinates. Drop caps on first paragraph of each section.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Direction 2 — Pacific Brutalist ("Concrete & Salt Air")**

- **Design Movement:** Late-2010s Swiss/Pacific brutalism, with a wet-stone Pacific Northwest twist. Channeling Read.cv, Linear's marketing pages, and the rough-hewn confidence of Hassell-style Brut sites.
- **Core Principles:** Oversized typography as primary visual; raw structural grids visible at all times; functional asymmetry; texture (grain, mist, halftone) as the only "decoration."
- **Color Philosophy:** Wet-stone graphite (`#0F1115`) as primary background, fog-cream (`#EDE8DE`) as the disruptor, kelp green (`#3FAE7C`) as the single accent that punches through. Emotionally: serious, weighty, expensive — but with one electric pulse of life (the kelp).
- **Layout Paradigm:** Hero is left-aligned 60ch hero text with NO image, just typography breathing into negative space. Sections defined by horizontal rules and oversized section numbers ("§ 01 / Work"). Portfolio is an asymmetric mosaic — different aspect ratios, deliberate misalignment.
- **Signature Elements:** A persistent fixed corner-tag in the top-left ("Salt & Tide / EST. 2026 / Edmonds, WA"); a slow horizontal marquee tape across the very top with the word "AVAILABLE FOR PROJECTS"; a recurring "tide line" — a single horizontal hairline that reappears at the bottom of each section.
- **Interaction Philosophy:** Cursor matters — a custom cursor that shows status (`view`, `read`, `apply`) over different element types. Buttons don't lift; they invert (background ↔ foreground swap with a 180ms wipe). Scroll feels weighted, not floaty.
- **Animation:** GSAP-driven. Headlines split into characters and stagger up by 24ms each from `translateY(40px)` with a sharp `cubic-bezier(0.16, 1, 0.3, 1)`. Section reveals use horizontal wipe masks, not fades. The accent kelp-green color pulses very subtly (1.5s) only on the active CTA — nothing else.
- **Typography:** Display = **Cabinet Grotesk Variable** (geometric grotesk, weights 500–800 in dramatic interplay). Body = **Inter** 16/26 with `feature-settings: "ss01", "cv11"`. Accent/Mono = **JetBrains Mono** for tags, coordinates, and form labels. Display is BIG — `clamp(3.5rem, 9vw, 8.5rem)`.
</text>
<probability>0.09</probability>
</response>

<response>
<text>
**Direction 3 — Liquid Light ("Bioluminescent Puget")**

- **Design Movement:** Apple Vision Pro UI x Linear x Stripe — soft glassmorphism over a quietly animating gradient mesh, with hyper-modern motion.
- **Core Principles:** Glass/blur translucency over rich gradient depth; everything floats; light treated as material; precise but soft motion.
- **Color Philosophy:** Inky midnight base (`#070A14`) with deep oceanic gradient mesh (navy → indigo → faint cyan → teal hint). Glass surfaces (`rgba(255,255,255,0.06)`). Single luminescent accent — bioluminescent cyan (`#7AF2D8`) used sparingly. Emotionally: futuristic, expensive, calm-but-alive.
- **Layout Paradigm:** Floating glass cards over a continuous gradient backdrop. Sections aren't framed by edges but by depth changes (Z-translation). Hero has a 3D-feeling parallax of soft luminescent orbs.
- **Signature Elements:** A persistent bioluminescent orb that drifts behind everything; glass-blur navigation that intensifies on scroll; subtle "tide" gradient ripples on hover over portfolio cards.
- **Interaction Philosophy:** Everything wants to be touched — soft scale on hover, springy easing, tactile. The cursor itself is a glass dot with a faint glow that changes hue based on the section's accent.
- **Animation:** Heavy on GSAP + CSS filter blur. Orbs drift on a 30-60s cycle. Section reveals are 3D — slight rotateX(8deg) → 0deg + opacity. Cards lift with `translateZ`. *Risk: easy to overdo and feel generic SaaS.*
- **Typography:** Display = **Satoshi** (variable, weights 600/700/900). Body = **Inter** with optical sizing. Accent = **JetBrains Mono** for tag chips. Type sizes are smaller than Direction 2 — relies on whitespace and color for hierarchy, not type scale.
</text>
<probability>0.06</probability>
</response>

---

## Selected Direction: **Direction 2 — Pacific Brutalist ("Concrete & Salt Air")**

**Why this wins for Salt & Tide Creative:**

1. **It is itself a portfolio piece.** A young agency's site MUST be the best thing in its portfolio. Pacific Brutalist signals "design-aware, technically confident, not template" louder than the other two directions in the first 1.5 seconds.
2. **It avoids AI-slop tells.** No purple gradients, no glass cards, no centered hero, no rounded everything. This direction is the explicit antithesis of "AI-generated agency site," which is exactly the perception trap a new agency must escape.
3. **It scales to local business clients.** The kelp-green/fog-cream palette is professional and warm enough to pitch to a restaurant owner, while the typographic confidence pitches the higher-tier services to scaling SMBs.
4. **It cleanly accommodates portfolio screenshots.** Brutalist asymmetric mosaics make varied screenshot aspect ratios feel intentional rather than inconsistent.
5. **The kelp-green accent is ownable.** Most Seattle agencies use blues. Kelp-green is local (literal kelp forests in Puget Sound) and distinctive without being trendy.

## Concrete Design Tokens (committed)

- **Backgrounds:** `--ink: #0F1115` (graphite), `--fog: #EDE8DE` (cream), `--surface: #15171C` (raised on ink), `--surface-2: #1B1E25`.
- **Accent:** `--kelp: #3FAE7C` (the only accent — used surgically: active CTA, key stat numbers, link underlines on hover, tide-line dividers).
- **Text:** `--text-primary: #F2EEE3`, `--text-secondary: #8E8F8A`, `--text-muted: #5C5E5A`.
- **Border:** `--hairline: rgba(242, 238, 227, 0.08)`.
- **Typography:** Cabinet Grotesk Variable (display, 500/700/800), Inter (body, 400/500/600), JetBrains Mono (mono, 400/500).
- **Type scale:** `--fs-hero: clamp(3.5rem, 9vw, 8.5rem)`, `--fs-h1: clamp(2.5rem, 5vw, 4.5rem)`, `--fs-h2: clamp(2rem, 4vw, 3.25rem)`, `--fs-h3: clamp(1.5rem, 3vw, 2.25rem)`, `--fs-body: clamp(1rem, 1.05vw, 1.125rem)`.
- **Spacing:** 4px base, used as 4/8/12/16/24/32/48/64/96/128/160 for section vertical rhythm.
- **Radii:** 0px default (brutalist sharpness); 2px on form inputs only; 9999px on the single pill CTA in nav.
- **Motion:** 180ms for buttons, 320ms for nav/menus, 600–800ms with `cubic-bezier(0.16, 1, 0.3, 1)` for scroll reveals; character-stagger of 24ms on hero headline.
- **Texture:** SVG grain overlay at 4–6% opacity (fixed, full-viewport); horizontal hairline tide-line at the bottom of every major section.

## File-level Reminder
Every CSS/component/page file gets a comment header at the top:
> `// SALT & TIDE — Pacific Brutalist. No rounded everything. No purple gradients. No centered SaaS hero. Type-led. Kelp accent only on active state.`
