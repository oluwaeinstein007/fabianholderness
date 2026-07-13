import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message, company } = (req.body ?? {}) as Record<string, unknown>

  // Honeypot: real visitors never fill this hidden field, bots often do.
  if (typeof company === 'string' && company.trim() !== '') {
    return res.status(200).json({ ok: true })
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email)
  ) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message.' })
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: 'One or more fields is too long.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'Fabian Holderness Website <onboarding@resend.dev>'

  if (!apiKey || !to) {
    console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable')
    return res.status(500).json({ error: 'Contact form is not configured yet. Please email us directly.' })
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `${message}\n\n—\n${name}\n${email}`,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Could not send your message. Please try again shortly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact form send failed:', err)
    return res.status(500).json({ error: 'Could not send your message. Please try again shortly.' })
  }
}
