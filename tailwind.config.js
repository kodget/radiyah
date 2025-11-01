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
        'deep-brown': '#6B2B18',
        'muted-beige': '#EAD9C9',
        'warm-cream': '#F5E8DB',
        'soft-rust': '#A65435',
        'gold': '#D4AF37',
        'off-white': '#FDF8F2',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'serif': ['Merriweather', 'serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      spacing: {
        'section': '3rem',
        'section-lg': '4rem',
        'inner': '2.5rem',
        'footer': '2rem',
      },
      lineHeight: {
        'elegant': '1.5',
      },
    },
  },
  plugins: [],
}