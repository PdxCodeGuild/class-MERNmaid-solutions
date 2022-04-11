const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const jwtMiddleware = async (req, res, next) => {
  const authorization = req.header("Authorization") || "";

  const [bearer, token] = authorization.split(" ");

  if (bearer === "Bearer" && jwt.verify(token, process.env.SECRET_KEY)) {
    const payload = jwt.decode(token, process.env.SECRET_KEY);
    const user = await User.findById(payload._id);
    req.user = user;
    next();
  } else {
    res.status(403).send({ errors: "Invalid credentials" });
  }
};

module.exports = jwtMiddleware;
