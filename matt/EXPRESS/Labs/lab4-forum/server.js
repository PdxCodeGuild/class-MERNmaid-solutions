const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const AuthRoutes = require("./routes/authRoutes");
const BoardRoutes = require("./routes/boardRoutes");
const PostRoutes = require("./routes/postRoutes");
const ProfileRoutes = require("./routes/profileRoutes");

const app = express();

//middleware
if (process.env.ENV !== "test") app.use(morgan("tiny"));


app.use(cors());
app.use(express.json());

//routes
app.use("/auth", AuthRoutes);
app.use("/board", BoardRoutes);
app.use("/post", PostRoutes);
app.use("/profile", ProfileRoutes);

const dbUrl = process.env.DB_URL;
const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    if (process.env.ENV !== "test") console.log("connected to db");
  } catch (err) {
    if (process.env.ENV !== "test") console.log(err);
  }
};

if (process.env.ENV !== "test") {
  connectDB();

  app.listen(port, () => {
    if (process.env.ENV !== "test") console.log(`Listening on port ${port}!!!`);
  });
}

module.exports = { 
  app,
  connectDB
 }