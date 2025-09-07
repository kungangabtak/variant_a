module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#A67C52', // Main accent brown
        'accent-solid': '#A67C52', // Explicit accent solid
        'warm-dark': '#8B6B3D', // Coffee rich
        'warm-light': '#C4996B', // Light warm
        'coffee-rich': '#8B6B3D',
        cream: '#FBF7F0',
        'warm-solid': '#F5E9DA',
        'warm-light-bg': '#FAF3EA',
        'warm-dark-bg': '#E8D5C4',
        // New sage green highlight accent
        sage: '#418B26',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        rounded: ['Quicksand', 'ui-rounded', 'sans-serif'],
      },
      fontSize: {
        'balance': ['1rem', { lineHeight: '1.75', letterSpacing: '0.02em' }],
      },
      animation: {
        'gentle-fade-in': 'gentleFadeIn 0.8s ease-out',
        'slide-left': 'slideInLeft 0.8s ease-out',
        'slide-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'floatingGentle 6s ease-in-out infinite',
        'pulse-warm': 'pulse-warm 3s ease-in-out infinite',
        'gentle': 'gentleFadeIn 0.8s ease-out',
      },
      keyframes: {
        gentleFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatingGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-warm': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(166, 124, 82, 0.4)'
          },
          '50%': { 
            transform: 'scale(1.02)',
            boxShadow: '0 0 0 10px rgba(166, 124, 82, 0)'
          },
        },
      },
      backdropBlur: {
        'enhanced': '15px',
      },
      boxShadow: {
        'warm': '0 8px 25px rgba(166, 124, 82, 0.15)',
        'warm-lg': '0 20px 40px rgba(166, 124, 82, 0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      lineHeight: {
        'relaxed-plus': '1.75',
      },
      letterSpacing: {
        'relaxed': '0.02em',
      },
      transitionTimingFunction: {
        'warm': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}; 