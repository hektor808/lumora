/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#04101f',
        abyss: '#07182b',
        cyanGlow: '#49e6ff',
        emeraldGlow: '#4fffb0',
        auroraGold: '#f7cf72',
      },
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 44px rgba(73, 230, 255, 0.22)',
        emerald: '0 0 38px rgba(79, 255, 176, 0.18)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at center, rgba(73,230,255,0.12) 0 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
