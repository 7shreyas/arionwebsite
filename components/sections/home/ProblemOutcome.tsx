"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function ProblemOutcome() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const reveal = (direction: "left" | "right") => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, x: direction === "left" ? -40 : 40 },
    animate: isInView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section className="py-24 px-4 border-t-2 border-[#2d2d2d]/15" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problem card */}
          <motion.div
            {...reveal("left")}
            className="bg-white border-2 border-[#2d2d2d] p-8 shadow-[5px_5px_0px_0px_#2d2d2d] rotate-[-0.5deg]"
            style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
          >
            <p
              className="text-xs uppercase tracking-widest text-[#FF6B2B] mb-4 font-bold"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              ✕ The Problem
            </p>
            <h2 className="font-heading text-3xl font-bold text-[#2d2d2d] leading-tight mb-5">
              Fluency fools your screening tools.
            </h2>
            <p
              className="text-[#2d2d2d]/65 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Most interview platforms score how confidently a candidate speaks.
              They advance people who sound good — even when the answer is wrong.
              Your recruiters waste days on candidates who fail the first real screen.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Candidates game fluency-based scoring with filler phrases",
                "Wrong candidates advance to costly human interviews",
                "Recruiters lose trust in the screening process",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#2d2d2d]/65"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#FF6B2B] font-bold text-base">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Outcome card */}
          <motion.div
            {...reveal("right")}
            className="bg-white border-2 border-[#2d2d2d] p-8 shadow-[5px_5px_0px_0px_#2d2d2d] rotate-[0.5deg]"
            style={{ borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" }}
          >
            <p
              className="text-xs uppercase tracking-widest text-[#2d5da1] mb-4 font-bold"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              ✓ The Outcome
            </p>
            <h2 className="font-heading text-3xl font-bold text-[#2d2d2d] leading-tight mb-5">
              Correctness-first screening saves 312 hrs/month.
            </h2>
            <p
              className="text-[#2d2d2d]/65 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Arion measures whether answers are factually correct — not whether they
              sound good. Every question has a verified answer key. Candidates advance
              only when they know the material.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Only correct candidates reach the human interview stage",
                "Recruiters reclaim hours previously spent on bad-fit reviews",
                "Confidence in your pipeline — every time",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#2d2d2d]/65"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#2d5da1] font-bold text-base">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
