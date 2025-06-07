/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'desktop': { 'max': '1700px' },
        'laptop': { 'max': '1280px' },
        'tablet': { 'max': '1060px' },
        'mobile': { 'max': '560px' },
      },
    },
  },
  plugins: [],
}

