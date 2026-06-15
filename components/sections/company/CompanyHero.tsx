"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function CompanyHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fdfbf7] py-32 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute top-12 right-8 w-28 h-28 border-2 border-dashed border-[#FF6B2B]/30 hidden lg:block"
        style={{ borderRadius: "60% 40% 70% 30% / 40% 50% 50% 60%", transform: "rotate(12deg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 left-12 w-16 h-16 border-2 border-dashed border-[#2d2d2d]/20 hidden lg:block"
        style={{ borderRadius: "30% 70% 40% 60% / 60% 30% 70% 40%", transform: "rotate(-8deg)" }}
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
            ✏️ Michigan-Built. Staffing-Focused.
          </span>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl font-bold text-[#2d2d2d] leading-tight mb-6"
        >
          We built the tool<br />
          <span className="text-[#FF6B2B] relative inline-block">
            we wished existed.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 280 8"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M2 5 Q70 2 140 5 Q210 8 278 4"
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
          className="text-lg text-[#2d2d2d]/60 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          Arion AI was founded in Michigan by two engineers who watched staffing firms
          waste hundreds of hours advancing candidates who failed the first real technical
          screen. We decided to fix the evaluation layer — not patch it.
        </motion.p>
      </div>
    </section>
  );
}
