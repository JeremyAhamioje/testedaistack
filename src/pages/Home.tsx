import { Hero } from '@/components/Hero'
import { DashboardSection } from '@/components/dashboard/DashboardSection'
import { FeaturedCategories } from '@/components/FeaturedCategories'
import { LibraryShowcase } from '@/components/LibraryShowcase'
import { FeaturedReviews } from '@/components/FeaturedReviews'
import { HowWeTest } from '@/components/HowWeTest'
import { ComparisonTable } from '@/components/ComparisonTable'
import { LatestReviews } from '@/components/LatestReviews'
import { Newsletter } from '@/components/Newsletter'
import { Seo, SITE_URL } from '@/components/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="testedaistack — Independent AI Software Reviews for Business"
        description="testedaistack tests AI software inside real businesses. Independent, hands-on reviews across property management, hospitality, legal, accounting, marketing, and more."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'testedaistack',
          url: SITE_URL,
          description:
            'An independent publication that tests AI software inside real businesses.',
        }}
      />
      <Hero />
      <DashboardSection />
      <FeaturedCategories />
      <LibraryShowcase />
      <FeaturedReviews />
      <HowWeTest />
      <ComparisonTable />
      <LatestReviews />
      <Newsletter />
    </>
  )
}
