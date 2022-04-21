const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const AuthRoutes = require("./routes/auth.routes");
const PostRoutes = require("./routes/posts.routes");
const BoardRoutes = require("./routes/board.routes");
const ProfileRoutes = require("./routes/profile.routes");

dotenv.config();

// create express app
const app = express();

// Middleware
app.use(cors());
if (process.env.ENV !== "test") app.use(morgan("tiny"));

app.use(express.json()); // exact same as bodyParser

// Routes
app.use("/auth", AuthRoutes);
app.use("/post", PostRoutes);
app.use("/board", BoardRoutes);
app.use("/profile", ProfileRoutes);

const dbUrl = process.env.DB_URL;
const port = process.env.port;

const connectDB = async (collectionName = "/lab4") => {
  try {
    await mongoose.connect(dbUrl + collectionName);
    if (process.env.ENV !== "test") console.log("🐱‍👤 DB Connected...");
  } catch (err) {
    console.log(err);
  }
};

if (process.env.ENV !== "test") {
  connectDB();
  app.listen(port, () => {
    if (process.env.ENV !== "test") console.log(`Listening on port ${port}`);
  });
}

module.exports = {
  app,
  connectDB,
};
