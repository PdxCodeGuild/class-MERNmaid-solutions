const { Router } = require("express");
const Post = require("../models/Post.model");
const User = require("../models/User.model");
const jwtMiddleware = require("../helpers/jwt-middleware");

const router = Router();

const sanitizeUser = (user) => ({
  ...user.toJSON(),
  password: undefined,
});

router.post("/", jwtMiddleware, async (req, res) => {
  const postData = req.body;
  postData.user = req.user._id;
  const post = new Post(postData);
  await post.save();
  res.send(post);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id }).populate("user").populate("board");

  if (!post) {
    return res.sendStatus(404);
  } else {
    post.user = sanitizeUser(post.user);
    res.send(post);
  };
});


// note to self this is broken rn
router.patch("/:id", jwtMiddleware, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) {
    return res.sendStatus(404);
  };
  console.log(post.user.toString() == req.user._id.toString());
  if (post.user.toString() != req.user._id.toString() && !req.user.isAdmin) {
    return res.status(403).send("unauthorized");
  };

  const postData = req.body;
  postData.user = post.user;

  post.set(postData);

  await post.save();

  post.user = sanitizeUser(post.user);
  res.send(post);
});

router.delete("/:id", jwtMiddleware, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });

  if (!post) {
    return res.sendStatus(404);
  };
  if (post.user != req.user && !req.user.isAdmin) {
    return res.status(403).send("unauthorized");
  };

  await post.remove();
  post.user = sanitizeUser(post.user);
  res.send(post);
});

module.exports = router;
