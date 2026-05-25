import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function TestimonialSection() {
  return (
    <section id="case-studies" className="bg-arion-bg px-6 md:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto">
        <Reveal className="mb-12">
          <SectionLabel text="Field Notes" number="04" />
        </Reveal>

        <Reveal delay={0.1} className="mb-16">
          <h2
            className="font-inter-tight font-black leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
          >
            <span className="block text-white">Trusted by teams</span>
            <span className="block text-arion-ghost">moving faster than ever.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <blockquote className="max-w-4xl">
            <p
              className="font-playfair italic text-white leading-snug mb-8"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
            >
              &ldquo;ARION built us a resume intelligence agent that completely eliminated the
              operational lag in our hiring pipeline. The difference was immediate — sharp,
              professional, and remarkably talented. We were genuinely impressed.&rdquo;
            </p>
            <footer className="flex items-center gap-3 font-inter-tight text-xs tracking-[0.2em] uppercase">
              <span className="inline-block w-8 h-px bg-arion-orange" />
              <span className="text-arion-orange">BrightSharks</span>
              <span className="text-arion-muted">— Hiring Ops</span>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
