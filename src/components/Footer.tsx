import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Mail, ArrowRight } from '@/assets/icons'

type FooterLink = { label: string; to: string }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Reviews',
    links: [
      { label: 'Property Management', to: '/ratings' },
      { label: 'Hospitality', to: '/ratings' },
      { label: 'Legal', to: '/ratings' },
      { label: 'Accounting', to: '/ratings' },
      { label: 'All sector ratings', to: '/ratings' },
    ],
  },
  {
    title: 'Publication',
    links: [
      { label: 'The Blog', to: '/blog' },
      { label: 'How We Test', to: '/methodology' },
      { label: 'Our Methodology', to: '/methodology' },
      { label: 'Editorial Standards', to: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/blog' },
      { label: 'Contact', to: '/blog' },
      { label: 'Careers', to: '/blog' },
      { label: 'Advertise', to: '/blog' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-editorial py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              An independent publication that tests AI software inside real businesses. Reader-funded,
              never pay-to-play.
            </p>
            {/* Newsletter signup chip (replaces the old "editorially independent" badge) */}
            <a
              href="/#newsletter"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 transition-colors hover:border-accent-200 hover:bg-haze"
            >
              <Mail width={15} height={15} className="text-accent-600" />
              <span className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted transition-colors group-hover:text-ink">
                Get the weekly brief
              </span>
              <ArrowRight
                width={13}
                height={13}
                className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent-600"
              />
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-muted transition-colors hover:text-accent-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-2xs text-ink-faint">
            © {new Date().getFullYear()} testedaistack. Some links are affiliate links; they never
            influence our scores.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy', 'Terms', 'Disclosure'].map((l) => (
              <Link
                key={l}
                to="/blog"
                className="text-2xs font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
