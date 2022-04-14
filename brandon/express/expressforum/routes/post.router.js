const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("../models/Post.model");
const User = require("../models/User.model");

const postRouter = Router();

postRouter.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch(error) {
    res.sendStatus(404);
    console.log(error);
  }
});

postRouter.post("/", async (req, res) => {
  try {
    const { user, board, title, body} = req.body;
    const post = await Post.create({ user, board, title, body });
    res.send(post)
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

postRouter.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.set(req.body);
    await post.save;
    res.send(post);
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

postRouter.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.remove();
    res.send(post);
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.send(posts);
  } catch(error) {
    res.sendStatus(404);
    console.log(error);
  }
});

module.exports = postRouter;
