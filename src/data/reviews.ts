import { heroLogos } from './logos'

export type ScoreBreakdown = {
  accuracy: number
  ease: number
  integrations: number
  value: number
}

export type Review = {
  slug: string
  img: string // card background image
  logo: string // small brand logo (from the site's shared logo set)
  tool: string
  monogram: string // 1–2 letters for the logo mark
  logoAccent: string // tailwind gradient
  category: string
  categorySlug: string
  score: number
  verdict: string
  summary: string
  pros: string[]
  cons: string[]
  testedIn: number // number of real businesses
  hoursTested: number
  bestFor: string
  price: string
  affiliate: boolean
  breakdown: ScoreBreakdown
}

export const featuredReviews: Review[] = [
  {
    slug: 'ledgerline-ai',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783419527/Screenshot_2026-07-07_111128_wp1vp6.png',
    logo: heroLogos[7], // Buildium
    tool: 'Ledgerline AI',
    monogram: 'L',
    logoAccent: 'from-accent-600 to-indigo-500',
    category: 'Accounting',
    categorySlug: 'accounting',
    score: 9.2,
    verdict: 'Editor’s Choice',
    summary:
      'The most dependable close-automation agent we tested. Ledgerline reconciled a full month of transactions with almost no supervision and flagged the exceptions that actually mattered.',
    pros: [
      'Reconciled 94% of transactions without a human touch',
      'Audit trail is genuinely defensible',
      'Clean handoff to controllers on exceptions',
    ],
    cons: ['Setup needs a real chart-of-accounts cleanup first', 'Priced for mid-market and up'],
    testedIn: 6,
    hoursTested: 80,
    bestFor: 'Mid-market finance teams closing monthly',
    price: 'From $499/mo',
    affiliate: true,
    breakdown: { accuracy: 9.4, ease: 8.6, integrations: 9.0, value: 8.9 },
  },
  {
    slug: 'concierge-voice',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783419676/Screenshot_2026-07-07_111047_nrq5es.png',
    logo: heroLogos[10], // ElevenLabs
    tool: 'Concierge Voice',
    monogram: 'C',
    logoAccent: 'from-sky-500 to-accent-600',
    category: 'Hospitality',
    categorySlug: 'hospitality',
    score: 8.7,
    verdict: 'Best Voice AI',
    summary:
      'A front-desk voice agent that held natural conversations through noisy lobbies. It handled bookings and after-hours calls cleanly, though it still escalates edge cases more than we’d like.',
    pros: [
      'Convincingly natural on live guest calls',
      'Booking accuracy stayed high under accents and noise',
      'Sensible, transparent escalation to staff',
    ],
    cons: ['Occasional over-escalation on complex requests', 'Analytics dashboard feels thin'],
    testedIn: 4,
    hoursTested: 60,
    bestFor: 'Independent hotels and multi-location dining',
    price: 'From $299/mo',
    affiliate: true,
    breakdown: { accuracy: 8.9, ease: 8.8, integrations: 8.2, value: 8.9 },
  },
  {
    slug: 'caseparse',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783419526/Screenshot_2026-07-07_111154_ajc8sl.png',
    logo: heroLogos[5], // NotebookLM
    tool: 'CaseParse',
    monogram: 'CP',
    logoAccent: 'from-indigo-500 to-accent-700',
    category: 'Legal',
    categorySlug: 'legal',
    score: 8.9,
    verdict: 'Best Document AI',
    summary:
      'Contract review that a partner would sign off on. CaseParse surfaced non-standard clauses our test attorneys agreed with, with citations back to source every time.',
    pros: [
      'Citations to source on every extracted clause',
      'Caught non-standard indemnity language reliably',
      'Redline suggestions read like a junior associate’s',
    ],
    cons: ['Slower on 100+ page master agreements', 'No native e-signature step yet'],
    testedIn: 5,
    hoursTested: 72,
    bestFor: 'In-house counsel and boutique firms',
    price: 'From $650/mo',
    affiliate: false,
    breakdown: { accuracy: 9.1, ease: 8.5, integrations: 8.7, value: 8.8 },
  },
]
