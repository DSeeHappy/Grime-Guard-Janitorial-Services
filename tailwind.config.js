/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'display':['Oswald'],
      'body':['Oswald']
    },
    extend: {
      colors:{
        'LightBrownAccent':'#f6eaaf',
        'LightPinkAccent':'#e0446d',
        'LightBlueAccent':'#0988a9',
        'DarkBrownShade':'#37260c',
        'DarkBlueShade':'#083043',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  plugins: [],
}

/**
 *       'Light shades':'f6eaaf',
 *       'Light accent':'e0446d',
 *       'Main brand color':'0988a9',
 *       'Dark accent':'37260c',
 *       'Dark shades':'083043',
 */
