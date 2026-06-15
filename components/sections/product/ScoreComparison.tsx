"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";

type Mode = "fluency" | "correctness";

const candidateAnswer = {
  plain: "A 3-way match basically makes sure that everything looks good and the numbers are aligned. You check multiple documents and confirm they match up, so you can proceed with payment.",
  fluencyHighlights: [
    { text: "A 3-way match ", highlight: false },
    { text: "basically makes sure", highlight: true },
    { text: " that ", highlight: false },
    { text: "everything looks good", highlight: true },
    { text: " and the numbers are aligned. You check multiple documents and confirm they ", highlight: false },
    { text: "match up", highlight: true },
    { text: ", so you can proceed with payment.", highlight: false },
  ],
};

const fluencyDimensions = [
  { label: "Confidence", score: 78 },
  { label: "Vocabulary", score: 65 },
  { label: "Fluency", score: 82 },
  { label: "Filler words", score: 44 },
];

const correctnessDimensions = [
  { label: "Factual Accuracy", score: 5 },
  { label: "Completeness", score: 10 },
  { label: "Technical Precision", score: 8 },
  { label: "Correct Terminology", score: 15 },
];

export default function ScoreComparison() {
  const [mode, setMode] = useState<Mode>("fluency");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-4 border border-[#FF6B2B]/40 px-3 py-1"
            style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
          >
            ✏️ Interactive Demo
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight mb-4">
            Same candidate. Same answer. Different outcome.
          </h2>
          <p
            className="text-[#2d2d2d]/55 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            Toggle between scoring philosophies to see why fluency-based tools advance
            the wrong candidates — and how Arion catches it.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {/* Toggle */}
          <div className="flex justify-center mb-8">
            <div
              className="inline-flex bg-[#fdfbf7] border-2 border-[#2d2d2d] p-1 shadow-[3px_3px_0px_0px_#2d2d2d]"
              style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
              role="group"
              aria-label="Scoring mode"
            >
              {(["fluency", "correctness"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-5 py-2 font-heading font-bold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] ${
                    mode === m
                      ? "bg-[#FF6B2B] text-white border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_#2d2d2d]"
                      : "text-[#2d2d2d]/60 hover:text-[#2d2d2d]"
                  }`}
                  style={mode === m ? { borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" } : {}}
                  aria-pressed={mode === m}
                >
                  {m === "fluency" ? "Fluency Scoring" : "Correctness Scoring"}
                </button>
              ))}
            </div>
          </div>

          {/* Card */}
          <div
            className="bg-[#fdfbf7] border-2 border-[#2d2d2d] overflow-hidden shadow-[5px_5px_0px_0px_#2d2d2d]"
            style={{ borderRadius: "30px 8px 30px 8px / 8px 30px 8px 30px" }}
          >
            {/* Candidate header */}
            <div className="bg-[#2d2d2d]/5 px-8 py-5 border-b-2 border-[#2d2d2d]/15">
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <p className="font-heading font-bold text-[#2d2d2d] text-base">Alex R.</p>
                  <p
                    className="text-sm text-[#2d2d2d]/50"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    Accounts Payable Specialist
                  </p>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode + "-badge"}
                    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mode === "fluency" ? (
                      <span
                        className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 border-2 border-green-400"
                        style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
                      >
                        ✓ PASSED
                      </span>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 bg-red-50 text-[#FF6B2B] text-xs font-bold px-3 py-1.5 border-2 border-[#FF6B2B]"
                        style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
                      >
                        ✕ REJECTED
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-3">
                <p
                  className="text-xs text-[#2d2d2d]/40 mb-1"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  Question asked
                </p>
                <p
                  className="text-sm font-bold text-[#2d2d2d]"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  What does a 3-way match in accounts payable verify?
                </p>
              </div>
            </div>

            <div className="px-8 py-6">
              {/* Answer */}
              <div className="mb-6">
                <p
                  className="text-xs uppercase tracking-widest text-[#2d2d2d]/40 mb-2"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  Candidate&apos;s Answer
                </p>
                <div
                  className="bg-white border-2 border-[#2d2d2d]/15 p-4 text-sm text-[#2d2d2d]/75 leading-relaxed"
                  style={{ borderRadius: "15px 4px 15px 4px / 4px 15px 4px 15px", fontFamily: "var(--font-patrick-hand)" }}
                >
                  {mode === "fluency" ? (
                    <>
                      {candidateAnswer.fluencyHighlights.map((segment, i) =>
                        segment.highlight ? (
                          <mark
                            key={i}
                            className="bg-amber-200/70 text-[#2d2d2d] not-italic px-0.5"
                            style={{ borderRadius: "2px" }}
                          >
                            {segment.text}
                          </mark>
                        ) : (
                          <span key={i}>{segment.text}</span>
                        )
                      )}
                      <p
                        className="text-xs text-amber-600 mt-2 font-bold"
                        style={{ fontFamily: "var(--font-patrick-hand)" }}
                      >
                        ↑ Highlighted phrases triggered positive fluency signals
                      </p>
                    </>
                  ) : (
                    <>
                      {candidateAnswer.plain}
                      <p
                        className="text-xs text-[#FF6B2B] mt-2 font-bold"
                        style={{ fontFamily: "var(--font-patrick-hand)" }}
                      >
                        ↑ No technical content detected — candidate cannot define the concept
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Animated panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    {/* Score */}
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest text-[#2d2d2d]/40 mb-3"
                        style={{ fontFamily: "var(--font-patrick-hand)" }}
                      >
                        {mode === "fluency" ? "Fluency Score" : "Correctness Score"}
                      </p>
                      <div className="flex items-end gap-1 mb-1">
                        <span
                          className={`font-heading text-6xl font-bold leading-none ${
                            mode === "fluency" ? "text-amber-500" : "text-[#FF6B2B]"
                          }`}
                        >
                          {mode === "fluency" ? "61.56" : "8"}
                        </span>
                        <span
                          className={`font-heading text-3xl font-bold mb-1 ${
                            mode === "fluency" ? "text-amber-500" : "text-[#FF6B2B]"
                          }`}
                        >
                          %
                        </span>
                      </div>
                      <div
                        className={`mt-4 px-4 py-3 text-center text-sm border-2 ${
                          mode === "fluency"
                            ? "bg-green-50 border-green-400 text-green-700"
                            : "bg-red-50 border-[#FF6B2B] text-[#FF6B2B]"
                        }`}
                        style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
                      >
                        <span
                          className="font-bold"
                          style={{ fontFamily: "var(--font-patrick-hand)" }}
                        >
                          {mode === "fluency"
                            ? "✓ Recommended for human interview"
                            : "✕ Screened out before scheduling"}
                        </span>
                      </div>
                    </div>

                    {/* Dimension bars */}
                    <div className="space-y-3">
                      <p
                        className="text-xs uppercase tracking-widest text-[#2d2d2d]/40 mb-3"
                        style={{ fontFamily: "var(--font-patrick-hand)" }}
                      >
                        Dimensions
                      </p>
                      {(mode === "fluency" ? fluencyDimensions : correctnessDimensions).map((dim) => (
                        <div key={dim.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span
                              className="text-[#2d2d2d]/65"
                              style={{ fontFamily: "var(--font-patrick-hand)" }}
                            >
                              {dim.label}
                            </span>
                            <span
                              className={`font-bold ${mode === "fluency" ? "text-amber-600" : "text-[#FF6B2B]"}`}
                              style={{ fontFamily: "var(--font-patrick-hand)" }}
                            >
                              {dim.score}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-[#e5e0d8] border border-[#2d2d2d]/10 overflow-hidden" style={{ borderRadius: "100px" }}>
                            <motion.div
                              className={`h-full ${mode === "fluency" ? "bg-amber-400" : "bg-[#FF6B2B]"}`}
                              style={{ borderRadius: "100px" }}
                              initial={{ width: 0 }}
                              animate={{ width: `${dim.score}%` }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom callout */}
                  <div
                    className={`mt-6 px-5 py-4 border-2 text-sm ${
                      mode === "fluency"
                        ? "bg-red-50 border-[#FF6B2B] text-[#FF6B2B]"
                        : "bg-green-50 border-green-400 text-green-700"
                    }`}
                    style={{ borderRadius: "15px 4px 15px 4px / 4px 15px 4px 15px" }}
                  >
                    <span
                      className="font-bold"
                      style={{ fontFamily: "var(--font-patrick-hand)" }}
                    >
                      {mode === "fluency" ? "Problem detected: " : "Caught by Arion: "}
                    </span>
                    <span style={{ fontFamily: "var(--font-patrick-hand)" }}>
                      {mode === "fluency"
                        ? "This candidate cannot define what a 3-way match verifies. The answer is vague and avoids all technical content — yet the fluency score advanced them."
                        : "No technical content detected. Candidate was screened out before scheduling. Time saved: approximately 45 minutes of interviewer time."}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
