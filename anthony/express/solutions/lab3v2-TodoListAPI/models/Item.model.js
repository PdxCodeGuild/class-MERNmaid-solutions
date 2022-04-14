const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const itemSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  listId: {
    type: ObjectId,
    ref: "List",
    required: true,
  },
  userId: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
