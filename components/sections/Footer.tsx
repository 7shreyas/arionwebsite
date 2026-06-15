import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Hand-drawn CTA band */}
      <div className="bg-[#2d2d2d] py-16 px-4 relative overflow-hidden">
        {/* Background dot pattern (inverted) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(#fdfbf7 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <p
            className="text-[#e5e0d8] text-sm uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            ✦ Ready to screen smarter? ✦
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Reclaim 312 hours this month.
          </h2>
          <p
            className="text-[#e5e0d8]/70 mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            A 30-minute demo is all it takes to see correctness-first scoring in action.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white font-heading font-bold px-8 py-3.5 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.35)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.35)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Book a Demo ✏️
          </Link>
        </div>
      </div>

      {/* Footer body */}
      <div className="bg-[#fdfbf7] border-t-2 border-[#2d2d2d] py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] rounded">
              <div
                className="overflow-hidden flex-shrink-0 shadow-[2px_2px_0px_0px_#2d2d2d]"
                style={{ borderRadius: "6px 16px 6px 16px / 16px 6px 16px 6px", width: 32, height: 32 }}
              >
                <Image
                  src="/arion-logo.png"
                  alt="Arion AI logo"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-heading text-xl font-bold text-[#2d2d2d]">
                Arion <span className="text-[#FF6B2B]">AI</span>
              </span>
            </Link>
            <p
              className="text-[#2d2d2d]/60 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Correctness-first recruiting intelligence for staffing firms.
              One platform. One focus. Built in Michigan.
            </p>
            <div className="flex flex-col gap-2 mt-5">
              <a
                href="mailto:contact@arionai.org"
                className="inline-flex items-center gap-2 text-sm text-[#2d2d2d]/60 hover:text-[#FF6B2B] transition-colors"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                contact@arionai.org
              </a>
              <span
                className="inline-flex items-center gap-2 text-sm text-[#2d2d2d]/60"
                style={{ fontFamily: "var(--font-patrick-hand)" }}
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Michigan, USA
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="font-heading font-bold text-[#2d2d2d] text-sm mb-4 tracking-wide border-b-2 border-[#2d2d2d] pb-2"
            >
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {[
                { label: "Home", href: "/" },
                { label: "Product", href: "/product" },
                { label: "Company", href: "/company" },
                { label: "Team", href: "/team" },
                { label: "Book a Meeting", href: "/book" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#2d2d2d]/60 hover:text-[#FF6B2B] transition-colors"
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-[#2d2d2d] text-sm mb-4 tracking-wide border-b-2 border-[#2d2d2d] pb-2">
              Contact
            </h3>
            <ul
              className="flex flex-col gap-2.5 text-sm text-[#2d2d2d]/60"
              role="list"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              <li>
                <a href="mailto:contact@arionai.org" className="hover:text-[#FF6B2B] transition-colors">
                  contact@arionai.org
                </a>
              </li>
              <li>Michigan, USA</li>
              <li>
                <a
                  href="https://arionaisolutions.com"
                  className="hover:text-[#FF6B2B] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arionaisolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t-2 border-[#2d2d2d]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-[#2d2d2d]/40"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            © {new Date().getFullYear()} Arion AI, Inc. All rights reserved.
          </p>
          <p
            className="text-xs text-[#2d2d2d]/40"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            ✏️ Michigan-built.
          </p>
        </div>
      </div>
    </footer>
  );
}
