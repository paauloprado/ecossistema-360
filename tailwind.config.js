/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  content: [],

  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'primary': '#2C4BA6', // azul escuro
        'secondary': '#00524D', // verde escuro
        'primary-custom': '#368FFF',  // azul claro
        'lemon': '#A1CE28',  // verde limão
      },
      fontFamily: {
        general: ["General Sans", "sans-serif"], 
        clash: ["ClashDisplay", "sans-serif"],
      },      
      screens: {
        'xxl': '1700px',
        'smm': '600px'
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
