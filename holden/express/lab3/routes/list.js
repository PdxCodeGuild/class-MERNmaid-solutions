const { Router } = require("express");
const List = require("../models/List");

const router = Router();

// LIST
router.get("/", async (req, res) => {
  const lists = await List.find().populate("items");
  res.send(lists);
});

// CREATE
router.post("/", async (req, res) => {
  const list = new List(req.body);
  await list.save();
  res.send(list);
});

module.exports = router;