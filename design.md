# Design System — Sparsh Sharma Personal Website

> **The single source of truth for every build step.** No color, font, spacing value, or component may be introduced that is not defined here. If a build step needs something new, it gets added to this document *first*, then used.

---

## 0. The Mood (the anchor for every decision)

**"Late-afternoon sunlight falling across the pages of a well-worn philosophy book in a quiet reading room."**

Warm, unhurried, considered. Paper and ink, not screens and neon. The confidence of someone who has nothing to prove and says exactly what they mean. Human warmth (the sunlight, the worn book) meeting rigor and clarity (the ink, the discipline of the page).

Every choice below should be defensible against this sentence. If a design element feels like a SaaS landing page, a crypto site, or an AI-generated template — it fails the mood and is wrong.

**Brand thesis to design around:**
> *"I think, I wonder, I ponder — and I execute ideas into the real world, creating tangible impact for startups, businesses, and conglomerates."*

The philosopher **and** the operator. The design must hold both: reflective warmth *and* confident precision.

---

## 1. Color Palette

A tightly disciplined palette. **One accent. One background. Two text variants.** Plus a minimal set of derived neutrals for surfaces and hairlines. That is the entire vocabulary — no additional hues.

### Core tokens (the required four)

| Role | Name | Hex | Notes |
|------|------|-----|-------|
| **Background** | `paper` | `#F4EEE2` | Warm oat/cream. The "page." Never pure white (`#FFFFFF` is banned as a surface). |
| **Primary accent** (exactly 1) | `clay` | `#BC5B39` | Warm burnt-sienna / terracotta. The "afternoon light" and book-cloth binding. Used for links, key CTAs, active states, and *sparingly* for emphasis. |
| **Text — primary** | `ink` | `#2B2320` | Warm near-black espresso. Headings and primary body text. Never use `#000000`. |
| **Text — secondary** | `stone` | `#6B6259` | Warm taupe-grey. Muted body, captions, metadata, labels. |

### Derived neutrals (support only — not new colors, just tints of the above)

| Role | Name | Hex | Use |
|------|------|-----|-----|
| Raised surface | `surface` | `#FBF7EF` | Cards / panels that need to lift a hair above `paper`. |
| Hairline / border | `line` | `#E3DAC9` | 1px dividers, card borders, input outlines. |
| Accent — hover/pressed | `clay-deep` | `#9E4A2C` | Darker clay for hover/active on interactive `clay` elements. |
| Accent — tint wash | `clay-wash` | `#F0E0D6` | ~8% clay over paper; subtle highlight backgrounds, selection. |

### Usage rules
- **Accent discipline:** `clay` should touch roughly **≤10% of any given viewport**. It earns attention *because* it is rare. Do not tint whole sections in clay.
- **Text contrast:** `ink` on `paper` ≈ 12:1 (AAA). `stone` on `paper` ≈ 4.8:1 (AA for body). Never put `stone` on `surface` for long-form text below 16px.
- **No pure black, no pure white** anywhere — they break the warm, papery mood instantly.
- **No second accent.** If something needs to stand out and clay is taken, use weight, size, or space — not a new color.

### Dark mode tokens (for the optional toggle — see §5)
Light is the default and primary experience. Dark is a courteous option, tuned to the *same* warm mood (warm charcoal, not cold slate).

| Role | Light | Dark |
|------|-------|------|
| `paper` (bg) | `#F4EEE2` | `#1C1917` |
| `surface` | `#FBF7EF` | `#262220` |
| `ink` (text 1) | `#2B2320` | `#EDE6D8` |
| `stone` (text 2) | `#6B6259` | `#A79E92` |
| `clay` (accent) | `#BC5B39` | `#D6754F` *(lifted for contrast on dark)* |
| `line` | `#E3DAC9` | `#37312C` |

---

## 2. Typography

Google Fonts only. A three-role system: a **display voice** with personality, a **reading voice** built for long-form thought, and a **utility/data voice** that signals the technical industry.

