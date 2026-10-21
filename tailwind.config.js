/** Design tokens taken directly from the Stitch "Vindhyan Sanctuary" design system. */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        forest: '#1F3A2E',
        'forest-deep': '#14261E',
        moss: '#5A7344',
        amber: { DEFAULT: '#E08A1E', soft: '#FFB86F' },
        ochre: { DEFAULT: '#A8432A', deep: '#822711' },
        sand: '#F2EADB',
        charcoal: '#141815',
        // Stitch material tokens
        surface: '#FFF8EF',
        'surface-low': '#FBF3E4',
        'surface-mid': '#F5EDDE',
        'surface-high': '#EFE7D8',
        'surface-highest': '#E9E2D3',
        ink: '#1E1B12',
        'ink-soft': '#534435',
        outline: '#6B5A4A',
        'outline-soft': '#D9C3B0',
        primary: '#8A5100',
        'primary-fixed': '#FFDCBE',
        secondary: '#486457',
        'secondary-soft': '#C8E7D5',
        'secondary-fixed': '#CBEAD8',
        tertiary: '#A23E26',
        'tertiary-fixed': '#FFDAD2',
        'tertiary-dim': '#FFB4A2',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        label: ['var(--font-label)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.07', letterSpacing: '-0.015em' }],
        'headline-lg': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'headline-md': ['2rem', { lineHeight: '1.15' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.25' }],
        'label-lg': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.08em', fontWeight: '600' }],
        'label-md': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.12em', fontWeight: '600' }],
        'label-sm': ['0.6875rem', { lineHeight: '0.875rem', letterSpacing: '0.16em', fontWeight: '700' }],
      },
      borderRadius: { card: '1.25rem' },
      boxShadow: {
        lift: '0 12px 32px -4px rgba(31,58,46,0.12)',
        menu: '0 16px 36px rgba(31,58,46,0.12)',
      },
      maxWidth: { site: '80rem' },
      keyframes: {
        kenburns: { '0%': { transform: 'scale(1.0)' }, '100%': { transform: 'scale(1.08)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        kenburns: 'kenburns 18s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
