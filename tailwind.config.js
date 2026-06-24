/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050D1A',
          900: '#0A1628',
          800: '#0D1F3C',
          700: '#112850',
          600: '#1A3A6E',
        },
        electric: {
          400: '#5B9BF5',
          500: '#3280F0',
          600: '#1E6FE8',
          700: '#1558C0',
        },
        gold: {
          300: '#E5B96A',
          400: '#D4A043',
          500: '#C9922A',
          600: '#A8761E',
        },
        slate: {
          400: '#8A9BBE',
          500: '#6B7FA0',
          600: '#4F6382',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },
    },
  },
  plugins: [],
}
