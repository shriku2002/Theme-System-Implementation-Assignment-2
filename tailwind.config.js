/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Default theme
        default: {
          primary: '#3B82F6',
          secondary: '#1D4ED8',
          accent: '#60A5FA',
          background: '#F3F4F6',
          text: '#1F2937',
        },
        // Organ Transplant theme
        'organ-transplant': {
          primary: '#16A34A',
          secondary: '#15803D',
          accent: '#4ADE80',
          background: '#F0FDF4',
          text: '#14532D',
        },
        // Cosmetic Surgery theme
        'cosmetic-surgery': {
          primary: '#EC4899',
          secondary: '#DB2777',
          accent: '#F9A8D4',
          background: '#FDF2F8',
          text: '#831843',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};