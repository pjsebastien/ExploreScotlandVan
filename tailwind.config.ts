import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vert profond - Highlands
        forest: {
          50: '#f0f5f1',
          100: '#dce8de',
          200: '#b9d1be',
          300: '#8fb498',
          400: '#6a9674',
          500: '#4a7856',
          600: '#3a6045',
          700: '#2f4d38',
          800: '#273f2e',
          900: '#1e3325',
          950: '#0f1c14',
        },
        // Beige sable - Plages écossaises
        sand: {
          50: '#faf8f5',
          100: '#f3efe7',
          200: '#e6ddce',
          300: '#d5c6ae',
          400: '#c2aa8d',
          500: '#b39474',
          600: '#a6825f',
          700: '#8b6b4f',
          800: '#725844',
          900: '#5e493a',
          950: '#32261e',
        },
        // Gris pierre - Châteaux et montagnes
        stone: {
          50: '#f7f7f6',
          100: '#e5e4e2',
          200: '#cac8c4',
          300: '#a8a5a0',
          400: '#86827c',
          500: '#6b6862',
          600: '#55524e',
          700: '#464340',
          800: '#3a3836',
          900: '#32312f',
          950: '#1a1918',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#32312f',
            h1: {
              color: '#1e3325',
            },
            h2: {
              color: '#2f4d38',
            },
            h3: {
              color: '#3a6045',
            },
            a: {
              color: '#3a6045',
              '&:hover': {
                color: '#2f4d38',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
