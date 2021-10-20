module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        'todo-bg':'#3f3f3f',
        'viewtodo-bg':'#1f1f1f',
        'todoitem-bg':'#4b4b4b',
        'addtodo-bg':'#a892ee',
        'todo-btn':'#40005d',
        'todo-btn-hover':'#510674'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
