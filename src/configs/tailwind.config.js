/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["../src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#F8F8F9",
        customgreen: "#7CDABF",
        primaryblue: "#91C9E4",
        secondaryblue: "#4782AA",
        dangerblue: "#C5DCEC",

        general_blue: "#1E56A0",
      },
    },
  },
};
