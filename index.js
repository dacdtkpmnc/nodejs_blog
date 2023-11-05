const express = require('express')
const app = express()
const port = 3000


//route: duong di 
app.get('/trang-chu', (req, res) => {
  var a=1;
  var b=2;
  var c=a+b;
  return res.send('<h1><i>Hihi</i>Hello World!</h1>')
})


//127.0.0.1 -localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})