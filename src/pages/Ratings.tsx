import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { sectorRatings, sectorTotals, type SectorRating } from '@/data/sectors'
import { Seo, SITE_URL } from '@/components/Seo'
import { CategoryIcon, Star, ArrowRight } from '@/assets/icons'
import { cn } from '@/utils/cn'
import { formatScore } from '@/utils/format'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/utils/motion'

type SortKey = 'rating' | 'reviews' | 'name'

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'rating', label: 'Rating' },
  { key: 'reviews', label: 'Reviews' },
  { key: 'name', label: 'A–Z' },
]

const avgTopScore =
  sectorRatings.reduce((n, s) => n + s.topScore, 0) / sectorRatings.length

function Stars({ score }: { score: number }) {
  const outOfFive = score / 2
  return (
    <span className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={13} height={13} filled={i < Math.round(outOfFive)} />
      ))}
    </span>
  )
}

function ScoreChip({ score }: { score: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 font-mono text-sm font-semibold text-white ring-1 ring-inset ring-white/15">
      <Star width={12} height={12} filled className="text-amber-400" />
      {formatScore(score)}
    </span>
  )
}

const metricLabels: { key: keyof SectorRating['breakdown']; label: string }[] = [
  { key: 'accuracy', label: 'Accuracy' },
  { key: 'ease', label: 'Ease' },
  { key: 'integrations', label: 'Integr.' },
  { key: 'value', label: 'Value' },
]

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.08em] text-neutral-400">
        <span>{label}</span>
        <span className="text-neutral-300">{value.toFixed(1)}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-accent-gradient"
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / 10) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <div className="font-mono text-3xl font-semibold text-white">{value}</div>
      <div className="mt-1 font-mono text-2xs uppercase tracking-[0.12em] text-neutral-500">
        {label}
      </div>
    </div>
  )
}

function SectorPanel({ sector, top }: { sector: SectorRating; top: boolean }) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'flex flex-col rounded-2xl border p-6 transition-colors',
        top ? 'border-accent-500/40 bg-accent-500/[0.08]' : 'border-white/10 bg-white/[0.02]',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-inset ring-white/10">
            <CategoryIcon name={sector.icon} width={20} height={20} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">{sector.name}</h3>
              {top && (
                <span className="rounded-full bg-accent-gradient px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-white">
                  Highest rated
                </span>
              )}
            </div>
            <span className="font-mono text-2xs uppercase tracking-[0.12em] text-neutral-500">
              {sector.reviewCount} reviews
            </span>
          </div>
        </div>
        <ScoreChip score={sector.topScore} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{sector.blurb}</p>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3">
        <div>
          <span className="font-mono text-2xs uppercase tracking-[0.12em] text-neutral-500">
            Top pick
          </span>
          <div className="text-sm font-semibold text-white">{sector.topPick}</div>
        </div>
        <Stars score={sector.topScore} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
        {metricLabels.map((m) => (
          <Bar key={m.key} label={m.label} value={sector.breakdown[m.key]} />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-mono text-2xs uppercase tracking-[0.12em] text-neutral-500">
          Sector avg {formatScore(sector.avgScore)} · {sector.businesses} businesses
        </span>
        <Link
          to={`/blog/${sector.reviewSlug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-300 hover:text-white"
        >
          Review <ArrowRight width={14} height={14} />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Ratings() {
  const [sortKey, setSortKey] = useState<SortKey>('rating')

  const sorted = useMemo(() => {
    const rows = [...sectorRatings]
    if (sortKey === 'rating') return rows.sort((a, b) => b.topScore - a.topScore)
    if (sortKey === 'reviews') return rows.sort((a, b) => b.reviewCount - a.reviewCount)
    return rows.sort((a, b) => a.name.localeCompare(b.name))
  }, [sortKey])

  const topSector = useMemo(
    () => [...sectorRatings].sort((a, b) => b.topScore - a.topScore)[0]?.slug,
    [],
  )

  return (
    <>
      <Seo
        title="Sector Ratings — operatorstudio.ai"
        description="AI software ratings across every sector we test — property management, hospitality, legal, accounting, marketing, revenue cycle, and construction."
        path="/ratings"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'AI Ratings by Sector',
          url: `${SITE_URL}/ratings`,
        }}
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-haze-radial" />
        <div className="container-editorial">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <span className="eyebrow">Sector Ratings</span>
            <h1 className="display mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-[3.25rem]">
              Ratings across every sector we test.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              A live scoreboard of how AI tools perform inside real businesses — sorted, scored, and
              broken down the same way in every industry.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:text-ink hover:shadow-card"
              >
                ← Back to home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 pt-10 md:pb-28">
        <div className="container-editorial">
          <div className="overflow-hidden rounded-[2rem] bg-[#0a0a0b] p-6 text-white md:p-10">
            {/* Toolbar */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-neutral-400">
                  Placeholder ratings · updated continuously
                </span>
              </div>
              <div className="inline-flex items-center gap-1 self-start rounded-xl border border-white/10 bg-white/5 p-1 sm:self-auto">
                <span className="px-2 font-mono text-2xs uppercase tracking-[0.1em] text-neutral-500">
                  Sort
                </span>
                {sortOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSortKey(opt.key)}
                    aria-pressed={sortKey === opt.key}
                    className={cn(
                      'rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-colors',
                      sortKey === opt.key
                        ? 'bg-white/10 text-white ring-1 ring-inset ring-white/15'
                        : 'text-neutral-400 hover:text-white',
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary stat tiles */}
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <StatTile label="Sectors tested" value={String(sectorTotals.sectors)} />
              <StatTile label="Reviews published" value={String(sectorTotals.reviews)} />
              <StatTile label="Businesses tested" value={String(sectorTotals.businesses)} />
              <StatTile label="Avg top score" value={formatScore(avgTopScore)} />
            </div>

            {/* Sector panels */}
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-6 grid gap-4 lg:grid-cols-2"
            >
              {sorted.map((sector) => (
                <SectorPanel key={sector.slug} sector={sector} top={sector.slug === topSector} />
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-neutral-400">
                Want the full methodology behind these scores?
              </p>
              <Link
                to="/methodology"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-lift"
              >
                See how we test
                <ArrowRight width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
