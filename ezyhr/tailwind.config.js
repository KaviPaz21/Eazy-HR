/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      height:{
        '97':'96vh'
      },
      fontSize:{
        'nv18':'18px',
        'c16':'16px',
        'c17':"17px",
        'c20':"20px"
      }
      
    },
  },
  plugins: [],
}