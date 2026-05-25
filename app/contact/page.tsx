import type { Metadata } from 'next'
import { site } from '@/data/site'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with Arion. Book a call or send a message — we respond within one business day.',
}

export default function ContactPage() {
  return (
    <div className="px-6 md:px-10 lg:px-16 pt-40 pb-32 max-w-screen-xl mx-auto">
      {/* Header */}
      <Reveal>
        <h1
          className="font-inter-tight font-black text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          {"Let's talk."}
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 font-inter text-arion-muted text-lg max-w-md leading-relaxed">
          Book a call or send a message. We respond within one business day.
        </p>
      </Reveal>

      {/* Two-column */}
      <div className="mt-20 grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left: Calendly + direct contact */}
        <Reveal delay={0.1}>
          <div>
            <p className="font-inter-tight text-[10px] tracking-[0.2em] uppercase text-arion-muted mb-6">
              Book a call
            </p>
            <iframe
              src={site.contact.calendly}
              title="Schedule a call with Arion"
              className="w-full border-0"
              style={{ height: '520px' }}
            />
            <div className="border-t border-arion-dim mt-8 pt-8 flex flex-col gap-4">
              <p className="font-inter-tight text-[10px] tracking-[0.2em] uppercase text-arion-muted">
                Or reach us directly
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="font-inter text-sm text-white hover:text-arion-orange transition-colors duration-150"
              >
                {site.contact.email}
              </a>
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter-tight text-[10px] tracking-[0.2em] uppercase text-arion-muted hover:text-white transition-colors duration-150"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right: Contact form */}
        <Reveal delay={0.15}>
          <div>
            <p className="font-inter-tight text-[10px] tracking-[0.2em] uppercase text-arion-muted mb-8">
              Send a message
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  )
}
