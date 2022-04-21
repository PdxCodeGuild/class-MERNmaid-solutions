const { Router } = require("express");

const jwtMiddleware = require("../helpers/jwtMiddleware");

const router = Router();

router.get("/", jwtMiddleware, async (req, res) => {
  res.send("Super secret API stuff");
});

module.exports = router;
