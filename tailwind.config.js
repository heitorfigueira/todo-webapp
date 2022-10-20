/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: [
    './apps/**/*.html',
    './apps/**/*.ts',
    './libs/**/*.html',
    './libs/**/*.ts'
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
