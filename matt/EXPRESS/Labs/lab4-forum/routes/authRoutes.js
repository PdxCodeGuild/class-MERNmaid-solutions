const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const jwtMiddleware = require("../middleware/jwtMiddleware")
dotenv.config();

const saltRounds = parseInt(process.env.SALTS);

const User = require("../models/User");

const authRouter = Router();

const signupValidator = [
  check("username").exists().isLength({ min: 3, max: 20 }),
  check("password").exists().isLength({ min: 3, max: 20}),
  check("passwordCheck").exists().isLength({ min: 3, max: 20}),
];

const loginValidator = [
  check("username").exists().isLength({ min: 3, max: 20 }),
  check("password").exists().isLength({ min: 3, max: 20}),
];

//signup
authRouter.post("/signup", [...signupValidator], async (req, res) => {
  const errors = validationResult(req);
  //if there's an error, display it to the user
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { username, password, passwordCheck } = req.body;

  //make sure the username is unique
  const findUser = await User.findOne({ username });
  if (findUser) {
    return res.status(400).send({ errors: "username is taken" });
  }

  //make sure password and passwordCheck matches
  if (password !== passwordCheck) {
    return res
      .status(400)
      .send({ errors: "passwords do not match, please try again" });
  }

  //add user to database
  const user = await User.create({
    username,
    password: bcrypt.hashSync(password, saltRounds),
  });

  res.send(user);
});

// login
authRouter.post("/login", [...loginValidator], async (req, res) => {
  const errors = validationResult(req);

  //if there are errors, show them to the user
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { username, password } = req.body;

  //see if the user exists
  const user = await User.findOne({ username });
  if (!user) {
    return res.sendStatus(404);
  }

  //compare the password that was entered with the password stored in the db; correctPassword returns a boolean based on the results
  const correctPassword = bcrypt.compareSync(password, user.password);
  if (!correctPassword) {
    return res.sendStatus(401);
  }

  const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, { expiresIn: "1 days" });

  res.send({ token });
});

//another route to profile. it will have info about the user, as well as all of their posts
authRouter.get('/', jwtMiddleware, async(req, res) => {
  res.send("it worked!")
})

module.exports = authRouter;
