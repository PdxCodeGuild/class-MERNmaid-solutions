const { Router } = require("express");
const List = require("../models/List");

const router = Router();

// List
router.get("/", async (req, res) => {
    const lists = await List.find()
    res.send(lists)
})


// Create
router.post("/", async (req, res) => {
    const list = new List(req.body)
    await list.save();

    res.send(list);
})


module.exports = router;