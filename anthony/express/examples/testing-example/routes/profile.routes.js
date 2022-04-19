const { Router } = require("express");

const User = require("../models/User.model")

const router = Router()

// List 
router.get("/x", async (req, res) => {
    const user = await User.find().populate("posts")
    res.send(user)
})


// Create
router.post("/x", async (req, res) => {
    const user = new User(req.body)
    await user.save();
    res.send(user);
})


module.exports = router