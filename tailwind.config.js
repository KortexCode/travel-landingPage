/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'terciary':"#61AEC9",
      'white':"#ffffff",
    }),
    textColor: theme => ({
			...theme('colors'),
			primary: '#CC2D4A',
			secondary: '#8FA206',
			terciary: '#61AEC9',
		}),
    fontFamily : {
      Montserrat : ["Montserrat", "sans-serif"]
    },
    extend: {
      backgroundImage : {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
			  
			},
      borderColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      boxShadow:{
        shadowButton:"0px 2px 7px rgba(0 0 0 / 0.25)",
        cardShadow: "0px 1.63319px 1.63319px rgba(0 0 0 / 0.25)",
      },
      ringColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
