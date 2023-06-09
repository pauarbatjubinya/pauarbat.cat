/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #1b3965",
      },
    },
    colors: {
      primary: {
        50: "#ecfdf4",
        100: "#d1fae2",
        200: "#1b3965",
        300: "#1b3965",
        400: "#1b3965",
        500: "#1b3965",
        600: "#1b3965",
        700: "#1b3965",
        800: "#1b3965",
        900: "#1b3965",
        950: "#1b3965",
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#515152",
        800: "#464646",
        900: "#292929",
        950: "#16161b",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
