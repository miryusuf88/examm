/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
				serif: ['Alexandria', 'sans-serif'],
			},
      colors:{
        white: '#fff',
        secondary:'#f9f9f9',
        yellow:'#ffbd54',
        black:'#000',
        blue:'#78C0DE',
        gray:'#949494',
        dark:'#333333',
        'gray-secn':'#DBDBDB'
      },
    },
  },
  plugins: [],
}