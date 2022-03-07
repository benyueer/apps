let Fontmin = require('fontmin')
let fontmin = new Fontmin()
  .src('./fonts/Milky Han Mono CN Heavy Italic.ttf')
  .dest('../build/fonts')

fontmin.run(function (err, files) {
  if (err) {
    throw err
  }

  console.log(files[0])
  // => { contents: <Buffer 00 01 00 ...> }
})