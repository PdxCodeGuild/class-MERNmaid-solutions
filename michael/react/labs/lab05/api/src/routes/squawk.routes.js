const { AsyncRouter: Router } = require("express-async-router");
const jwt = require("jsonwebtoken");

const Squawk = require("../models/Squawk");
const { squawkValidator } = require("../helpers/validators");
const handleValidationErrors = require("../helpers/handleValidatorErrors");
const jwtMiddleware = require("../helpers/jwtMiddleware");

const router = Router();

// Create
router.post(
	"/",
	[...squawkValidator, handleValidationErrors, jwtMiddleware],
	async (req, res) => {
		const squawk = await Squawk.create(req.body.body, req.user._id);
		res.status(201).send(squawk);
	}
);

// Delete
router.delete("/:_id", [jwtMiddleware], async (req, res) => {
	const squawk = await Squawk.findById(req.params._id);
	console.log("SQUAWK:", squawk.user);
	console.log("USER:", req.user._id);

	if (squawk.user.toString() !== req.user._id.toString())
		return res.status(403).send({ errors: ["Invalid Operation"] });

	squawk.deleted = true;
	await squawk.save();
	res.send(squawk);
});

// List
router.get("/", async (req, res) => {
	const squawks = await Squawk.find(
		{ deleted: { $eq: false } },
		{ user: true, createdAt: true, body: true },
		{ limit: 10, sort: "-createdAt" }
	).populate({ path: "user" });

	res.send(squawks);
});

module.exports = router;
