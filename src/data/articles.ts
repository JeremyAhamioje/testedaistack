export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  kind: 'Review' | 'Guide' | 'Field Note' | 'Comparison'
  readMinutes: number
  date: string // ISO
  author: string
  accent: string // gradient for the cover mark
}

export const articles: Article[] = [
  {
    slug: 'rentwise-ai-review',
    title: 'Rentwise AI put 300 leasing conversations on autopilot. Here’s what broke.',
    excerpt:
      'We routed a month of inbound leasing traffic through Rentwise across two portfolios. The wins were real — and so were the three failure modes nobody warns you about.',
    category: 'Property Management',
    kind: 'Review',
    readMinutes: 11,
    date: '2025-03-04',
    author: 'Dana Whitfield',
    accent: 'from-accent-600 to-indigo-500',
  },
  {
    slug: 'voice-ai-hospitality-guide',
    title: 'The honest buyer’s guide to voice AI for hospitality',
    excerpt:
      'Every vendor demos in a silent room. We tested six voice agents in real lobbies at dinner rush to see which ones actually held up.',
    category: 'Hospitality',
    kind: 'Guide',
    readMinutes: 14,
    date: '2025-02-26',
    author: 'Marcus Ledoux',
    accent: 'from-sky-500 to-accent-600',
  },
  {
    slug: 'rcm-denials-field-note',
    title: 'Field note: what an AI denial-prevention agent misses at 2am',
    excerpt:
      'Clean-claim rates went up. But shadowing the night billing shift surfaced the edge cases that still need a human in the loop.',
    category: 'Revenue Cycle',
    kind: 'Field Note',
    readMinutes: 8,
    date: '2025-02-19',
    author: 'Priya Nair',
    accent: 'from-teal-500 to-accent-600',
  },
  {
    slug: 'contract-review-shootout',
    title: 'Four contract-review tools, one messy MSA',
    excerpt:
      'We handed the same 62-page master agreement to four legal AI tools and had three attorneys grade the redlines blind.',
    category: 'Legal',
    kind: 'Comparison',
    readMinutes: 12,
    date: '2025-02-11',
    author: 'Alex Romero',
    accent: 'from-indigo-500 to-accent-700',
  },
  {
    slug: 'month-end-close-automation',
    title: 'Can AI actually run a month-end close? We tried it for real.',
    excerpt:
      'A live test across six finance teams, one full close cycle, and a controller watching every exception the agent flagged.',
    category: 'Accounting',
    kind: 'Review',
    readMinutes: 13,
    date: '2025-02-03',
    author: 'Dana Whitfield',
    accent: 'from-accent-600 to-blue-500',
  },
  {
    slug: 'marketing-copilots-lift',
    title: 'Do marketing AI copilots actually move the numbers?',
    excerpt:
      'We ran three content copilots against a human-only control group for eight weeks and tracked the lift that survived editing.',
    category: 'Marketing',
    kind: 'Comparison',
    readMinutes: 10,
    date: '2025-01-28',
    author: 'Marcus Ledoux',
    accent: 'from-fuchsia-500 to-accent-600',
  },
]
