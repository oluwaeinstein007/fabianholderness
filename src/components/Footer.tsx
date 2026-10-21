import { Mark } from './icons'

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-wrap justify-between gap-12 border-b pb-12" style={{ borderColor: 'var(--line)' }}>
          <div className="max-w-sm">
            <a href="/" className="group flex items-center gap-2.5 font-serif text-lg">
              <Mark className="h-6 w-6 transition-transform duration-500 group-hover:rotate-[24deg]" style={{ color: 'var(--gold)' }} />
              Fabian Holderness
            </a>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
              An asset management and investment house in Los Angeles, blending research-based
              data from global market trends with disciplined, relationship-driven advice.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4
                className="mb-4 font-mono text-xs tracking-[0.14em]"
                style={{ color: 'var(--ink-faint)' }}
              >
                NAVIGATE
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li><a href="/#services" className="hover:opacity-70">Our Services</a></li>
                <li><a href="/#portfolio" className="hover:opacity-70">Our Companies</a></li>
                <li><a href="/#leadership" className="hover:opacity-70">About Us</a></li>
                <li><a href="/#contact" className="hover:opacity-70">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4
                className="mb-4 font-mono text-xs tracking-[0.14em]"
                style={{ color: 'var(--ink-faint)' }}
              >
                CONTACT
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li><a href="mailto:info@fabianholderness.com" className="hover:opacity-70">info@fabianholderness.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-3 pt-8 font-mono text-xs tracking-wide"
          style={{ color: 'var(--ink-faint)' }}
        >
          <span>© 2026 Fabian Holderness</span>
          <span className="flex gap-6">
            <a href="#" className="hover:opacity-70">Terms and Conditions</a>
            <a href="#" className="hover:opacity-70">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