### The pairing

| Role | Font | Google Fonts | Why |
|------|------|--------------|-----|
| **Headers / display** | **Fraunces** | `Fraunces:opsz,wght@9..144,500;600;700;900` | A bold, expressive display serif with old-style warmth and real gravitas. Confident and editorial — signals top-1% seriousness while staying warm on beige. Use **900 (black)** for the hero name, **700** for section headings. |
| **Body / reading** | **Newsreader** | `Newsreader:opsz,wght@6..72,400;500;600` | A highly readable serif built for on-screen reading. Editorial, warm, "reading-room." Directly reinforces the writer/thinker brand. This is the workhorse for all paragraphs. |
| **Utility / data (accent)** | **IBM Plex Mono** | `IBM+Plex+Mono:wght@400;500` | Signals the data/AI industry. Reserved for: metrics (`$235K`, `28%`), section kickers/eyebrows, tech-stack labels, and any code. Never for paragraphs. |

> **Rule:** Exactly these three families. No fourth font, no system-font fallbacks used decoratively. Fallback stacks are for graceful degradation only.

### Type scale (rem, 16px base)

| Token | Size | Line-height | Font | Weight | Use |
|-------|------|-------------|------|--------|-----|
| `display` | 3.5–4.5rem (clamp) | 1.05 | Fraunces | 700 | Hero name / thesis |
| `h1` | 2.5rem | 1.1 | Fraunces | 700 | Section titles |
| `h2` | 1.875rem | 1.15 | Fraunces | 700 | Sub-sections |
| `h3` | 1.375rem | 1.25 | Fraunces | 700 | Card / entry titles |
| `body-lg` | 1.25rem | 1.6 | Newsreader | 400 | Lead paragraphs, About |
| `body` | 1.0625rem | 1.65 | Newsreader | 400 | Default paragraph |
| `small` | 0.9375rem | 1.5 | Newsreader | 400 | Captions, footnotes |
| `kicker` | 0.8125rem | 1.4 | IBM Plex Mono | 500 | Eyebrows / labels — `letter-spacing: 0.08em`, `text-transform: uppercase` |
| `metric` | 1.5–2rem | 1.1 | IBM Plex Mono | 500 | Impact numbers |

### Typographic rules
- **Line length:** body text capped at **65–72ch** (`max-w-[68ch]`). Never full-viewport-width paragraphs.
- **Headings:** `letter-spacing: -0.02em` on Fraunces display sizes to keep them tight and confident.
- **Numbers as heroes:** every impact stat ($, %, count) renders in `metric` (IBM Plex Mono) in `clay` or `ink` — this is how the "tangible impact" story is told visually.
- **No italics on Fraunces.** Use Newsreader italic for emphasis in prose; use weight for emphasis in headings.
- **One `display` per page** (the hero). Scarcity keeps it powerful.

---

## 3. Component Rules

### Spacing — Tailwind scale (4px base unit)
Use **only** these Tailwind steps. No arbitrary values except the documented `clamp()` cases and `max-w-[68ch]`.

`0 · 1 (4px) · 2 (8px) · 3 (12px) · 4 (16px) · 6 (24px) · 8 (32px) · 12 (48px) · 16 (64px) · 20 (80px) · 24 (96px) · 32 (128px)`

| Context | Value |
|---------|-------|
| Inline gap (icon↔text, tag gaps) | `gap-2` / `gap-3` |
| Related elements within a block | `space-y-4` |
| Between blocks in a section | `space-y-8` |
| Card interior padding | `p-6` (mobile) → `p-8` (desktop) |
| **Section vertical rhythm** | `py-24` (mobile) → `py-32` (desktop) |
| Page content max width | `max-w-3xl` for prose, `max-w-5xl` for the outer container |
| Horizontal page gutter | `px-6` (mobile) → `px-8` (desktop) |

> **The whitespace rule:** when in doubt, add space. Generosity of space *is* the "quiet, expensive confidence" of the mood. Cramped = failure.

