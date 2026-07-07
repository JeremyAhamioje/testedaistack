export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={
        'font-extrabold lowercase tracking-tight text-ink ' +
        (compact ? 'text-base' : 'text-[1.15rem]')
      }
    >
      testedaistack
    </span>
  )
}
