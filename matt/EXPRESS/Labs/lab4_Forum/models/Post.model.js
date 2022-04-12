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
    id: {
      type: ObjectId,
      ref: "user"
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;