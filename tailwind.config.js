module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#A67C52', // accent brown
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        rounded: ['Quicksand', 'ui-rounded', 'sans-serif'],
      },
      animation: {
        'gentle-fade-in': 'gentleFadeIn 0.8s ease-out',
      },
      keyframes: {
        gentleFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'enhanced': '12px',
      },
    },
  },
  plugins: [],
}; 