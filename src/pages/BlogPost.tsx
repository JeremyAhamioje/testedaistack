import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts, getBlogPost } from '@/data/blog'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Seo, SITE_URL } from '@/components/Seo'
import { formatDate } from '@/utils/format'
import { ArrowRight, ArrowUpRight } from '@/assets/icons'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/utils/motion'

function NotFound() {
  return (
    <>
      <Seo
        title="Article not found — testedaistack"
        description="The article you’re looking for doesn’t exist or has moved."
        path="/blog"
      />
      <section className="container-editorial py-40 text-center">
        <span className="eyebrow justify-center">404</span>
        <h1 className="display mt-4 text-3xl sm:text-4xl">We couldn’t find that article.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          It may have moved, or the link is a placeholder that hasn’t been published yet.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Back to the blog <ArrowRight width={15} height={15} />
        </Link>
      </section>
    </>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) return <NotFound />

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${post.title} — testedaistack`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          articleSection: post.category,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', name: 'testedaistack' },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }}
      />

      <article className="pt-28 md:pt-36">
        <div className="container-editorial">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-2xs font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-accent-600"
            >
              ← The Blog
            </Link>
            <span className="mt-6 block font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-accent-600">
              {post.category} · {post.kind}
            </span>
            <h1 className="display mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-[2.9rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted text-pretty">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 border-y border-line py-4 font-mono text-2xs uppercase tracking-[0.12em] text-ink-faint">
              <span>{post.author}</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>{post.readMinutes} min read</span>
            </div>
          </motion.div>

          <div className="mx-auto mt-10 max-w-4xl">
            <PlaceholderImage caption={post.heroCaption} ratio="aspect-[16/8]" />
          </div>

          {/* Body */}
          <div className="mx-auto mt-12 max-w-3xl">
            {post.body.map((section, i) => (
              <section key={i} className="mt-8 first:mt-0">
                {section.heading && (
                  <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-[1.05rem] leading-[1.8] text-ink-soft">
                    {p}
                  </p>
                ))}
                {section.image && (
                  <figure className="mt-6">
                    <PlaceholderImage caption={section.image} ratio="aspect-[16/9]" />
                    <figcaption className="mt-2 text-center font-mono text-2xs uppercase tracking-[0.1em] text-ink-faint">
                      {section.image}
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}

            {/* References */}
            <div className="mt-14 rounded-2xl border border-line bg-haze p-6">
              <h2 className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                References
              </h2>
              <p className="mt-2 text-xs text-ink-muted">
                Placeholder links — replace with real, indexable sources before publishing.
              </p>
              <ul className="mt-4 space-y-3">
                {post.references.map((ref) => (
                  <li key={ref.url}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent-700 hover:text-accent-600"
                    >
                      {ref.label}
                      <ArrowUpRight
                        width={14}
                        height={14}
                        className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:text-accent-600"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-20 md:py-24">
        <div className="container-editorial">
          <h2 className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            More from the test lab
          </h2>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {related.map((p) => (
              <motion.article key={p.slug} variants={staggerItem} className="group flex h-full flex-col">
                <Link to={`/blog/${p.slug}`} className="flex h-full flex-col">
                  <PlaceholderImage caption={p.heroCaption} ratio="aspect-[16/10]" />
                  <div className="flex flex-1 flex-col pt-4">
                    <span className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent-700">
                      {p.title}
                    </h3>
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
