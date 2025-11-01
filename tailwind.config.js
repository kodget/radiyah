/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'emerald': '#0B3D3A',
        'burgundy': '#7A1E25',
        'gold': '#D4AF37',
        'marble': '#F5F5F5',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        'display': ['Cinzel Decorative', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
        'script': ['Alex Brush', 'cursive'],
      },
      spacing: {
        'section': '4rem',
        'section-lg': '6rem',
        'inner': '3rem',
        'breathing': '2rem',
      },
      backgroundImage: {
        'marble': 'linear-gradient(135deg, #F5F5F5 0%, #EFEFEF 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #0B3D3A 0%, #0F4A46 100%)',
      },
    },
  },
  plugins: [],
}