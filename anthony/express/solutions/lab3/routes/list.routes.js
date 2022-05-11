const { Router } = require("express");

const List = require("../models/List.model");

const router = Router();

// LIST
router.get("/", async (req, res) => {
  const lists = await List.find().populate("items");

  res.send(lists);
});

// CREATE
router.post("/create", async (req, res) => {
  // const list = new List(req.body);
  // await list.save();

  const list = await List.create(req.body);
  res.send(list);
});

// RETRIEVE
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const list = await List.findById(id).populate("items");
  res.status(200).send(list);
});

// UPDATE
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const list = await List.findByIdAndUpdate(id, req.body);
  res.status(200).send(list);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const list = await List.findByIdAndRemove(id);
  if (!list) return res.sendStatus(404);
  res.status(200).send(list);
});

module.exports = router;
