const { AsyncRouter: Router} = require("express-async-router")
const Squawk = require("../models/Squawk")
const jwt = require("jsonwebtoken")
const {squawkValidator} = require("../helpers/validators")
const handleValidationErrors = require("../helpers/handleValidatorErrors")
const jwtMiddleware = require("../helpers/jwtMiddleware")
const router = Router()

//Create

router.post("/", [...squawkValidator, handleValidationErrors, jwtMiddleware], async (req, res) => {
     const squawk = await Squawk.create(req.body.body, req.user._id )
     res.status(201).send(squawk)

})

module.exports = router