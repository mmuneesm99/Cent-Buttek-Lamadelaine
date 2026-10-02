import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fff4c4',
          200: '#ffe98a',
          400: '#f7d34a',
          500: '#f5c518',
          600: '#e0ae00',
          700: '#b88a00',
          800: '#8c6a00',
        },
        lime: {
          50: '#f7fae6',
          100: '#eef5c4',
          400: '#d4e15a',
          500: '#c6d63c',
          600: '#a8b428',
          700: '#7d8a1c',
        },
        ink: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
} satisfies Config
