import { useState } from 'react'
import { categories } from '@/data/categories'
import { Star } from '@/assets/icons'
import { cn } from '@/utils/cn'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function FeaturedCategories() {
  // Which panel is expanded. Defaults to the first, expands on hover / focus.
  const [active, setActive] = useState(0)

  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Featured Categories"
          title="Reviews built for how your industry actually works."
          description="AI behaves differently in a law office than on a construction site. We test inside the workflows that matter to your business."
        />

        <Reveal className="mt-12">
          <div className="flex flex-col gap-3 md:h-[460px] md:flex-row">
            {categories.map((cat, i) => (
              <div
                key={cat.slug}
                role="group"
                aria-label={cat.name}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                style={{ ['--grow' as string]: active === i ? 4 : 1 }}
                className={cn(
                  'group relative h-80 w-full shrink-0 cursor-pointer overflow-hidden rounded-2xl outline-none ring-accent-500 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2',
                  'md:h-full md:w-auto md:[flex-basis:0%] md:[flex-grow:var(--grow)] md:[flex-shrink:1]',
                )}
              >
                <img
                  src={cat.img}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                {/* Collapsed: vertical label (md only) */}
                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 hidden items-center justify-center transition-opacity duration-300 md:flex',
                    active === i ? 'opacity-0' : 'opacity-100',
                  )}
                >
                  <span className="rotate-180 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] [writing-mode:vertical-rl]">
                    {cat.name}
                  </span>
                </div>

                {/* Expanded: full details (always shown on mobile) */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 w-[22rem] max-w-full p-6 text-white transition-opacity duration-500 max-md:!opacity-100',
                    active === i ? 'opacity-100' : 'opacity-0',
                  )}
                >
                  <span className="font-mono text-2xs font-medium uppercase tracking-[0.14em] text-white/70">
                    {cat.reviewCount} reviews
                  </span>
                  <h3 className="mt-1.5 text-2xl font-extrabold leading-tight text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{cat.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                    <Star width={12} height={12} filled className="text-amber-300" />
                    Top pick · {cat.topPick}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
