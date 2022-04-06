const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// import Person.js
const Person = require("./models/Person")

const app = express();

// Add in middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json())


// Create
app.post('/people', async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.send(person);
})

// Retreive
app.get("/people/:id", async (req, res) => {
    const person = await Person.findOne({ _id: req.params.id });

    // res.send(req.params.id)

    if(!person){
        res.sendStatus(404)
    } else{
        res.send(person);
    }
});

// Update  (use patch)
app.patch("/people/:id", async (req, res) => {
    const person = await Person.findOne({ _id: req.params.id })
    if (!person){
        res.send(404);
    }

    const postData = req.body;

    person.set(postData);

    await person.save();

    res.send(person);
})


// Delete 
app.delete('/people/:id', async (req, res) => {
    const person = await Person.findOne({ _id: req.params.id });

    if (!person) res.send(404)

    // delete post, .remove()
    await person.remove();
    res.send(person);
})



// List 
app.get("/people", async (req, res) => {
    const person = await Person.find();

    res.send(person);
})



const startServer = async () => {
    await mongoose.connect("mongodb://localhost:27017/expresslab2");
    console.log("mongodb connected");

    app.listen(4040, () => console.log('server listening on port 4040'))
}

startServer();