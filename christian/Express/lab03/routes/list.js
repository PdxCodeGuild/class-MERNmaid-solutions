const { Router } = require("express");
const List = require("../models/List");
const Item = require("../models/Item");

const router = Router();

//Create list
router.post('/', async (req, res) => {
    const list = new List(req.body);
    await list.save();
    res.send(list);
});

//Rerieve list
router.get('/retrieve:id', async (req, res) => {
    
    const list = await List.findOne({_id: req.params.id}); 
    if (!list) {
        res.sendStatus(404);
    
    } else {
        res.send(list) 
    }
});

//Update list
router.patch('/retrieve/:id', async (req, res) => {
    //same as delete except use .patch
    const list = await List.findOne({_id: req.params.id});
    if(!list) {res.send(404)};
    const itemInfo = req.body;
    person.set(itemInfo) //.set to update info
    await list.save();
    
    res.send(list)

});

//Delete list
router.delete('/delete/:id', async (req, res) => {
    const list = await List.findOne({ _id: req.params.id });
    if (!list) {
    res.send(404);
    }
    await list.remove(); // .remove deletes list
    res.send(list);

})

//export to app.js
module.exports = router;

