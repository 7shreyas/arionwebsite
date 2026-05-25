'use client'

import { motion } from 'motion/react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function AboutSection() {
  return (
    <section id="about" className="bg-arion-bg px-6 md:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto">
        <Reveal className="mb-16">
          <SectionLabel text="About" number="01" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: headline */}
          <Reveal delay={0.1}>
            <h2
              className="font-inter-tight font-black leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              <span className="block text-white">A studio for</span>
              <span className="block font-playfair italic text-arion-orange">intelligent</span>
              <span className="block text-white">operations.</span>
            </h2>
          </Reveal>

          {/* Right: body */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <p className="font-inter text-white text-lg md:text-xl leading-snug">
                We design AI agents that work the way your business actually works — custom-built,
                white-labeled, and engineered to remove friction at scale.
              </p>
              <p className="font-inter text-arion-muted text-sm md:text-base leading-relaxed">
                Whether you&apos;re a focused team or a growing enterprise, we ship agents that handle
                the calls, the scheduling, and the operational lag that&apos;s quietly costing you leads.
              </p>
              <motion.a
                href="/approach"
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="inline-flex items-center gap-2 font-inter-tight text-sm tracking-[0.15em] uppercase text-arion-orange border-b-2 border-arion-orange pb-0.5 w-fit mt-2 hover:opacity-80 transition-opacity"
              >
                Read Our Mission
                <motion.span
                  className="inline-block"
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 4, transition: { duration: 0.2, ease: 'easeOut' } },
                  }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
