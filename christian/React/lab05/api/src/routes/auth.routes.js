const { Router } = require("express")

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

module.exports = router