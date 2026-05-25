import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Arion AI Solutions — AI Automation That Ships'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0d0d0d',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
          <span style={{ color: '#ffffff', fontSize: '28px', fontWeight: 900, letterSpacing: '-1px' }}>
            ARION
          </span>
          <span style={{ color: '#f26522', fontSize: '11px', fontWeight: 600, letterSpacing: '4px' }}>
            AI / SOLUTIONS
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: '88px',
              fontWeight: 900,
              letterSpacing: '-4px',
              lineHeight: 0.92,
            }}
          >
            AI Automation
            <br />
            <span style={{ color: '#f26522' }}>That Ships.</span>
          </div>
          <div style={{ color: '#555555', fontSize: '22px', maxWidth: '580px', lineHeight: 1.5 }}>
            Purpose-built AI agents that eliminate operational drag and deliver measurable outcomes.
          </div>
        </div>

        {/* Footer bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '3px', background: '#f26522' }} />
          <span style={{ color: '#333333', fontSize: '13px', letterSpacing: '3px', fontWeight: 600 }}>
            ARIONAISOLUTIONS.COM
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
