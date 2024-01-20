/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4054c6',
        black: '#161318',
        gray: '#211f24',
      },
    },
  },
  plugins: [],
};
