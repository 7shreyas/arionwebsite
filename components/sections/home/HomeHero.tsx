"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const mp = (delay: number) => (shouldReduceMotion ? {} : fadeUp(delay));

  return (
    <section className="relative min-h-[96vh] flex items-center overflow-hidden px-4">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2d2d2d12 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Decorative dashed shapes */}
      <div className="absolute top-20 right-16 w-40 h-40 border-2 border-dashed border-[#FF6B2B]/20 hidden lg:block" style={{ borderRadius: "60% 40% 70% 30% / 40% 50% 50% 60%", transform: "rotate(12deg)" }} aria-hidden="true" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-2 border-dashed border-[#2d2d2d]/10 hidden lg:block" style={{ borderRadius: "30% 70% 40% 60% / 60% 30% 70% 40%", transform: "rotate(-8deg)" }} aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 w-2.5 h-2.5 rounded-full bg-[#FF6B2B]/25 hidden lg:block" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto w-full py-28 lg:py-36">

        {/* Brand lockup */}
        <motion.div {...mp(0)} className="flex items-center gap-3 mb-8">
          <div
            className="inline-flex items-center gap-2.5 bg-[#2d2d2d] pl-1.5 pr-4 py-1.5 shadow-[3px_3px_0px_0px_#FF6B2B]"
            style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
          >
            <div
              className="overflow-hidden flex-shrink-0"
              style={{ borderRadius: "6px 16px 6px 16px / 16px 6px 16px 6px", width: 28, height: 28 }}
            >
              <Image
                src="/arion-logo.png"
                alt="Arion AI"
                width={28}
                height={28}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <span className="font-heading text-base font-bold text-white tracking-tight leading-none">
              Arion <span className="text-[#FF6B2B]">AI</span>
            </span>
          </div>
          <span
            className="inline-flex items-center gap-2 border-2 border-[#2d2d2d] bg-[#FF6B2B]/8 text-[#2d2d2d] text-xs px-3.5 py-2 tracking-wide shadow-[2px_2px_0px_0px_#2d2d2d]"
            style={{ borderRadius: "20px 3px 20px 3px / 3px 20px 3px 20px", fontFamily: "var(--font-patrick-hand)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B] animate-pulse" aria-hidden="true" />
            Now expanding · Michigan · Georgia · Texas
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...mp(0.1)}
          className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-[#2d2d2d] leading-[1.02] tracking-tight mb-8"
        >
          Stop advancing<br />
          <span className="relative inline-block">
            <span className="text-[#FF6B2B]">the wrong</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              viewBox="0 0 280 10"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path d="M2 7 Q70 2 140 6 Q210 10 278 5" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>
          <br />candidates.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...mp(0.2)}
          className="text-xl sm:text-2xl text-[#2d2d2d]/60 leading-relaxed mb-10 max-w-2xl"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          Arion is the only recruiting platform that scores interview answers on{" "}
          <strong className="text-[#2d2d2d] font-bold">correctness</strong> — not keywords,
          not fluency, not how confident someone sounds.
          The right candidate gets through. Everyone else doesn&apos;t.
        </motion.p>

        {/* Feature chips */}
        <motion.div {...mp(0.25)} className="flex flex-wrap gap-2.5 mb-10">
          {[
            "✓  Correctness-first scoring",
            "✓  Adaptive question flow",
            "✓  Zero biometric risk",
            "✓  Under 3 weeks to payback",
          ].map((chip) => (
            <span
              key={chip}
              className="text-sm font-bold text-[#2d2d2d] bg-white border-2 border-[#2d2d2d] px-4 py-2 shadow-[2px_2px_0px_0px_#2d2d2d]"
              style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px", fontFamily: "var(--font-patrick-hand)" }}
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...mp(0.3)}
          className="flex flex-col sm:flex-row items-start gap-4 mb-10"
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white font-heading font-bold px-8 py-4 border-2 border-[#2d2d2d] shadow-[5px_5px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] text-lg"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Book a Demo ✏️
          </Link>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-[#2d2d2d] font-heading font-bold px-8 py-4 border-2 border-[#2d2d2d] bg-white shadow-[5px_5px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] text-lg"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            See how it works →
          </Link>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          {...mp(0.4)}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t-2 border-[#2d2d2d]/10"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["R", "K", "M", "A"].map((initial) => (
                <div
                  key={initial}
                  className="w-8 h-8 bg-[#FF6B2B]/15 border-2 border-white flex items-center justify-center"
                  style={{ borderRadius: "50%" }}
                >
                  <span className="text-[10px] font-bold text-[#FF6B2B]">{initial}</span>
                </div>
              ))}
            </div>
            <span className="text-sm text-[#2d2d2d]/55" style={{ fontFamily: "var(--font-patrick-hand)" }}>
              Trusted by staffing teams
            </span>
          </div>

          <div className="w-px h-4 bg-[#2d2d2d]/20 hidden sm:block" aria-hidden="true" />

          <span className="text-sm text-[#2d2d2d]/55" style={{ fontFamily: "var(--font-patrick-hand)" }}>
            <span className="font-bold text-[#2d2d2d]">312 hrs/mo</span> reclaimed
          </span>

          <div className="w-px h-4 bg-[#2d2d2d]/20 hidden sm:block" aria-hidden="true" />

          <span className="text-sm text-[#2d2d2d]/55" style={{ fontFamily: "var(--font-patrick-hand)" }}>
            <span className="font-bold text-[#2d2d2d]">$7,800</span> recovered monthly
          </span>
        </motion.div>

      </div>
    </section>
  );
}
