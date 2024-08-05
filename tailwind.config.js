/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark': '#2E3038',
      'main' : '#FFFFF5',
      'select' : '#A2AF95',
      'indigo' : '#5973B7',
      'white' : '#FFFFFF',
      'black' : '#000000'
    },
    extend: {
      fontFamily: {
        'rubik' : ["Rubik", 'sans-serif'],
        'DM' : ["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}