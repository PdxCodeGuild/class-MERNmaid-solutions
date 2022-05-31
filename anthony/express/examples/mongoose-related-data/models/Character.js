const mongoose = require("mongoose");

const { Schema } = mongoose;

const characterSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 1,
    },
    weapon: {
      type: String,
      default: "fists",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

characterSchema.virtual("skills", {
  // virtual attribute called skills
  ref: "Skill", // reference to model name
  localField: "_id", // unique field used for lookup
  foreignField: "character", // What should 'skills' call this model
  justOne: false, // Can a character have multiple skills?
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
