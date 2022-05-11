const { Router } = require("express");
const jwtMiddleware = require("../helpers/jwt-middleware");

const Item = require("../models/Item.model");

const router = Router();

// LIST
router.get("/", async (req, res) => {
  const items = await Item.find();

  if (!items) return res.sendStatus(404);

  res.send(items);
});

// CREATE
router.post("/", jwtMiddleware, async (req, res) => {
  const item = new Item({
    ...req.body,
    userId: req.user._id,
  });
  await item.save();
  res.send(item);
});

// RETRIEVE
router.get("/:_id", async (req, res) => {
  const item = await Item.findOne({ _id: req.params._id });
  if (!item) return res.sendStatus(404);

  res.send(item);
});

// UPDATE
router.patch("/:_id", jwtMiddleware, async (req, res) => {
  const item = await Item.findOne({ _id: req.params._id });
  if (!item) return res.sendStatus(404);
  if (req.user._id !== item.userId) return res.sendStatus(401);

  item.set(req.body);
  await item.save();

  res.send(item);
});

// DELETE
router.delete("/:_id", jwtMiddleware, async (req, res) => {
  const item = await Item.findOne({ _id: req.params._id });
  if (!item) return res.sendStatus(404);
  if (req.user._id !== item.userId) return res.sendStatus(401);

  await item.remove();
  res.send(item);
});
module.exports = router;
