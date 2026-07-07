// Placeholder blog content.
// Every body paragraph is lorem-ipsum filler and every `image` is a caption for
// a PLACEHOLDER block (no real asset yet). References point to example.com and
// are meant to be swapped for real, indexable source links before publishing.

export type BlogSection = {
  heading?: string
  paragraphs: string[]
  /** When set, render a placeholder image block with this caption. */
  image?: string
}

export type BlogReference = { label: string; url: string }

export type BlogPost = {
  slug: string
  title: string
  category: string
  kind: 'Review' | 'Guide' | 'Field Note' | 'Comparison' | 'Analysis'
  date: string // ISO
  author: string
  readMinutes: number
  excerpt: string
  /** Caption for the hero placeholder image. */
  heroCaption: string
  body: BlogSection[]
  references: BlogReference[]
}

const L = {
  a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  b: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  c: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  d: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  e: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  f: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
}

// Reusable placeholder body. Each post gets a lightly-varied version.
function body(imgCaption: string, headings: [string, string, string]): BlogSection[] {
  return [
    { paragraphs: [L.a, L.b] },
    { heading: headings[0], paragraphs: [L.c, L.d], image: imgCaption },
    { heading: headings[1], paragraphs: [L.e, L.f] },
    { heading: headings[2], paragraphs: [L.b, L.c] },
  ]
}

const refs: BlogReference[] = [
  { label: 'Placeholder source — vendor documentation', url: 'https://example.com/source-1' },
  { label: 'Placeholder source — independent benchmark', url: 'https://example.com/source-2' },
  { label: 'Placeholder source — customer case study', url: 'https://example.com/source-3' },
]

