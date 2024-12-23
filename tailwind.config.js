/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".resources/**/*.blade.php",
    ".resources/**/*.js",
    ".resources/**/*.vue",
    ".resources/**/*.css",
    ".app/**/*.php",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

