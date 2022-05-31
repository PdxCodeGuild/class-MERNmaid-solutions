const { Router } = require("express");
const Character = require("../models/Character");
const Skill = require("../models/Skill")

const router = Router();

// List
router.get("/", async (req, res) => {
    const skills = await Skill.find().populate("character")
    res.send( { skills });
})


// CREATE
router.post("/", async (req,res) => {
    const skill = new Skill(req.body);
    await skill.save();
    res.send(skill);
})


module.exports=router;