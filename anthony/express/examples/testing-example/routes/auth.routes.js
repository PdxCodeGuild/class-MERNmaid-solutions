const { Router } = require("express")
const { check, validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/User.model")

const authRouter = Router()

const signupValidator = [
    check("username").exists().isLength({ min: 4, max: 12 }),
    check("password").exists().isLength({ min: 8, max: 32}),
    check("passwordCheck").exists().isLength({ min: 8, max: 32})   
]

const loginValidator = [
    check("username").exists().isLength({ min: 4, max: 12 }),
    check("password").exists().isLength({ min: 8, max: 32}),
]

const sanitizeUser = (user) => ({
    ...user.toJSON(),
    password: undefined
})

// signup
authRouter.post("/signup", [...signupValidator], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }
    
    const { username, password, passwordCheck } = req.body


    // Make sure username is not taken
    const userFound = await User.findOne({ username })
    if (userFound) {
        return res.status(400).send({ errors: "username taken" })
    }
    // Check to see if passwords match
    if (password != passwordCheck){
        return res.status(400).send({ errors: "passwords do not match" })
    }

    // Add user to db
    const user = await User.create({
        username,
        password: bcrypt.hashSync(password, 10)
    })

    // Check to see if passwords match
    res.send(sanitizeUser(user))
})

// login
authRouter.post('/login', [...loginValidator], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()})
    }

    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) {
        return res.sendStatus(418);
    }

    const correctPassword = bcrypt.compareSync(password, user.password)
    if (!correctPassword){
        return res.sendStatus(401);
    }

    const token = jwt.sign(sanitizeUser(user), "supersecretkeychangeme", {
        expiresIn: "7 days" // or number for miliseconds
    })

    res.send({token})
})

// logout


module.exports = authRouter

