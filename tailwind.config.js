/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {     backgroundImage: {
      'hero-pattern': "url('/skincare product.jpg')"
    },
  },
  plugins: [],
}
}
