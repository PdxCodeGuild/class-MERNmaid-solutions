const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const postSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
    board: {
      type: ObjectId,
      ref: "Board",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
