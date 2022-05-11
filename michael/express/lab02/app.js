const express = require("express"); // server
const mongoose = require("mongoose"); // to connect to mongodb
const cors = require("cors"); // cross-Origin Resource Sharing
const bodyParser = require("body-parser"); // to parse the body of the request
const Person = require("./models/person"); // Person model
const morgan = require("morgan"); // logger
const dotenv = require("dotenv"); // for .env file
dotenv.config(); // read .env file

const SECRET_DB_URL =
	process.env.SECRET_DB_URL + ":" + process.env.SECRET_DB_PORT + "/lab02"; // Defines mongoDB URL from environment variables
const port = process.env.SECRET_PORT || 3333; // Defines port, optionally from environment variable

const app = express(); // Create an instance of express
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Support json encoded bodies
app.use(morgan("dev")); // Log requests to console

// Create an instance of the model
mongoose
	.connect(SECRET_DB_URL)
	.then(() => {
		console.log("Connected to MongoDB");
	}) // Connect to mongoDB
	.catch((err) => {
		console.log("Error connecting to MongoDB: ", err);
	}); // Catch error

app.listen(port, () => {
	console.log("Server is running on port ", port);
}); // Start the server

const person = new Person({
	firstName: "Test",
	lastName: "Name",
	age: 33,
	username: "testname33",
});
person.save();

// Version 2

// Create a simple CRUDL express app on the person model using the id to find the them

// Create
app.post("/person", async (req, res) => {
	const person = new Person(req.body);
	console.log(req.body);
	await person.save();
	res.send(person);
}); // Create a new person

// Retrieve
app.get("/person/:id", async (req, res) => {
	const person = await Person.findOne({ _id: req.params.id });
	if (!person) {
		res.sendStatus(404);
		return;
	} // If no person is found, send 404

	await person.save();
	res.send(person);
	// If person is found, send the person
}); // Retrieve a person

// Update
app.patch("/person/:id", async (req, res) => {
	const person = await Person.findOne({ _id: req.params.id });
	if (!person) {
		res.sendStatus(404);
		return;
	} // If no person is found, send 404

	postData = req.body;
	person.set(postData);
	await person.save();
	res.send(person);
	// If person is found, send the person
}); // Update a person

// Delete
app.delete("/person/:id", async (req, res) => {
	const person = await Person.findOne({ _id: req.params.id });
	if (!person) {
		res.sendStatus(404);
		return;
	} // If no person is found, send 404

	await person.remove();
	res.send(person);
	// If person is found, send the person
}); // Delete a person

// List
app.get("/person", async (req, res) => {
	const people = await Person.find();
	res.send(people);
}); // List all people
