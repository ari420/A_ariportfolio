/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // your components
    "./src/**/*.{js,ts,jsx,tsx}", // if you're using /src
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant1: ['CormorantGaramond1', 'serif'],
        cormorant2: ['CormorantGaramond2', 'serif'],
      },
      colors: {
        main: "#0c0c0c",
        mainWhite: "#fdfcf8",
        mainBorder: "#0d0d0d",
        light: "#6366f1", 
        borderPage: "#ffffff56",
      },
    },
  },
  plugins: [],
};
