"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const regulations = [
  {
    name: "BIPA",
    state: "Illinois",
    description:
      "Arion collects no facial geometry, voiceprints, or biometric identifiers. Zero biometric data means zero BIPA exposure.",
    rotation: "rotate-[-0.5deg]",
    borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  },
  {
    name: "IL AI Video Interview Act",
    state: "Illinois",
    description:
      "Arion discloses its AI use to candidates up front. No video analysis, no emotion detection, no automated decisions from video feeds.",
    rotation: "rotate-[0.5deg]",
    borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px",
  },
  {
    name: "NYC Local Law 144",
    state: "New York City",
    description:
      "Arion supports bias audits and maintains human oversight of all hiring decisions. No black-box automated employment decisions.",
    rotation: "rotate-[-0.3deg]",
    borderRadius: "100px 15px 100px 15px / 15px 100px 15px 100px",
  },
  {
    name: "EU AI Act",
    state: "European Union",
    description:
      "Arion does not use prohibited AI practices. No manipulation, no social scoring, no real-time biometric identification.",
    rotation: "rotate-[0.3deg]",
    borderRadius: "15px 100px 15px 100px / 100px 15px 100px 15px",
  },
];

export default function LegalSafety() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

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

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-5 border border-[#FF6B2B]/40 px-3 py-1"
              style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
            >
              ⚖ Compliance Built In
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              No biometric risk.<br />No regulatory surprises.
            </h2>
            <p
              className="text-white/50 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Most AI interview tools track eye movement, facial expression, and voice biometrics.
              That creates serious legal exposure under multiple active regulations.
            </p>
            <p
              className="text-white/50 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Arion was designed from day one to exclude all of that. No cameras analyzing
              faces. No biometric data collected or stored. No emotion inference. Compliance
              isn&apos;t a feature we bolted on — it&apos;s how the system works.
            </p>
            <div
              className="bg-white/5 border-2 border-white/20 px-5 py-4"
              style={{ borderRadius: "30px 8px 30px 8px / 8px 30px 8px 30px" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 bg-[#FF6B2B] border-2 border-white/30 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%" }}
                  aria-hidden="true"
                >
                  ⚖
                </span>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  <span className="text-white font-bold">Zero biometric data</span> collected,
                  processed, or stored at any point in the Arion interview flow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — regulation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regulations.map((reg, i) => (
              <motion.div
                key={reg.name}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`bg-white/5 border-2 border-white/20 p-5 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)] hover:border-[#FF6B2B]/40 transition-colors ${reg.rotation}`}
                style={{ borderRadius: reg.borderRadius }}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="font-heading text-sm font-bold text-white leading-tight">{reg.name}</span>
                  <span
                    className="text-xs bg-[#FF6B2B]/20 text-[#FF6B2B] px-2 py-0.5 flex-shrink-0 font-bold border border-[#FF6B2B]/30"
                    style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 16px 4px 16px / 16px 4px 16px 4px" }}
                  >
                    ✓ Compliant
                  </span>
                </div>
                <p
                  className="text-xs text-white/35 mb-2"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  {reg.state}
                </p>
                <p
                  className="text-xs text-white/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  {reg.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
