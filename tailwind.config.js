/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "endava-orange": {
          50: "#fff3f1",
          100: "#ffe5e1",
          200: "#ffcfc8",
          300: "#ffada1",
          400: "#fe7d6b",
          500: "#f6543d",
          600: "#e43921",
          700: "#c02a15",
          800: "#9e2716",
          900: "#832619",
          950: "#471008",
        },
        "endava-gray": {
          50: "#f6f5f8",
          100: "#ebe9f0",
          200: "#dcd9e4",
          300: "#c5bfd1",
          400: "#a89fbb",
          500: "#9488a9",
          600: "#877799",
          700: "#7a6a8b",
          800: "#675a73",
          900: "#544a5e",
          950: "#35303b",
        },
      },
      minWidth: {
        "1/2": "50%",
        "1/3": "30%",
        "1/4": "25%",
      },
    },
  },
  plugins: [],
};
