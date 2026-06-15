"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const dimensions = [
  { label: "Factual Accuracy", score: 92, description: "Is the core claim true?" },
  { label: "Completeness", score: 85, description: "Does it cover the required elements?" },
  { label: "Technical Precision", score: 88, description: "Is terminology used correctly?" },
];

export default function CorrectnessFirst() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fdfbf7] py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span
              className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-5 border border-[#FF6B2B]/40 px-3 py-1"
              style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
            >
              ★ How It Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight mb-5">
              Every answer has a right one. We find it.
            </h2>
            <p
              className="text-[#2d2d2d]/60 leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Before any interview begins, Arion builds a verified answer key for each
              question — authored by domain experts. When a candidate responds, Arion
              evaluates the response against that key across three dimensions.
            </p>
            <p
              className="text-[#2d2d2d]/60 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              There&apos;s no room for confident-sounding wrong answers. Fluency, vocabulary,
              and speaking pace contribute nothing to the score. Only the substance of
              the answer matters.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Answer keys built by domain experts before every interview",
                "Evaluation runs across factual accuracy, completeness, and precision",
                "Score delivered instantly — no waiting, no bias, no fatigue",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#FF6B2B] text-white flex items-center justify-center text-xs font-bold"
                    style={{ borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%" }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <p
                    className="text-sm text-[#2d2d2d]/65"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Question card */}
            <div
              className="bg-white border-2 border-[#2d2d2d] p-5 shadow-[4px_4px_0px_0px_#2d2d2d] rotate-[-0.5deg]"
              style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
            >
              <p
                className="text-xs uppercase tracking-widest text-[#2d2d2d]/40 mb-2"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Question
              </p>
              <p
                className="text-sm text-[#2d2d2d] font-bold mb-4"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                What does a 3-way match in accounts payable verify?
              </p>
              <p
                className="text-xs uppercase tracking-widest text-[#2d2d2d]/40 mb-2"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Candidate Response
              </p>
              <p
                className="text-sm text-[#2d2d2d]/70 leading-relaxed"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                &ldquo;A 3-way match verifies that the purchase order, the goods receipt, and the
                vendor invoice all align on quantity, price, and terms before payment is
                approved.&rdquo;
              </p>
            </div>

            {/* Scoring card */}
            <div
              className="bg-white border-2 border-[#2d2d2d] p-5 shadow-[4px_4px_0px_0px_#2d2d2d] rotate-[0.5deg] space-y-4"
              style={{ borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" }}
            >
              <p
                className="text-xs uppercase tracking-widest text-[#2d2d2d]/40"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Arion Evaluation
              </p>
              {dimensions.map((dim, i) => (
                <div key={dim.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-sm font-bold text-[#2d2d2d]"
                      style={{ fontFamily: "var(--font-patrick-hand)" }}
                    >
                      {dim.label}
                    </span>
                    <span className="font-heading text-sm font-bold text-[#FF6B2B]">{dim.score}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e5e0d8] border border-[#2d2d2d]/20 overflow-hidden" style={{ borderRadius: "100px" }}>
                    <motion.div
                      className="h-full bg-[#FF6B2B]"
                      style={{ borderRadius: "100px" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${dim.score}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <p
                    className="text-xs text-[#2d2d2d]/40 mt-1"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    {dim.description}
                  </p>
                </div>
              ))}
              <div className="pt-3 border-t-2 border-[#2d2d2d]/10 flex items-center justify-between">
                <span
                  className="text-sm font-bold text-[#2d2d2d]"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  Overall Score
                </span>
                <span className="font-heading text-lg font-bold text-[#FF6B2B]">88%</span>
              </div>
              <div
                className="bg-green-50 border-2 border-green-400 px-4 py-2.5 text-center"
                style={{ borderRadius: "8px 40px 8px 40px / 40px 8px 40px 8px" }}
              >
                <span
                  className="text-green-700 font-bold text-sm"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  ✓ ADVANCES to human interview
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
