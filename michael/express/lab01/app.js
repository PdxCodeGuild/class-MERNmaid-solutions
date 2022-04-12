const express = require("express"); // Import express
const dotenv = require("dotenv"); // For .env file
const app = express(); // Create an instance of express
const ballRouter = require("./routes/8ball"); // Import 8ball router
const aboutRouter = require("./routes/about"); // Import About page router
const rootRouter = require("./routes/root"); // Import root router
const morgan = require("morgan");

dotenv.config(); // Read .env file

app.use("/", rootRouter); // Use root router
app.use("/8ball", ballRouter); // Use 8ball router
app.use("/about", aboutRouter); // Use about router
app.use(morgan("dev")); // Log requests to console

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

// Start Server
app.listen(port, () => {
	console.log("Listening on port " + port + "!");
});
