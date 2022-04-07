// Reece - Express - lab02

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const peoplePerson = require("./models/People.js")
dotenv.config();

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Create Person
app.post('/people', async (req, res) => {
    const person = new peoplePerson(req.body);
    await person.save();
    res.send(person)
});

// Find Person
app.get('/people/:id', async (req, res) => {
    const person = await peoplePerson.findOne({ _id: req.params.id });
    if (!person) {
        res.sendStatus(404);
    } else {
        res.send(person)
    }
});

// Update Person
app.patch('/people/:id', async (req, res) => {
    const  person = await peoplePerson.findOne({ _id: req.params.id });
    if (!person) {
        res.send(404)
    };
    const personData = req.body;

    person.set(personData);

    await person.save();

    res.send(person);
});

// Delete Person
app.delete('/people/:id', async (req, res) => {
    const person = await peoplePerson.findOne({ _id: req.params.id});

    if (!person) res.send(404);

    await person.remove();

    res.send(person);
});

// List People
app.get('/people', async (req, res) => {
    const person = await peoplePerson.find();

    res.send(person);
});

const startServer = async () => {
    await mongoose.connect("mongodb://localhost:27017/people");
    console.log("Connection Successful");

    app.listen(process.env.PORT, () => 
        console.log(`Using port: ${process.env.PORT}`)
    );
};

startServer();