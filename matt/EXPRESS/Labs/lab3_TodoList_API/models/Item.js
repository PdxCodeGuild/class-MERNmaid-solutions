const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types

const itemSchema = Schema({
    name:{
        type: String,
        required: true
    },
    list: {
        type: ObjectId,
        ref: "List"
    }
});

const Skill = mongoose.model("Item", itemSchema)
module.exports = Skill;