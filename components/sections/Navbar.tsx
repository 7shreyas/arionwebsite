"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Company", href: "/company" },
  { label: "Team", href: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfbf7] border-b-2 border-[#2d2d2d]"
          : "bg-[#fdfbf7]/90 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-20"
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] rounded"
          aria-label="Arion AI — home"
        >
          <div
            className="overflow-hidden flex-shrink-0 shadow-[2px_2px_0px_0px_#2d2d2d]"
            style={{ borderRadius: "8px 20px 8px 20px / 20px 8px 20px 8px", width: 36, height: 36 }}
          >
            <Image
              src="/arion-logo.png"
              alt="Arion AI logo"
              width={36}
              height={36}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <span className="font-heading text-xl font-bold text-[#2d2d2d] leading-none">
            Arion <span className="text-[#FF6B2B]">AI</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-sans text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] rounded px-1 py-0.5 relative ${
                    isActive
                      ? "text-[#FF6B2B] font-bold"
                      : "text-[#2d2d2d]/70 hover:text-[#2d2d2d]"
                  }`}
                  style={{ fontFamily: "var(--font-patrick-hand)" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B2B]"
                      style={{ borderRadius: "100px" }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/book"
            className="font-heading font-bold text-sm px-5 py-2.5 bg-[#FF6B2B] text-white border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d]"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Book a Meeting ✏️
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#2d2d2d] hover:text-[#FF6B2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] rounded transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#fdfbf7] border-b-2 border-[#2d2d2d] px-4 pb-6 pt-3"
        >
          <ul className="flex flex-col gap-1 mb-5" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "text-[#FF6B2B] font-bold"
                        : "text-[#2d2d2d]/70 hover:text-[#2d2d2d]"
                    }`}
                    style={{ fontFamily: "var(--font-patrick-hand)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/book"
            className="flex items-center justify-center w-full py-3 font-heading font-bold text-sm bg-[#FF6B2B] text-white border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] transition-all"
            style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
          >
            Book a Meeting ✏️
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
