const { Router } = require("express");
const jwtMiddleware = require("../helpers/jwt.middleware");
const router = Router();
const Board = require("../models/Board.model");
const Post = require("../models/Post.model");
const User = require("../models/User.model");
const { check, validationResult } = require("express-validator");
const { reset } = require("nodemon");

// Post Validator
const postValidator = [
	check("title", "Title is required").not().isEmpty(),
	check("description", "Description is required").not().isEmpty(),
]; // end postValidator

// Create a new post
router.post("/new", [jwtMiddleware, ...postValidator], async (req, res) => {
	const errors = validationResult(req); // Check for errors

	if (!errors.isEmpty()) {
		return res.status(400).send({ errors: errors.array() });
	} // If errors, return 400

	const { userId } = req.user;
	const { title, content } = req.body;

	if (await Board.findOne({ title })) {
		return res.status(400).send({ errors: [{ msg: "Board already exists" }] });
	} // If boardId does exist, return 400

	console.log("test");
	try {
		const board = await Board.create({
			title: req.body.title,
			description: req.body.description,
			user: req.user.id,
		});
		res.status(200).send(board);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
}); // End of new post

// Read a post
router.get("/:id", [jwtMiddleware], (req, res) => {
	const { id } = req.params;

	Post.findById(id)
		.populate("userId")
		.then((post) => {
			res.json(post);
		}) // If no errors, return post
		.catch((err) => {
			res.json(err);
		}); // If errors, return error
}); // End of read post

// Update a post
router.put("/:id", [jwtMiddleware], (req, res) => {
	const { id } = req.params;
	const { userId } = req.user;
	const { boardId, title, content } = req.body;

	const boardOwnerId = Board.findById(boardId).owner;

	if (userId !== boardOwnerId) {
		return res.status(403).json({
			message: "You are not allowed to update a post for this user",
		}); // If userId !== boardOwnerId, return 403
	}

	const updatedPost = { title, content, userId };

	Post.findByIdAndUpdate(id, updatedPost, { new: true })
		.then((post) => {
			res.json(post);
		}) // If no errors, return post
		.catch((err) => {
			res.json(err);
		}); // If errors, return error
}); // End of update post

// Delete a post
router.delete("/:id", [jwtMiddleware], (req, res) => {
	const { id } = req.params;
	const { userId } = req.user;

	const boardOwnerId = Board.findById(boardId).owner;

	if (userId !== boardOwnerId) {
		return res.status(403).json({
			message: "You are not allowed to delete a post for this user",
		}); // If userId !== boardOwnerId, return 403
	}

	Post.findByIdAndDelete(id)
		.then((post) => {
			res.json(post);
		}) // If no errors, return post
		.catch((err) => {
			res.json(err);
		}); // If errors, return error
}); // End of delete post

// List all posts
router.get("/", [jwtMiddleware], (req, res) => {
	Post.find()
		.populate("userId")
		.then((posts) => {
			res.json(posts);
		}) // If no errors, return posts
		.catch((err) => {
			res.json(err);
		}); // If errors, return error
}); // End of list all posts

module.exports = router;
