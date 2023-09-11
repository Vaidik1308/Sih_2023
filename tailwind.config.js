/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '8': '1fr 4fr',
      },
      backgroundImage: {
        'login_bg': "url('./src/assets/login_img.png')",
        'back': "url('./src/assets/home/back.png')",
        'back_img': "url('./src/assets/home/back_img.png')",
        
      },
      fontFamily:{
        'Inter':['Inter']
      }
    },
  },
  plugins: [],
}

