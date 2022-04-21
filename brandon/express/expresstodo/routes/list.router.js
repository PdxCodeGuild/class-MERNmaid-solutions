const { Router } = require("express");
const List = require("../models/List.model");
const Item =require("../models/Item.model");

const router = Router();

// list
router.get("/", async (req, res) => {
    const lists = await List.find().populate("items");
    res.send(lists);
});

// read
router.get("/:id", async (req, res) => {
    const list = await List.findById(req.params.id).populate("items");
    res.send(list);
});

// create
router.post("/", async (req, res) => {
    const list = new List(req.body);
    await list.save();
    res.send(list);
});

// update
router.patch("/:id", async (req, res) => {
    const list = await List.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(list);
});

// delete
router.delete("/:id", async (req, res) => {
    const list = await List.findByIdAndRemove(req.params.id, req.body);
    res.status(200).send(list);
});

module.exports = router;
