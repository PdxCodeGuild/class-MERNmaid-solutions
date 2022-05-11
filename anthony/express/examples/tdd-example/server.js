const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const AuthRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.ENV !== "test") app.use(morgan("tiny"));

app.use("/auth", AuthRoutes);

const connectDatabase = async (databaseName) => {
  try {
    const connection = await mongoose.connect(
      `mongodb://localhost/${databaseName}`
    );

    if (process.env.ENV !== "test")
      console.log(`🎒 Connected to database "${databaseName}"...`);
    return connection;
  } catch (err) {
    console.error(err);
  }
};

const startServer = async (port = 3000, hostname = "localhost") => {
  await connectDatabase("tdd-example");

  app.listen(port, hostname, () => {
    console.log(`🚀 Listening at ${hostname}:${port}...`);
  });
};

module.exports = {
  app,
  connectDatabase,
  startServer,
};
