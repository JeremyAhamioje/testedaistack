import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { viewportOnce } from '@/utils/motion'

// The engagement process, as a serpentine flow on a pure-black canvas. No
// imagery — just the nodes and connective arrows. Nodes animate in one after
// another following the flow order, with a light continuous nudge on arrows.
const STEPS = [
  'Share your goals and challenges',
  'We identify the right-fit tools from our tool catalog',
  'We present curated options with use cases',
  'You choose the tools that fit your goals',
  'We support integration and uncover new use cases',
  'You drive measurable business outcomes with AI',
]

const ARROW = '#5b8def'
const NODE_BG = '#131b2e'

const container: Variants = { hidden: {}, show: {} }

// Entrance: each node/arrow pops in on a delay set by its position in the flow.
const nodeVar: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.09, type: 'spring', stiffness: 240, damping: 20 },
  }),
}

function Box({ order, children, className = '' }: { order: number; children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={nodeVar}
      custom={order}
      className={
        'flex min-h-[92px] items-center justify-center rounded-xl px-5 py-4 text-center text-sm font-semibold leading-snug text-white shadow-[0_16px_40px_-24px_rgba(0,0,0,0.9)] ring-1 ring-inset ring-white/10 ' +
        className
      }
      style={{ backgroundColor: NODE_BG }}
    >
      {children}
    </motion.div>
  )
}

function FlowArrow({
  dir,
  order,
  className = '',
}: {
  dir: 'right' | 'left' | 'down'
  order: number
  className?: string
}) {
  const nudge =
    dir === 'right' ? { x: [0, 4, 0] } : dir === 'left' ? { x: [0, -4, 0] } : { y: [0, 4, 0] }

  const svg =
    dir === 'down' ? (
      <svg width="24" height="44" viewBox="0 0 24 44" fill="none" stroke={ARROW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v30" />
        <path d="M6 28l6 8 6-8" />
      </svg>
    ) : dir === 'right' ? (
      <svg width="46" height="24" viewBox="0 0 46 24" fill="none" stroke={ARROW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h34" />
        <path d="M30 6l10 6-10 6" />
      </svg>
    ) : (
      <svg width="46" height="24" viewBox="0 0 46 24" fill="none" stroke={ARROW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 12H8" />
        <path d="M16 6L6 12l10 6" />
      </svg>
    )

  return (
    <motion.div variants={nodeVar} custom={order} className={'flex items-center justify-center ' + className}>
      <motion.div
        animate={nudge}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        {svg}
      </motion.div>
    </motion.div>
  )
}

export function WorkflowDiagram() {
  return (
    <div className="rounded-2xl bg-black p-6 ring-1 ring-white/10 md:p-10">
      {/* Desktop: serpentine grid (top row →, drop down on the right, bottom row ←) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="hidden md:grid"
        style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr', columnGap: 8, rowGap: 4 }}
      >
        {/* Row 1 → (flow order 0–4) */}
        <Box order={0} className="[grid-area:1/1]">{STEPS[0]}</Box>
        <FlowArrow dir="right" order={1} className="self-center [grid-area:1/2]" />
        <Box order={2} className="[grid-area:1/3]">{STEPS[1]}</Box>
        <FlowArrow dir="right" order={3} className="self-center [grid-area:1/4]" />
        <Box order={4} className="[grid-area:1/5]">{STEPS[2]}</Box>

        {/* Connector down on the right (flow order 5) */}
        <FlowArrow dir="down" order={5} className="justify-self-center [grid-area:2/5]" />

        {/* Row 2 ← (flow order 6–10, laid out right→left) */}
        <Box order={10} className="[grid-area:3/1]">{STEPS[5]}</Box>
        <FlowArrow dir="left" order={9} className="self-center [grid-area:3/2]" />
        <Box order={8} className="[grid-area:3/3]">{STEPS[4]}</Box>
        <FlowArrow dir="left" order={7} className="self-center [grid-area:3/4]" />
        <Box order={6} className="[grid-area:3/5]">{STEPS[3]}</Box>
      </motion.div>

      {/* Mobile: single column, arrows point down */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-col items-stretch gap-1 md:hidden"
      >
        {STEPS.map((step, i) => (
          <div key={step} className="contents">
            <Box order={i * 2}>{step}</Box>
            {i < STEPS.length - 1 && <FlowArrow dir="down" order={i * 2 + 1} className="py-1" />}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
