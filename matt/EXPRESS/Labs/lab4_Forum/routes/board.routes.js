const { Router } = require("express");

const Board = require("../models/Board.model")

const router = Router()

// List 
router.get("/", async (req, res) => {
    const board = await Board.find().populate({ path: "posts" })
    res.send(board)
})


// Create
router.post("/", async (req, res) => {
    const board = await new Board(req.body)
    await board.save();
    res.send(board);
})


module.exports = router