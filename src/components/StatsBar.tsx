const STATS = [
  { value: '$1.5M+', label: 'In opportunities identified through AI screening and personal introductions' },
  { value: '100+', label: 'Specialists deployed directly into partner companies' },
  { value: '5+', label: 'Businesses developed across industries' },
  { value: '2+', label: 'Active incubation and acceleration programs' },
]

export function StatsBar() {
  return (
    <section className="border-b" style={{ borderColor: 'var(--line)', background: 'var(--bg-raised)' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.value}
            className="border-t border-l px-7 py-12 [&:nth-child(-n+2)]:border-t-0 [&:nth-child(odd)]:border-l-0 lg:border-t-0 lg:border-l lg:px-10 lg:py-16 lg:[&:nth-child(4n+1)]:border-l-0"
            style={{ borderColor: 'var(--line)' }}
          >
            <div
              className="font-mono text-3xl tracking-tight lg:text-4xl"
              style={{ color: 'var(--gold)', fontVariantNumeric: 'tabular-nums' }}
            >
              {s.value}
            </div>
            <p className="mt-3 max-w-[22ch] text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
