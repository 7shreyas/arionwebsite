import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import { featuredCaseStudy } from '@/data/caseStudies'
import { approachThesis } from '@/data/approach'

export const metadata: Metadata = {
  title: 'Arion — AI Automation That Ships',
  description:
    'Arion builds purpose-built AI automation that eliminates the operational drag slowing your team down.',
}

const clients = ['BrightSharks', 'TekLabs', 'Revived Handwash']

const services = [
  {
    number: '01',
    title: 'Automate Operations.',
    body: 'AI agents that handle repetitive workflows so your team focuses on what actually moves the business forward.',
  },
  {
    number: '02',
    title: 'Eliminate Lag.',
    body: 'Real-time agent decision-making removes bottlenecks and speeds up every customer-facing process.',
  },
  {
    number: '03',
    title: 'Scale Intelligently.',
    body: 'Agents that learn and adapt as your business grows — no brittle scripts, no manual re-configuration.',
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Client strip */}
      <div className="border-t border-b border-arion-dim py-7 px-6 md:px-10 lg:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
          <span className="font-inter-tight text-[10px] tracking-[0.25em] uppercase text-arion-muted flex-shrink-0">
            Trusted by
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {clients.map((c) => (
              <span key={c} className="font-inter-tight text-sm tracking-[0.1em] text-arion-ghost">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What we build */}
      <section className="border-b border-arion-dim px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <Reveal>
                <SectionLabel text="Services" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2
                  className="mt-6 font-inter-tight font-black text-white leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                  Built to eliminate drag.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Link
                href="/approach"
                className="font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-muted hover:text-white transition-colors duration-150 flex items-center gap-2 flex-shrink-0"
              >
                How we work <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-arion-dim">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className={`flex flex-col gap-5 py-10 md:py-0 ${
                    i === 0 ? 'md:pr-12' : i === 1 ? 'md:px-12' : 'md:pl-12'
                  }`}
                >
                  <span className="font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-orange">
                    {s.number}
                  </span>
                  <h3 className="font-inter-tight font-black text-white text-xl leading-tight">
                    {s.title}
                  </h3>
                  <p className="font-inter text-arion-muted text-sm leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="border-b border-arion-dim px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto">
          <Reveal>
            <SectionLabel text="Featured Work" className="mb-14" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
              {/* Client identity */}
              <div>
                <p
                  className="font-inter-tight font-black text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                >
                  {featuredCaseStudy.client}
                </p>
                <p className="mt-3 font-inter-tight text-[10px] tracking-[0.2em] uppercase text-arion-muted">
                  {featuredCaseStudy.industry} · {featuredCaseStudy.year}
                </p>
                <p className="mt-8 font-inter text-arion-muted leading-relaxed">
                  {featuredCaseStudy.problem}
                </p>
              </div>

              {/* Metrics + link */}
              <div>
                <div className="flex flex-wrap gap-x-10 gap-y-8 mb-12">
                  {featuredCaseStudy.metrics.map((m) => (
                    <div key={m.label}>
                      <div
                        className="font-inter-tight font-black text-arion-orange leading-none"
                        style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
                      >
                        {m.value}
                      </div>
                      <div className="mt-2 font-inter-tight text-[10px] tracking-[0.18em] uppercase text-arion-muted">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach teaser */}
      <section className="border-b border-arion-dim px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-[280px_1fr] gap-16 items-start">
          <Reveal>
            <SectionLabel text="How We Work" className="md:pt-2" />
          </Reveal>
          <div>
            <Reveal delay={0.08}>
              <blockquote
                className="font-inter-tight font-black text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
              >
                &ldquo;{approachThesis}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={0.14}>
              <Link
                href="/approach"
                className="mt-8 inline-flex items-center gap-2 font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-muted hover:text-white transition-colors duration-150"
              >
                Our approach <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <h2
                className="font-inter-tight font-black text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
              >
                Ready to move
                <br />
                <span className="text-arion-orange">faster than ever?</span>
              </h2>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 font-inter-tight text-sm tracking-[0.15em] uppercase bg-arion-orange text-white px-10 py-5 hover:bg-arion-orange/85 transition-colors duration-150"
              >
                Start a conversation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
