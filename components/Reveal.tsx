'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduce = useReducedMotion()

  const animProps = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.6, delay, ease },
      }

  return (
    <motion.div {...animProps} className={className}>
      {children}
    </motion.div>
  )
}
