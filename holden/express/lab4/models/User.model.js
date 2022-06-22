const mongoose = require("mongoose");

const { Schema } = mongoose;

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
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  },
);

userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

const User = mongoose.model("User", userSchema);

module.exports = User;