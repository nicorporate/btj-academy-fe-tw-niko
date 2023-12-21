/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          DEFAULT: "rgb(147 197 253)",
          100: "rgb(219 234 254)",
          200: "rgb(191 219 254)",
        },
      },
    },
  },
  plugins: [],
};
