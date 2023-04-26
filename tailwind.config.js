/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Graphik",
    },

    extend: {
      colors: {
        primary: "#2C2C2C",
        secondary: "#F0F0F0",
      },
      backgroundColor: {
        primary: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
