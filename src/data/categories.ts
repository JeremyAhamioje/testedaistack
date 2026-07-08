export type Category = {
  slug: string
  name: string
  blurb: string
  reviewCount: number
  topPick: string
  icon: string // key mapped in CategoryIcon
  accent: string // tailwind gradient stops
  img: string // background image for the carousel card
}

export const categories: Category[] = [
  {
    slug: 'property-management',
    name: 'Property Management',
    blurb: 'Leasing agents, maintenance triage, and resident comms tested across live portfolios.',
    reviewCount: 24,
    topPick: 'Rentwise AI',
    icon: 'building',
    accent: 'from-accent-600 to-indigo-500',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783415113/Gemini_Generated_Image_5xgx15xgx15xgx15_ksjymd.png',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    blurb: 'Front-desk voice agents and booking assistants trained in real hotels and restaurants.',
    reviewCount: 18,
    topPick: 'Concierge Voice',
    icon: 'bell',
    accent: 'from-sky-500 to-accent-600',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783415113/Gemini_Generated_Image_lcrczvlcrczvlcrc_ulmilb.png',
  },
  {
    slug: 'revenue-cycle-management',
    name: 'Revenue Cycle Management',
    blurb: 'Claims scrubbing, coding, and denial workflows measured against clean-claim rates.',
    reviewCount: 15,
    topPick: 'ClaimIQ',
    icon: 'pulse',
    accent: 'from-teal-500 to-accent-600',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783415111/Gemini_Generated_Image_qio4qlqio4qlqio4_ljp1sq.png',
  },
  {
    slug: 'legal',
    name: 'Legal',
    blurb: 'Contract review and discovery tools stress-tested on redlines and matter files.',
    reviewCount: 21,
    topPick: 'CaseParse',
    icon: 'scale',
    accent: 'from-indigo-500 to-accent-700',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783415112/Gemini_Generated_Image_lafqbtlafqbtlafq_aobvnu.png',
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    blurb: 'Close automation and reconciliation agents run through a full monthly cycle.',
    reviewCount: 19,
    topPick: 'Ledgerline AI',
    icon: 'calculator',
    accent: 'from-accent-600 to-blue-500',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783415113/Gemini_Generated_Image_q1u07hq1u07hq1u0_awkqrf.png',
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    blurb: 'Content, SEO, and campaign copilots benchmarked on output quality and lift.',
    reviewCount: 27,
    topPick: 'Draftline',
    icon: 'megaphone',
    accent: 'from-fuchsia-500 to-accent-600',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783415119/Gemini_Generated_Image_y9h20dy9h20dy9h2_qjel52.png',
  },
  {
    slug: 'construction',
    name: 'Construction',
    blurb: 'Takeoff, scheduling, and RFI assistants tested against field-crew workflows.',
    reviewCount: 12,
    topPick: 'SiteSync',
    icon: 'hardhat',
    accent: 'from-amber-500 to-accent-600',
    img: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783416188/How_AI_is_Transforming_Construction_Project_Management_pa9jtw.jpg',
  },
]
