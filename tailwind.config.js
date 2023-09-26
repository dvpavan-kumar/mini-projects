module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff8133',
      },
    },
  },
  content: ["./*.html","node_modules/preline/dist/*.js","./src/**/*.jsx"],
  plugins: [
    require('preline/plugin'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-primary': {
          borderColor: 'var(primary)', // Change this to your desired border color
        },
        '.bg-primary': {
          backgroundColor: 'var(primary)', // Change this to your desired background color
        },
        '.text-white': {
          color: '#FFFF', // White color
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}