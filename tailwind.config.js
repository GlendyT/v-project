/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        largeScreen: "url('./src/assets/Background Page Starts.jpg')",
        largeScreen2: "url('./src/assets/Background Page Generated.webp')",
        rightSidePassport:
          "url('./src/assets/Passport Image Generated Right Side.webp')",
        smallScreen: "url('./src/assets/Background Generated Phone.webp')",
        smallScreen2: "url('./src/assets/Background Starts Phone.webp')",
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
      },
      colors: {
        purpleButton: "rgb(93,40,95)",
        blueButton: "rgb(04,84,139)",
        greenButton: "rgb(32,95,30)",
      },
    },
  },
  plugins: [],
};
