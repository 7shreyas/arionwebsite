'use client'

import { useState } from 'react'

const MAX_CHARS = 300
type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full bg-transparent border-b border-arion-ghost text-white font-inter text-sm placeholder:text-arion-muted focus:border-arion-orange outline-none pb-3 transition-colors duration-200'

export default function ContactForm() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message,
      time: (form.elements.namedItem('time') as HTMLInputElement)?.value || null,
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-8 flex flex-col gap-4">
        <span className="font-inter-tight font-black text-white text-2xl">Message received.</span>
        <p className="font-inter text-arion-muted">
          {"We'll be in touch within one business day."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <input
          name="name"
          type="text"
          required
          placeholder="Name"
          autoComplete="name"
          className={inputClass}
        />
      </div>
      <div>
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div>
        <textarea
          name="message"
          required
          placeholder="What are you trying to automate?"
          maxLength={MAX_CHARS}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
        />
        <p className="mt-2 font-inter-tight text-[10px] tracking-[0.15em] uppercase text-arion-muted text-right">
          {message.length} / {MAX_CHARS}
        </p>
      </div>
      <div>
        <label className="block font-inter-tight text-[10px] tracking-[0.2em] uppercase text-arion-muted mb-3">
          Preferred time (optional)
        </label>
        <input name="time" type="datetime-local" className={inputClass} />
      </div>

      {status === 'error' && (
        <p className="font-inter text-sm text-red-400">
          Something went wrong — try emailing us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 inline-flex items-center justify-center gap-2 font-inter-tight text-sm tracking-[0.15em] uppercase bg-arion-orange text-white px-8 py-4 hover:bg-arion-orange/85 transition-colors duration-150 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  )
}
