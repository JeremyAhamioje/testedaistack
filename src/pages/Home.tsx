import { Hero } from '@/components/Hero'
import { DashboardSection } from '@/components/dashboard/DashboardSection'
import { FeaturedCategories } from '@/components/FeaturedCategories'
import { LibraryShowcase } from '@/components/LibraryShowcase'
import { HowWeTest } from '@/components/HowWeTest'
import { Newsletter } from '@/components/Newsletter'
import { Seo, SITE_URL } from '@/components/Seo'

// Scaffolded, not rendered yet (placeholder content): FeaturedReviews,
// ComparisonTable, LatestReviews. Re-add here once there's real review content.

export default function Home() {
  return (
    <>
      <Seo
        title="operatorstudio.ai — Independent AI Software Reviews for Business"
        description="operatorstudio.ai tests AI software inside real businesses. Independent, hands-on reviews across property management, hospitality, legal, accounting, marketing, and more."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'operatorstudio.ai',
          url: SITE_URL,
          description:
            'An independent publication that tests AI software inside real businesses.',
        }}
      />
      <Hero />
      <DashboardSection />
      <FeaturedCategories />
      <LibraryShowcase />
      <HowWeTest />
      <Newsletter />
    </>
  )
}
