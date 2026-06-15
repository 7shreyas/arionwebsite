"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

const blocks = [
  {
    title: "The problem we kept seeing.",
    body: "A recruiter at a staffing firm described a candidate who aced their AI screening score, got sent to the client, and was rejected in the first five minutes. This wasn't a fluke — it was happening every week. The tool was scoring how confidently the candidate spoke, not whether their answers were correct. The firm was paying for a system that was actively wasting their time.",
  },
  {
    title: "Why existing tools miss it.",
    body: "Fluency-based scoring was built for speed, not accuracy. It measures vocabulary breadth, filler word frequency, response pace, and sentiment — all of which a prepared-but-unqualified candidate can game in 20 minutes. The correct answer to a technical question is factual, not stylistic. That distinction is what most platforms ignore.",
  },
  {
    title: "What we built instead.",
    body: "Arion evaluates candidate answers against verified answer keys authored by domain experts. Every interview question has a correct answer. We check whether the candidate got it right — across factual accuracy, completeness, and technical precision. No fluency weighting. No keyword matching. No camera-based biometrics that create legal exposure. Just correctness.",
  },
  {
    title: "One company. One product. One industry.",
    body: "Arion AI is not an automation agency. We don't do consulting. We build and sell one product — Arion — to the staffing and recruiting industry. That focus is deliberate. The staffing industry has specific workflows, specific compliance requirements, and specific pain points that generic HR platforms don't address. We go deep instead of wide.",
  },
  {
    title: "Where we are.",
    body: "We're an early-stage company expanding carefully across Michigan, Georgia, and Texas. Our first cohort has reclaimed over 312 hours per month collectively. We'd rather build something that actually works for 10 firms than scale something mediocre to 1,000.",
  },
];

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-12">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div
                className="bg-[#fdfbf7] border-2 border-[#2d2d2d] p-6 shadow-[4px_4px_0px_0px_#2d2d2d]"
                style={{
                  borderRadius: i % 2 === 0
                    ? "255px 15px 225px 15px / 15px 225px 15px 255px"
                    : "15px 225px 15px 255px / 225px 15px 255px 15px",
                  transform: i % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)",
                }}
              >
                <h3 className="font-heading text-xl font-bold text-[#2d2d2d] mb-3 leading-snug">
                  {block.title}
                </h3>
                <p
                  className="text-[#2d2d2d]/60 leading-relaxed text-base"
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  {block.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-12 border-t-2 border-[#2d2d2d]/15 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B2B] text-white font-heading font-bold px-7 py-3.5 border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d]"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Book a Demo ✏️
          </Link>
          <Link
            href="/team"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#2d2d2d] font-heading font-bold px-7 py-3.5 border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d]"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Meet the team →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
