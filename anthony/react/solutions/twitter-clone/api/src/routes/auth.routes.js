const { Router } = require("express")

const User = require("../models/User")

const router = Router()

// signup
router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body

  const user = await User.signup(username, password, email)
  res.send(user)
})

module.exports = router