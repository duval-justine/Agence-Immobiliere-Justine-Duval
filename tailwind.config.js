module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          '25': '#f6f8ff',
          '1000': '000929'
        }
      },
      fontFamily: {
        inter: 'Inter',
      },
    },
  },
  plugins: [],
}
