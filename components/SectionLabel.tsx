interface SectionLabelProps {
  text: string
  number?: string
  className?: string
}

export default function SectionLabel({ text, number, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 font-inter-tight text-xs tracking-[0.2em] uppercase text-arion-muted ${className}`}>
      <span className="inline-block w-8 h-px bg-arion-orange flex-shrink-0" />
      <span>{text}{number ? ` — ${number}` : ''}</span>
    </div>
  )
}
