module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--foreground)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      fontFamily: {
        sans: 'var(--font-lato)',
        playfair: 'var(--font-playfair)',
      },
      spacing: {
        18: '4.375rem',
        19: '4.6875rem',
      },
      boxShadow: {
        DEFAULT: '0 3px 6px rgb(0, 0, 0)',
        1: '0 16px 21px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
