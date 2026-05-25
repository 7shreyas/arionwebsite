import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        arion: {
          bg: '#0d0d0d',
          orange: '#f26522',
          muted: '#555555',
          dim: '#1f1f1f',
          ghost: '#2a2a2a',
        },
      },
      fontFamily: {
        'inter-tight': ['var(--font-inter-tight)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
