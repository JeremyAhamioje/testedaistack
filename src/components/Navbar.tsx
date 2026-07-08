import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useElevated } from '@/hooks/useElevated'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { ArrowRight } from '@/assets/icons'
import { useWorkWithUs } from './WorkWithUsDialog'
import { Logo } from './Logo'

// Only surface links that lead somewhere real. Blog / Ratings / Comparison are
// scaffolded but hidden until they have real (non-placeholder) content.
const links = [{ label: 'How We Test', to: '/methodology' }]

const linkClass =
  'rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink'

export function Navbar() {
  const elevated = useElevated(12)
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)
  const { open: openWorkWithUs } = useWorkWithUs()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300',
          elevated
            ? 'border-b border-line bg-paper/85 backdrop-blur-md'
            : 'border-b border-transparent bg-paper/0',
        )}
      >
        <nav className="container-editorial flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="operatorstudio.ai — home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openWorkWithUs}
              className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
            >
              Work with us
              <ArrowRight width={15} height={15} />
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-lg text-ink md:hidden"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    'h-0.5 w-5 bg-current transition-transform',
                    open && 'translate-y-2 rotate-45',
                  )}
                />
                <span className={cn('h-0.5 w-5 bg-current transition-opacity', open && 'opacity-0')} />
                <span
                  className={cn(
                    'h-0.5 w-5 bg-current transition-transform',
                    open && '-translate-y-2 -rotate-45',
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Reading-progress hairline */}
        <div className="relative h-px w-full bg-transparent">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent-600"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-line bg-paper px-6 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-haze"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    openWorkWithUs()
                  }}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Work with us <ArrowRight width={15} height={15} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
