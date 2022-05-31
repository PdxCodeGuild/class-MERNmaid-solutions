const { Router } = require("express");
const Board = require("../models/Board");
const Post = require("../models/Post");

const jwtMiddleware = require("../middleware/jwtMiddleware");

const router = Router();

//List all boards
router.get("/", jwtMiddleware, async (req, res) => {
  const boards = await Board.find().populate("posts");
  res.send(boards);
});

//Create a board
router.post("/", jwtMiddleware, async (req, res) => {
  console.log(req.body, "req.body")
  const board = new Board(req.body);
  await board.save();
  res.send(board);
});

//Retrieve a specific board
router.get("/:id", jwtMiddleware, async (req, res) => {
  const board = await Board.findOne({ _id: req.params.id });
  res.send(board);
});

//Update a board
router.patch("/:id", jwtMiddleware, async (req, res) => {
  const board = await Board.findOne({ _id: req.params.id }).populate('posts');
  if (!board) {
    res.status(404).send("unable to find and update this board!");
  } else {
    const boardData = req.body;
    board.set(boardData);
    await board.save();
    res.send(board);
  }
});

//Delete a board
router.delete("/:id", jwtMiddleware, async (req, res) => {
  const board = await Board.findOne({ _id: req.params.id });
  if (!board) {
    res.status(404).send("oops, this board can't be found!");
  } else if (board.author.toString() !== req.user.id) {
    res.status(403).send("you can't delete boards you didn't create!");
  } else {
    await board.remove();
    res.send(board);
  }
});

module.exports = router;
