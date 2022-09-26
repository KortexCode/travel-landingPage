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
        'sanFrancisco': "url(./public/assets/img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url(./public/assets/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url(./public/assets/img/yosemite.jpg')",
			  'LA': "url(./public/assets/img/LA.jpg')",
			  'seattle': "url(./public/assets/img/seattle.jpg')",
			  'new_york': "url(./public/assets/img/new_york.jpg')",
			  'norway': "url(./public/assets/img/norway.jpg')",
			  'sydney': "url(./public/assets/img/sydney.jpg')",
			  'miami': "url(./public/assets/img/miami.jpg')",
			  'switzerland': "url(./public/assets/img/switzerland.jpg')",
			  'bali': "url(./public/assets/img/bali.jpg')",
			  'norway': "url(./public/assets/img/norway.jpg')",
			  'chicago': "url(./public/assets/img/chicago.jpg')",
			  'europe': "url(./public/assets/img/europe.jpg')",
			  'iceland': "url(./public/assets/img/iceland.jpg')",
      },
      boxShadow:{
        shadowButton:"0px 2px 7px rgba(0 0 0 / 0.25)",
      }
    },
  },
  plugins: [],
}
