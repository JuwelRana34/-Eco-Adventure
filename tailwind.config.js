/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
    },
    fontFamily:{
      "Gochi":["Gochi Hand", "cursive"]
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

