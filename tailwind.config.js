/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Luxo Bronze" - Preto fosco + Bronze metálico
        bg: {
          900: '#0B0B0C',              // Preto profundo (fundo principal)
          800: '#161617',              // Grafite 1 (cards)
          700: '#2A2A2C',              // Grafite 2 (linhas/bordas)
        },
        bronze: {
          700: '#8C5C3A',              // Bronze escuro (base)
          600: '#A26B43',              // Bronze intermediário
          500: '#B37B4E',              // Bronze médio (realce)
          400: '#C79766',              // Bronze intermediário claro
          300: '#D8AE7A',              // Bronze claro (brilho)
        },
        champagne: '#EED9B6',          // Champagne (pico do brilho)
        offwhite: '#F6F1E8',           // Off-white quente (texto em bronze)
        // Cores originais mantidas como fallback
        luxury: {
          'deep-black': '#0B0B0C',
          'dark-gray': '#161617',
          'bronze': '#B37B4E',
          'cream': '#F6F1E8',
          'medium-gray': '#4C4C4C',
          'sophisticated-brown': '#8C5C3A',
        },
        gold: {
          'primary': '#B37B4E',
          'bright': '#D8AE7A',
          'copper': '#8C5C3A',
          'hover-light': '#EED9B6',
          'hover-bright': '#F6F1E8',
          'hover-copper': '#A26B43',
        },
        // Mantendo cores originais como fallback
        primary: {
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f4ede1',
          300: '#ebe0cc',
          400: '#dcc9a8',
          500: '#c9ad7f',
          600: '#b8955f',
          700: '#a17c47',
          800: '#86653a',
          900: '#6d5230',
        },
        secondary: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef5d3',
          300: '#fde8a7',
          400: '#fbd770',
          500: '#f9c23c',
          600: '#f0a020',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        },
        accent: {
          50: '#f9f9f9',
          100: '#f1f1f1',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b0b0b0',
          500: '#8a8a8a',
          600: '#6a6a6a',
          700: '#4a4a4a',
          800: '#2a2a2a',
          900: '#1a1a1a',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}