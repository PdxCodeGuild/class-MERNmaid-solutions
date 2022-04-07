const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const skillSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  experience: {
    type: Number,
    default: 0,
  },
  character: {
    type: ObjectId,
    ref: "Character",
  },
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
