"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="bg-[#FF6B2B] py-20 px-4 relative overflow-hidden">
      {/* Dot overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: "radial-gradient(#fdfbf7 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      {/* Decorative wobbly outline circle */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 border-2 border-dashed border-white/20 hidden lg:block"
        style={{ borderRadius: "60% 40% 70% 30% / 40% 50% 50% 60%" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div
            className="text-center bg-white/10 border-2 border-white/30 p-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.25)]"
            style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
          >
            <p className="font-heading text-5xl sm:text-6xl font-bold text-white leading-none mb-2">
              <AnimatedCounter to={312} suffix=" hrs" />
            </p>
            <p
              className="text-white/75 text-sm mt-1"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              reclaimed per month
            </p>
          </div>

          {/* Stat 2 */}
          <div
            className="text-center bg-white/10 border-2 border-white/30 p-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.25)]"
            style={{ borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" }}
          >
            <p className="font-heading text-5xl sm:text-6xl font-bold text-white leading-none mb-2">
              <AnimatedCounter to={7800} prefix="$" />
            </p>
            <p
              className="text-white/75 text-sm mt-1"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              recovered monthly
            </p>
          </div>

          {/* Stat 3 — static */}
          <div
            className="text-center bg-white/10 border-2 border-white/30 p-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.25)]"
            style={{ borderRadius: "100px 15px 100px 15px / 15px 100px 15px 100px" }}
          >
            <p className="font-heading text-5xl sm:text-6xl font-bold text-white leading-none mb-2">
              {"< 3 wks"}
            </p>
            <p
              className="text-white/75 text-sm mt-1"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              to full payback
            </p>
          </div>
        </div>

        <p
          className="text-center text-white/45 text-xs mt-10"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          Based on a 5-recruiter Michigan staffing firm.
        </p>
      </div>
    </section>
  );
}
