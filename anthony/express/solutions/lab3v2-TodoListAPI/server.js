const express = require("express");
const mongoose = require("mongoose");

const List = require("./models/List.model");

const listRoute = require("./routes/list.routes");
const itemRoute = require("./routes/item.routes");
const authRoute = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const lists = await List.find().populate("items");

  if (!lists) return res.sendStatus(404);

  res.send(lists);
});

app.use("/list", listRoute);
app.use("/items", itemRoute);
app.use("/auth", authRoute);

const connectDatabase = async (databaseName) => {
  try {
    await mongoose.connect("mongodb://localhost/express-lab3");
    if (process.env.ENV !== "test") console.log("Connected to DB...");
  } catch (err) {
    console.error(`Failed to connect to MongoDB: ${err}`);
    process.exit(-1);
  }
};

const startServer = async () => {
  if (process.env.ENV !== "test") await connectDatabase("express-lab3v2");

  app.listen(3000, () => {
    console.log("Listening at localhost:3000...");
  });
};

module.exports = {
  connectDatabase,
  startServer,
  app,
};
