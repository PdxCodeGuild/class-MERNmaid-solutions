const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB integration
const cors = require("cors"); // CORS integration
const bodyParser = require("body-parser"); // Body parser integration
const dotenv = require("dotenv"); // Load environment variables from .env file
const morgan = require("morgan"); // Morgan logger

const itemsRouter = require("./routes/items"); // Import items router
const listsRouter = require("./routes/lists"); // Import lists router

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create Express server

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Enable body-parser
app.use(morgan("tiny")); // Enable Morgan logger

// Routes
app.use("/items", itemsRouter); // Mount items router
app.use("/lists", listsRouter); // Mount lists router

// Connect to MongoDB
console.log(`Connecting to MongoDB at ${process.env.MONGODB_URL}`);
mongoose
	.connect(process.env.MONGODB_URL)
	.then(async () => {
		console.log("Connected to MongoDB");
		await app.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB:", err);
	});
