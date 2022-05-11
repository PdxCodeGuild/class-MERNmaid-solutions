const { Schema, model } = require("mongoose");

const listSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

listSchema.virtual("items", {
  ref: "Item",
  localField: "_id",
  foreignField: "list",
});

const List = model("List", listSchema);

module.exports = List;