### Border radii
Soft, not bubbly — echoing Fraunces's roundness without becoming a toy.

| Token | Tailwind | px | Use |
|-------|----------|-----|-----|
| Subtle | `rounded-md` | 6px | Inputs, small tags, code chips |
| Default | `rounded-xl` | 12px | Buttons, small cards |
| Card | `rounded-2xl` | 16px | Panels, project/work cards |
| Pill | `rounded-full` | — | Tags, avatar, icon buttons |

- **Consistency:** a given component type always uses one radius. Never mix `rounded-lg` and `rounded-2xl` on sibling cards.

### Shadows
Minimalist-first: **prefer a 1px `line` border over a shadow.** Shadows are warm-tinted and barely-there — never harsh grey/black.

```css
/* Warm, low, papery — tinted with ink, never neutral grey */
--shadow-sm: 0 1px 2px rgba(43, 35, 32, 0.04);
--shadow-md: 0 4px 16px rgba(43, 35, 32, 0.06);
--shadow-lg: 0 12px 32px rgba(43, 35, 32, 0.08); /* hover only, sparingly */
```

- Resting cards: **border `line` + `shadow-sm`** (or no shadow at all).
- Elevation appears on **interaction**, not at rest.
- **Banned:** any shadow with blur > 40px, any `box-shadow` using pure black, any neon/colored glow.

### Buttons
- **Primary:** `clay` background, `paper` text, `rounded-xl`, `px-6 py-3`, `kicker`-adjacent weight. Hover → `clay-deep`.
- **Secondary:** transparent background, `ink` text, 1px `line` border, `rounded-xl`. Hover → `clay-wash` background.
- **Text link:** `clay`, underline offset `0.2em`, underline `1px`. Hover → `clay-deep`.
- Max **one primary button per section**. If two CTAs compete, one becomes secondary.

### Cards & dividers
- Cards: `surface` background, 1px `line` border, `rounded-2xl`, `p-8`, `shadow-sm`.
- Dividers: **hairline 1px `line`** only. (See anti-slop: no wave/blob dividers.)
- Layout prefers **asymmetry and a real grid** over centered stacks.

### Icons
- **Stroke-based line icons only** (e.g., Lucide/Feather), `1.5px` stroke, sized `20–24px`, colored `stone` or `ink` — `clay` only when active.
- Icons *support* text, never replace meaning. If a section works without the icon, it stays.

### Motion
- Entrances: `opacity` + small `translateY(8px)`, `300ms`, `ease-out`. Once, on scroll-in. No looping animation.
- Hover: `150ms` `ease` on color/border/shadow.
- Respect `prefers-reduced-motion: reduce` — disable all transforms, keep instant.

---

## 4. Layout Principles
- **One-page scroll**, 8 sections (Hero · About · Work · Projects · Skills · Writing · Beyond Work · Contact).
- **Sticky, minimal top nav**: name/monogram left, anchor links right, `paper` with a subtle bottom `line` on scroll. No hamburger on desktop.
- **Left-aligned by default.** Centered text is reserved for the hero and short section intros only — never for body copy or lists.
- **Consistent left rhythm:** section kickers, titles, and content share a common left edge within the container.
- Generous top/bottom breathing room between sections (`py-24`→`py-32`), so each idea gets its own quiet space.

---

## 5. Dark / Light Mode Transitions
- **Light is default.** Toggle lives in the nav (a small sun/moon line-icon button, `rounded-full`).
- Implementation: `class="dark"` on `<html>`; all colors reference CSS variables (§1) so a single class swap re-themes everything.
- **Transition:** `transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease;` on `body` and theming containers. Never transition `all`.
- Persist choice in `localStorage`; honor `prefers-color-scheme` on first visit.
- **Both modes obey the same mood** — dark mode is a warm dusk, not a cold tech UI. Verify contrast (AA min) after any dark-token change.

---

## 6. Anti-Slop Safeguards 🚫

