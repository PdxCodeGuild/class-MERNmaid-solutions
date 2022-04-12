const { Router } = require("express");
const List = require("../models/List");

const router = Router();

router.get("/", async (req, res) => {
    const lists = await List.find().populate("items");
    res.send(lists);
});

router.post("/list", async (req, res) => {
    const list = new List(req.body);
    await list.save();
    res.send(list);
});

module.exports = router;
