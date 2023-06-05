/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"], /**scan all html files in templates and check if there is tw code in html  */
  theme: {
    extend: {
      colors:{
        chatblack: {50:'#343541'}
      }
    },
  },
  plugins: [],
}

