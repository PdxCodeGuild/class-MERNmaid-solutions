const { Router } = require("express");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../models/User.model");
const jwtMiddleware = require("../helpers/jwt-middleware");

const router = Router();

const signUpValidators = [
  check("username").exists().isLength({ min: 4, max: 32 }),
  check("password").exists().isLength({ min: 8, max: 64 }),
  check("passwordCheck").exists().isLength({ min: 8, max: 64 }),
];

const loginValidators = [
  check("username").exists().isLength({ min: 4, max: 32 }),
  check("password").exists().isLength({ min: 8, max: 64 }),
];

const sanitizeUser = (user) => ({
  ...user.toJSON(),
  password: undefined,
});

router.post("/signup", [...signUpValidators], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  const { username, password, passwordCheck } = req.body;

  const userFound = await User.findOne({ username });

  if (userFound) {
    return res.status(422).send({ error: "User already exists" });
  }

  if (password !== passwordCheck) {
    return res.status(422).send({ error: "Passwords don't match" });
  }

  const user = new User();
  user.username = username;
  user.password = bcrypt.hashSync(password, 4);
  await user.save();

  res.send(sanitizeUser(user));
});

router.post("/login", [...loginValidators], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.sendStatus(403);

  const correctPassword = bcrypt.compareSync(password, user.password);
  if (!correctPassword) return res.sendStatus(403);

  const token = jwt.sign(sanitizeUser(user), "CHANGEME!", {
    expiresIn: "7 days",
  });

  res.send({ token });
});

router.get("/profile", jwtMiddleware, (req, res) => {
  res.send(sanitizeUser(req.user));
});

module.exports = router;
