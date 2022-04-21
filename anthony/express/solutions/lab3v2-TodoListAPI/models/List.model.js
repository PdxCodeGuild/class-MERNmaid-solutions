const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const listSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

listSchema.virtual("items", {
  ref: "Item",
  localField: "_id",
  foreignField: "list",
  justOne: false,
});

const List = mongoose.model("List", listSchema);

module.exports = List;
