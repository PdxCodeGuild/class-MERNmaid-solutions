const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create general structure of a post
const postSchema = Schema({
  title: {
    type: String,
    required: true,
    maxlength: 40,
  },
  body: {
    type: String,
    required: true,
    maxlength: 400,
  },
  author: {
    type: String,
    required: true,
  },
});

// Create model using schema
const Post = mongoose.model("Post", postSchema);

// export post model
module.exports = Post;
