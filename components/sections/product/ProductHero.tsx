"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function ProductHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
        };

  return (
    <section className="relative bg-[#2d2d2d] min-h-[68vh] flex items-center overflow-hidden px-4">
      {/* Inverted dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fdfbf7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Decorative hand-drawn circles */}
      <div
        className="absolute right-12 top-20 w-36 h-36 border-2 border-dashed border-[#FF6B2B]/30 hidden lg:block"
        style={{ borderRadius: "60% 40% 70% 30% / 40% 50% 50% 60%", transform: "rotate(15deg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 right-1/4 w-20 h-20 border-2 border-dashed border-white/15 hidden lg:block"
        style={{ borderRadius: "30% 70% 40% 60% / 60% 30% 70% 40%", transform: "rotate(-10deg)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          <motion.div {...fadeUp(0)}>
            <span
              className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-6 border border-[#FF6B2B]/40 px-3 py-1"
              style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
            >
              ✏️ Correctness-First AI Interviewing
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Score what matters.<br />
            <span className="text-[#FF6B2B] relative inline-block">
              Not how it sounds.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 5 Q75 2 150 5 Q225 8 298 4"
                  stroke="#FF6B2B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            Arion evaluates interview answers against verified answer keys — not fluency,
            confidence, or keyword matching. The candidate who gets the answer right
            advances. Everyone else doesn&apos;t.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white font-heading font-bold px-7 py-3.5 border-2 border-white/30 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-base"
              style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
            >
              See It In Action ✏️
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
