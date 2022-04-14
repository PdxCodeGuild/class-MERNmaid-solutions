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

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/board", boardRoutes);

// database
const connect = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

connect();
