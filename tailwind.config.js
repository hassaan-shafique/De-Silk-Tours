/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
      colors: {
        primary: "#001F3F",
        accent: "#FFD700",
      },
    },
  },
  plugins: [],
}
