import { Link } from 'react-router-dom'
import { articles } from '@/data/articles'
import { SectionHeading } from './ui/SectionHeading'
import { ArrowRight } from '@/assets/icons'
import { formatDate } from '@/utils/format'
import { cn } from '@/utils/cn'
import { Reveal } from './ui/Reveal'

// The two supplied editorial images (middle lead + right story).
const IMG_MIDDLE =
  'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783423777/16fa8497409ff584d5088928619621c4_xrcmem.jpg'
const IMG_RIGHT =
  'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783424073/4b6c4f71a5195ab2f3772fc0df0db1d4_vzog7b.jpg'

function DateLabel({ date }: { date: string }) {
  return (
    <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint">
      {formatDate(date)}
    </span>
  )
}

function Byline({ name }: { name: string }) {
  return (
    <span className="mt-3 block font-mono text-2xs font-semibold uppercase tracking-[0.1em] text-red-600">
      {name}
    </span>
  )
}

export function LatestReviews() {
  const list = articles.slice(0, 4)
  const middle = articles[4]
  const right = articles[5]

  return (
    <section id="latest" className="bg-haze py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Latest Reviews"
          title="Fresh from the test lab."
          description="New verdicts, buyer’s guides, and field notes from deployments in progress."
          action={
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-paper px-4 py-2.5 text-sm font-semibold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:text-ink hover:shadow-card"
            >
              View archive
              <ArrowRight width={15} height={15} />
            </Link>
          }
        />

        <Reveal className="mt-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-10">
            {/* Left — headline list */}
            <div className="rounded-2xl bg-paper p-6 md:p-7">
              {list.map((a, i) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className={cn('group block', i > 0 && 'mt-5 border-t border-line pt-5')}
                >
                  <DateLabel date={a.date} />
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent-700">
                    {a.title}
                  </h3>
                  <Byline name={a.author} />
                </Link>
              ))}
            </div>

            {/* Middle — image-led lead story */}
            <Link to={`/blog/${middle.slug}`} className="group block">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={IMG_MIDDLE}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4">
                <DateLabel date={middle.date} />
                <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-ink transition-colors group-hover:text-accent-700">
                  {middle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                  {middle.excerpt}
                </p>
                <Byline name={middle.author} />
              </div>
            </Link>

            {/* Right — story then image */}
            <Link to={`/blog/${right.slug}`} className="group block">
              <DateLabel date={right.date} />
              <h3 className="mt-2 font-serif text-2xl font-semibold italic leading-snug text-ink transition-colors group-hover:text-accent-700">
                {right.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                {right.excerpt}
              </p>
              <Byline name={right.author} />
              <div className="mt-5 overflow-hidden rounded-lg">
                <img
                  src={IMG_RIGHT}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
