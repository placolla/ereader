/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
    './node_modules/@literal-ui/core/**/*.js',
    './node_modules/@flow/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [require('@flow/tailwind'), require('@tailwindcss/line-clamp')],
}
