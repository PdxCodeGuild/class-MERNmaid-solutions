const { AsyncRouter: Router } = require("express-async-router")
const jwt = require("jsonwebtoken")

const User = require("../models/User")
const { loginValidator, signupValidator } = require("../helpers/validators")
const handleValidationErrors = require("../helpers/handleValidatorErrors")

const router = Router()




//signup
router.post("/signup", [...signupValidator, handleValidationErrors], async (req, res) => {
    const {username, password, email} = req.body

    const userExists =  await User.findOne({username: username})
    if(userExists) return res.sendStatus(400).send({ errors: ["Username already exists"] })

    const user = await User.signup(username, password, email)
    res.send(user.sanitize())
})

router.post("/login", [...loginValidator, handleValidationErrors], async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username: username})
    if (!user || !user.comparePassword(password)) {
        return res.status(401).send({ errors: ["invalid username or password"]})
    }
    const token = jwt.sign(user.sanitize(), process.env.SECRET_KEY)


    res.send( { token, user: user.sanitize() } )
})

module.exports = router