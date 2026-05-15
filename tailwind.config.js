/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 70px rgba(52, 211, 153, 0.18)"
      }
    }
  },
  plugins: []
};
