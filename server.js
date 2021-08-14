const express = require('express');
const users = require('./users')

var app = express();
const fs = require('fs')

app.get('/home', (req, res) => {
    res.send()
})

// middleware
// const messages = (req, res, next) => {
//     console.log("hello")
//     // next()
// }

function timework(req, res, next) {
    var date = new Date();
    var today = date.getDay();
    var time = date.getHours();
    // console.log(today);
    // console.log(time);
    if (1 <= today && today <= 5 && 9 <= time && time <= 17) {
        next();
    } else {
        res.send('<h1>We Are Closed. Come Back Later</h1>');
    }
}
app.use(timework);


// app.get('/users', messages, (req, res) => {
//     res.send(users)
// })

// routing
app.get("/", (req, res) => {
    fs.readFile('./public/index.html', 'utf-8', (err, data) => {
        err ? console.log(err) : res.send(data)
    })
})

app.get("/services", (req, res) => {
    fs.readFile('./public/services.html', 'utf-8', (err, data) => {
        err ? console.log(err) : res.send(data)
    })
})

app.get("/contactus", (req, res) => {
    fs.readFile('./public/contactus.html', 'utf-8', (err, data) => {
        err ? console.log(err) : res.send(data)
    })
})


const PORT = process.env.PORT || 5000

const server = app.listen(PORT, (err) => err ? console.log(err) : console.log(`server running on port ${PORT}`))