/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F4F4F",
        secondary: "#828282",
        accent: "#BDBDBD",
      },
      keyframes: {
        barLoader: {
          from: { transform: "translate(0, 0)" },
          to: { transform: "translate(240px, 0)" },
        },
      },
      animation: {
        barLoader: "barLoader 2s infinite alternate ease-in-out",
      },
    },
  },
  plugins: [],
};
