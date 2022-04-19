const express = require("express");
const mongoose = require("mongoose");

const Person = require("./models/Person");

const app = express();

app.use(express.json());

// LIST
app.get("/person", async (req, res) => {
  const people = await Person.find();
  res.send(people);
});

// CREATE
app.post("/person", async (req, res) => {
  const person = new Person(req.body);
  await person.save();

  res.send(person);
});

// RETRIEVE
app.get("/person/:username", async (req, res) => {
  const person = await Person.findOne({ username: req.params.username });

  if (!person) return res.sendStatus(404);

  res.send(person);
});

// UPDATE
app.patch("/person/:username", async (req, res) => {
  const person = await Person.findOne({ username: req.params.username });

  if (!person) return res.sendStatus(404);

  person.set(req.body);
  await person.save();

  res.send(person);
});

// DELETE
app.delete("/person/:username", async (req, res) => {
  const person = await Person.findOne({ username: req.params.username });

  if (!person) return res.sendStatus(404);

  await person.remove();
  res.send(person);
});

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost/express-lab2");
    console.log("Connected to DB...");
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }

  app.listen(3000, () => {
    console.log("Listening at localhost:3000");
  });
};

startServer();
