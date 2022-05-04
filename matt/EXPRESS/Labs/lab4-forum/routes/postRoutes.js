const { Router } = require("express");
const Post = require("../models/Post");
const Board = require("../models/Board");
const jwtMiddleware = require('../middleware/jwtMiddleware')

const router = Router();

//List all posts
router.get("/", jwtMiddleware, async (req, res) => {
  const posts = await Post.find().populate('board');
  res.send(posts);
});

//Create a post
router.post("/", jwtMiddleware, async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send(post);
});

//Retrieve a specific post
router.get("/:id", jwtMiddleware, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post ? res.send(post) : res.status(400).send("oops, something went wrong!");
  // console.log(req.user.id, 'req.user from get')
  console.log(post.author.toString(), 'post from get')
});

//Update a post
router.patch("/:id", jwtMiddleware, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) {
    res.status(404).send('couldn\'t find that post!');
  } else {
    // console.log(req.body, 'req.body')
    post.set(req.body);
    await post.save();
    res.send(post);
  }
});

//Delete a post
router.delete("/:id", jwtMiddleware, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) {
    res.status(404).send('unable to find this post for deletion');
  } else if (post.author.toString() !== req.user.id) {
    res.status(403).send("you can't delete posts you didn't create!")
  } else {
    await post.remove();
    res.send(post);
  }
});

module.exports = router;