These are **hard bans.** Any of them appearing in a build is a defect to be removed, no exceptions.

### Visual clichés — banned
- ❌ **Saturated purple→blue (or blue→teal) gradients.** No gradient-as-personality anywhere. (Flat, confident color only.)
- ❌ **Wave / blob / "torn paper" SVG section dividers.** Sections are separated by space and hairlines, full stop.
- ❌ **Glassmorphism** (frosted blur cards), **neumorphism**, and glowing neon borders.
- ❌ **Floating 3D blobs, orbs, gradient meshes, or animated particle backgrounds.**
- ❌ **Pure `#000` / pure `#FFF`** as background or text. (Warm tokens only.)
- ❌ **Drop-shadow overload** — big, dark, blurry shadows on everything.
- ❌ **Full-bleed stock/AI hero photography** or generic abstract "tech" imagery.

### Content & structure clichés — banned
- ❌ **Generic corporate icons** used decoratively: handshake, lightbulb, rocket ship, gears, target/bullseye, "person-in-a-circle." If an icon is a metaphor for "innovation," delete it.
- ❌ **Emoji as primary UI icons** or as section headers.
- ❌ **The three-centered-feature-cards grid** (icon + bold title + one grey sentence) that every template ships with.
- ❌ **Lorem ipsum** or placeholder text in any committed build — real content only (Sparsh's actual work).
- ❌ **Unearned superlatives** ("world-class," "cutting-edge," "passionate about leveraging synergies"). Voice is plain, specific, confident. Show the number, don't adjective it.
- ❌ **Auto-playing carousels / sliders.**
- ❌ **Fake logos, made-up testimonials, or invented metrics.** Every stat traces to the résumé.
- ❌ **Skill bars / percentage "proficiency" meters** (e.g., "Python 90%"). Meaningless and slop-coded — list skills as clean typographic groups instead.

### The taste test (apply before shipping any section)
1. Does it trace back to the **reading-room mood** (§0)?
2. Would it look at home on a **generic SaaS/AI landing page**? → If yes, it's wrong.
3. Is **`clay` still rare** (≤10% of the view)?
4. Is there **enough whitespace** that nothing feels crowded?
5. Is every number **real**, and every word **plain and specific**?

If any answer is unsatisfying, revise before moving on.

---

## 7. Quick-reference tokens (for implementation)

```css
:root {
  /* color */
  --paper:      #F4EEE2;
  --surface:    #FBF7EF;
  --ink:        #2B2320;
  --stone:      #6B6259;
  --clay:       #BC5B39;
  --clay-deep:  #9E4A2C;
  --clay-wash:  #F0E0D6;
  --line:       #E3DAC9;

  /* radius */
  --r-sm: 6px; --r-md: 12px; --r-lg: 16px;

  /* shadow */
  --shadow-sm: 0 1px 2px rgba(43,35,32,.04);
  --shadow-md: 0 4px 16px rgba(43,35,32,.06);
  --shadow-lg: 0 12px 32px rgba(43,35,32,.08);
}
.dark {
  --paper:#1C1917; --surface:#262220; --ink:#EDE6D8;
  --stone:#A79E92; --clay:#D6754F; --line:#37312C;
}
```

```js
// tailwind.config — theme.extend
colors: {
  paper: 'var(--paper)', surface: 'var(--surface)',
  ink: 'var(--ink)', stone: 'var(--stone)',
  clay: { DEFAULT: 'var(--clay)', deep: 'var(--clay-deep)', wash: 'var(--clay-wash)' },
  line: 'var(--line)',
},
fontFamily: {
  display: ['Fraunces', 'Georgia', 'serif'],
  body: ['Newsreader', 'Georgia', 'serif'],
  mono: ['"IBM Plex Mono"', 'monospace'],
},
borderRadius: { md: '6px', xl: '12px', '2xl': '16px' },
```

---

*This document governs all build steps. Revisit and update it here first before introducing anything new.*
