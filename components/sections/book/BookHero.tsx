"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BookHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fdfbf7] py-20 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute top-8 right-12 w-24 h-24 border-2 border-dashed border-[#FF6B2B]/30 hidden lg:block"
        style={{ borderRadius: "60% 40% 70% 30% / 40% 50% 50% 60%", transform: "rotate(10deg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 left-8 w-14 h-14 border-2 border-dashed border-[#2d2d2d]/15 hidden lg:block"
        style={{ borderRadius: "30% 70% 40% 60% / 60% 30% 70% 40%", transform: "rotate(-6deg)" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-5 border border-[#FF6B2B]/40 px-3 py-1"
            style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
          >
            ✏️ Get Started with Arion
          </span>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-[#2d2d2d] leading-tight mb-5"
        >
          See Arion<br />
          <span className="text-[#FF6B2B] relative inline-block">
            in action.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 120 8"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M2 5 Q30 2 60 5 Q90 8 118 4"
                stroke="#FF6B2B"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-lg text-[#2d2d2d]/55 leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          Book a 30-minute demo and watch correctness-first scoring run on real
          interview questions from your industry. Or fill out the form below to
          request early access to Arion.
        </motion.p>
      </div>
    </section>
  );
}
