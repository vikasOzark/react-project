/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // require.resolve('react-widgets/styles.css'),
  ],
  theme: {
    extend: {
      boxShadow: {
        gradient: '0 10px 15px -3px rgba(210, 86, 245, 0.5), 0 4px 6px -2px rgba(69, 150, 237, 0.1)',
      },
    },
  },
  plugins: [
    // require('react-widgets-tailwind')
  ],
}