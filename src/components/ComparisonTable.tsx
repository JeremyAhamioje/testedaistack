import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  comparisonRows,
  comparisonTitle,
  comparisonNote,
  type ComparisonRow,
} from '@/data/comparison'
import { Reveal } from './ui/Reveal'
import { ArrowRight, Star } from '@/assets/icons'
import { cn } from '@/utils/cn'
import { formatScore } from '@/utils/format'

type SortKey = 'score' | 'ease' | 'integrations'

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'score', label: 'Rating' },
  { key: 'ease', label: 'Ease of use' },
  { key: 'integrations', label: 'Integrations' },
]

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} width={14} height={14} filled={i < Math.round(value)} />
        ))}
      </span>
      <span className="font-mono text-2xs font-medium text-neutral-300">{value.toFixed(1)}</span>
    </span>
  )
}

function LogoChip({ src, size = 'md' }: { src: string; size?: 'sm' | 'md' }) {
  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center overflow-hidden rounded-lg bg-white ring-1 ring-white/10',
        size === 'sm' ? 'h-8 w-8' : 'h-9 w-9',
      )}
    >
      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
    </span>
  )
}

function ScoreChip({ score, small = false }: { score: number; small?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 font-mono text-sm font-semibold text-white ring-1 ring-inset ring-white/15">
      <Star width={small ? 11 : 12} height={small ? 11 : 12} filled className="text-amber-400" />
      {formatScore(score)}
    </span>
  )
}

export function ComparisonTable() {
  const [sortKey, setSortKey] = useState<SortKey>('score')

  const rows = useMemo(
    () => [...comparisonRows].sort((a, b) => b[sortKey] - a[sortKey]),
    [sortKey],
  )
  const topTool = rows[0]?.tool

  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-[#0c0c0e] px-6 py-12 text-white md:px-12 md:py-14">
            {/* Header: title left, note right */}
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-2xs font-medium uppercase tracking-[0.18em] text-accent-400">
                  <span className="h-px w-6 bg-accent-400/60" /> Comparison
                </span>
                <h2 className="display mt-4 text-4xl leading-[1.05] text-white sm:text-5xl">
                  {comparisonTitle}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400 md:text-base">{comparisonNote}</p>
            </div>

            {/* Centered sort toggle */}
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
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
                      'rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
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

            {/* Desktop table */}
            <div className="mt-10 hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] lg:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    {['Feature', 'Price', 'Ease of Use', 'Integrations', 'Best For', 'Rating', ''].map(
                      (h) => (
                        <th
                          key={h}
                          scope="col"
                          className="px-6 py-4 font-mono text-2xs font-semibold uppercase tracking-[0.12em] text-neutral-500"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence initial={false}>
                    {rows.map((row) => (
                      <motion.tr
                        key={row.tool}
                        layout
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          'border-b border-white/[0.07] transition-colors last:border-0 hover:bg-white/[0.03]',
                          row.tool === topTool && 'bg-accent-500/10',
                        )}
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <LogoChip src={row.logo} />
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white">{row.tool}</span>
                              {row.tool === topTool && (
                                <span className="rounded-full bg-accent-gradient px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-white">
                                  Top
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 font-mono text-sm text-neutral-300">{row.price}</td>
                        <td className="px-6 py-5">
                          <Stars value={row.ease} />
                        </td>
                        <td className="px-6 py-5 font-mono text-sm text-neutral-300">
                          {row.integrations}+
                        </td>
                        <td className="px-6 py-5 text-sm text-neutral-400">{row.bestFor}</td>
                        <td className="px-6 py-5">
                          <ScoreChip score={row.score} />
                        </td>
                        <td className="px-6 py-5">
                          <Link
                            to={`/blog/${row.reviewSlug}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-300 hover:text-white"
                          >
                            Review <ArrowRight width={14} height={14} />
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
              <AnimatePresence initial={false}>
                {rows.map((row) => (
                  <MobileCompareCard key={row.tool} row={row} top={row.tool === topTool} />
                ))}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                to="/ratings"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-lift"
              >
                See ratings for all sectors
                <ArrowRight width={16} height={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function MobileCompareCard({ row, top }: { row: ComparisonRow; top: boolean }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'rounded-2xl border p-5',
        top ? 'border-accent-500/40 bg-accent-500/10' : 'border-white/10 bg-white/[0.02]',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoChip src={row.logo} size="sm" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{row.tool}</span>
            {top && (
              <span className="rounded-full bg-accent-gradient px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-white">
                Top
              </span>
            )}
          </div>
        </div>
        <ScoreChip score={row.score} small />
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div>
          <dt className="font-mono text-2xs uppercase tracking-[0.1em] text-neutral-500">Price</dt>
          <dd className="mt-0.5 font-mono text-neutral-300">{row.price}</dd>
        </div>
        <div>
          <dt className="font-mono text-2xs uppercase tracking-[0.1em] text-neutral-500">Integrations</dt>
          <dd className="mt-0.5 font-mono text-neutral-300">{row.integrations}+</dd>
        </div>
        <div>
          <dt className="font-mono text-2xs uppercase tracking-[0.1em] text-neutral-500">Ease</dt>
          <dd className="mt-1">
            <Stars value={row.ease} />
          </dd>
        </div>
        <div>
          <dt className="font-mono text-2xs uppercase tracking-[0.1em] text-neutral-500">Best for</dt>
          <dd className="mt-0.5 text-neutral-400">{row.bestFor}</dd>
        </div>
      </dl>
    </motion.div>
  )
}
