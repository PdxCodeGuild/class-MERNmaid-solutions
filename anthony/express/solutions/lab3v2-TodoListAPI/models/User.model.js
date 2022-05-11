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
    admin: {
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
userSchema.virtual("lists", {
  ref: "List",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});
userSchema.virtual("items", {
  ref: "Item",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
