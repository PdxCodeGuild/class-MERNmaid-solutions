const { Router } = require("express");

const List = require("../models/List.model");

const router = Router();

// CREATE
router.post("/", async (req, res) => {
  const list = new List(req.body);
  await list.save();
  res.send(list);
});

// RETRIEVE
router.get("/:_id", async (req, res) => {
  const list = await List.findOne({ _id: req.params._id }).populate("items");
  if (!list) return res.sendStatus(404);

  res.send(list);
});

// UPDATE
router.patch("/:_id", async (req, res) => {
  const list = await List.findOne({ _id: req.params._id });
  if (!list) return res.sendStatus(404);

  list.set(req.body);
  await list.save();

  res.send(list);
});

// DELETE
router.delete("/:_id", async (req, res) => {
  const list = await List.findOne({ _id: req.params._id });
  if (!list) return res.sendStatus(404);

  await list.remove();
  res.send(list);
});

module.exports = router;
