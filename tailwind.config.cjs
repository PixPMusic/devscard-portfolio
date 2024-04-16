const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '4px',
      4: '3px',
      6: '12px',
      8: '16px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      primary: colors.purple,
      secondary: colors.sky,
      gray: colors.gray,
      purple: colors.purple,
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        show: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        show: 'show 225ms ease-in-out',
      },
      fontFamily: {
        sans: ['Tilt Neon', 'Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        print: { raw: 'print' },
        xs: '411px',
      },
    },
  },
  plugins: [],
};
