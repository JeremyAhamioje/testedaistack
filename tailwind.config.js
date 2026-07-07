/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial ink built on slate
        ink: {
          DEFAULT: '#0B1220', // near-black slate for display type
          soft: '#1E293B',
          muted: '#475569',
          faint: '#94A3B8',
        },
        // Trust blue accent
        accent: {
          50: '#EFF5FF',
          100: '#DBE8FF',
          200: '#BFD6FF',
          400: '#5B8DEF',
          500: '#2F6BFF',
          600: '#1D4ED8', // primary
          700: '#1E40AF',
          900: '#172554',
        },
        paper: '#FFFFFF',
        // Very soft off-white for alternating sections
        haze: '#F7F9FC',
        line: '#E7ECF3',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.10)',
        lift: '0 2px 4px rgba(15,23,42,0.04), 0 24px 48px -20px rgba(29,78,216,0.22)',
        float: '0 10px 40px -12px rgba(15,23,42,0.18)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(120deg, #1D4ED8 0%, #4F46E5 55%, #2F6BFF 100%)',
        'haze-radial':
          'radial-gradient(120% 120% at 50% 0%, #F1F6FF 0%, rgba(255,255,255,0) 60%)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
