import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Mail, ArrowRight } from '@/assets/icons'
import { useWorkWithUs } from './WorkWithUsDialog'

export function Footer() {
  const { open } = useWorkWithUs()

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-editorial py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              An independent publication that tests AI software inside real businesses, then matches
              operators with the tools that actually work. Reader-funded, never pay-to-play.
            </p>
            {/* Newsletter sign-up chip */}
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

          <nav aria-label="Footer">
            <h3 className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              operatorstudio.ai
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-sm text-ink-muted transition-colors hover:text-accent-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/methodology"
                  className="text-sm text-ink-muted transition-colors hover:text-accent-600"
                >
                  How we test
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={open}
                  className="text-sm text-ink-muted transition-colors hover:text-accent-600"
                >
                  Work with us
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="text-2xs text-ink-faint">
            © {new Date().getFullYear()} operatorstudio.ai. Independent, hands-on AI software reviews for
            real businesses.
          </p>
        </div>
      </div>
    </footer>
  )
}
