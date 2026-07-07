import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Star } from '@/assets/icons'
import { formatScore } from '@/utils/format'

/* ---------- Badge ---------- */

type BadgeProps = {
  children: ReactNode
  tone?: 'accent' | 'neutral' | 'success' | 'outline'
  className?: string
}

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
    accent: 'bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-100',
    neutral: 'bg-haze text-ink-soft ring-1 ring-inset ring-line',
    success: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100',
    outline: 'text-ink-muted ring-1 ring-inset ring-line',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-2xs font-medium uppercase tracking-[0.1em]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

/* ---------- ScoreBadge ----------
   The signature verdict element: a mono score with a small labelled meter. */

export function ScoreBadge({
  score,
  size = 'md',
  label = 'Verdict',
}: {
  score: number
  size?: 'sm' | 'md' | 'lg'
  label?: string
}) {
  const dims = {
    sm: { box: 'h-12 w-12', num: 'text-base', pad: 'p-0.5' },
    md: { box: 'h-16 w-16', num: 'text-xl', pad: 'p-0.5' },
    lg: { box: 'h-20 w-20', num: 'text-2xl', pad: 'p-1' },
  }[size]

  return (
    <div className="inline-flex flex-col items-center gap-1.5">
      <div
        className={cn(
          'relative grid place-items-center rounded-2xl bg-accent-gradient text-white shadow-lift',
          dims.box,
          dims.pad,
        )}
      >
        <div className="grid h-full w-full place-items-center rounded-[0.85rem] bg-ink/[0.06]">
          <span className={cn('font-mono font-semibold leading-none tracking-tight', dims.num)}>
            {formatScore(score)}
          </span>
        </div>
      </div>
      <span className="mono-label">{label}</span>
    </div>
  )
}

/* ---------- RatingStars ---------- */

export function RatingStars({
  value,
  outOf = 5,
  showValue = true,
  className,
}: {
  value: number
  outOf?: number
  showValue?: boolean
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center gap-0.5 text-accent-500">
        {Array.from({ length: outOf }).map((_, i) => (
          <Star key={i} width={14} height={14} filled={i < Math.round(value)} />
        ))}
      </div>
      {showValue && (
        <span className="font-mono text-2xs font-medium text-ink-soft">{value.toFixed(1)}</span>
      )}
    </div>
  )
}

/* ---------- LogoMark ----------
   A monogram tile standing in for a product logo. */

export function LogoMark({
  monogram,
  accent,
  size = 'md',
}: {
  monogram: string
  accent: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const dims = {
    sm: 'h-9 w-9 text-sm rounded-lg',
    md: 'h-12 w-12 text-base rounded-xl',
    lg: 'h-14 w-14 text-lg rounded-2xl',
  }[size]
  return (
    <div
      className={cn(
        'grid shrink-0 place-items-center bg-gradient-to-br font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20',
        accent,
        dims,
      )}
      aria-hidden="true"
    >
      {monogram}
    </div>
  )
}
