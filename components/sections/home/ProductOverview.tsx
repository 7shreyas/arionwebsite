"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: "✓",
    title: "Correctness-First Scoring",
    description:
      "Every interview answer is evaluated against a verified answer key — not keywords or fluency signals. Candidates advance only when they know the material.",
    rotation: "rotate-[-0.5deg]",
    borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  },
  {
    icon: "⟳",
    title: "Adaptive Question Flow",
    description:
      "Arion generates follow-up questions in real-time based on each candidate's actual responses — going deeper when answers are strong, probing gaps when they're weak.",
    rotation: "rotate-[0.5deg]",
    borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px",
  },
  {
    icon: "⚖",
    title: "Compliance Built In",
    description:
      "No biometric tracking. No facial analysis. No voice profiling. Arion is compliant with BIPA, the Illinois AI Video Interview Act, NYC Local Law 144, and the EU AI Act.",
    rotation: "rotate-[-0.3deg]",
    borderRadius: "100px 15px 100px 15px / 15px 100px 15px 100px",
  },
];

export default function ProductOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-4 border border-[#FF6B2B]/40 px-3 py-1"
            style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
          >
            ★ What Arion Does
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight">
            One platform. Three core capabilities.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`bg-[#fdfbf7] border-2 border-[#2d2d2d] p-8 shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 ${feature.rotation}`}
              style={{ borderRadius: feature.borderRadius }}
            >
              <div
                className="w-10 h-10 bg-[#FF6B2B] flex items-center justify-center mb-5 border-2 border-[#2d2d2d] text-white font-bold text-base"
                style={{ borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
              >
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2d2d2d] mb-3">
                {feature.title}
              </h3>
              <p
                className="text-[#2d2d2d]/60 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/product"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm px-6 py-2.5 border-2 border-[#2d2d2d] text-[#2d2d2d] bg-white shadow-[3px_3px_0px_0px_#2d2d2d] hover:shadow-[1px_1px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Explore the full product →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
