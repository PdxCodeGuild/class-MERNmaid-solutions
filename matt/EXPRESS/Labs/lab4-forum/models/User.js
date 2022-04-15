// A User model that will store user information.

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
  
);


userSchema.virtual("board", {
  ref: "Board",
  localField: "_id",
  foreignField: "author",
  justOne: false, //create a list of posts related to a board
});

userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author", // use the users id to look up for any posts where the author matches the user id
  justOne: false, //create a list of posts related to a board
});


const User = mongoose.model("User", userSchema);

module.exports = User;
