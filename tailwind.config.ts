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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-in-out'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(2rem)', opacity : '0'},
          '100%': { transform: 'translateY(0) ', opacity: '1'}
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
