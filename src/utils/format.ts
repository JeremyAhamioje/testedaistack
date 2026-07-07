/** Format a numeric score to one decimal, e.g. 9 -> "9.0". */
export function formatScore(score: number): string {
  return score.toFixed(1)
}

/** Human date, e.g. "Mar 4, 2025". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
