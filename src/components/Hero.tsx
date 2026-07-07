import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem, EASE } from '@/utils/motion'
import { ArrowRight, CategoryIcon } from '@/assets/icons'
import { heroLogos as LOGOS } from '@/data/logos'

// Rotating industry sets for the social-proof line. Each set micro-animates
// out and the next fades in.
const INDUSTRY_SETS: { name: string; icon: string }[][] = [
  [
    { name: 'Real estate', icon: 'building' },
    { name: 'Legal', icon: 'scale' },
    { name: 'Accounting', icon: 'calculator' },
    { name: 'Marketing', icon: 'megaphone' },
  ],
  [
    { name: 'Healthcare', icon: 'pulse' },
    { name: 'Construction', icon: 'hardhat' },
    { name: 'Retail', icon: 'cart' },
    { name: 'Education', icon: 'cap' },
  ],
]

function LogoCycler() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % LOGOS.length), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div aria-hidden="true" className="relative h-28 w-28">
      {/* Stacked cards peeking behind, à la Mobbin, for a little depth */}
      <div className="absolute inset-x-4 -top-2.5 h-full rounded-[26px] border border-line bg-paper/60" />
      <div className="absolute inset-x-2 -top-1 h-full rounded-[26px] border border-line bg-paper/80" />
      <div className="relative h-28 w-28 overflow-hidden rounded-[26px] border border-line bg-white shadow-card">
        <AnimatePresence>
          <motion.img
            key={i}
            src={LOGOS[i]}
            alt=""
            loading="eager"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.35, ease: EASE }}
            // object-contain + padding so full logos (incl. their text) never crop
            className="absolute inset-0 h-full w-full object-contain p-2.5"
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

function IndustryRotator() {
  const [s, setS] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setS((v) => (v + 1) % INDUSTRY_SETS.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="font-mono text-2xs font-medium uppercase tracking-[0.14em] text-ink-faint">
        We work with industries such as
      </p>
      {/* Grid-stack crossfade: both sets share one cell so one is always visible
          (no blank gap), and the container still sizes to content / wraps. */}
      <div className="mt-5 grid justify-center">
        <AnimatePresence initial={false}>
          <motion.div
            key={s}
            style={{ gridArea: '1 / 1' }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ink-faint"
          >
            {INDUSTRY_SETS[s].map((item) => (
              <span key={item.name} className="inline-flex items-center gap-2 text-sm font-medium">
                <CategoryIcon name={item.icon} width={18} height={18} />
                {item.name}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 md:pt-44">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="show"
        className="container-editorial flex flex-col items-center text-center"
      >
        <motion.div variants={staggerItem}>
          <LogoCycler />
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="display mt-10 max-w-4xl text-5xl leading-[1.02] sm:text-6xl md:text-[4.5rem]"
        >
          Find the best AI tools
          <br className="hidden sm:block" /> for your business.
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted text-pretty"
        >
          We test AI software in real businesses — so you know what actually works, not what a demo
          promises.
        </motion.p>

        <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#newsletter"
            className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-lift"
          >
            Work with us
          </a>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:text-ink hover:shadow-card"
          >
            Read our blogs
            <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.div variants={staggerItem} className="w-full">
          <IndustryRotator />
        </motion.div>
      </motion.div>
    </section>
  )
}
