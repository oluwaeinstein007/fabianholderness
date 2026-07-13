import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
  y?: number
}

export function Reveal({ children, className = '', delay = 0, style, y = 28 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
