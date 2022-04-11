const { Router } = require("express");
const jwtMiddleware = require("../helpers/jwt.middleware");
const router = Router();

router.get("/", [jwtMiddleware], async (req, res) => {
	res.send("Super Secret API stuff");
});

module.exports = router;
