/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        stone: 'rgb(var(--stone-rgb) / <alpha-value>)',
        line: 'rgb(var(--line-rgb) / <alpha-value>)',
        clay: {
          DEFAULT: 'rgb(var(--clay-rgb) / <alpha-value>)',
          deep: 'rgb(var(--clay-deep-rgb) / <alpha-value>)',
          wash: 'rgb(var(--clay-wash-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: { md: '6px', xl: '12px', '2xl': '16px' },
      boxShadow: {
        sm: '0 1px 2px rgba(43,35,32,.04)',
        md: '0 4px 16px rgba(43,35,32,.06)',
        lg: '0 12px 32px rgba(43,35,32,.08)',
      },
      maxWidth: { prose: '68ch' },
    },
  },
};
