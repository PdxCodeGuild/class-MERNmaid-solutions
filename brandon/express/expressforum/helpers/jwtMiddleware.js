const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const jwtMiddleware = async (req, res, next) => {
  const authorization = req.header("Authorization") || "";
  const key = process.env.SECRET_KEY || "defaultkey";
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer === "Bearer" && jwt.verify(token, key)) {
      const payload = jwt.decode(token, key);
      const user = await User.findById(payload._id);
      req.user = user;
      next();
    } else {
      res.status(401).send({ errors: "Invalid credentials" });
    }
  } catch(error) {
    res.status(401).send({ errors: "Invalid credentials" });
  }
};

module.exports = jwtMiddleware;
