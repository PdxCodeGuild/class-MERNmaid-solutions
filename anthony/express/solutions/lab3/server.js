const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const listRouter = require("./routes/list.routes");

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json()); // equivalent to body-parser

app.use("/lists", listRouter);

const connectDB = async (dbName = "lab3") => {
  try {
    await mongoose.connect("mongodb://localhost:27017/" + dbName);
    console.log("🚀 DB Connected...");
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};

const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`🧜‍♀️ listening on port ${process.env.PORT}`);
  });
};

module.exports = {
  connectDB,
  startServer,
  app,
};
