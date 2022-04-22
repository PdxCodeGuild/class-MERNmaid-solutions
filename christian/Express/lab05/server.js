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
const chaiHttp = require('chai-http');


const app = express()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))
//routes
app.use("/user", userRouter); // localhost:5050/routename gets access to routes
app.use("/board", boardRouter); // localhost:5050/routename use in postman
app.use("/post", postRouter) //similar to django URLs
// chai.use(chai.Http)



const connectDatabase = async (forum) => {
    try {
      const connection = await mongoose.connect(
        `mongodb://localhost/${forum}`
      );
      if (process.env.ENV !== "test")
        console.log(`Connected to database "${forum}"...`);
      return connection;
    } catch (err) {
      console.error(err);
    }
  };
  
  const runServer = async (port = 80, hostname = "localhost") => {
    await connectDatabase("forum");
  
    app.listen(port, hostname, () => {
      console.log(`Listening at ${hostname}:${port}`);
    });
  };



module.exports = {
    app,
    connectDatabase,
    runServer,
}

//call server function
// runServer();