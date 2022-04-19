//import all the necessary stuff
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
// const { check, validationResult } = require("express-validator");

dotenv.config();

//route path

const userRouter = require("./routes/userRoute");
const boardRouter = require("./routes/boardRoute");
const postRouter = require("./routes/postRoute");


const app = express()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))
//routes
app.use("/user", userRouter); // localhost:5050/routename gets access to routes
app.use("/board", boardRouter); // localhost:5050/routename use in postman
app.use("/post", postRouter) //similar to django URLs



// app.get("/", async (req, res) => {
// 	res.send("hellooo")
// })



const runServer = async () => {
    await mongoose.connect('mongodb://localhost:27017/forum') //connect to mongoose
    console.log('success');

    app.listen(80, () => { //app.listen to connect server and app
        console.log('server is listening to port 80')
    })
}

module.exports = {
    app,
    runServer,
}

//call server function
runServer();