const { Router } = require("express");
const jwtMiddleware = require("../helpers/jwt.middleware");
const jwt = require("jsonwebtoken");
const router = Router();
const Board = require("../models/Board.model");
const Post = require("../models/Post.model");
const User = require("../models/User.model");
const { check, validationResult } = require("express-validator");

// Post Validator
const postValidator = [
	check("title", "Title is required").not().isEmpty(),
	check("content", "Content is required").not().isEmpty(),
	check("boardId", "BoardId is required").not().isEmpty(),
	check("userId", "UserId is required").not().isEmpty(),
]; // end postValidator

// Create a new post
router.post("/", [jwtMiddleware, ...postValidator], async (req, res) => {
	const errors = validationResult(req); // Check for errors
	const { title, content, boardId } = req.body;

	if (!errors.isEmpty()) {
		console.log(errors.array());
		return res.status(400).send({ errors: errors.array() });
	} // If errors, return 400

	// Get the authorization token
	const token = req.headers.authorization.split(" ")[1];
	// Verify the token
	// console.log(token);
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// console.log(decoded);
	// Get the userId from the token
	const userId = decoded._id;

	// console.log(userId);
	// Only the owner of the post can delete it
	// console.log("BoardID: " + boardId);
	// console.log(Board.find().populate("user"));
	const board = await Board.findById({ _id: boardId });
	if (board === null) {
		console.log("Board not found");
		return res.status(404).json({ message: "Board not found" });
	}

	// const { userId } = req.userID;
	const boardOwnerId = await Board.findById({ _id: boardId });
	const userIDobj = await User.findById({ _id: userId });
	// console.log(JSON.stringify(boardOwnerId));
	// console.log(JSON.stringify(userIDobj));

	// console.log(userId);
	if (
		JSON.stringify(userIDobj.get("_id")) !==
		JSON.stringify(boardOwnerId.get("user"))
	) {
		return res.status(403).json({
			message: "You are not allowed to create a post for this user",
		}); // If userId !== boardOwnerId, return 403
	}

	// const newPost = { title, content, userIDobj, boardOwnerId };
	try {
		post = await Post.create({
			title,
			content,
			user: userId,
			board: boardId,
		});
		// console.log(post);
		return res.status(201).json(post);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}); // End of new post

// Read a post
router.get("/:id", [jwtMiddleware], async (req, res) => {
	const { id } = req.params;

	try {
		post = await Post.findById({ _id: id });
		return res.status(201).json(post);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
}); // End of read post

// Update a post
router.put("/:id", [jwtMiddleware, ...postValidator], async (req, res) => {
	const { id } = req.params;
	const { title, content } = req.body;
	const errors = validationResult(req); // Check for errors
	if (!errors.isEmpty()) {
		console.log(errors.array());
		return res.status(400).send({ errors: errors.array() });
	} // If errors, return 400

	// Get the authorization token
	const token = req.headers.authorization.split(" ")[1];
	// Verify the token
	// console.log(token);
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// console.log(decoded);
	// Get the userId from the token
	const userId = decoded._id;

	// console.log(userId);
	// Only the owner of the post can delete it
	let post = await Post.findById({ _id: id });
	if (post === null) {
		return res.status(404).json({ message: "Post not found" });
	}

	if (JSON.stringify(post.get(userId)) !== JSON.stringify(req.userId)) {
		return res.status(403).json({
			message: "You are not allowed to delete this post",
		});
	}

	console.log(title);
	try {
		post = await Post.findByIdAndUpdate(
			{ _id: id },
			{ title, content },
			{ new: true }
		);
		// console.log(post);
		return res.status(200).json(post);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
}); // End of update post

// Delete a post
router.delete("/:id", [jwtMiddleware], async (req, res) => {
	const { id } = req.params;
	// Get the authorization token
	const token = req.headers.authorization.split(" ")[1];
	// Verify the token
	// console.log(token);
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// console.log(decoded);
	// Get the userId from the token
	const userId = decoded._id;

	// console.log(userId);
	// Only the owner of the post can delete it
	let post = await Post.findById({ _id: id });
	if (post === null) {
		return res.status(404).json({ message: "Post not found" });
	}

	if (JSON.stringify(post.get(userId)) !== JSON.stringify(req.userId)) {
		return res.status(403).json({
			message: "You are not allowed to delete this post",
		});
	}

	try {
		post = await Post.findByIdAndDelete({ _id: id });
		return res.status(200).json(post);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}); // End of delete post

// List all posts
router.get("/", async (req, res) => {
	try {
		posts = await Post.find();
		return res.status(200).json(posts);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}); // End of list all posts

module.exports = router;
