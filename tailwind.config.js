/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      primary:"var(--theme-primary)",
      secondary:"var(--theme-secondary)",
      "text-based":"var(--theme-text-base)"
    }
  },
  plugins: [],
}

