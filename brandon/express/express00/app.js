const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
const Person = require("./models/person");

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.get("/", async (req, res) => {
  res.send("hey");
});

app.get("/people", async (req,res) => {
  try {
    const persons = await Person.find();
    res.send(persons);
  } catch(error) {
    console.log(error);
  }
})

app.get("/people/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.send(person);
  } catch(error) {
    res.sendStatus(404);
    console.log(error);
  }
})

app.post("/add-person", async (req, res) => {
  console.log(req.body);
  try {
    const person = new Person(req.body);
    await person.save();
    res.send(person);
  } catch(error) {
    console.log(error);
  }
})

app.patch("/people/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    const personData = req.body;
    person.set(personData);
    await person.save();
    res.send(person);
  } catch(error) {
    res.send(404);
    console.log(error);
  }
})

app.delete("/people/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    await person.remove();
    res.send(person);
  } catch(error) {
    res.send(404);
    console.log(error);
  }
})

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/persons");
    console.log("DB connected");

    app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
  } catch(error) {
    console.log(error);
    process.exit(-1);
  }
}

connect();
