const { Router } = require("express");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwtMiddleware = require("../middleware/jwtMiddleware")
const User = require("../models/User");

const router = Router();

//List all 
router.get("/", jwtMiddleware, async (req, res) => {
    const user = await User.findOne({ username : req.user.username }).populate(['board', 'posts']);
    res.send(user);
  });


module.exports = router;