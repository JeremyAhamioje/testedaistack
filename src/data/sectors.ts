// Placeholder ratings across every sector we test — powers the /ratings dashboard.
// Numbers are illustrative until the real scoring data is wired in.

export type SectorRating = {
  slug: string
  name: string
  icon: string // key in CategoryIcon
  reviewCount: number
  blurb: string
  topPick: string
  reviewSlug: string // blog slug for the top pick's review
  topScore: number // top pick's overall score (out of 10)
  avgScore: number // sector-wide average (out of 10)
  businesses: number // real businesses the tools ran inside
  breakdown: { accuracy: number; ease: number; integrations: number; value: number }
}

export const sectorRatings: SectorRating[] = [
  {
    slug: 'property-management',
    name: 'Property Management',
    icon: 'building',
    reviewCount: 24,
    blurb: 'Leasing agents, maintenance triage, and resident comms tested across live portfolios.',
    topPick: 'Rentwise AI',
    reviewSlug: 'rentwise-ai-review',
    topScore: 9.1,
    avgScore: 8.2,
    businesses: 9,
    breakdown: { accuracy: 9.0, ease: 8.7, integrations: 8.9, value: 8.8 },
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: 'bell',
    reviewCount: 18,
    blurb: 'Front-desk voice agents and booking assistants trialed in real hotels and restaurants.',
    topPick: 'Concierge Voice',
    reviewSlug: 'concierge-voice',
    topScore: 8.7,
    avgScore: 8.0,
    businesses: 7,
    breakdown: { accuracy: 8.9, ease: 8.8, integrations: 8.2, value: 8.9 },
  },
  {
    slug: 'revenue-cycle-management',
    name: 'Revenue Cycle Management',
    icon: 'pulse',
    reviewCount: 15,
    blurb: 'Claims scrubbing, coding, and denial workflows measured against clean-claim rates.',
    topPick: 'ClaimIQ',
    reviewSlug: 'rcm-denials-field-note',
    topScore: 8.9,
    avgScore: 7.8,
    businesses: 6,
    breakdown: { accuracy: 9.2, ease: 8.1, integrations: 8.4, value: 8.5 },
  },
  {
    slug: 'legal',
    name: 'Legal',
    icon: 'scale',
    reviewCount: 21,
    blurb: 'Contract review and discovery tools stress-tested on redlines and matter files.',
    topPick: 'CaseParse',
    reviewSlug: 'caseparse',
    topScore: 8.9,
    avgScore: 8.1,
    businesses: 8,
    breakdown: { accuracy: 9.1, ease: 8.5, integrations: 8.7, value: 8.8 },
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    icon: 'calculator',
    reviewCount: 19,
    blurb: 'Close automation and reconciliation agents run through a full monthly cycle.',
    topPick: 'Ledgerline AI',
    reviewSlug: 'ledgerline-ai',
    topScore: 9.2,
    avgScore: 8.3,
    businesses: 6,
    breakdown: { accuracy: 9.4, ease: 8.6, integrations: 9.0, value: 8.9 },
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    icon: 'megaphone',
    reviewCount: 27,
    blurb: 'Content, SEO, and campaign copilots benchmarked on output quality and lift.',
    topPick: 'Draftline',
    reviewSlug: 'marketing-copilots-lift',
    topScore: 8.6,
    avgScore: 7.9,
    businesses: 11,
    breakdown: { accuracy: 8.4, ease: 9.0, integrations: 8.3, value: 8.1 },
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: 'hardhat',
    reviewCount: 12,
    blurb: 'Takeoff, scheduling, and RFI assistants tested against field-crew workflows.',
    topPick: 'SiteSync',
    reviewSlug: 'construction-ai-field-test',
    topScore: 8.4,
    avgScore: 7.6,
    businesses: 5,
    breakdown: { accuracy: 8.5, ease: 8.0, integrations: 8.2, value: 8.3 },
  },
]

export const sectorTotals = {
  sectors: sectorRatings.length,
  reviews: sectorRatings.reduce((n, s) => n + s.reviewCount, 0),
  businesses: sectorRatings.reduce((n, s) => n + s.businesses, 0),
}
