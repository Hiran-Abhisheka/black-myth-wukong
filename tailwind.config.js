/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#ede4d0',
          300: '#e4d5b8',
          400: '#d4b86f',
          500: '#c49b3f',
          600: '#b08635',
          700: '#94702c',
          800: '#7a5a22',
          900: '#64481a',
        },
        obsidian: {
          50: '#f8f7f6',
          100: '#f0eeec',
          200: '#d9d5cf',
          300: '#c2bdb3',
          400: '#8b8077',
          500: '#544d45',
          600: '#453d35',
          700: '#36302a',
          800: '#2a2420',
          900: '#1a1613',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196, 155, 63, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(196, 155, 63, 0.6)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(196, 155, 63, 0.5)',
        'glow-lg': '0 0 60px rgba(196, 155, 63, 0.4)',
      },
    },
  },
  plugins: [],
}
