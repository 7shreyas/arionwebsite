import type { Metadata } from 'next'
import Link from 'next/link'
import { approachThesis, problemCopy, processSteps, principles } from '@/data/approach'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How Arion operates — the process, principles, and mindset behind AI automation that actually delivers.',
}

export default function ApproachPage() {
  return (
    <>
      {/* Thesis */}
      <section className="px-6 md:px-10 lg:px-16 pt-40 pb-24 max-w-screen-xl mx-auto">
        <Reveal>
          <SectionLabel text="How We Work" />
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            className="mt-10 font-inter-tight font-black text-white leading-[1.05] tracking-tight max-w-4xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            {approachThesis}
          </h1>
        </Reveal>
      </section>

      {/* Problem */}
      <section className="border-t border-arion-dim">
        <div className="px-6 md:px-10 lg:px-16 py-24 max-w-screen-xl mx-auto grid md:grid-cols-[280px_1fr] gap-16 items-start">
          <Reveal>
            <SectionLabel text="The Problem" className="md:pt-2" />
          </Reveal>
          <div className="flex flex-col gap-6">
            {problemCopy.map((p, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <p className="font-inter text-arion-muted leading-relaxed text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-arion-dim">
        <div className="px-6 md:px-10 lg:px-16 py-24 max-w-screen-xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel text="The Process" />
          </Reveal>
          <div className="divide-y divide-arion-dim">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.07}>
                <div className="py-12 grid md:grid-cols-[72px_1fr_1.6fr] gap-8 items-start">
                  <span className="font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-orange pt-0.5">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-inter-tight font-black text-white text-xl leading-tight">
                      {step.name}
                    </h3>
                    <p className="mt-2 font-inter text-sm text-arion-muted italic">{step.tagline}</p>
                  </div>
                  <p className="font-inter text-arion-muted leading-relaxed">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-arion-dim">
        <div className="px-6 md:px-10 lg:px-16 py-24 max-w-screen-xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel text="Principles" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-arion-dim">
            {principles.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-arion-bg p-10 md:p-12">
                  <h3 className="font-inter-tight font-black text-white text-2xl leading-tight">
                    {p.headline}
                  </h3>
                  <p className="mt-4 font-inter text-arion-muted leading-relaxed">{p.elaboration}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-arion-dim">
        <div className="px-6 md:px-10 lg:px-16 py-24 max-w-screen-xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <p
                className="font-inter-tight font-black text-white leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
              >
                Ready to build something real?
              </p>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 font-inter-tight text-sm tracking-[0.15em] uppercase bg-arion-orange text-white px-8 py-4 hover:bg-arion-orange/85 transition-colors duration-150"
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
