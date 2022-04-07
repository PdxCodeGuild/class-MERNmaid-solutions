const { Router } = require("express");
const Character = require("../models/Character");

const router = Router();


// List
router.get("/", async (req, res) => {
    const characters = await Character.find().populate("skills");
    res.send(characters);

})

// Create
router.post("/", async (req, res) => {
    const character = new Character(req.body)
    await character.save();

    res.send(character);
})


module.exports = router;
