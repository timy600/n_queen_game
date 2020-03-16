//console.log("Hello World !"); // Va écrire dans la console "Hello World !".
//global.console.log("Hello World !"); // Va écrire dans la console "Hello World !".

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index.html')
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
