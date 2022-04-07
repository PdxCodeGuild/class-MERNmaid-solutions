const { Router } = require("express");
const List = require("../models/List")
const Item = require("../models/Item");

const router = Router();

// List
router.get("/", async (req, res) => {
    const items = await Item.find().populate("list")
    res.send( { items });
})


// CREATE
router.post("/", async (req,res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
})

// Retreive
router.get("/:id", async (req, res) => {
    const item = await Item.findOne({ _id: req.params.id });

    // res.send(req.params.id)

    if(!item){
        res.sendStatus(404)
    } else{
        res.send(item);
    }
});

// Update  (use patch)
router.patch("/:id", async (req, res) => {
    const item = await Item.findOne({ _id: req.params.id })
    if (!item){
        res.send(404);
    }

    const postData = req.body;

    item.set(postData);

    await item.save();

    res.send(item);
})



// Delete 
router.delete('/:id', async (req, res) => {
    const item = await Item.findOne({ _id: req.params.id });

    if (!item) res.send(404)

    // delete post, .remove()
    await item.remove();
    res.send(item);
})

module.exports=router;