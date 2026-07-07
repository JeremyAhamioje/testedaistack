import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from '@/assets/icons'
import { fadeUp, viewportOnce } from '@/utils/motion'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSent(true)
  }

  return (
    <section id="newsletter" className="py-20 md:py-28">
      <div className="container-editorial">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-black px-6 py-14 text-center shadow-lift md:px-16 md:py-20"
        >
          {/* Ambient gradient field */}
          <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.35)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent-gradient opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-2xs font-medium uppercase tracking-eyebrow text-accent-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              The testedaistack Brief
            </span>

            <h2 className="display mt-5 text-3xl leading-tight text-white sm:text-4xl md:text-[2.75rem]">
              Stay ahead of AI.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              One email a week. The newest reviews, honest verdicts, and the tools worth your team’s
              time — nothing a vendor paid us to say.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/20"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400 text-ink">
                  <Check width={13} height={13} />
                </span>
                You’re on the list. Check your inbox to confirm.
              </motion.div>
            ) : (
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-0"
                />
                <button
                  type="button"
                  onClick={submit}
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Subscribe
                  <ArrowRight width={15} height={15} />
                </button>
              </div>
            )}

            <p className="mt-4 font-mono text-2xs text-white/40">
              43,000+ operators and founders. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
