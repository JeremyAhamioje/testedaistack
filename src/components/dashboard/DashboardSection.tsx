import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from '@/assets/icons'
import { useWorkWithUs } from '@/components/WorkWithUsDialog'
import { WorkflowDiagram } from './WorkflowDiagram'

export function DashboardSection() {
  const { open } = useWorkWithUs()
  return (
    <section id="platform" className="py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          align="center"
          eyebrow="The platform"
          title="Watch AI assist your business in boosting revenue."
          description="Businesses are using AI to massively boost revenue — we figured out the complicated bits so you don't have to."
          action={
            <button
              type="button"
              onClick={open}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-lift"
            >
              Book a consultation
              <ArrowRight width={16} height={16} />
            </button>
          }
        />

        <Reveal className="mt-14">
          <WorkflowDiagram />
        </Reveal>
      </div>
    </section>
  )
}
