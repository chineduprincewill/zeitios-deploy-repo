/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      colors: ({ colors }) => ({
        primary: '#0259DB',
        basic: '#0259DB99',
        secondary: '#073E90',
        dark: '#000000E5',
        lightGray: '#989797',
        lighterGray: '#D0E1FA',
        darkGray: '#323232',
        lightOrange: ' #F9BDAC',
        lightPink: '#FFB19D',
      }),
      backgroundImage: {
        "home": "url('/src/assets/image/background-image.png')"
      }
    },
  },
  plugins: [],
}

