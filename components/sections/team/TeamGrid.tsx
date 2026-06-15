"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

const founders = [
  {
    initials: "SB",
    name: "Shreyas Balaji",
    role: "Co-Founder & CEO",
    bio: "Shreyas leads product strategy, company direction, and engineering architecture at Arion AI. He co-founded Arion AI to bring correctness-first interview intelligence to the staffing industry — a problem he identified while watching recruiting teams spend weeks advancing candidates who failed basic technical screens.",
    focus: ["Product strategy", "Engineering architecture", "Company direction"],
    rotation: "rotate-[-0.5deg]",
    borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  },
  {
    initials: "AM",
    name: "Abhinav Mosra",
    role: "Co-Founder & CFO",
    bio: "Abhi is a Congressional App Challenge winner who leads engineering execution and financial operations at Arion AI. He built the correctness scoring engine from the ground up — designing the evaluation pipeline that checks factual accuracy, completeness, and technical precision across every candidate response.",
    focus: ["Engineering execution", "Scoring engine", "Financial operations"],
    rotation: "rotate-[0.5deg]",
    borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px",
  },
];

export default function TeamGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 px-4 border-t-2 border-[#2d2d2d]/10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`bg-[#fdfbf7] border-2 border-[#2d2d2d] p-8 shadow-[5px_5px_0px_0px_#2d2d2d] hover:shadow-[3px_3px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 ${founder.rotation}`}
              style={{ borderRadius: founder.borderRadius }}
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 bg-[#FF6B2B] border-2 border-[#2d2d2d] shadow-[3px_3px_0px_0px_#2d2d2d] flex items-center justify-center mb-6"
                style={{ borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%" }}
              >
                <span
                  className="font-heading text-xl font-bold text-white"
                  aria-hidden="true"
                >
                  {founder.initials}
                </span>
              </div>

              {/* Name + role */}
              <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] mb-1">
                {founder.name}
              </h2>
              <p
                className="text-sm font-bold text-[#FF6B2B] mb-5"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                {founder.role}
              </p>

              {/* Bio */}
              <p
                className="text-[#2d2d2d]/55 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                {founder.bio}
              </p>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2">
                {founder.focus.map((area) => (
                  <span
                    key={area}
                    className="text-xs bg-white border-2 border-[#2d2d2d] text-[#2d2d2d]/60 px-3 py-1"
                    style={{ fontFamily: "var(--font-patrick-hand)", borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px" }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 text-center"
        >
          <p
            className="text-[#2d2d2d]/45 text-sm mb-5"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            Equal partners. Built in Michigan. Focused entirely on staffing.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white font-heading font-bold px-7 py-3.5 border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d]"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Talk to the team ✏️
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
