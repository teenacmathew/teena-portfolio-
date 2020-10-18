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
        title01: "Thedrug.store",
        title02: "Shopify Developer",
        title03: "Qburst",
        subtitle: "June 2018 – December 2018",
        imagetitle: "/images/drugstore.jpg",
        para01: "The project is an ecommerce website for drugs built using Shopify",
        para02: "Maintenance and support for the application based on new feature change.",
        para03: "Integrated multi-currency for the support of multiple currency based on user preference.",
        para04: "Responsible for increasing the speed of the website.",
        item: "/images/shopify.jpg",
    })
  })

  app.get('/portfolio-item3', function (req, res) {
    res.render('portfolio-item', {
      title: "Automotive Kiosk",
      title01: "Automotive Kiosk",
      title02: "Student",
      title03: "Conestoga College",
      subtitle: "March 2020 – April 2020",
      imagetitle: "/images/kiosk.png",
      para01: "Developed automotive kiosk system using C# through a WPF application to improve work efficiency for customers to purchase their vehicle services on their time along with Unit Tests.",
      para02: "Responsible for building a GUI with WPF control to allow user selection from the items presented to them via kiosk.",
      para03: "Implemented LINQ queries to save and fetch data from the CSV file",
      para04: "Implemented serialization of data from objects to a CSV file",
      item: "/images/kiosk-banner.png",
    })
  })

  app.get('/portfolio-item4', function (req, res) {
    res.render('portfolio-item', {
      title: "TuneCore Social",
      title01: "TuneCore Social",
      title02: "RubyOnRails developer",
      title03: "QBurst",
      subtitle: "January 2019 – December 2019",
      imagetitle: "/images/socialprobytunecore.jpg",
      para01: "The application is built for the artists to collect the insights of their posts in multiple social media.",
      para02: "Proactively identified project work flow problems and developed alternate trackable approach along with source code management using Ruby on Rails frameworks.",
      para03: "Created APIs to plan, upload, and schedule with intelligent social posting so that can focus on real-time fan engagement.",
      para04: "Troubleshoot customer problems and provided solutions in a timely fashion with a continuous improvement using Ruby.",
      item: "/images/project03.jpg"
    })
  })

  app.get('/portfolio-item5', function (req, res) {
    res.render('portfolio-item', {
      title: "Bozzuto",
      title01: "Bozzuto",
      title02: "Smartrent/CRM Application",
      title03: "QBurst",
      subtitle: "January 2017 – May 2018",
      imagetitle: "/images/buzzoto.png",
      para01: "The application collects the data of the residents from Buzzoto appartments to process the rewards based on the tenure and period of stay.",
      para02: "Proactively identified project work flow problems and developed alternate trackable approach along with source code management using Ruby on Rails frameworks.",
      para03: "Solved bugs in algorithm to reduce impact, calculate the monthly rewards from CSV feeds, AWS S3 location.",
      para04: "Troubleshoot customer problems and provided solutions in a timely fashion with a continuous improvement using Ruby.",
      item: "/images/bozzuto-banner.png"
    })
  })

  app.get('/portfolio-item6', function (req, res) {
    res.render('portfolio-item', {
      title: "IOS/Swift",
      title01: "IOS/Swift",
      title02: "Covid-19 Live Tracker,",
      title03: "Conestoga College",
      subtitle: "January 2020 – February 2020",
      imagetitle: "/images/covid.png",
      para01: "Programmed mobile solution application using Swift to track the live data for Covid19 in the word and the closest country to user location displayed in charts, provided self-assessment and preventive measures.",
      para02: "Obtained Covid19 information by parsing external API response.",
      // para03: "Shows the global statistics of COVID19 and Data of current Location is also displayed.",​
      para04: "Self-assessment and guidelines are also provided",
      item: "/images/covid-banner.png"
    })
  })

app.get('/about', function (req, res) {
    res.send('<h1> Hello World from About page - TEST </h1>')
  })
     
app.listen(3000, () => {
    console.log("The server is running in port 3000");
 })
