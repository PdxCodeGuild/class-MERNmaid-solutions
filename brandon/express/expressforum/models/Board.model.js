const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const boardSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    creator: {
      type: ObjectId,
      ref: "user"
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  {
    timestamps: true,
  }
);

boardSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "board",
  justOne: false,
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
