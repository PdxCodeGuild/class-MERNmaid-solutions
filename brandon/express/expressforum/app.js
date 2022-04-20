const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user.router.js");
const postRoutes = require("./routes/post.router.js");
const boardRoutes = require("./routes/board.router.js");

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const DB = process.env.DB;
const ENV = process.env.ENV;

// middleware
app.use(cors());
app.use(express.json());
if(ENV !== "test") app.use(morgan("dev"));

// routes
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/board", boardRoutes);

// database
const connect = async (db) => {
  try {
    const connection = await mongoose.connect(db);
    if(ENV !== "test") console.log("DB connected");
    return connection;
  } catch (error) {
    console.log(error);
  }
};

const startServer = async () => {
  await connect(DB);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

module.exports = {
  app,
  connect,
  startServer
};
