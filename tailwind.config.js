/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Satoshi': ['Satoshi' , 'sans-serif'],
        'General Sans': ['General Sans' ,'sans-serif'],
        'Switzer': ['Switzer' ,'sans-serif'],
        'Dancing Script': ['Dancing Script' ,'cursive']
      }
    },
  },
  plugins: [],
}