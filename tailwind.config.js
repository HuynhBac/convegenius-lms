/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-color': 'rgb(var(--background-color))',
        'text-color': 'rgb(var(--text-color))',
        'border-color': 'rgb(var(--border-color))',
        'border-outline-color': 'rgb(var(--border-outline-color))',
        'icon-color': 'rgb(var(--icon-color))',
        'submit-btn-bg': 'rgb(var(--submit-btn-bg))',
        'submit-btn-text': 'rgb(var(--submit-btn-text))',
      },
    },
  },
  plugins: [],
};
