const express = require('express')
const app = express()
const path = require('path');
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home",
        name: "Teena"
    })
  })

  app.get('/portfolio-item', function (req, res) {
    res.render('portfolio-item', {
        title: "portfolio-item"
    })
  })


app.get('/about', function (req, res) {
    res.send('<h1> Hello World from About page - TEST </h1>')
  })
     
app.listen(3000, () => {
    console.log("The server is running in port 3000");
 })
