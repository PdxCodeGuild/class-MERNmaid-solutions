const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.model");

const userRouter = Router();

const signupValidator = [
  check("username").exists().isLength({ min: 2, max: 18 }),
  check("password").exists().isLength({ min: 6, max: 32 }),
  check("passwordCheck").exists().isLength({ min: 6, max: 32 }),
];

const loginValidator = [
  check("username").exists().isLength({ min: 2, max: 18 }),
  check("password").exists().isLength({ min: 6, max: 32 }),
];

const sanitizeUser = (user) => ({
  ...user.toJSON(),
  password: undefined,
});

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// signup
userRouter.post("/signup", [...signupValidator], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { username, password, passwordCheck } = req.body;

  // check username is unique
  const userFound = await User.findOne({ username });
  if (userFound) {
    return res.status(400).send({ errors: "username taken" });
  }
  // check matching passwords
  if (password !== passwordCheck) {
    return res.status(400).send({ errors: "passwords do not match" });
  }

  const user = await User.create({
    username,
    password: bcrypt.hashSync(password, 10),
  });

  res.send(sanitizeUser(user));
});

// login
userRouter.post("/login", [...loginValidator], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.sendStatus(401);
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

module.exports = userRouter;
