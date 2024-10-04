/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-color': 'var(--background-color)',
        'text-color': 'var(--text-color)',
        'border-color': 'var(--border-color)',
        'border-outline-color': 'var(--border-outline-color)',
        'icon-color': 'var(--icon-color)',
        'submit-btn-bg': 'var(--submit-btn-bg)',
        'submit-btn-text': 'var(--submit-btn-text)',
      },
    },
  },
  plugins: [],
};
