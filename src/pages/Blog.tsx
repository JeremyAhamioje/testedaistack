import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Seo, SITE_URL } from '@/components/Seo'
import { formatDate } from '@/utils/format'
import { ArrowRight } from '@/assets/icons'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/utils/motion'

function Meta({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <span className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-faint">
      {formatDate(post.date)} · {post.readMinutes} min · {post.author}
    </span>
  )
}

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <Seo
        title="The Blog — testedaistack"
        description="Hands-on reviews, buyer’s guides, and field notes from testing AI software inside real businesses."
        path="/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'testedaistack Blog',
          url: `${SITE_URL}/blog`,
          blogPost: blogPosts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            datePublished: p.date,
            author: { '@type': 'Person', name: p.author },
            url: `${SITE_URL}/blog/${p.slug}`,
          })),
        }}
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-haze-radial" />
        <div className="container-editorial">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <span className="eyebrow">The Blog</span>
            <h1 className="display mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-[3.25rem]">
              Field notes from the test lab.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Reviews, buyer’s guides, and honest verdicts from deploying AI software inside real
              businesses. Written for operators, not vendors.
            </p>
          </motion.div>

          {/* Placeholder dev note */}
          <div className="mt-8 w-full max-w-xl -rotate-1 rounded-lg border border-dashed border-amber-400 bg-amber-100 px-4 py-3 text-amber-900 shadow-[0_8px_20px_-10px_rgba(180,120,0,0.5)]">
            <span className="mb-1 flex items-center gap-1.5 font-mono text-2xs font-semibold uppercase tracking-[0.12em] text-amber-700">
              📌 Placeholder
            </span>
            <p className="text-xs leading-relaxed">
              These posts use lorem-ipsum copy and placeholder image blocks. Swap the body text for
              real, indexable articles and replace the reference links before publishing.
            </p>
          </div>

          {/* Featured lead */}
          <Link
            to={`/blog/${featured.slug}`}
            className="group mt-12 grid gap-8 rounded-3xl border border-line bg-paper p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift md:grid-cols-2 md:p-6"
          >
            <PlaceholderImage caption={featured.heroCaption} ratio="aspect-[16/10]" />
            <div className="flex flex-col justify-center">
              <span className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                {featured.category} · {featured.kind}
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-ink transition-colors group-hover:text-accent-700 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                {featured.excerpt}
              </p>
              <div className="mt-4">
                <Meta post={featured} />
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                Read the article
                <ArrowRight
                  width={15}
                  height={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-editorial">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((post) => (
              <motion.article key={post.slug} variants={staggerItem} className="group flex h-full flex-col">
                <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <PlaceholderImage caption={post.heroCaption} ratio="aspect-[16/10]" />
                  <div className="flex flex-1 flex-col pt-4">
                    <span className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                      {post.category} · {post.kind}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent-700">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted text-pretty">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <Meta post={post} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
