const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Fruit = require("./models/fruit");

require("dotenv").config();

const SECRET_DB_URL =
	process.env.SECRET_DB_URL + ":" + process.env.SECRET_DB_PORT + "/lab02";
const port = process.env.SECRET_PORT || 3333;

const app = express();

mongoose
	.connect(SECRET_DB_URL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB: ", err);
	});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});

app.post("/add-fruit", async (req, res) => {
	const fruit = new Fruit({ name: req.query.name, price: req.query.price });
	await fruit.save();
	res.send(fruit);
});

app.get("/fruits", async (req, res) => {
	const fruits = await Fruit.find();
	res.send(fruits);
});

app.get("/fruit", async (req, res) => {
	const fruit = await Fruit.findById("624cd7376b79a7e755072746");
	res.send(fruit);
});
