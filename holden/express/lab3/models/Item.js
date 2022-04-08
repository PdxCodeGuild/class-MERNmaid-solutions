const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const itemSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  list: {
    type: ObjectId,
    ref: "list",
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;