import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { IconClose, IconMenu, IconMoon, IconSun, Mark } from './icons'

const LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#approach', label: 'Approach' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/#team', label: 'Team' },
  { href: '/#insights', label: 'Insights' },
]

export function Nav() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 92%, transparent)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="flex items-center gap-2.5 font-serif text-lg tracking-tight">
          <Mark className="h-6 w-6" style={{ color: 'var(--gold)' }} />
          <span>Fabian Holderness</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.92rem] transition-colors hover:opacity-100"
              style={{ color: 'var(--ink-dim)' }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
            style={{ borderColor: 'var(--line-strong)', color: 'var(--ink-dim)' }}
          >
            {theme === 'dark' ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
          </button>
          <a
            href="/#contact"
            className="border px-5 py-2.5 text-sm tracking-wide transition-colors"
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
          >
            Get in Touch
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{ borderColor: 'var(--line-strong)', color: 'var(--ink-dim)' }}
          >
            {theme === 'dark' ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{ borderColor: 'var(--line-strong)' }}
          >
            {open ? <IconClose className="h-4 w-4" /> : <IconMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="border-t px-6 py-6 md:hidden"
          style={{ background: 'var(--bg)', borderColor: 'var(--line)' }}
        >
          <nav className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base">
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="border px-5 py-3 text-center text-sm tracking-wide"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
