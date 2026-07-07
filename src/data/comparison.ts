import { heroLogos } from './logos'

export type ComparisonRow = {
  tool: string
  monogram: string
  logoAccent: string
  logo: string // real brand logo from the site's shared set
  reviewSlug: string // blog slug for this tool's full review
  price: string
  ease: number // out of 5
  integrations: number // count
  bestFor: string
  score: number
  affiliate: boolean
}

/** Customer Support AI shootout — the comparison table subject. */
export const comparisonTitle = 'Customer Support AI, head to head'
export const comparisonNote =
  'Scored on live support queues over three weeks. Ease of use is a blind-rated average from four operators.'

export const comparisonRows: ComparisonRow[] = [
  {
    tool: 'Replyloop',
    monogram: 'R',
    logoAccent: 'from-accent-600 to-indigo-500',
    logo: heroLogos[9], // Replit
    reviewSlug: 'replyloop-support-ai',
    price: '$0.08 / resolution',
    ease: 4.6,
    integrations: 40,
    bestFor: 'High-volume ecommerce',
    score: 9.1,
    affiliate: true,
  },
  {
    tool: 'SupportGrid',
    monogram: 'S',
    logoAccent: 'from-teal-500 to-accent-600',
    logo: heroLogos[1], // Perplexity
    reviewSlug: 'supportgrid-review',
    price: 'From $349/mo',
    ease: 4.2,
    integrations: 28,
    bestFor: 'B2B SaaS teams',
    score: 8.6,
    affiliate: true,
  },
  {
    tool: 'Tandem AI',
    monogram: 'T',
    logoAccent: 'from-sky-500 to-accent-600',
    logo: heroLogos[0], // Flux
    reviewSlug: 'tandem-ai-review',
    price: 'From $199/mo',
    ease: 4.8,
    integrations: 22,
    bestFor: 'Small teams getting started',
    score: 8.3,
    affiliate: false,
  },
  {
    tool: 'Frontdesk One',
    monogram: 'F',
    logoAccent: 'from-indigo-500 to-accent-700',
    logo: heroLogos[8], // OpenClaw
    reviewSlug: 'frontdesk-one-review',
    price: 'Custom',
    ease: 3.9,
    integrations: 55,
    bestFor: 'Enterprise contact centers',
    score: 8.8,
    affiliate: true,
  },
]
