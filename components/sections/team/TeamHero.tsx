"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function TeamHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fdfbf7] py-28 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute top-10 left-10 w-20 h-20 border-2 border-dashed border-[#FF6B2B]/25 hidden lg:block"
        style={{ borderRadius: "60% 40% 70% 30% / 40% 50% 50% 60%", transform: "rotate(8deg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-14 h-14 border-2 border-dashed border-[#2d2d2d]/15 hidden lg:block"
        style={{ borderRadius: "30% 70% 40% 60% / 60% 30% 70% 40%", transform: "rotate(-12deg)" }}
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
            ✏️ The Founders
          </span>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl font-bold text-[#2d2d2d] leading-tight mb-5"
        >
          Two founders.<br />
          <span className="text-[#FF6B2B]">One focus.</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-lg text-[#2d2d2d]/55 leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          We build the tools we couldn&apos;t find — and we hold each other to
          correctness first, in our product and in how we work.
        </motion.p>
      </div>
    </section>
  );
}
