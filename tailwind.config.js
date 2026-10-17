/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep obsidian-emerald base tones inspired by TvTotal24 background
        obsidian: {
          950: '#020604', // Dominant Deep Pitch Black base
          900: '#050e09', // Dark emerald surface
          850: '#091810', // Rich container
          800: '#0f2418', // Elevated card
          700: '#163524', // Border highlight
          600: '#1e4832', // Vibrant esmerald
        },
        // Compatible aliases for seamless theme transitions
        ink: {
          950: '#020604',
          900: '#050e09',
          850: '#091810',
          800: '#0f2418',
          700: '#163524',
          600: '#1e4832',
        },
        navy: {
          950: '#020604',
          900: '#050e09',
          850: '#091810',
          800: '#0f2418',
          700: '#163524',
          600: '#1e4832',
          500: '#10b981',
          400: '#22c55e',
          300: '#4ade80',
        },
        // Vibrant Neon Green palette extracted directly from Logo TvTotal24 Final.png
        neon: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          electric: '#00e676', // Speed lines and neon green glow
          lime: '#10b981',     // Logo "Tv" text tone
          emerald: '#059669',
        },
        brand: {
          primary: '#00e676', // Primary Electric Green from Logo
          accent: '#10b981',  // Complementary Emerald / Lime
          green: '#22c55e',
          white: '#ffffff',   // Logo "Total" pure glossy white
          black: '#0a0a0a',   // Logo "24" glossy obsidian
          glow: 'rgba(0, 230, 118, 0.45)',
          deep: '#020604',
        },
        gold: {
          300: '#fef08a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
