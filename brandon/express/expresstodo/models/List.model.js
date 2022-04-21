const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const listSchema = Schema({
    name: String,
    },{
      timestamps: true,
      toJSON: {
        virtuals: true,
    }
});

listSchema.virtual("items", {
  ref: "Item",
  localField: "_id",
  foreignField: "list",
  justOne: false,
});

const List = model("List", listSchema);
module.exports = List;
