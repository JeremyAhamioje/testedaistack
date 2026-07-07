import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Search, Beaker, Layers, Shield } from '@/assets/icons'
import { cn } from '@/utils/cn'
import { staggerContainer, staggerItem, viewportOnce } from '@/utils/motion'

const steps = [
  {
    n: '01',
    title: 'Research',
    icon: Search,
    color: 'bg-amber-400',
    body: 'We map the category, shortlist vendors, and define what “good” means for the specific job — before we touch a single tool.',
    meta: 'Scope + criteria',
  },
  {
    n: '02',
    title: 'Hands-on Testing',
    icon: Beaker,
    color: 'bg-pink-500',
    body: 'Our team runs each tool through identical tasks and edge cases, logging accuracy, failures, and how it behaves when things go wrong.',
    meta: 'Controlled tasks',
  },
  {
    n: '03',
    title: 'Business Deployment',
    icon: Layers,
    color: 'bg-teal-500',
    body: 'The finalists go live inside real companies for weeks. We shadow the operators using them and measure results against a baseline.',
    meta: 'Live in production',
  },
  {
    n: '04',
    title: 'Final Verdict',
    icon: Shield,
    color: 'bg-blue-500',
    body: 'We score on a fixed rubric — accuracy, ease, integrations, value — and publish the full trail. Vendors never see it early.',
    meta: 'Scored + published',
  },
]

export function HowWeTest() {
  return (
    <section id="how-we-test" className="py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          align="center"
          eyebrow="How We Test"
          title="A repeatable process, run the same way every time."
          description="Every review moves through four stages. Same rubric, same rigor — whether it’s a $99 tool or a six-figure platform."
        />

        <motion.ol
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.n}
                variants={staggerItem}
                className="group relative flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-lift"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <span className="absolute right-0 top-11 hidden h-px w-5 translate-x-full bg-line lg:block" />
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'grid h-12 w-12 place-items-center rounded-2xl text-ink shadow-sm transition-transform group-hover:scale-105',
                      step.color,
                    )}
                  >
                    <Icon width={20} height={20} />
                  </span>
                  <span className="font-mono text-2xl font-semibold text-ink">{step.n}</span>
                </div>

                <h3 className="mt-5 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                <span className="mt-5 font-mono text-2xs uppercase tracking-[0.1em] text-accent-600">
                  {step.meta}
                </span>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
