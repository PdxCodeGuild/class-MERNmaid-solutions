const express = require("express"); // Import express
const app = express(); // Create an instance of express

// Defines port, optionally from environment variable
const port = process.env.PORT || 3333;

// Array of messages
const messages = [
	"Try Again",
	"You are wrong",
	"You are right",
	"No",
	"Yes",
	"Maybe",
	"I don't know",
];

// Choose a random message from messages
const randomMessage = () => {
	return messages[Math.floor(Math.random() * messages.length)];
};

// Define Routes
// Root route
app.get("/", (req, res) => {
	console.log("GET /");
	res.send("Hello World!");
});

// About page route
app.get("/about", (req, res) => {
	console.log("GET /about");
	res.send({ Message: "About page", Date: new Date() });
});

// 8ball route
app.get("/8ball", (req, res) => {
	console.log("GET /8ball");
	res.send({ Message: randomMessage() });
});

// Start Server
app.listen(port, () => {
	console.log("Listening on port " + port + "!");
});
