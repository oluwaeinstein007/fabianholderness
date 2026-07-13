import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from 'react'

type SpotlightProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Spotlight({ children, className = '', style }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={handleMove} className={`spotlight ${className}`} style={style}>
      {children}
    </div>
  )
}
