const { Router } = require("express");

const Item = require("../models/Item.model");

const router = Router();

const { getModel } = require("./generic.routes");

// LIST
router.get("/", getModel(Item, "list"));

// CREATE
router.post("/create", async (req, res) => {
  const item = await Item.create(req.body);
  res.send(item);
});

// RETRIEVE
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id).populate("items");
  res.status(200).send(item);
});

// UPDATE
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByIdAndUpdate(id, req.body);
  res.status(200).send(item);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByIdAndRemove(id);
  if (!item) return res.sendStatus(404);
  res.status(200).send(item);
});

module.exports = router;
