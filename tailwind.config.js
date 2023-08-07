/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prima: {
          500: '#4F46E5',
          700: '#3f3797'
        }
      },
      brightness: {
        40: '.40',
        175: '1.75',
      }
    },
    fontFamily: {
      'sans': ['Segoe UI', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}

