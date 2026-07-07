/**
 * Tiny classnames helper — joins truthy class strings.
 * Keeps component markup readable without pulling in a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
