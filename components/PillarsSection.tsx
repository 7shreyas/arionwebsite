import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const pillars = [
  {
    number: '01 / 03',
    title: 'Automate Operations.',
    body: 'AI agents that handle repetitive workflows so your team focuses on what actually moves the business forward.',
  },
  {
    number: '02 / 03',
    title: 'Eliminate Lag.',
    body: 'Real-time agent decision-making removes bottlenecks and speeds up every customer-facing process.',
  },
  {
    number: '03 / 03',
    title: 'Scale Intelligently.',
    body: 'Agents that learn and adapt as your business grows — no brittle scripts, no manual re-configuration.',
  },
]

export default function PillarsSection() {
  return (
    <section id="services" className="bg-arion-bg px-6 md:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 mb-12">
          <Reveal>
            <SectionLabel text="How" number="02" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-inter-tight font-black leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
            >
              <span className="text-white">Three pillars.</span>
              <br />
              <span className="text-arion-ghost">One operating system.</span>
            </h2>
          </Reveal>
        </div>

        <hr className="border-t border-arion-dim mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-arion-dim">
          {pillars.map((pillar, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div
                className={`flex flex-col gap-5 py-10 md:py-0 ${
                  i === 0 ? 'md:pr-10' : i === 1 ? 'md:px-10' : 'md:pl-10'
                }`}
              >
                <span className="font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-orange">
                  {pillar.number}
                </span>
                <h3 className="font-inter-tight font-black text-white text-xl md:text-2xl leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-inter text-arion-muted text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
