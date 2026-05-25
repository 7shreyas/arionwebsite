'use client'

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react'
import { useCallback } from 'react'
import Link from 'next/link'
import HeroBackground from './HeroBackground'
import SectionLabel from './SectionLabel'

const MotionLink = motion.create(Link)

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function HeroSection() {
  const shouldReduce = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rawX = useTransform(mouseX, [-1, 1], [-20, 20])
  const rawY = useTransform(mouseY, [-1, 1], [-10, 10])
  const springX = useSpring(rawX, { stiffness: 50, damping: 15, mass: 0.5 })
  const springY = useSpring(rawY, { stiffness: 50, damping: 15, mass: 0.5 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (shouldReduce) return
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2))
      mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2))
    },
    [mouseX, mouseY, shouldReduce],
  )

  const wordAnim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-arion-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Layer 1 — WebGL gradient background */}
      <HeroBackground />

      {/* Watermark — signature moment: follows mouse with spring */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 5 }}
      >
        <motion.span
          style={shouldReduce ? undefined : { x: springX, y: springY }}
          className="font-inter-tight font-black text-[22vw] leading-none text-[#1a1a1a] tracking-tight"
        >
          ARION
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-6 md:px-10 lg:px-16 pt-32 pb-12">
        {/* Label */}
        <motion.div
          {...(shouldReduce ? {} : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, ease },
          })}
        >
          <SectionLabel text="AI Agents • Operations • 2026" className="mb-10" />
        </motion.div>

        {/* Headline + description */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            {/* Left: headline */}
            <div>
              <h1
                className="font-inter-tight font-black leading-[0.93] tracking-tight"
                style={{ fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)' }}
              >
                <span className="block text-white">
                  <motion.span className="inline-block" {...wordAnim(0)}>Engineered</motion.span>
                </span>
                <span className="block text-white">
                  <motion.span className="inline-block" {...wordAnim(0.04)}>for</motion.span>
                  {' '}
                  <motion.span
                    className="font-playfair italic text-arion-orange inline-block"
                    {...wordAnim(0.08)}
                  >
                    speed.
                  </motion.span>
                </span>
                <span className="block text-white">
                  {(['Built', 'to', 'scale.'] as const).map((word, i) => (
                    <span key={word}>
                      <motion.span className="inline-block" {...wordAnim(0.12 + i * 0.04)}>
                        {word}
                      </motion.span>
                      {i < 2 && ' '}
                    </span>
                  ))}
                </span>
              </h1>

              {/* Orange underline — wipes in from left */}
              <motion.div
                className="h-1 w-48 bg-arion-orange mt-4 origin-left"
                {...(shouldReduce ? {} : {
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.6, delay: 0.4, ease },
                })}
              />
            </div>

            {/* Right: description */}
            <motion.div
              className="lg:pb-4"
              {...(shouldReduce ? {} : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.5, ease },
              })}
            >
              <p className="font-inter text-arion-muted text-base md:text-lg leading-relaxed max-w-md">
                ARION builds purpose-built AI agents that streamline operations, maximize efficiency,
                and eliminate operational lag — so your team stops firefighting and starts compounding.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 mt-12"
            {...(shouldReduce ? {} : {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.65, ease },
            })}
          >
            <MotionLink
              href="/contact"
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 font-inter-tight text-sm tracking-[0.15em] uppercase text-white border-b-2 border-arion-orange pb-1 hover:text-arion-orange transition-colors duration-150"
            >
              Book a Discovery Call
              <motion.span
                className="inline-block"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4, transition: { duration: 0.2, ease: 'easeOut' } },
                }}
              >
                →
              </motion.span>
            </MotionLink>

            <MotionLink
              href="/approach"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 font-inter-tight text-sm tracking-[0.15em] uppercase text-white border border-white px-6 py-2 hover:bg-white hover:text-arion-bg transition-colors duration-150"
            >
              See How It Works
            </MotionLink>
          </motion.div>
        </div>

        {/* Bottom labels */}
        <motion.div
          className="flex justify-between items-center mt-12 pt-6 border-t border-arion-dim"
          {...(shouldReduce ? {} : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.8, ease },
          })}
        >
          <span className="font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-muted">
            Scroll ↓
          </span>
          <span className="font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-muted">
            Index — 001 / Manifesto
          </span>
        </motion.div>
      </div>
    </section>
  )
}
