/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["Avenir", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#ebffff",
          100: "#cdfbff",
          200: "#a1f4ff",
          300: "#60e9ff",
          400: "#18d5f8",
          500: "#00b8de",
          600: "#009eca",
          700: "#087496",
          800: "#105d7a",
          900: "#124e67",
          950: "#053247",
        },
        secondary: {
          50: "#fff1f0",
          100: "#ffe0dd",
          200: "#ffc6c0",
          300: "#ff9e94",
          400: "#ff6757",
          500: "#ff3823",
          600: "#ff1800",
          700: "#d71400",
          800: "#b11303",
          900: "#92170a",
          950: "#500800",
        },
        third: {
          50: "#fffdea",
          100: "#fff8c5",
          200: "#fff185",
          300: "#ffe246",
          400: "#ffd11b",
          500: "#ffb000",
          600: "#e28600",
          700: "#bb5d02",
          800: "#984808",
          900: "#7c3b0b",
          950: "#481d00",
        },
      },
    },
  },
  plugins: [],
};
