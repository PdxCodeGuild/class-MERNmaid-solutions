//1) yarn init -y
//2) yarn add express
//3) yarn add -D nodemon
//4)  in scripts "scripts": {
//     "start": "nodemon app.js"
//   },


const express = require("express");

const app = express();

app.get('/', (req, res) => {
    console.log("Someone visited this server!");
    res.send("Thanks for visiting my server")
});

app.get('/about', (req, res) => {
    console.log("About page!");
    res.send({ url: req.url, time: new Date() })
});

app.listen(3000);