import type { Variants } from 'framer-motion'

/**
 * Shared Framer Motion variants so animation feels consistent across the site.
 * Motion is deliberately soft: short distances, gentle easing, quick settle.
 */

export const EASE = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

/** Parent container that staggers its children's reveals. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

/** A single item inside a staggered container. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Standard viewport config: animate once, trigger a little early. */
export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' }
