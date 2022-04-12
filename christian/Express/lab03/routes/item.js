const { Router } = require("express");
const List = require("../models/List");
const Item = require("../models/Item");

const router = Router();

//CREATE item
router.post('/', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});

//Rerieve item
router.get('/retrieve/:id', async (req, res) => {
    // use ':id to target specific items
    const item = await Item.findOne({_id: req.params.id}); 
    if (!item) {
        res.sendStatus(404);
    
    } else {
        res.send(item) 
    }
});

//Update item
router.patch('/update/:id', async (req, res) => {
    //same as delete except use .patch
    const item = await Item.findOne({_id: req.params.id});
    if(!item) {res.send(404)};
    const itemInfo = req.body;
    item.set(itemInfo) //.set to update info
    await item.save();
    
    res.send(item)

});

//Delete item
router.delete('/delete/:id', async (req, res) => {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) {
    res.send(404);
    }
    await item.remove(); // .remove deletes item
    res.send(item);

})

module.exports = router;