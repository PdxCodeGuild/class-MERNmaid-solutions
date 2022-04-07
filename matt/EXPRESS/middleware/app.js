// const express = require("express");
// const morgan = require("morgan"); // bebugging tool example of a log: GET / 304 - - 2.566 ms // yarn add morgan
// const cors = require("cors"); // cross server communication // yarn add cors
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/first-mongo").then(() =>{
//     console.log('DB connected')
// }).catch(err => {
//     console.log(err)
// })


// const key = require('./config/keys');
// mongoose.connect(keys.mongoURI);





// const app = express();


// // Middleware example --------------------------
// // const pandaWare = () => (req, res, next) => {
// //     console.log("Panda sounds");
// //     next();
// // };
// // app.use(pandaWare());


// // debugging tool
// app.use(morgan("tiny"))

// // enable cors
// app.use(cors());

// app.get('/', (req, res) => {
//     console.log("Sending response")
//     res.send("Hello there!")
// });

// app.listen(3000, () => console.log("Server listening on port 3000"));






const express = require("express");
const mongoose = require("mongoose");  // bebugging tool example of a log: GET / 304 - - 2.566 ms // yarn add morgan
const cors = require("cors");  // cross server communication // yarn add cors

const Fruit = require("./models/fruit");

// require("dotenv").config();

const SECRET_DB_URL = "mongodb://localhost:27017/lab02";
const app = express();

mongoose.connect(SECRET_DB_URL).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error connecting to MongoDB: ", err);
    });

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});

app.post("/add-fruit", async (req, res) => {
    const fruit = new Fruit({ name: req.query.name, price: req.query.price });
    await fruit.save();
    res.send(fruit);
});

app.get("/fruits", async (req, res) => {
    const fruits = await Fruit.find();
    res.send(fruits);
});

app.get("/fruit", async (req, res) => {
    const fruit = await Fruit.findById("624cd7376b79a7e755072746");
    res.send(fruit);
});


