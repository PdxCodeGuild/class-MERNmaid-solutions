const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.model");

const authRouter = Router();

const signupValidator = [
  check("username").exists().isLength({ min: 4, max: 12 }),
  check("password").exists().isLength({ min: 6, max: 32 }),
  check("passwordCheck").exists().isLength({ min: 6, max: 32 }),
];

const loginValidator = [
  check("username").exists().isLength({ min: 4, max: 12 }),
  check("password").exists().isLength({ min: 6, max: 32 }),
];

const sanitizeUser = (user) => ({
  ...user.toJSON(),
  password: undefined,
});

// signup
authRouter.post("/signup", [...signupValidator], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { username, password, passwordCheck } = req.body;

  // Make sure username is not taken
  const userFound = await User.findOne({ username });
  if (userFound) {
    return res.status(400).send({ errors: "username taken" });
  }
  // Check to see if passwords do not match
  if (password !== passwordCheck) {
    return res.status(400).send({ errors: "passwords do not match" });
  }

  // Add user to db
  // const user = new User({
  //   username,
  //   password
  // }).save()

  const user = await User.create({
    username,
    password: bcrypt.hashSync(password, 10),
  });

  res.send(sanitizeUser(user));
});

// login
authRouter.post("/login", [...loginValidator], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.sendStatus(418); // 401
  }

  const correctPassword = bcrypt.compareSync(password, user.password);
  if (!correctPassword) {
    return res.sendStatus(401);
  }

  const token = jwt.sign(sanitizeUser(user), process.env.SECRET_KEY, {
    expiresIn: "1 days",
  });

  res.send({ token });
});

module.exports = authRouter;
