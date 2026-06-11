import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        blue: { DEFAULT: '#3b82f6', dark: '#1d4ed8' },
        cyan: { DEFAULT: '#06b6d4' },
        purple: { DEFAULT: '#8b5cf6' },
        violet: { DEFAULT: '#7c3aed' },
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
        'grad-dark': 'linear-gradient(135deg, #1e40af, #5b21b6)',
      },
      animation: {
        'orb-float': 'orbFloat 8s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease infinite',
        'fade-up': 'fadeUp 0.8s ease both',
        'bounce-scroll': 'bounceScroll 2s ease infinite',
      },
      keyframes: {
        orbFloat: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bounceScroll: {
          '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
