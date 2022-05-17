const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const envPath = path.resolve(__dirname, "../../.env")
dotenv.config({path: envPath});

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

const connectDB = async (dbName = process.env.DB_NAME) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/" + dbName);
    if (process.env.TEST) {
      console.log("🚀 DB Connected...");
    }
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};

const startServer = async () => {
  await connectDB();
  app.listen(process.env.API_PORT, () => {
    if (process.env.TEST) {
      console.log(`🧜‍♀️ listening on port ${process.env.API_PORT}`);
    };
  });
};

module.exports = {
  connectDB,
  startServer,
  app,
};