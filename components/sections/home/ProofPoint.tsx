"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function ProofPoint() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const slideIn = (dir: "left" | "right") => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, x: dir === "left" ? -40 : 40 },
    animate: isInView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section className="bg-[#2d2d2d] py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Inverted dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fdfbf7 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-4 border border-[#FF6B2B]/50 px-3 py-1"
            style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
          >
            ★ Real Case Study
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
            The candidate who passed. And shouldn&apos;t have.
          </h2>
          <p
            className="mt-4 text-white/55 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            A competitor tool advanced this candidate with a 61.56% fluency score.
            The human interviewer rejected them in under five minutes.
          </p>
        </motion.div>

        {/* Score cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <motion.div {...slideIn("left")}>
            <div
              className="bg-[#fdfbf7] border-2 border-white/20 p-8 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] rotate-[-1deg]"
              style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
            >
              <p
                className="text-xs uppercase tracking-widest text-[#2d2d2d]/50 mb-4"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Competitor Tool — Fluency Score
              </p>
              <div className="flex items-end gap-2 mb-3">
                <span className="font-heading text-6xl font-bold text-amber-600 leading-none">61.56</span>
                <span className="font-heading text-3xl font-bold text-amber-600 mb-1">%</span>
              </div>
              <p
                className="text-sm text-[#2d2d2d]/55 mb-5"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Scored on confidence, vocabulary, and fluency signals.
              </p>
              <div
                className="bg-green-50 border-2 border-green-400 px-4 py-2.5 text-center"
                style={{ borderRadius: "8px 40px 8px 40px / 40px 8px 40px 8px" }}
              >
                <span
                  className="text-green-700 font-bold text-sm"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  ✓ ADVANCED — Sent to human interview
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div {...slideIn("right")}>
            <div
              className="bg-[#fdfbf7] border-2 border-white/20 p-8 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] rotate-[1deg]"
              style={{ borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" }}
            >
              <p
                className="text-xs uppercase tracking-widest text-[#2d2d2d]/50 mb-4"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Arion — Correctness Score
              </p>
              <div className="flex items-end gap-2 mb-3">
                <span className="font-heading text-6xl font-bold text-[#FF6B2B] leading-none">12</span>
                <span className="font-heading text-3xl font-bold text-[#FF6B2B] mb-1">%</span>
              </div>
              <p
                className="text-sm text-[#2d2d2d]/55 mb-5"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Evaluated against verified answer keys across technical domains.
              </p>
              <div
                className="bg-red-50 border-2 border-[#FF6B2B] px-4 py-2.5 text-center"
                style={{ borderRadius: "8px 40px 8px 40px / 40px 8px 40px 8px" }}
              >
                <span
                  className="text-[#FF6B2B] font-bold text-sm"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  ✕ WOULD REJECT — Screened out early
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Narrative */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-white/8 border-2 border-white/20 p-8"
          style={{ borderRadius: "30px 8px 30px 8px / 8px 30px 8px 30px" }}
        >
          <p
            className="text-white/75 leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            The competitor tool scored this candidate at 61.56% on fluency-based signals and
            advanced them to the human interview stage. The interviewer rejected them in the
            first five minutes — the answers were vague, technically incorrect, and demonstrated
            no real understanding of the role.
          </p>
          <p
            className="text-white/75 leading-relaxed"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            Arion&apos;s correctness scoring would have flagged this candidate before they ever
            reached the scheduling stage — saving recruiter time, candidate frustration, and
            firm credibility.
          </p>
          <div className="mt-6 pt-6 border-t border-white/15 flex items-center gap-2">
            <span
              className="text-sm font-bold text-white/50"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Result:
            </span>
            <span
              className="text-sm text-[#FF6B2B]"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Wasted interview time + recruiter trust damaged.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
