'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useReducedMotion } from 'motion/react'

// Lazy-load the WebGL canvas — never ships to mobile or SSR
const HeroGLCanvas = dynamic(() => import('./HeroGLCanvas'), {
  ssr: false,
  loading: () => null,
})

// Static CSS fallback: same palette as the shader
// Used on mobile, SSR, and when prefers-reduced-motion is active
function StaticFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse 90% 70% at 65% 30%, #3d1500 0%, #1a0a00 40%, #0a0a0a 80%)
        `,
      }}
    />
  )
}

export default function HeroBackground() {
  const shouldReduce = useReducedMotion()
  const [showShader, setShowShader] = useState(false)

  useEffect(() => {
    // WebGL only on desktop, only when reduced-motion is off
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    const hasWebGL = (() => {
      try {
        const c = document.createElement('canvas')
        return !!(c.getContext('webgl') || c.getContext('experimental-webgl'))
      } catch {
        return false
      }
    })()
    setShowShader(isDesktop && hasWebGL && !shouldReduce)
  }, [shouldReduce])

  return (
    // pointer-events-none so nothing below the hero is blocked
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Always-present static fallback (visible on mobile, during load, and under shader) */}
      <StaticFallback />

      {/* Layer 1 — WebGL shader (desktop, reduced-motion off, WebGL available) */}
      {showShader && <HeroGLCanvas />}
    </div>
  )
}
