/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'glow-blue': '0 0 80px -10px rgba(59, 130, 246, 0.3)'
      }
    }
  },
  plugins: []
}

