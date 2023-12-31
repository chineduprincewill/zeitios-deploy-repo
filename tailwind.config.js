/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      fontFamily: {
        // body: ["Inter", "sans-serif"],
        body: ["Red Hat Display", "sans-serif"],
      },
      colors: ({ colors }) => ({
        primary: '#0259DB',
        milk: '#ECEEEF',
        basic: '#0259DB99',
        secondary: '#073E90',
        dark: '#000000E5',
        lightGray: '#989797',
        lighterGray: '#D0E1FA',
        darkGray: '#323232',
        lightOrange: ' #F9BDAC',
        lightPink: '#FFB19D',
        whiteSmoke: '#F5F5F5',
        darkBlue: '#0259DB',
        darkerBlue: '#032B68',
        lighterGray: '#9D9D9D',
        lightBlue: '#6CA7FF',
        lightMilk: '#BABCBE',
        lightGrey: '#CBC8C8',
      }),
      backgroundImage: {
        home: "url('/src/assets/image/background-image.png')",
        fourthPicture: "url('/src/assets/image/fourth_picture.png')",
        fifthPicture: "url('/src/assets/image/fifth_picture.png')",
        sixthPicture: "url('/src/assets/image/sixth_picture.png')",
        seventhPicture: "url('/src/assets/image/seventh_picture.png')",
        eighthPicture: "url('/src/assets/image/eighth_picture.png')",
        twelvethPicture: "url('/src/assets/image/twelveth_picture.png')",
      },
      width: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/7': '14.285714%',
        '2/7': '28.571428%',
        '3/7': '42.857142%',
        '4/7': '57.142857%',
        '5/7': '71.428571%',
        '6/7': '85.714285%',
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/9': '11.111111%',
        '2/9': '22.222222%',
        '4/9': '44.444444%',
        '5/9': '55.555555%',
        '7/9': '77.777777%',
        '8/9': '88.888888%',
        '3/10': '30%',
        '4/10': '40%',
        '7/10': '70%',
        '9/10': '90%',
        '2/11': '18.181818%',
        '3/11': '27.272727%',
        '4/11': '36.36363636%',
        '5/11': '45.45454545%',
        '7/11': '63.636363%',
        '6/11': '54.545454%',
        '8/11': '72.727272%'
      }),
      height: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/7': '14.285714%',
        '2/7': '28.571428%',
        '3/7': '42.857142%',
        '4/7': '57.142857%',
        '5/7': '71.428571%',
        '6/7': '85.714285%',
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/9': '11.111111%',
        '2/9': '22.222222%',
        '4/9': '44.444444%',
        '5/9': '55.555555%',
        '7/9': '77.777777%',
        '8/9': '88.888888%',
        '1/10': '10%',
        '3/10': '30%',
        '9/10': '90%',
        '7/10': '70%',
        '2/11': '18.181818%',
        '3/11': '27.272727%',
        '5/11': '45.45454545%',
        '6/11': '54.545454%',
        '8/11': '72.727272%',
        '1/12': '8.333333%'
      }),
    },
  },
  plugins: [],
};
