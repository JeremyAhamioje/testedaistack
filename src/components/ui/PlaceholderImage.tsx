import { cn } from '@/utils/cn'

/**
 * A labelled placeholder block that stands in for a real image. Used across the
 * blog until real, indexable assets are dropped in.
 */
export function PlaceholderImage({
  caption,
  className,
  ratio = 'aspect-[16/9]',
}: {
  caption?: string
  className?: string
  ratio?: string
}) {
  return (
    <div
      role="img"
      aria-label={caption ? `Placeholder image: ${caption}` : 'Placeholder image'}
      className={cn(
        'relative grid place-items-center overflow-hidden rounded-xl border border-dashed border-line bg-haze',
        ratio,
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(45deg,transparent,transparent_11px,rgba(11,18,32,0.035)_11px,rgba(11,18,32,0.035)_22px)]" />
      <div className="relative flex flex-col items-center gap-2 px-6 py-8 text-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink-faint"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="m4 18 5-5 4 4 3-3 4 4" />
        </svg>
        <span className="font-mono text-2xs font-medium uppercase tracking-[0.12em] text-ink-faint">
          Image placeholder
        </span>
        {caption && <span className="max-w-xs text-xs leading-snug text-ink-muted">{caption}</span>}
      </div>
    </div>
  )
}
