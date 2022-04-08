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

const Item = mongoose.model("Item", itemSchema)
module.exports = Item;