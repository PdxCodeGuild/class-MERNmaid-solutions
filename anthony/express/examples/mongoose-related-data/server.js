const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const characterRouter = require("./routes/character");
const skillsRouter = require("./routes/skills");

// read in .env file and set environment variables
dotenv.config();

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/char", characterRouter);
app.use("/skills", skillsRouter);

// Connect to mongodb
mongoose
  .connect(process.env.DB_URL + process.env.DB_COLLECTION)
  .then(() => {
    console.log("DB Connected");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });
