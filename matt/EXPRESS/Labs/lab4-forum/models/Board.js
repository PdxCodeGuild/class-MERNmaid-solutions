// A Board model that will have a name and a list of related posts.
//board is like character

const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const boardSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    author: {
      type: ObjectId,
      ref: "User",
      required: true
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

boardSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "board",
  justOne: false, //create a list of posts related to a board
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
