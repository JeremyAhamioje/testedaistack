# testedaistack — Independent AI Software Reviews

A premium, editorial review platform for AI business software. Built as a fast, SEO-friendly
marketing/editorial site (not a SaaS app) with **React + Vite + TypeScript + TailwindCSS + Framer Motion**.

Design philosophy: editorial, premium, minimalist, trustworthy — inspired by the *feel* of
Wirecutter, G2, Linear, Stripe, and Notion, with an independent test-lab personality.

## Design system

- **Type:** Inter for display/body, JetBrains Mono as the "measured data" utility face
  (scores, eyebrows, metadata) — the signature that carries the brand's technical credibility.
- **Color:** white + soft haze (`#F7F9FC`), slate ink, a trust-blue accent (`#1D4ED8`),
  used with restraint plus a single blue→indigo gradient.
- **Motion:** soft Framer Motion — fade-up section reveals, staggered children, cards that
  lift on hover. Respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Architecture

```
src/
  components/        section + layout components (Hero, FeaturedReviews, ComparisonTable, ...)
    ui/              reusable primitives (Reveal, SectionHeading, Badge, ScoreBadge, ...)
  pages/             routed pages (Home, Methodology, Blog, BlogPost, Ratings)
  hooks/             useScrollProgress, useElevated
  utils/             cn, motion variants, formatters
  data/              typed content (categories, reviews, comparison, articles)
  assets/            inline SVG icon set
```

## Notes

- All tool/brand names are fictional to avoid trademark issues.
- Content is real, hand-written editorial copy — swap `src/data/*` for a CMS or MDX later.
- The comparison table is sortable and fully accessible (semantic `<table>` + mobile card fallback).
