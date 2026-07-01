export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c59d5f',
        beige: '#f5ede6',
        'soft-black': '#121212',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'beige-glow': 'radial-gradient(circle at top, rgba(197,157,95,0.16), transparent 40%), radial-gradient(circle at bottom, rgba(18,18,18,0.06), transparent 34%)',
      },
    },
  },
  plugins: [],
};
