const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const DB = process.env.DB;

const app = express();
const listsRouter = require("./routes/lists");
const itemsRouter = require("./routes/items");

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/list", listsRouter);
app.use("/items", itemsRouter)

const connect = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB connected");

    app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
  } catch(error) {
    console.log(error);
    process.exit(-1);
  }
}

connect();
