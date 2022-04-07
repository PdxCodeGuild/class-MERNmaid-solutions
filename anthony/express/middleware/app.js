const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const Fruity = require("./models/fruit");

mongoose
  .connect("mongodb://localhost:27017/first-mongo")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware example
// const pandaWare = () => (req, res, next) => {
//   console.log("panda sounds");

//   next();
// };

// debugging tool
app.use(morgan("tiny"));
// enable cors
app.use(cors());

app.get("/", (req, res) => {
  console.log("Sending response");
  res.send("Hello there!");
});

// post request to create new fruit
app.post("/add-fruit", async (req, res) => {
  const fruit = new Fruity({ name: "banana", price: 1 });
  await fruit.save();
  res.send(fruit);
});

// get all fruits
app.get("/fruits", async (req, res) => {
  const fruits = await Fruity.find();
  res.send(fruits);
});

// get single fruit
app.get("/fruit", async (req, res) => {
  const fruit = await Fruity.findById("624cd604ac1ca2f94e1167db");
  res.send(fruit);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
