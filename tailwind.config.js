/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy:        '#1E2235', // deep navy — primary dark, logo body
          'navy-800':  '#2A3050', // lighter navy for hover states
          gold:        '#B8973A', // warm gold — primary accent, logo arrow
          'gold-dark': '#8B6820', // darker gold for hover/depth
          'gold-light':'#D4AF62', // lighter gold for tints & pills
          dark:        '#32383D', // charcoal — body text, headings
          gray:        '#8C8D8C', // mid gray — secondary / muted text
          light:       '#E0E0DF', // light gray — borders, dividers
          cream:       '#F0EFED', // warm off-white — hero & section bg
          'logo-bg':   '#E2E2E1', // exact background colour baked into the logo SVG
        },
      },
    },
  },
  plugins: [],
};
