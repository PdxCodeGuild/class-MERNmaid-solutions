const { Router } = require("express");
const List = require("../models/List");
const Item = require("../models/Item");

const router = Router();

router.get("/", async (req, res) => {
    const items = await Item.find().populate("list");
    res.send(items);
});

router.post("/", async(req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});

module.exports = router;
