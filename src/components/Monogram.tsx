type MonogramProps = {
  initials: string
  size?: 'md' | 'lg'
  className?: string
}

export function Monogram({ initials, size = 'md', className = '' }: MonogramProps) {
  const dims = size === 'lg' ? 'h-32 w-32 text-3xl' : 'h-16 w-16 text-lg'
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full ${dims} ${className}`}
      style={{
        background: 'var(--navy)',
        color: 'var(--gold)',
        border: '1px solid var(--line-strong)',
      }}
    >
      <span className="font-serif" style={{ fontWeight: 500 }}>
        {initials}
      </span>
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  )
}
