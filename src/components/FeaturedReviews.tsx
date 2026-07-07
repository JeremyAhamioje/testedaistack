import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { featuredReviews, type Review } from '@/data/reviews'
import { SectionHeading } from './ui/SectionHeading'
import { ArrowRight, Check, Minus } from '@/assets/icons'
import { formatScore } from '@/utils/format'
import { staggerContainer, staggerItem, viewportOnce } from '@/utils/motion'

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.article variants={staggerItem} className="group flex h-full flex-col">
      {/* Image card with logo overlay */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
        <img
          src={review.img}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-2xs font-medium uppercase tracking-[0.1em] text-ink backdrop-blur">
          {review.verdict}
        </span>
        <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient font-mono text-sm font-semibold text-white shadow-lift">
          {formatScore(review.score)}
        </span>

        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/10">
            <img src={review.logo} alt="" loading="lazy" className="h-full w-full object-cover" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold leading-tight text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
              {review.tool}
            </h3>
            <p className="font-mono text-2xs uppercase tracking-[0.12em] text-white/75">
              {review.category}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="text-sm leading-relaxed text-ink-soft text-pretty">{review.summary}</p>

        {/* Pros / cons (kept, trimmed to the essentials) */}
        <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2">
          <div>
            <span className="mono-label text-emerald-600">Pros</span>
            <ul className="mt-1.5 space-y-1">
              {review.pros.slice(0, 2).map((p) => (
                <li key={p} className="flex gap-1.5 text-xs leading-snug text-ink-muted">
                  <Check width={13} height={13} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="mono-label text-rose-500">Cons</span>
            <ul className="mt-1.5 space-y-1">
              {review.cons.slice(0, 2).map((c) => (
                <li key={c} className="flex gap-1.5 text-xs leading-snug text-ink-muted">
                  <Minus width={13} height={13} className="mt-0.5 shrink-0 text-rose-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Read review link (Stripe-style) */}
        <Link
          to={`/blog/${review.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-ink transition-colors hover:text-accent-600"
        >
          Read the {review.tool} review
          <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  )
}

export function FeaturedReviews() {
  return (
    <section id="featured-reviews" className="relative bg-haze py-20 md:py-28">
      {/* Placeholder dev note */}
      <div className="container-editorial">
        <div className="mb-8 w-full max-w-md -rotate-1 rounded-lg border border-dashed border-amber-400 bg-amber-100 px-4 py-3 text-amber-900 shadow-[0_8px_20px_-10px_rgba(180,120,0,0.5)] lg:absolute lg:right-6 lg:top-10 lg:z-30 lg:mb-0 lg:w-64">
          <span className="mb-1 flex items-center gap-1.5 font-mono text-2xs font-semibold uppercase tracking-[0.12em] text-amber-700">
            📌 Placeholder
          </span>
          <p className="text-xs leading-relaxed">
            Replace these with your own featured companies from tested tools — favourably ones you've
            built a relationship with.
          </p>
        </div>
      </div>

      <div className="container-editorial">
        <SectionHeading
          eyebrow="Featured Reviews"
          title="The tools that earned our top marks."
          description="Full, hands-on verdicts from live deployments — scored the same way every time so you can compare fairly."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredReviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
