const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const dotenv = require("dotenv");
dotenv.config();

const jwtMiddleware = async (req, res, next) => {
	const authorization = req.header("Authorization") || "";
	const [bearer, token] = authorization.split(" ");
	// console.log(authorization);
	try {
		if (bearer === "Bearer" && jwt.verify(token, process.env.JWT_SECRET)) {
			const payload = jwt.decode(token, process.env.JWT_SECRET);
			const user = await User.findOne({ _id: payload._id });
			req.user = user;
			next();
		} else {
			res.status(402).json({
				message: "Invalid",
			});
		}
	} catch (error) {
		console.log(error);
		return res.status(401).send({ error: "Invalid" });
	}
};

module.exports = jwtMiddleware;
