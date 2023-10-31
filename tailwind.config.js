/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/index.html"],
  theme: {
    extend: {
      colors:{
        'primary':"var(--primary-color)",
        'secondary':"var(--secondary-color)",
        'text-base':"var(--text-base)",
        'selection':"#a8a29e"
      },
      
    },
    
  },
  plugins: [],
}

