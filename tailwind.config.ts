import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#f44336',
        secondaryColor: {
          100: '#cbcbcc',
          200: '#636363',
          300: '#444444',
          400: '#303030'
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-in-out',
        'pull-down': 'pullDown 0.2s ease-in-out',
        'slide-left': 'slideLeft 0.3s ease-in-out'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(2rem)', opacity : '0'},
          '100%': { transform: 'translateY(0) ', opacity: '1'}
        },
        pullDown: {
          '0%': {height: '0', opacity: '0'},
          '100%': {height: 'fit-content', opacity: '1'}
        },
        slideLeft: {
          '0%': {width: '0', opacity: '0'},
          '100%': {width: '60%', opacity: '1'}
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
