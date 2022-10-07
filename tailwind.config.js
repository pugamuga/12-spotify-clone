/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1500px",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },

        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        heart: {
          to: { backgroundPosition: "right" },
        },
      },
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        heart: "heart 1.2s steps(28) forwards",
      },
    },
    fontFamily: {
      kufiM: ["Reem Kufi Fun", "sans-serif"],
      nablaPixel: ["Nabla", "cursive"],
      strongItalik: ["Ms Madi", "cursive"],
      lobster: ["Lobster", "cursive"],
      spotify: ["Andada Pro", "serif"],
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
