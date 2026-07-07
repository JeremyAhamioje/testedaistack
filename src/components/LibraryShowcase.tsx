import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'
import { heroLogos } from '@/data/logos'

/**
 * Scroll-pinned "growing library" showcase (Mobbin-style).
 * The section is tall; an inner panel is pinned (sticky) while you scroll:
 *   0.00–0.40  the stacked logos disperse from the centre to surround the text
 *   0.40–0.82  the stat lines fade + rise in, one after another, under the intro
 *   0.82–1.00  brief dwell, then the pin releases into the next section
 * Honors prefers-reduced-motion with a static final-state layout.
 */

// Scatter targets, offsets from centre in vw (x) / vh (y). Kept clear of the
// central text column.
const POSITIONS = [
  { x: -40, y: -4 },
  { x: -31, y: -27 },
  { x: -26, y: 15 },
  { x: -34, y: 32 },
  { x: -18, y: -35 },
  { x: -20, y: 37 },
  { x: 40, y: -8 },
  { x: 31, y: -29 },
  { x: 26, y: 12 },
  { x: 34, y: 29 },
  { x: 18, y: -35 },
  { x: 22, y: 37 },
]

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

const LOGO_CLASS =
  'absolute left-1/2 top-1/2 -ml-7 -mt-7 h-14 w-14 rounded-2xl border border-line bg-white object-cover shadow-lg md:-ml-8 md:-mt-8 md:h-16 md:w-16'

function FloatingLogo({
  progress,
  src,
  pos,
}: {
  progress: MotionValue<number>
  src: string
  pos: { x: number; y: number }
}) {
  const spread = (p: number) => clamp01(p / 0.4)
  const x = useTransform(progress, (p) => `${pos.x * spread(p)}vw`)
  const y = useTransform(progress, (p) => `${pos.y * spread(p)}vh`)
  const scale = useTransform(progress, (p) => 0.55 + 0.45 * spread(p))
  const opacity = useTransform(progress, (p) => 0.35 + 0.65 * spread(p))
  return <motion.img src={src} alt="" loading="lazy" style={{ x, y, scale, opacity }} className={LOGO_CLASS} />
}

export function LibraryShowcase() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const l1 = useTransform(scrollYProgress, [0.4, 0.52], [0, 1])
  const l1y = useTransform(scrollYProgress, [0.4, 0.52], [26, 0])
  const l2 = useTransform(scrollYProgress, [0.55, 0.67], [0, 1])
  const l2y = useTransform(scrollYProgress, [0.55, 0.67], [26, 0])
  const l3 = useTransform(scrollYProgress, [0.7, 0.82], [0, 1])
  const l3y = useTransform(scrollYProgress, [0.7, 0.82], [26, 0])

  // Reduced motion → static final state, normal-height section.
  if (reduce) {
    return (
      <section id="library" className="relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-6">
          {heroLogos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className={LOGO_CLASS}
              style={{ left: `calc(50% + ${POSITIONS[i].x}vw)`, top: `calc(50% + ${POSITIONS[i].y}vh)`, marginLeft: 0, marginTop: 0, transform: 'translate(-50%, -50%)' }}
            />
          ))}
          <StatText />
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} id="library" className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {heroLogos.map((src, i) => (
          <FloatingLogo key={src} progress={scrollYProgress} src={src} pos={POSITIONS[i]} />
        ))}

        <div className="relative z-10 px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted sm:text-sm">
            A growing library of
          </p>
          <motion.h2
            style={{ opacity: l1, y: l1y }}
            className="display mt-4 text-5xl leading-[0.95] sm:text-6xl md:text-7xl"
          >
            180+ AI tools
          </motion.h2>
          <motion.h2
            style={{ opacity: l2, y: l2y }}
            className="display text-5xl leading-[1.02] sm:text-6xl md:text-7xl"
          >
            40+ real businesses
          </motion.h2>
          <motion.p
            style={{ opacity: l3, y: l3y }}
            className="mt-5 text-4xl font-extrabold text-ink-faint sm:text-5xl"
          >
            9,400+ tasks measured
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function StatText() {
  return (
    <div className="relative z-10 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted sm:text-sm">
        A growing library of
      </p>
      <h2 className="display mt-4 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">180+ AI tools</h2>
      <h2 className="display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">40+ real businesses</h2>
      <p className="mt-5 text-4xl font-extrabold text-ink-faint sm:text-5xl">9,400+ tasks measured</p>
    </div>
  )
}
