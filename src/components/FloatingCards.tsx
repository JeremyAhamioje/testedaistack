import { motion } from 'framer-motion'
import { EASE } from '@/utils/motion'
import { Beaker, Check, Star } from '@/assets/icons'

type FloatCard = {
  label: string
  score: string
  monogram: string
  accent: string
  className: string
  depth: number
}

const cards: FloatCard[] = [
  {
    label: 'CRM AI',
    score: '9.1',
    monogram: 'C',
    accent: 'from-accent-600 to-indigo-500',
    className: 'left-0 top-6 md:top-10',
    depth: -10,
  },
  {
    label: 'Voice AI',
    score: '8.7',
    monogram: 'V',
    accent: 'from-sky-500 to-accent-600',
    className: 'right-0 top-0',
    depth: 12,
  },
  {
    label: 'Automation',
    score: '9.4',
    monogram: 'A',
    accent: 'from-teal-500 to-accent-600',
    className: 'left-2 bottom-6 md:bottom-4',
    depth: 8,
  },
  {
    label: 'Document AI',
    score: '8.9',
    monogram: 'D',
    accent: 'from-indigo-500 to-accent-700',
    className: 'right-1 bottom-10',
    depth: -8,
  },
]

export function FloatingCards() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* Soft ambient glow */}
      <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-haze-radial" />
      <div className="absolute inset-10 -z-10 rounded-[2rem] bg-accent-50/60 blur-2xl" />

      {/* Central verdict panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        className="absolute left-1/2 top-1/2 w-[60%] max-w-[240px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="animate-float-slow rounded-2xl border border-line bg-paper p-5 shadow-float">
          <div className="flex items-center justify-between">
            <span className="mono-label">Test verdict</span>
            <Beaker width={16} height={16} className="text-accent-600" />
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-mono text-4xl font-semibold leading-none text-ink">9.2</span>
            <span className="pb-1 font-mono text-2xs text-ink-faint">/ 10</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-accent-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} width={13} height={13} filled />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {['Accuracy', 'Ease of use', 'Integrations'].map((row, i) => (
              <div key={row} className="flex items-center gap-2">
                <span className="w-[86px] shrink-0 text-2xs text-ink-muted">{row}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-haze">
                  <motion.span
                    className="block h-full rounded-full bg-accent-gradient"
                    initial={{ width: 0 }}
                    animate={{ width: ['92%', '84%', '90%'][i] }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.5 + i * 0.12 }}
                  />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5">
            <Check width={13} height={13} className="text-emerald-600" />
            <span className="font-mono text-2xs font-medium text-emerald-700">
              Tested in 6 businesses
            </span>
          </div>
        </div>
      </motion.div>

      {/* Orbiting category cards */}
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.1 }}
          className={`absolute ${c.className}`}
          style={{ perspective: 600 }}
        >
          <motion.div
            animate={{ y: [0, c.depth, 0] }}
            transition={{
              duration: 5 + i,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-paper/95 py-2.5 pl-2.5 pr-4 shadow-card backdrop-blur"
          >
            <span
              className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${c.accent} text-sm font-semibold text-white`}
            >
              {c.monogram}
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-semibold text-ink">{c.label}</span>
              <span className="font-mono text-2xs text-ink-faint">score {c.score}</span>
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Small floating support-AI pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 shadow-card"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-mono text-2xs font-medium text-ink-soft">Customer Support AI</span>
        </motion.span>
      </motion.div>
    </div>
  )
}
