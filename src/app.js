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

  app.get('/portfolio-item1', function (req, res) {
    res.render('portfolio-item', {
        title: "VARLab",
        title01: "AR/VR Developer",
        title02: "VARLab,",
        title03: "Conestoga College",
        subtitle: "June 2020 – Present",
        imagetitle: "/images/vts-logo.jpg",
        para01: "The project involves developing 3D tour and tutorials for different hands-on courses targeting the students who have apparently not visited the college",
        para02: " Responsible for developing multiple modules of the project with 360-degree tour using H5P and VTS editor tools.",
        para03: "Researched and documented best practices for the modules assigned in the project.",
        para04: "Attended regular scrum meetings and presented demo of assigned modules on bi-weekly basis.",
        item: "/images/vts.png",
    })
  })

  app.get('/portfolio-item2', function (req, res) {
    res.render('portfolio-item', {
        title: "Thedrug.store",
        title01: "Shopify Developer",
        title02: "Qburst",
        title03: "",
        subtitle: "June 2018 – December 2018",
        imagetitle: "/images/drugstore.jpg",
        para01: "The project is an ecommerce website for drugs built using Shopify",
        para02: "Maintenance and support for the application based on new feature change.",
        para03: "Integrated multi-currency for the support of multiple currency based on user preference.",
        para04: "Responsible for increasing the speed of the website.",
        item: "/images/shopify.jpg",
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
