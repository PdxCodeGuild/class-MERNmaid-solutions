const jwt = require("jsonwebtoken")
const User = require('../models/User.model')

const jwtMiddleware = async (req, res, next) => {
    const authorization = req.header("Authorization") || "";

    const [bearer, token] = authorization.split(" ")

    if (bearer === "Bearer" && jwt.verify(token, "supersecretkeychangeme")){
        const payload = jwt.decode(token, "supersecretkeychangeme")
        const user = await User.findById(payload._id)
        req.user = user
        next()
    } else {
        res.status(403).send({ errors: "invalid credentials"})
    }
}

module.exports = jwtMiddleware;