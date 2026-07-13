import { useCountUp } from '../hooks/useCountUp'

type Stat = {
  target: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
}

const STATS: Stat[] = [
  {
    target: 1.5,
    decimals: 1,
    prefix: '$',
    suffix: 'M+',
    label: 'In opportunities identified through AI screening and personal introductions',
  },
  { target: 100, suffix: '+', label: 'Specialists deployed directly into partner companies' },
  { target: 5, suffix: '+', label: 'Businesses developed across industries' },
  { target: 2, suffix: '+', label: 'Active incubation and acceleration programs' },
]

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.target)
  const display = stat.decimals ? value.toFixed(stat.decimals) : Math.round(value).toString()

  return (
    <div
      ref={ref}
      className="group border-t border-l px-7 py-12 transition-colors duration-300 [&:nth-child(-n+2)]:border-t-0 [&:nth-child(odd)]:border-l-0 hover:bg-[color-mix(in_srgb,var(--gold)_6%,transparent)] lg:border-t-0 lg:border-l lg:px-10 lg:py-16 lg:[&:nth-child(4n+1)]:border-l-0"
      style={{ borderColor: 'var(--line)' }}
    >
      <div
        className="font-mono text-3xl tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 lg:text-4xl"
        style={{ color: 'var(--gold)', fontVariantNumeric: 'tabular-nums' }}
      >
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <p className="mt-3 max-w-[22ch] text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
        {stat.label}
      </p>
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="border-b" style={{ borderColor: 'var(--line)', background: 'var(--bg-raised)' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <StatItem key={s.label} stat={s} />
        ))}
      </div>
    </section>
  )
}
