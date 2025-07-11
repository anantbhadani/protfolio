/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        grey: {
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
        },
        lightHover: '#F9FAFB',
        darkTheme: '#1F2937',
        darkHover: '#111827',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'ovo': ['Ovo', 'serif'],
      },
    },
  },
  plugins: [],
} 