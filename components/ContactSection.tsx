'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

interface FormData {
  name: string
  company: string
  email: string
  challenge: string
  datetime: string
}

const MAX_CHARS = 300

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    challenge: '',
    datetime: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border-0 border-b border-arion-dim focus:border-arion-orange text-white font-inter text-sm py-3 outline-none transition-colors duration-150 placeholder:text-arion-ghost placeholder:font-inter-tight placeholder:tracking-[0.1em] placeholder:text-xs placeholder:uppercase'

  const labelClass =
    'block font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-muted mb-2'

  return (
    <section id="contact" className="bg-arion-bg px-6 md:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <Reveal>
            <SectionLabel text="Book" number="05" className="mb-10" />
            <h2
              className="font-inter-tight font-black leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              <span className="block text-white">Book a</span>
              <span className="block text-arion-orange">Discovery Call.</span>
            </h2>
            <p className="font-inter text-arion-muted text-sm leading-relaxed max-w-xs">
              Tell us about your business. We&apos;ll show you exactly how ARION fits.
            </p>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.15}>
            {status === 'success' ? (
              <div className="flex flex-col gap-4 py-12">
                <div className="w-12 h-1 bg-arion-orange" />
                <h3 className="font-inter-tight font-black text-white text-2xl">Request received.</h3>
                <p className="font-inter text-arion-muted text-sm leading-relaxed">
                  We&apos;ll be in touch within 24 hours to confirm your call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Work Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="challenge" className={labelClass}>Operations Challenge</label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={4}
                    maxLength={MAX_CHARS}
                    placeholder="Describe what you're trying to solve..."
                    value={formData.challenge}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                  <div className="text-right mt-1">
                    <span className="font-inter-tight text-xs text-arion-muted">
                      {formData.challenge.length}/{MAX_CHARS}
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="datetime" className={labelClass}>Preferred Date &amp; Time</label>
                  <input
                    id="datetime"
                    name="datetime"
                    type="datetime-local"
                    value={formData.datetime}
                    onChange={handleChange}
                    className={`${inputClass} [color-scheme:dark]`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-inter text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status !== 'loading' ? { scale: 1.02 } : undefined}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : undefined}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="inline-flex items-center gap-2 font-inter-tight text-sm tracking-[0.15em] uppercase text-white border-b-2 border-arion-orange pb-1 w-fit hover:text-arion-orange transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Request My Call →'}
                </motion.button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
