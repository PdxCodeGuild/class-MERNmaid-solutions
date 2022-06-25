//import all items for app
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import over 'Person' model
const Person = require("./models/Person");

//declare app as express
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//create person
app.post("/create", async (req, res) => {
  try {
    const person = new Person(req.body); //use body parser and pull Person model
    await person.save(); // .save to database
    res.send(person); //.send back
  } catch (err) {
    console.log(err);
  }
});

//retrieve person
app.get("/retrieve/:id", async (req, res) => {
  // use ':id to target specific people
  const person = await Person.findOne({ _id: req.params.id });
  if (!person) {
    res.sendStatus(404); //if person cant be retrieved, send 404
  } else {
    res.send(person); // return data
  }
});
//update person
app.patch("/update/:id", async (req, res) => {
  //same as delete except use .patch
  const person = await Person.findOne({ _id: req.params.id });
  if (!person) {
    res.send(404);
  }
  const personInfo = req.body;
  person.set(personInfo); //.set to update info
  await person.save();

  res.send(person);
});
//delete person
app.delete("/delete/:id", async (req, res) => {
  const person = await Person.findOne({ _id: req.params.id });
  if (!person) {
    res.send(404);
  }
  await person.remove(); // .remove deletes person
  res.send(person);
});
//retrieve person
app.get("/people", async (req, res) => {
  const person = await Person.find();
  res.send(person);
});

// run server function
const runServer = async () => {
  await mongoose.connect("mongodb://localhost:27017/models"); //connect to mongoose
  console.log("success");

  app.listen(3001, () => {
    //app.listen to connect server and app
    console.log("server is listening to port 3001");
  });
};

//call server function
runServer();
