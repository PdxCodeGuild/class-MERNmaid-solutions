const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const jwtMiddleware = async (req, res, next) => {
  const key = process.env.SECRET_KEY || "defaultkey";
  const authorization = req.header("Authorization") || "";
  const [type, token] = authorization.split(" ");

  try {
    if (type === "Bearer" && jwt.verify(token, key)) {
      const payload = jwt.decode(token, key);
      const user = await User.findById(payload._id);
      req.user = user;
      next();
    } else {
      res.status(401).send("Unauthenticated");
    }
  } catch (err) {
    res.status(401).send("Unauthenticated");
  }
};

module.exports = jwtMiddleware;