const HEADINGS: [string, string, string] = [
  'What we tested',
  'What the numbers showed',
  'Who it’s for',
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'rentwise-ai-review',
    title: 'Rentwise AI put 300 leasing conversations on autopilot. Here’s what broke.',
    category: 'Property Management',
    kind: 'Review',
    date: '2025-03-04',
    author: 'Dana Whitfield',
    readMinutes: 11,
    excerpt:
      'We routed a month of inbound leasing traffic through Rentwise across two portfolios. The wins were real — and so were the three failure modes nobody warns you about.',
    heroCaption: 'Placeholder — Rentwise AI leasing dashboard screenshot',
    body: body('Placeholder — leasing conversation transcript', HEADINGS),
    references: refs,
  },
  {
    slug: 'voice-ai-hospitality-guide',
    title: 'The honest buyer’s guide to voice AI for hospitality',
    category: 'Hospitality',
    kind: 'Guide',
    date: '2025-02-26',
    author: 'Marcus Ledoux',
    readMinutes: 14,
    excerpt:
      'Every vendor demos in a silent room. We tested six voice agents in real lobbies at dinner rush to see which ones actually held up.',
    heroCaption: 'Placeholder — hotel front-desk voice agent in use',
    body: body('Placeholder — noise-floor test setup photo', HEADINGS),
    references: refs,
  },
  {
    slug: 'rcm-denials-field-note',
    title: 'Field note: what an AI denial-prevention agent misses at 2am',
    category: 'Revenue Cycle Management',
    kind: 'Field Note',
    date: '2025-02-19',
    author: 'Priya Nair',
    readMinutes: 8,
    excerpt:
      'Clean-claim rates went up. But shadowing the night billing shift surfaced the edge cases that still need a human in the loop.',
    heroCaption: 'Placeholder — claims workflow board',
    body: body('Placeholder — denial-code breakdown chart', HEADINGS),
    references: refs,
  },
  {
    slug: 'contract-review-shootout',
    title: 'Four contract-review tools, one messy MSA',
    category: 'Legal',
    kind: 'Comparison',
    date: '2025-02-11',
    author: 'Alex Romero',
    readMinutes: 12,
    excerpt:
      'We handed the same 62-page master agreement to four legal AI tools and had three attorneys grade the redlines blind.',
    heroCaption: 'Placeholder — redlined contract comparison',
    body: body('Placeholder — clause-accuracy scoreboard', HEADINGS),
    references: refs,
  },
  {
    slug: 'month-end-close-automation',
    title: 'Can AI actually run a month-end close? We tried it for real.',
    category: 'Accounting',
    kind: 'Review',
    date: '2025-02-03',
    author: 'Dana Whitfield',
    readMinutes: 13,
    excerpt:
      'A live test across six finance teams, one full close cycle, and a controller watching every exception the agent flagged.',
    heroCaption: 'Placeholder — reconciliation dashboard',
    body: body('Placeholder — close-cycle timeline', HEADINGS),
    references: refs,
  },
  {
    slug: 'marketing-copilots-lift',
    title: 'Do marketing AI copilots actually move the numbers?',
    category: 'Marketing',
    kind: 'Comparison',
    date: '2025-01-28',
    author: 'Marcus Ledoux',
    readMinutes: 10,
    excerpt:
      'We ran three content copilots against a human-only control group for eight weeks and tracked the lift that survived editing.',
    heroCaption: 'Placeholder — campaign performance chart',
    body: body('Placeholder — A/B lift results', HEADINGS),
    references: refs,
  },
  {
    slug: 'ledgerline-ai',
    title: 'Ledgerline AI review: the close-automation agent that earned Editor’s Choice',
    category: 'Accounting',
    kind: 'Review',
    date: '2025-03-01',
    author: 'Dana Whitfield',
    readMinutes: 12,
    excerpt:
      'The most dependable close-automation agent we tested. Ledgerline reconciled a full month of transactions with almost no supervision.',
    heroCaption: 'Placeholder — Ledgerline AI product screenshot',
    body: body('Placeholder — reconciliation accuracy breakdown', HEADINGS),
    references: refs,
  },
  {
    slug: 'concierge-voice',
    title: 'Concierge Voice review: a front-desk agent that survives a noisy lobby',
    category: 'Hospitality',
    kind: 'Review',
    date: '2025-02-24',
    author: 'Marcus Ledoux',
    readMinutes: 10,
    excerpt:
      'A front-desk voice agent that held natural conversations through noisy lobbies and handled after-hours calls cleanly.',
    heroCaption: 'Placeholder — Concierge Voice call console',
    body: body('Placeholder — booking-accuracy chart', HEADINGS),
    references: refs,
  },
  {
    slug: 'caseparse',
    title: 'CaseParse review: contract review a partner would actually sign off on',
    category: 'Legal',
    kind: 'Review',
    date: '2025-02-15',
    author: 'Alex Romero',
    readMinutes: 11,
    excerpt:
      'CaseParse surfaced non-standard clauses our test attorneys agreed with, with citations back to source every time.',
    heroCaption: 'Placeholder — CaseParse clause extraction view',
    body: body('Placeholder — citation trail example', HEADINGS),
    references: refs,
  },
  {
    slug: 'replyloop-support-ai',
    title: 'Replyloop review: the high-volume support agent that topped our shootout',
    category: 'Customer Support',
    kind: 'Review',
    date: '2025-01-22',
    author: 'Priya Nair',
    readMinutes: 12,
    excerpt:
      'Scored on live support queues over three weeks, Replyloop resolved high-volume ecommerce tickets at the lowest cost per resolution.',
    heroCaption: 'Placeholder — Replyloop queue dashboard',
    body: body('Placeholder — cost-per-resolution chart', HEADINGS),
    references: refs,
  },
  {
    slug: 'supportgrid-review',
    title: 'SupportGrid review: built for B2B SaaS support teams',
    category: 'Customer Support',
    kind: 'Review',
    date: '2025-01-18',
    author: 'Priya Nair',
    readMinutes: 9,
    excerpt:
      'SupportGrid balanced deflection and escalation well for B2B SaaS teams, with a deep integration catalog.',
    heroCaption: 'Placeholder — SupportGrid analytics view',
    body: body('Placeholder — deflection-rate chart', HEADINGS),
    references: refs,
  },
  {
    slug: 'tandem-ai-review',
    title: 'Tandem AI review: the easiest support agent to get live',
    category: 'Customer Support',
    kind: 'Review',
    date: '2025-01-14',
    author: 'Marcus Ledoux',
    readMinutes: 8,
    excerpt:
      'Tandem AI had the smoothest onboarding of anything we tested — the right pick for small teams getting started.',
    heroCaption: 'Placeholder — Tandem AI setup wizard',
    body: body('Placeholder — time-to-live comparison', HEADINGS),
    references: refs,
  },
  {
    slug: 'frontdesk-one-review',
    title: 'Frontdesk One review: an enterprise contact-center agent, stress-tested',
    category: 'Customer Support',
    kind: 'Review',
    date: '2025-01-10',
    author: 'Alex Romero',
    readMinutes: 11,
    excerpt:
      'With 55+ integrations, Frontdesk One is aimed at enterprise contact centers. We measured how it held up under real load.',
    heroCaption: 'Placeholder — Frontdesk One routing map',
    body: body('Placeholder — integration coverage matrix', HEADINGS),
    references: refs,
  },
  {
    slug: 'construction-ai-field-test',
    title: 'We put three construction AI assistants on a live jobsite',
    category: 'Construction',
    kind: 'Field Note',
    date: '2025-01-06',
    author: 'Dana Whitfield',
    readMinutes: 9,
    excerpt:
      'Takeoff, scheduling, and RFI assistants tested against field-crew workflows — and the gap between the demo and the trailer.',
    heroCaption: 'Placeholder — jobsite tablet with takeoff app',
    body: body('Placeholder — RFI turnaround chart', HEADINGS),
    references: refs,
  },
]

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug)
