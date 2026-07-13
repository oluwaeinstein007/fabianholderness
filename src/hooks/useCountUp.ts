import { useEffect, useRef, useState } from 'react'
import { useInView } from './useInView'

export function useCountUp(target: number, duration = 1400) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()

    let frame: number
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return { ref, value }
}
