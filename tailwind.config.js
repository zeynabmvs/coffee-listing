/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', ...fontFamily.sans]
      }
    },
    colors: {
      n: {
        1: '#111315',
        2: '#1B1D1F',
        3: '#6F757C',

      },
      green: '#BEE3CC',
      cream: '#FEF7EE',
      yellow: '#F6C768',
      red: '#ED735D'
    },
    fontSize: {
      heading: '2rem',
      body: '1rem',
      label: '0.875rem',
      sm: '0.625rem',
      price: '0.75rem'
    }
  },
  plugins: [],
};
