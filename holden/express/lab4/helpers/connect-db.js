const mongoose = require("mongoose");

const connectDatabase = async (databaseName) => {
  try {
    const connection = await mongoose.connect(
      `mongodb://localhost:27017/${databaseName}`
    );
    console.log(`🚀 Connected to database "${databaseName}"...`);
    return connection;
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDatabase;
