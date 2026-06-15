"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fdfbf7] py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-4 border border-[#FF6B2B]/40 px-3 py-1"
            style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
          >
            ★ From the Field
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight">
            Trusted by staffing teams across Michigan, Georgia &amp; Texas.
          </h2>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="bg-white border-2 border-[#2d2d2d] p-10 shadow-[6px_6px_0px_0px_#2d2d2d] rotate-[-0.5deg] relative"
            style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
          >
            {/* Quote mark */}
            <span
              className="absolute top-6 left-8 font-heading text-8xl text-[#FF6B2B] leading-none select-none opacity-25"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="pt-8">
              <p
                className="text-[#2d2d2d]/75 text-lg leading-relaxed italic mb-6"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                We used to spend two full days every week just reviewing interview recordings
                from candidates who clearly weren&apos;t qualified. Arion cut that to almost
                nothing. The candidates who make it to us now actually know their stuff.
              </p>
              <div className="flex items-center gap-3 pt-6 border-t-2 border-[#2d2d2d]/15">
                <div
                  className="w-10 h-10 bg-[#FF6B2B]/15 border-2 border-[#2d2d2d] flex items-center justify-center"
                  style={{ borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%" }}
                >
                  <span className="text-[#FF6B2B] font-bold font-heading text-sm" aria-hidden="true">R</span>
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-[#2d2d2d]"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    Recruiter, BrightSharks
                  </p>
                  <p
                    className="text-xs text-[#2d2d2d]/45"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    5-person Michigan staffing firm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            {["Michigan", "Georgia", "Texas"].map((state) => (
              <div key={state} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-[#FF6B2B]"
                  aria-hidden="true"
                />
                <span
                  className="text-sm text-[#2d2d2d]/55"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  {state}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
