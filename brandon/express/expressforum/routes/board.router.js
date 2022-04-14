const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Board = require("../models/Board.model");

const boardRouter = Router();

boardRouter.get("/", async (req, res) => {
  try {
    const boards = await Board.find();
    res.send(boards);
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

boardRouter.get("/:id", async (req, res) => {
  try {
    const board = await Board.findById(req.params.id).populate("posts");
    res.send(board);
  } catch(error) {
    res.sendStatus(404);
    console.log(error);
  }
});

boardRouter.post("/", async (req, res) => {
  try {
    const board = await Board.create(req.body);
    res.send(board)
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

boardRouter.patch("/:id", async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    board.set(req.body);
    await board.save;
    res.send(board);
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

boardRouter.delete("/:id", async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    await board.remove();
    res.send(board);
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

module.exports = boardRouter;
