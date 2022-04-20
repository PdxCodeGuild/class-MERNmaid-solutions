const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDatabase = async (dbName) => {
  try {
    const connection = await mongoose.connect(`mongodb://localhost/${dbName}`);
    console.log(`Connected to ${dbName}`);
    return connection;
  } catch (err) {
    console.error(err);
  }
};

const startServer = async () => {
  await connectDatabase("development");
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

module.exports = {
  app,
  connectDatabase,
  startServer,
};
