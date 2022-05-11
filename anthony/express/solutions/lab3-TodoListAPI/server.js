const express = require("express");
const mongoose = require("mongoose");

const List = require("./models/List.model");

const listRoute = require("./routes/list.routes");
const itemRoute = require("./routes/item.routes");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const lists = await List.find().populate("items");

  if (!lists) return res.sendStatus(404);

  res.send(lists);
});

app.use("/list", listRoute);
app.use("/items", itemRoute);

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost/express-lab3");
    console.log("Connected to DB...");
  } catch (err) {
    console.error(`Failed to connect to MongoDB: ${err}`);
    process.exit(-1);
  }

  app.listen(3000, () => {
    console.log("Listening at localhost:3000...");
  });
};

startServer();
