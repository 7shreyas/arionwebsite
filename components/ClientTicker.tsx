const clients = ['BrightSharks', 'TekLabs', 'Revived Handwash']

export default function ClientTicker() {
  const doubled = [...clients, ...clients, ...clients, ...clients]

  return (
    <div className="border-t border-b border-arion-dim py-5 overflow-hidden bg-arion-bg">
      <div className="marquee-track inline-flex animate-marquee whitespace-nowrap">
        {doubled.map((client, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-inter-tight text-sm tracking-[0.2em] uppercase text-arion-muted px-8 md:px-12">
              {client}
            </span>
            <span className="text-arion-orange text-xs">♦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
