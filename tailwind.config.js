/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        picsNow: {
          primary: "#fc6203",
          secondary: "#0ac0f7",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
