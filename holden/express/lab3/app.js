const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const itemsRouter = require("./routes/item");
const listRouter = require("./routes/list");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/lists", listRouter);
app.use("/items", itemsRouter);

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