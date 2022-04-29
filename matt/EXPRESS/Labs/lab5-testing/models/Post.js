// A Post model that contains information about a post, the Board it belongs to and the User who posted it.
// a post has a tile, a body, and an author
// a post is like skill

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const postSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  board: {
    type: ObjectId,
    ref: "Board",
    required: true
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
