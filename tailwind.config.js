/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backdropBlur: {
        md: '12px',
      },
    },
  },
  
  plugins: [],
}


