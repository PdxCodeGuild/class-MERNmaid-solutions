const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const AuthRoutes = require("./routes/authRoutes");
const BoardRoutes = require("./routes/boardRoutes");
const PostRoutes = require("./routes/postRoutes");

const app = express();

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//routes
app.use("/auth", AuthRoutes);
app.use("/board", BoardRoutes);
app.use("/post", PostRoutes);

const dbUrl = process.env.DB_URL;
const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`Listening on port ${port}!!!`);
});
