const { Router } = require("express")

const jwtMiddleware = require("../helpers/jwtMiddleware")

const router = Router()

router.get("/", jwtMiddleware, async (req, res) => {
    res.send("Super secret api stuff")
})



module.exports = router;