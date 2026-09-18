/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF',
        sand: '#E8DED2',
        coffee: '#342924',
        terracotta: '#A96F5C',
        gold: '#B99B76',
        ink: '#1E1B19',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        fadeIn: 'fadeIn 0.9s ease forwards',
      },
    },
  },
  plugins: [],
}
