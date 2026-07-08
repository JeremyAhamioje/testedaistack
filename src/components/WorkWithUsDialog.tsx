import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from '@/assets/icons'
import { EASE } from '@/utils/motion'

type WorkWithUsCtx = { open: () => void }

const Ctx = createContext<WorkWithUsCtx>({ open: () => {} })

/** Open the "Work with us" matching-request dialog from anywhere in the tree. */
export const useWorkWithUs = () => useContext(Ctx)

const INDUSTRIES = [
  'Property Management',
  'Hospitality',
  'Revenue Cycle Management',
  'Legal',
  'Accounting',
  'Marketing',
  'Construction',
  'Other',
]

const EMPTY = { business: '', industry: '', email: '', message: '' }

export function WorkWithUsProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <Dialog isOpen={isOpen} onClose={close} />
    </Ctx.Provider>
  )
}

function Dialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  // Escape to close + lock background scroll while open.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  // Reset the form shortly after the dialog finishes closing.
  useEffect(() => {
    if (isOpen) return
    const t = setTimeout(() => {
      setForm(EMPTY)
      setSent(false)
    }, 250)
    return () => clearTimeout(t)
  }, [isOpen])

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const canSubmit = form.business.trim().length > 0 && emailValid

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    // No backend yet — capture is visual. Wire to a form endpoint / CRM later.
    setSent(true)
  }

  const field = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const inputClass =
    'w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus-visible:border-accent-300 focus-visible:ring-2 focus-visible:ring-accent-200'
  const labelClass = 'font-mono text-2xs font-medium uppercase tracking-[0.12em] text-ink-faint'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wwu-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-paper p-6 shadow-float ring-1 ring-line sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg text-ink-faint transition-colors hover:bg-haze hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {sent ? (
              <div className="py-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-200">
                  <Check width={22} height={22} />
                </span>
                <h2 id="wwu-title" className="display mt-5 text-2xl">
                  Request received.
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                  Thanks{form.business ? `, ${form.business}` : ''} — we’ll follow up by email to match
                  you with AI tools we’ve actually tested for your use case.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Work with us</span>
                <h2 id="wwu-title" className="display mt-4 text-2xl leading-tight sm:text-[1.7rem]">
                  Let’s match you with the right AI tools.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Tell us about your business and where you’re stuck. We’ll come back with tools we’ve
                  tested for your specific use case — no vendor pitches.
                </p>

                <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="wwu-business" className={labelClass}>
                      Business name
                    </label>
                    <input
                      id="wwu-business"
                      autoFocus
                      required
                      value={form.business}
                      onChange={field('business')}
                      placeholder="Acme Property Group"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="wwu-industry" className={labelClass}>
                      Industry
                    </label>
                    <select
                      id="wwu-industry"
                      value={form.industry}
                      onChange={field('industry')}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select your industry…
                      </option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="wwu-email" className={labelClass}>
                      Work email
                    </label>
                    <input
                      id="wwu-email"
                      type="email"
                      inputMode="email"
                      required
                      value={form.email}
                      onChange={field('email')}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="wwu-message" className={labelClass}>
                      What are you trying to solve?
                    </label>
                    <textarea
                      id="wwu-message"
                      rows={4}
                      value={form.message}
                      onChange={field('message')}
                      placeholder="The issues you’re facing, or where you think AI could help your business…"
                      className={inputClass + ' resize-y'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-ink"
                  >
                    Send request
                    <ArrowRight width={15} height={15} />
                  </button>
                  <p className="text-center text-2xs text-ink-faint">
                    We’ll only use this to match you with tools and follow up. No spam.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
