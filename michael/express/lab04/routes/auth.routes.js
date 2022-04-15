const { Router } = require("express");
const User = require("../models/User.model");
const { check, validationResult } = require("express-validator");
const authRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("../models/Post.model");

const signupValidator = [
	check("username", "Username is required")
		.exists()
		.isLength({ min: 2, max: 20 }),
	check("password", "Please enter a valid password").isLength({
		min: 6,
		max: 32,
	}),
];

const loginValidator = [
	check("username", "Username is required")
		.exists()
		.isLength({ min: 2, max: 20 }),
	check("password", "Please enter a valid password").isLength({
		min: 6,
		max: 32,
	}),
];

const sanitizeUser = (user) => ({
	...user.toJSON(),
	password: undefined,
});

// Signup
authRouter.post("/signup", [...signupValidator], async (req, res) => {
	console.log(req.body);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).send({ errors: errors.array() });
	}
	const { username, password, passwordCheck } = req.body;

	const userFound = await User.findOne({ username });
	if (userFound) {
		return res.status(400).send({ errors: [{ msg: "User already exists" }] });
	}
	const passwordMatch = password === passwordCheck;
	if (!passwordMatch) {
		return res
			.status(400)
			.send({ errors: [{ msg: "Password does not match" }] });
	}

	try {
		const user = await User.create({
			username,
			password: bcrypt.hashSync(password, 10),
		});
		res.status(201).send(sanitizeUser(user));
	} catch (error) {
		res.status(400).send(error);
	}
});

//Login
authRouter.post("/login", [...loginValidator], async (req, res) => {
	const { username, password } = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).send({ errors: errors.array() });
	}

	const user = await User.findOne({ username });
	if (!user) {
		return res.status(418);
	}
	const passwordMatch = bcrypt.compareSync(password, user.password);
	if (!passwordMatch) {
		return res.status(418);
	}
	const token = jwt.sign(sanitizeUser(user), process.env.JWT_SECRET, {
		expiresIn: "1h",
	});
	res.status(201).send({ token });
});

// Profile
// authRouter.get("/profile", async (req, res) => {
// 	// Get the authorization token
// 	const token = req.headers.authorization.split(" ")[1];
// 	// Verify the token
// 	// console.log(token);
// 	const decoded = jwt.verify(token, process.env.JWT_SECRET);
// 	// console.log(decoded);
// 	// Get the userId from the token
// 	const userId = decoded._id;

// 	// populate the user's profile and their posts
// 	const user = await User.findById(userId);
// 	console.log(user.populate("post"));
// 	res.status(200).send(sanitizeUser(user));
// });

// A profile route for User that shows not only information about the currently logged in user but also every post they've made.
authRouter.get("/profile/", async (req, res) => {
	// Get the authorization token
	const token = req.headers.authorization.split(" ")[1];
	// Verify the token
	// console.log(token);
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// console.log(decoded);
	// Get the userId from the token
	const userId = decoded._id;

	// populate the user's profile and their posts
	const user = await User.findById(userId);

	const userPosts = await Post.find({ user: userId });

	console.log(userPosts);
	res.status(200).send({ user, userPosts });
});

module.exports = authRouter;
