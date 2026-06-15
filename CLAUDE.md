# ARION AI — Project Guide

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Component library**: shadcn/ui (`components/ui/`)
- **Icons**: lucide-react
- **Animation**: Framer Motion (`motion/react`)
- **Font**: Geist Sans (via `next/font/google`)

## Brand Voice

ARION speaks with authority, precision, and restraint — never hype.
Think: Anthropic's clarity × Linear's terseness × Stripe's trust.

- Headlines: declarative, short, punchy. No exclamation marks.
- Body copy: one idea per sentence. Technical but human.
- CTAs: action-first ("Start building", "Get early access"), never pushy.
- Avoid: buzzwords ("revolutionary", "game-changing"), em-dashes in isolation, vague superlatives.

## Design Tokens

| Token | Value |
|---|---|
| Background | `#080810` (near-black, blue-tinted) |
| Surface | `rgba(255,255,255,0.04)` |
| Border | `rgba(255,255,255,0.08)` |
| Accent primary | `#6366f1` (indigo-500) |
| Accent secondary | `#a855f7` (purple-500) |
| Text primary | `#f8fafc` |
| Text muted | `#94a3b8` |

## File Structure

```
app/
  layout.tsx        ← root layout: dark class, font, metadata
  page.tsx          ← imports section components in order
  globals.css       ← base styles, CSS variables

components/
  sections/         ← one file per page section (Navbar, Hero, etc.)
  ui/               ← shadcn primitives only (Button, Input, Card…)

lib/
  utils.ts          ← cn() and other pure utilities
```

### Section components (`components/sections/`)

Each section is its own file, named in PascalCase. Sections are
`"use client"` only when they use Framer Motion or browser APIs.
Keep server components server-side wherever possible.

## Conventions

- **Semantic HTML**: use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- **Accessibility**: every interactive element needs a visible focus ring and
  appropriate ARIA label. Images need `alt`. Icon-only buttons need `aria-label`.
- **Responsive**: mobile-first. All layouts must work at 375px, 768px, and 1280px+.
- **No inline styles**: use Tailwind utilities or CSS variables only.
- **Animations**: prefer `motion/react` with `useInView` for scroll-triggered reveals;
  respect `prefers-reduced-motion` via `useReducedMotion()`.
- **Imports**: use `@/` alias for all internal imports.
- **No comments** unless the WHY is non-obvious.
