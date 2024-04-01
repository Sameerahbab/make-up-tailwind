/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center:true,
        padding: {
          DEFAULT: '2rem',
          sm: '1.5rem'
        }
      },
      colors:{
        "primary-color":"#FF204E",
        "primary-color-dark":"#A0153E",
        "secondary-color-light":"#5D0E41",
        "third":"#00224D",
        "off-white":"#FBE5E5",
      },
    },
  },
  plugins: [],
}

