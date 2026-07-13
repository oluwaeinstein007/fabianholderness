import { useState, type FormEvent } from 'react'

const RECIPIENT = 'info@fabianholderness.com'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = `Inquiry from ${name || 'website visitor'}`
    const body = `${message}\n\n—\n${name}\n${email}`
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldClass =
    'w-full border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-50 focus:border-current'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">Name</label>
          <input
            id="cf-name"
            required
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking to achieve"
          className={fieldClass}
          style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', resize: 'vertical' }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center px-7 py-3.5 text-sm font-medium tracking-wide"
          style={{ background: 'var(--gold)', color: 'var(--navy)' }}
        >
          Send Message
        </button>
        {sent && (
          <span className="font-mono text-xs tracking-wide text-white/70">
            Opening your mail client…
          </span>
        )}
      </div>
    </form>
  )
}
