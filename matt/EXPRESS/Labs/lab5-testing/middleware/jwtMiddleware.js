const jwt = require('jsonwebtoken')
const User = require('../models/User')


const jwtMiddleware = async (req, res, next) => {
    const authorization = req.header('Authorization') || ''

    const [bearer, token] = authorization.split(' ')

    if (bearer === 'Bearer' && jwt.verify(token, process.env.SECRET_KEY)) {
        const payload = jwt.decode(token, process.env.SECRET_KEY)
        const user = await User.findById(payload._id)
        req.user = user
        next()
    } else {
        res.status(403).send({ errors: 'invalid credentials', bearer: bearer })
        
    }
}

module.exports = jwtMiddleware

// {
//     "title": "i am groot",
//     "body": "i am groot, i am groot, i am groot",
//     "author": "62560107fda6b02e0c541351",
//     "board": "62560b0e7ac0fe4543d990a6"
// }