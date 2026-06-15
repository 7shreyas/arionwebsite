import type { Metadata } from "next";
import BookHero from "@/components/sections/book/BookHero";
import CalEmbed from "@/components/sections/book/CalendlyEmbed";
import EarlyAccessForm from "@/components/sections/book/EarlyAccessForm";

export const metadata: Metadata = {
  title: "Book a Meeting — Arion AI",
  description:
    "Book a 30-minute demo or request early access to Arion — correctness-first recruiting intelligence for staffing firms.",
};

export default function BookPage() {
  return (
    <>
      <BookHero />
      <section className="bg-[#fdfbf7] py-16 px-4 border-t-2 border-[#2d2d2d]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: scheduling */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] mb-2">
                Book a discovery call
              </h2>
              <p
                className="text-[#2d2d2d]/50 text-sm mb-6"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                30 minutes. We&apos;ll demo Arion on questions relevant to your roles and
                show you exactly what correctness scoring catches that fluency scoring misses.
              </p>
              <CalEmbed />
            </div>

            {/* Right: early access form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] mb-2">
                Request early access
              </h2>
              <p
                className="text-[#2d2d2d]/50 text-sm mb-6"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                Not ready for a call? Tell us about your firm and we&apos;ll reach out
                when a spot opens in our next cohort.
              </p>
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
