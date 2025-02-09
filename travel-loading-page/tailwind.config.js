/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(8px)' }
        }
      },
      animation: {
        'scroll': 'scroll 1.5s ease-in-out infinite alternate'
      },
    },
  },
  plugins: [],
}

