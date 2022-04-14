const { Router } = require("express");
const Board = require("../models/Board.model");
const Post = require("../models/Post.model");
const User = require("../models/User.model");
const jwtMiddleware = require("../helpers/jwt-middleware");

const router = Router();


router.post("/", jwtMiddleware, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("unauthorized");
  }
  const { boardName } = req.body
  const boardFound = await Board.findOne({ boardName });
  if (boardFound) {
    return res.status(400).send({ errors: "boardName exists" });
  }
  const board = new Board(req.body);
  await board.save();
  res.send(board);
});

router.get("/:boardName", async (req, res) => {
  const board = await Board.findOne({ boardName: req.params.boardName }).populate("posts");
  if (!board) {
    res.sendStatus(404);
  } else {
    res.send(board);
  }
});

router.patch("/:name", jwtMiddleware, async (req, res) => {
  const board = await Board.findOne({ boardName: req.params.name });
  if (!board) {
    res.status(404);
  }
  if (board.user != req.user && !req.user.isAdmin) {
    res.status(403).send("unauthorized");
  }

  const boardData = req.body;

  board.set(boardData);

  await board.save();

  res.send(board);
});

router.delete("/:name", jwtMiddleware, async (req, res) => {
  const board = await Board.findOne({ boardName: req.params.name });

  if (!board) {
    res.status(404);
  }
  if (board.user != req.user && !req.user.isAdmin) {
    res.status(403).send("unauthorized");
  }

  await board.remove();
  res.send(board);
});

module.exports = router;