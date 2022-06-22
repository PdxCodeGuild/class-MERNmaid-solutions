const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const connectDatabase = require("./helpers/connect-db");

const postRoutes = require("./routes/post.routes");
const userRoutes = require("./routes/user.routes");
const boardRoutes = require("./routes/board.routes");


dotenv.config();
const app = express();

// middleware
app.use(cors());
//app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/post", postRoutes);
app.use("/user", userRoutes);
app.use("/", boardRoutes);

const startServer = async (port = 3000, hostname = "localhost", database = "lab4") => {
  await connectDatabase(database); // Change database name

  app.listen(port, hostname, () => {
    console.log(`🚀 Listening at ${hostname}:${port}...`);
  });
};

module.exports = {
  app,
  connectDatabase,
  startServer,
};