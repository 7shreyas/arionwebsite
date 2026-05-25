'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // On /contact, strip all nav links — logo only
  const isContact = pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-arion-dim ${
        scrolled ? 'bg-arion-bg/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav
        className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-baseline gap-2 flex-shrink-0 focus-visible:outline-arion-orange"
          aria-label="Arion — home"
        >
          <span className="font-inter-tight font-black text-white text-xl tracking-tight">ARION</span>
          <span className="font-inter-tight text-arion-orange text-xs tracking-[0.15em] uppercase">
            AI / Solutions
          </span>
        </Link>

        {/* Desktop nav — hidden on /contact */}
        {!isContact && (
          <>
            <ul className="hidden md:flex items-center gap-8" role="list">
              {site.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-underline font-inter text-sm transition-colors duration-150 ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-arion-muted hover:text-white'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <Link
              href={site.nav.cta.href}
              className="hidden md:inline-flex items-center gap-1.5 font-inter-tight text-sm tracking-[0.15em] uppercase bg-black border border-arion-orange/40 text-arion-orange px-5 py-2 hover:border-arion-orange hover:bg-arion-orange/5 transition-all duration-150"
            >
              {site.nav.cta.label} <span aria-hidden="true">→</span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </>
        )}
      </nav>

      {/* Mobile menu */}
      {!isContact && menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-arion-dim bg-arion-bg/98 backdrop-blur-sm px-6 py-6 flex flex-col gap-5"
        >
          {site.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter-tight text-sm tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href ? 'text-white' : 'text-arion-muted hover:text-white'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={site.nav.cta.href}
            className="inline-flex items-center gap-1.5 font-inter-tight text-sm tracking-[0.15em] uppercase bg-black border border-arion-orange/40 text-arion-orange px-5 py-2.5 w-fit mt-2"
          >
            {site.nav.cta.label} →
          </Link>
        </div>
      )}
    </header>
  )
}
