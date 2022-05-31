const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const AuthRoutes = require("./routes/auth.routes");
const PostRoutes = require("./routes/post.routes");

dotenv.config();

// create express app
const app = express();

// Middleware
app.use(cors());
app.use(morgan("short"));
app.use(express.json());

// Routes
app.use("/auth", AuthRoutes);
app.use("/api", PostRoutes);

const dbUrl = process.env.DB_URL;
const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("🚀 DB connected...");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
