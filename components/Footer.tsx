import Link from 'next/link'
import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="bg-arion-bg border-t border-arion-dim" aria-label="Site footer">
      <div className="px-6 md:px-10 lg:px-16 py-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="flex items-baseline gap-2 w-fit" aria-label="Arion — home">
              <span className="font-inter-tight font-black text-white text-lg tracking-tight">ARION</span>
              <span className="font-inter-tight text-arion-orange text-xs tracking-[0.15em] uppercase">
                AI / Solutions
              </span>
            </Link>
            {/* TODO: Shreyas rewrite */}
            <p className="font-inter text-arion-muted text-sm">{site.footer.copy}</p>
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col sm:items-end gap-3">
            <div className="flex items-center gap-6">
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter-tight text-xs tracking-[0.15em] uppercase text-arion-muted hover:text-white transition-colors duration-150"
              >
                LinkedIn
              </a>
              {/* TODO: add Twitter/X link when account is created */}
            </div>
            <span className="font-inter-tight text-xs tracking-[0.1em] uppercase text-arion-muted/60">
              © {site.footer.year} {site.fullName}
            </span>
          </div>

        </div>
      </div>
    </footer>
  )
}
