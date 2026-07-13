import type { CSSProperties } from 'react'

type IconProps = { className?: string; style?: CSSProperties }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconInvestment({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M6 32 L6 8" />
      <path d="M6 32 L34 32" />
      <rect x="11" y="21" width="5" height="11" />
      <rect x="20" y="15" width="5" height="17" />
      <rect x="29" y="10" width="5" height="22" />
      <path d="M23 8 L31 8 L31 16" />
      <path d="M23 8 L11 20" />
    </svg>
  )
}

export function IconManagement({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M6 26 A14 14 0 1 1 34 26" />
      <path d="M20 26 L27 15" />
      <circle cx="20" cy="26" r="1.6" fill="currentColor" stroke="none" />
      <path d="M6 26 L4 26 M34 26 L36 26 M20 8 L20 6" />
    </svg>
  )
}

export function IconDevelopment({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="7" y="18" width="12" height="14" />
      <rect x="21" y="10" width="12" height="22" />
      <path d="M7 18 L13 12 L25 12" />
      <path d="M19 22 L21 22 M19 26 L21 26" />
      <path d="M25 16 L29 16 M25 20 L29 20 M25 24 L29 24" />
    </svg>
  )
}

export function IconVenture({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M20 33 L20 19" />
      <path d="M20 19 C11 19 9 11 9 7 C15 7 20 11 20 19 Z" />
      <path d="M20 23 C29 23 31 15 31 11 C25 11 20 15 20 23 Z" />
      <path d="M15 33 L25 33" />
    </svg>
  )
}

export function IconSun({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5 L12 5 M12 19 L12 21.5 M2.5 12 L5 12 M19 12 L21.5 12 M5.1 5.1 L6.8 6.8 M17.2 17.2 L18.9 18.9 M5.1 18.9 L6.8 17.2 M17.2 6.8 L18.9 5.1" />
    </svg>
  )
}

export function IconMoon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20 14.2 A8.5 8.5 0 1 1 9.8 4 A7 7 0 0 0 20 14.2 Z" />
    </svg>
  )
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" />
    </svg>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 5 L19 19 M19 5 L5 19" />
    </svg>
  )
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 12 L20 12 M13 5 L20 12 L13 19" />
    </svg>
  )
}

export function Mark({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={style}>
      <circle cx="16" cy="16" r="11.5" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
      <path d="M16 7 L20 16 L16 25 L12 16 Z" fill="currentColor" />
    </svg>
  )
}
