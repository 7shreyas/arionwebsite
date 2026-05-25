'use client'

import { useEffect, useRef, useState } from 'react'
import SectionLabel from './SectionLabel'

const stats = [
  { value: 10000, display: '10,000', suffix: '+', label: 'Successful Executions' },
  { value: 25, display: '25', suffix: '+', label: 'Clients Served' },
  { value: 10, display: '10', suffix: '+', label: 'Industries' },
  { value: 99.9, display: '99.9', suffix: '%', label: 'Uptime' },
]

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let startTime: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(eased * target)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return count
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active)
  const isDecimal = stat.value % 1 !== 0

  const displayValue = isDecimal
    ? count.toFixed(1)
    : stat.display.includes(',')
    ? Math.round(count).toLocaleString('en-US')
    : Math.round(count).toString()

  return (
    <div className="flex flex-col gap-4 py-8 md:py-0">
      <div
        className="font-inter-tight font-black leading-none tracking-tight text-white whitespace-nowrap tabular-nums"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
      >
        {displayValue}
        <span className="text-arion-orange">{stat.suffix}</span>
      </div>
      <span className="font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-muted">
        {stat.label}
      </span>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-arion-bg px-6 md:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto">
        <SectionLabel text="By the Numbers" number="03" className="mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-arion-dim">
          {stats.map((stat, i) => (
            <div key={i} className={i === 0 ? 'pr-8 md:pr-12' : i === 3 ? 'pl-8 md:pl-12' : 'px-8 md:px-12'}>
              <StatItem stat={stat} active={active} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
