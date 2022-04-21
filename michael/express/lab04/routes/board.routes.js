const { Router } = require("express");
const jwtMiddleware = require("../helpers/jwt.middleware");
const jwt = require("jsonwebtoken");
const router = Router();
const Board = require("../models/Board.model");
const { check, validationResult } = require("express-validator");
// const { reset } = require("nodemon");

// Post Validator
const postValidator = [
	check("title", "Title is required").not().isEmpty(),
	check("description", "Description is required").not().isEmpty(),
]; // end postValidator

// Create a new board
router.post("/", [jwtMiddleware, ...postValidator], async (req, res) => {
	const errors = validationResult(req); // Check for errors

	if (!errors.isEmpty()) {
		return res.status(400).send({ errors: errors.array() });
	} // If errors, return 400

	// if (await Board.findOne({ title })) {
	// 	return res.status(403).send({ errors: [{ msg: "Board already exists" }] });
	// } // If boardId does exist, return 400

	try {
		const board = await Board.create({
			title: req.body.title,
			description: req.body.description,
			user: req.body.userId,
		});
		// console.log("Created Board: " + board);
		res.status(201).send(board);
	} catch (err) {
		// console.log(req.body);
		console.error(err.message);
		res.status(500).send("Server Error");
	}
	res.status(700).send("failed");
}); // End of new board

// Read a board
router.get("/:id", [jwtMiddleware], (req, res) => {
	const { id } = req.params;
	Board.findById(id)
		.populate("user")
		.then((board) => {
			if (!board) {
				return res.status(404).send({ msg: "Board not found" });
			} // If boardId does not exist, return 404
			res.status(201).send(board);
		});
}); // End of read board

// Update a board
router.put("/:id", [jwtMiddleware], async (req, res) => {
	const { id } = req.params;
	// const { userId } = req.user;
	const { boardId, title, content } = req.body;

	// Get the authorization token
	const token = req.headers.authorization.split(" ")[1];
	// Verify the token
	// console.log(token);
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// console.log(decoded);
	// Get the userId from the token
	const userId = decoded._id;

	// console.log(userId);
	// Only the owner of the board can delete it
	const board = await Board.findById({ _id: id });
	if (board === null) {
		return res.status(404).json({ message: "board not found" });
	}

	if (JSON.stringify(board.get(userId)) !== JSON.stringify(req.userId)) {
		return res.status(403).json({
			message: "You are not allowed to update this board",
		});
	}

	const updatedBoard = { title, content, userId };

	Board.findByIdAndUpdate(id, updatedBoard, { new: true })
		.then((board) => {
			res.json(board);
		}) // If no errors, return board
		.catch((err) => {
			res.json(err);
		}); // If errors, return error
}); // End of update board

// Delete a board
router.delete("/:id", [jwtMiddleware], async (req, res) => {
	const { id } = req.params;
	// const { userId } = req.user;

	// Get the authorization token
	const token = req.headers.authorization.split(" ")[1];
	// Verify the token
	// console.log(token);
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// console.log(decoded);
	// Get the userId from the token
	const userId = decoded._id;

	// console.log(userId);
	// Only the owner of the board can delete it
	const board = await Board.findById({ _id: id });
	if (board === null) {
		return res.status(404).json({ message: "Board not found" });
	}

	if (JSON.stringify(board.get(userId)) !== JSON.stringify(req.userId)) {
		return res.status(403).json({
			message: "You are not allowed to delete this Board",
		});
	}

	Board.findByIdAndDelete(id)
		.then((board) => {
			res.json(board);
		}) // If no errors, return board
		.catch((err) => {
			res.json(err);
		}); // If errors, return error
}); // End of delete board

// List all boards
router.get("/", (req, res) => {
	Board.find()
		.populate("user")
		.then((boards) => {
			// console.log("Boards: " + boards);
			res.status(200).json(boards);
		}) // If no errors, return posts
		.catch((err) => {
			res.status(408).json(err);
		}); // If errors, return error
}); // End of list all boards

module.exports = router;
