/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-violet-lighter': '#100234',
        'dark-blue-violet': '#0F0026',
      },
      screens: {
        'md': '769px',
      },
   },
  },
  plugins: [],
}
