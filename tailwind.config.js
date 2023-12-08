/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // we are defining a custom breakpoint 'xs' at 480 pixels
      },
    },
  },
  plugins: [],
}

