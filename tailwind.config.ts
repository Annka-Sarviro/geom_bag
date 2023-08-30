import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '380px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      40: ['2.5rem', '3.375rem'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.5rem',
          xl: '2rem',
        },
      },
      backgroundImage: {},
      colors: {
        dark: '#1E1E1E',
        dark_gray: '#6E6E6E',
        gray: '#8C8C8C',
        gray_light: '#C7C7C7',
        white_gray: '#DFDEDE',
        gray_transparent: 'rgba(29, 29, 29, 0.34)',
        accent: '#5364FA',
        error: '#E25252',
      },
      fontFamily: {
        sans: ['Noto_Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
