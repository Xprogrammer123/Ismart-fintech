/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      colors: {
        'custom-color': 'rgba(155, 74, 16, 1)',
        'text-color':'#fff',
        'text-color-2': '#1A1A1A',
        'main-color': '#8B4513',
        'main-color-opa': '#9B4A1080',
        'main-color-30': '#974a024d',

        'border-1': '#E6E6E6',
        'circle-opa': '#FFF0E9',
        'circle-red': '#E8242D'
      },
      screens: {
        'medium-pc' : {'max': '1300px'},
        'small-pc': {'max': '950px'},
        'tablet': {'max': '700px'},
        'phone': {'max': '500px'},
        'small-phone': {'max': '450px'},
      },
    },
  },


  plugins: [],
}



