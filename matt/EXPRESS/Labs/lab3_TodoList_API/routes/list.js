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

// Update  (use patch)
router.patch("/:id", async (req, res) => {
    const list = await List.findOne({ _id: req.params.id })
    if (!list){
        res.send(404);
    }

    const postData = req.body;

    list.set(postData);

    await list.save();

    res.send(list);
})



// Delete 
router.delete('/:id', async (req, res) => {
    const list = await List.findOne({ _id: req.params.id });

    if (!list) res.send(404)

    // delete post, .remove()
    await list.remove();
    res.send(list);
})


module.exports = router;