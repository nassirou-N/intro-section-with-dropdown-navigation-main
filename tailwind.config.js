/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '880px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors:{
        Almost_White: 'hsl(0, 0%, 98%)',
        Medium_Gray: 'hsl(0, 0%, 41%)',
        Almost_Black: 'hsl(0, 0%, 8%)',
      },
      
    },
  },
  plugins: [],
}

