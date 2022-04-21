const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types

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
    author: {
      type: ObjectId,
      ref: "User"
    },
    boardAuthor: {
      type: ObjectId,
      ref: "Board"
    },
    date: {
      type: Date,
      default: Date.now,
    }
  },
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;