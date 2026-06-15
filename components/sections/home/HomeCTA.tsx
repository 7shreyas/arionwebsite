"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Wobbly label */}
          <span
            className="inline-block text-xs uppercase tracking-widest text-[#FF6B2B] mb-6 border border-[#FF6B2B]/40 px-3 py-1"
            style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "4px 20px 4px 20px / 20px 4px 20px 4px" }}
          >
            ✏️ Get Started
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#2d2d2d] leading-tight mb-5">
            Ready to screen smarter?
          </h2>
          <p
            className="text-[#2d2d2d]/55 text-lg mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            Book a 30-minute demo and see correctness scoring on real questions
            from your industry. Or explore the product first.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white font-heading font-bold px-8 py-3.5 border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] text-base"
              style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
            >
              Book a Demo ✏️
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-[#2d2d2d] font-heading font-bold px-8 py-3.5 border-2 border-[#2d2d2d] bg-[#fdfbf7] shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] text-base"
              style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
            >
              Explore the product →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
