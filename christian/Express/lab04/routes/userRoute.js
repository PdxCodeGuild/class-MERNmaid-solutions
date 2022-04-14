const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../Models/User");
const jwtMiddleware = require("../helpers/jwtMiddleware");

const authRouter = Router();


const signupValidator = [
    //signup requirements
    check("username").exists().isLength({ min: 4, max: 12 }), //username requirements
    check("password").exists().isLength({ min: 6, max: 32 }), //password requirements
    check("passwordCheck").exists().isLength({ min: 6, max: 32 }), //checks password to "password"
  ];
  
  const loginValidator = [
    check("username").exists().isLength({ min: 4, max: 12 }),
    check("password").exists().isLength({ min: 6, max: 32 }),
  ];
  
  //sanitizeUser 
  const sanitizeUser = (user) => ({
    ...user.toJSON(), // converts user to JSON
    password: undefined,
  });

//sign up
authRouter.post("/signup", [...signupValidator], async (req,res) => {  //... spreads signupValidator
    const errors = validationResult(req); // use validationResult on request
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() }); //check for errors
    }
    const { username, password, passwordCheck } = req.body;

    // check if username is taken
    const userFound = await User.findOne({ username }); //look through User data to see if username is taken
    if (userFound) {
        return res.status(400).send({ errors: "username taken"}) 
    }
    // check passwords
    if (password !== passwordCheck) {
        return res.status(400).send({ errors: "passwords dont match" }); // check password compared to passwordCheck

    }
    const user = await User.create({ //.create creates new object
        username,
        //.hashSync Synchronously generates a hash for the given string. It returns the hashed string
        password: bcrypt.hashSync(password, 10), //bcrypt imported to encrypt password
    });
    res.send(sanitizeUser(user))
});

//login
authRouter.post("/login", [...loginValidator], async (req, res) => { //... spreads loginValidator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });

    }
    const { username, password } = req.body;

    const user = await User.findOne({ username }); //check if login username is in database
    if (!user) {
        return res.sendStatus(401);
    }

    const rightPassword = bcrypt.compareSync(password, user.password); //compare password to login
    if (!rightPassword) {
        return res.sendStatus(401);
    }
    //JSON web token
    const token = jwt.sign(sanitizerUser(user), process.env.SECRET_KEY, { //env file to protect key
        expiresIn: "1 days", //token is valid for user for set time
    });
    res.send({ token });
});

authRouter.get('/profile', jwtMiddleware, async (req, res) => {
    const user = await User.findById({ _id: req.params.id})

})


module.exports = authRouter;