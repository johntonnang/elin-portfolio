import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-orange': '#FE6232',
        'background-white': '#FCF2E8',
        dark: '#1E1E1E',
        yellow: '#E6FE74',
        grey: '#B3B3B3',
      },
      fontFamily: {
        geist: ['var(--font-geist)', 'sans-serif'],
        reenie: ['var(--font-reenie)', 'cursive'],
      },
      fontSize: {
        72: '4.5rem',
        48: '3rem',
        44: '2.75rem',
        40: '2.5rem',
        36: '2.25rem',
        32: '2rem',
        24: '1.5rem',
        16: '1rem',
        14: '0.875rem',
        12: '0.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
