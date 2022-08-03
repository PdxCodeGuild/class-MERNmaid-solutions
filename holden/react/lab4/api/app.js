const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const Person = require("./models/Person");

const app = express();

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.post("/people", async (req, res) => {
  console.log(req.body);
  const person = new Person(req.body);
  await person.save();
  res.send(person);
});

app.get("/people/:id", async (req, res) => {
  const person = await Person.findOne({ _id: req.params.id });
  if (!person) {
    res.send(404);
  } else {
    res.send(person);
  }
});

app.patch("/people/:id", async (req, res) => {
  const person = await Person.findOne({ _id: req.params.id });

  if (!person) res.send(404);

  console.log(req.body);
  const personData = req.body;

  person.set(personData);

  await person.save();

  res.send(person);
});

app.delete("/people/:id", async (req, res) => {
  const person = await Person.findOne({ _id: req.params.id });

  if (!person) res.send(404);

  await person.remove();
  res.send(person);
});

app.get("/people", async (req, res) => {
  const people = await Person.find();

  res.send(people);
});

const startServer = async () => {
  await mongoose.connect("mongodb://localhost:27017/lab2");
  console.log("mongodb connected");

  app.listen(process.env.PORT, () =>
    console.log(`server listening on port ${process.env.PORT}`)
  );
};

startServer();