import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HowWeTest } from '@/components/HowWeTest'
import { Newsletter } from '@/components/Newsletter'
import { Seo } from '@/components/Seo'
import { ArrowRight, Shield, Beaker, Layers } from '@/assets/icons'
import { fadeUp, staggerContainer, staggerItem } from '@/utils/motion'

const principles = [
  {
    icon: Shield,
    title: 'No pay-to-play, ever',
    body: 'Vendors cannot buy a review, a score, or a placement. Our income comes from readers and clearly labeled affiliate links that never change a verdict.',
  },
  {
    icon: Beaker,
    title: 'We deploy before we judge',
    body: 'A demo isn’t a test. Finalists run inside real businesses for weeks, and we shadow the people who actually have to use them.',
  },
  {
    icon: Layers,
    title: 'One rubric for everyone',
    body: 'Accuracy, ease of use, integrations, and value — weighted the same way for a $99 tool and a six-figure platform. We publish the full trail.',
  },
]

export default function Methodology() {
  return (
    <>
      <Seo
        title="Our Methodology — operatorstudio.ai"
        description="How operatorstudio.ai decides what actually works: no pay-to-play, real-business deployments, and one rubric scored the same way every time."
        path="/methodology"
      />
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-haze-radial" />
        <div className="container-editorial">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <span className="eyebrow">Our Methodology</span>
            <h1 className="display mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-[3.25rem]">
              How we decide what actually works.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Every review is the output of the same repeatable process. Here’s exactly how a tool
              earns — or loses — its score.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:text-ink hover:shadow-card"
              >
                Back to reviews
                <ArrowRight width={16} height={16} />
              </Link>
            </div>
          </motion.div>

          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="show"
            className="mt-16 grid gap-5 md:grid-cols-3"
          >
            {principles.map((p) => {
              const Icon = p.icon
              return (
                <motion.li
                  key={p.title}
                  variants={staggerItem}
                  className="rounded-2xl border border-line bg-paper p-6 shadow-card"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                    <Icon width={20} height={20} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </section>

      <HowWeTest />
      <Newsletter />
    </>
  )
}
