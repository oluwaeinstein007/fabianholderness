import { useState, type FormEvent } from 'react'
import { Magnetic } from './Magnetic'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('') // honeypot, left blank by real visitors
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, company }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again, or email us directly.')
    }
  }

  const fieldClass =
    'w-full border bg-transparent px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:opacity-50 focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,161,90,0.15)] disabled:opacity-60'

  if (status === 'sent') {
    return (
      <div
        className="border px-6 py-8 text-sm"
        style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
      >
        Thank you — your message is on its way. We'll be in touch shortly.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">Name</label>
          <input
            id="cf-name"
            required
            disabled={status === 'sending'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={fieldClass}
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">Email</label>
          <input
            id="cf-email"
            required
            type="email"
            disabled={status === 'sending'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={fieldClass}
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="sr-only">Message</label>
        <textarea
          id="cf-message"
          required
          rows={4}
          disabled={status === 'sending'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking to achieve"
          className={fieldClass}
          style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', resize: 'vertical' }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Magnetic>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center px-7 py-3.5 text-sm font-medium tracking-wide transition-transform disabled:cursor-wait"
            style={{ background: 'var(--gold)', color: 'var(--navy)' }}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </Magnetic>
        {status === 'error' && (
          <span className="font-mono text-xs tracking-wide" style={{ color: '#e58a8a' }}>
            {error}
          </span>
        )}
      </div>
    </form>
  )
}
