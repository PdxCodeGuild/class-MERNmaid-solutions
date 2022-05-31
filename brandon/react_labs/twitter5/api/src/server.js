const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const sqreeRoutes = require("./routes/sqree.routes");

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({
  path: envPath
});

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/sqree", sqreeRoutes);

const connectDatabase = async (dbName=process.env.DB_NAME) => {
  const connection = await mongoose.connect(`mongodb://localhost/${dbName}`);
  if (process.env.ENV !== "test") {
    console.log(`connected to mongodb://localhost/${dbName}`);
  } 
  return connection;
}

const startServer = () => {
  app.listen(process.env.API_PORT, async () => {
    await connectDatabase();
    if (process.env.ENV !== "test") {
      console.log(`🍕 Server listening on http://localhost:${process.env.API_PORT}`)
    }
  });
}

module.exports = {
  app,
  connectDatabase,
  startServer
}
