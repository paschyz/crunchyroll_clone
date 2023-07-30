/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu Mono", "monospace"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
