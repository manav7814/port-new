/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 50px rgba(168,85,247,0.28)'
      },
      backgroundImage: {
        'radial-soft':
          'radial-gradient(circle at top left, rgba(168,85,247,0.22), transparent 32%), radial-gradient(circle at top right, rgba(59,130,246,0.16), transparent 28%), radial-gradient(circle at bottom center, rgba(15,23,42,0.55), rgba(2,6,23,1))'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -16px, 0)' }
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.96)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.06)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        blob: 'blob 16s infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
