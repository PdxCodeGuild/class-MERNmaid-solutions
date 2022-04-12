const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const jwtMiddleware = async (req, res, next) => {
	try {
		const authorization = req.header("Authorization") || "";
		const [bearer, token] = authorization.split(" ");
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		if (bearer === "Bearer" && decoded) {
			const payload = jwt.decode(token, process.env.JWT_SECRET);
			const user = await User.findById(payload._id);
			req.user = user;
			next();
		} else {
			res.status(401).json({
				message: "Invalid",
			});
		}
	} catch (error) {
		return res.send({ error: "Invalid" });
	}
};

module.exports = jwtMiddleware;
