/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.6rem'
    },
    extend: {
      colors: {
        dark : '#0f172a',
        font : '#64748b',
        purple: '#805AF0'
      }
    },
  },
  plugins: [],
}