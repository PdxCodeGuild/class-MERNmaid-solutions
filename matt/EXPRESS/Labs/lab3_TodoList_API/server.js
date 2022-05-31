const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

const listRouter = require("./routes/list");
const itemRouter = require("./routes/item");

// read in .env file and set environment variables
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/list", listRouter);
app.use("/item", itemRouter);


mongoose.connect(process.env.DB_URL + process.env.DB_COLLECTION).then(() => {
    console.log("DB Connected");
    app.listen(process.env.PORT);
}).catch(err => {
    console.log(err)
    process.exit(-1)
})