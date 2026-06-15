"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const flow = [
  {
    level: "Level 1",
    difficulty: "Foundational",
    question: "What is the purpose of a 3-way match in accounts payable?",
  },
  {
    level: "Level 2",
    difficulty: "Applied",
    question: "Walk me through what happens when a discrepancy is found between the PO and the invoice.",
  },
];

export default function AdaptiveQuestions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fdfbf7] py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span
            className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-5 border border-[#FF6B2B]/40 px-3 py-1"
            style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
          >
            ★ Adaptive Intelligence
          </span>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight mb-4">
              Questions that dig where answers are thin.
            </h2>
            <p
              className="text-[#2d2d2d]/55 leading-relaxed"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Arion generates follow-up questions in real time based on how a candidate
              actually responds. Strong answers unlock harder questions. Weak answers
              surface gaps before the human interview — not during it.
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          {flow.map((item, rowIndex) => (
            <motion.div
              key={item.level}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: rowIndex * 0.15 }}
              className="relative"
            >
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-8 h-8 bg-[#FF6B2B] border-2 border-[#2d2d2d] flex items-center justify-center shadow-[2px_2px_0px_0px_#2d2d2d]"
                    style={{ borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%" }}
                  >
                    <span className="font-heading text-xs font-bold text-white">{rowIndex + 1}</span>
                  </div>
                  {rowIndex < flow.length - 1 && (
                    <div className="w-px flex-1 min-h-[40px] border-l-2 border-dashed border-[#2d2d2d]/30 mt-1" />
                  )}
                </div>

                <div className="flex-1 pb-6">
                  <div
                    className="bg-white border-2 border-[#2d2d2d] p-5 mb-3 shadow-[3px_3px_0px_0px_#2d2d2d]"
                    style={{ borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold text-[#2d2d2d]/40 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-patrick-hand)" }}
                      >
                        {item.level}
                      </span>
                      <span
                        className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] font-bold px-2 py-0.5 border border-[#FF6B2B]/30"
                        style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 16px 4px 16px / 16px 4px 16px 4px" }}
                      >
                        {item.difficulty}
                      </span>
                    </div>
                    <p
                      className="text-sm text-[#2d2d2d] leading-relaxed"
                      style={{ fontFamily: "var(--font-patrick-hand)" }}
                    >
                      &ldquo;{item.question}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Branch point */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="ml-6 mb-6"
          >
            <p
              className="text-xs font-bold text-[#2d2d2d]/40 uppercase tracking-wide mb-4"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Based on response quality, Arion branches:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Screen out */}
              <div
                className="bg-red-50 border-2 border-[#FF6B2B] p-5 shadow-[3px_3px_0px_0px_#FF6B2B]"
                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
              >
                <span
                  className="text-xs font-bold text-[#FF6B2B] uppercase tracking-wide block mb-2"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  ✕ Weak response
                </span>
                <p
                  className="text-sm text-[#2d2d2d]/65 mb-3"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  Arion identifies the knowledge gap and terminates the flow.
                </p>
                <div
                  className="bg-[#FF6B2B] px-3 py-2 text-center"
                  style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
                >
                  <span
                    className="text-xs font-bold text-white"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    ✕ Screened out
                  </span>
                </div>
              </div>

              {/* Deeper */}
              <div
                className="bg-green-50 border-2 border-green-500 p-5 shadow-[3px_3px_0px_0px_#22c55e]"
                style={{ borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" }}
              >
                <span
                  className="text-xs font-bold text-green-600 uppercase tracking-wide block mb-2"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  ✓ Strong response
                </span>
                <p
                  className="text-sm text-[#2d2d2d]/65 mb-3"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  Arion advances to a harder, expert-level question.
                </p>
                <div
                  className="bg-[#e5e0d8] border border-[#2d2d2d]/15 px-4 py-2.5 mb-3"
                  style={{ borderRadius: "4px 16px 4px 16px / 16px 4px 16px 4px" }}
                >
                  <p
                    className="text-xs text-[#2d2d2d]/55 italic"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    &ldquo;How does 3-way matching interact with accrual accounting at period close?&rdquo;
                  </p>
                </div>
                <div
                  className="bg-green-500 px-3 py-2 text-center"
                  style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
                >
                  <span
                    className="text-xs font-bold text-white"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    ✓ Advances to human interview
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
