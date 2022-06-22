const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types

const skillsSchema = Schema({
    name:{
        type: String,
        required: true
    },
    level: {
        type: Number,
        deafult: 1
    },
    experience: {
        type: Number,
        default: 0
    },
    character: {
        type: ObjectId,
        ref: "Character"
    }
});

const Skill = mongoose.model("Skill", skillsSchema)
module.exports = Skill;