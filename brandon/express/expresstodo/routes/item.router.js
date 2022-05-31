const { Router } = require("express");
const List = require("../models/List.model");
const Item = require("../models/Item.model");

const router = Router();

// list
router.get("/", async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

// create
router.post("/", async(req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});

// read
router.get("/:id", async(req, res) => {
    const item = await Item.findById(req.params.id);
    res.status(200).send(item);
});

// update
router.patch("/:id", async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(item);
});

// delete
router.delete("/:id", async (req, res) => {
    const item = await Item.findByIdAndRemove(req.params.id, req.body);
    res.status(200).send(item);
});

module.exports = router;
