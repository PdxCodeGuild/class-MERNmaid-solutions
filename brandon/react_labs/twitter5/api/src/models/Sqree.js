const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const sqreeFields = {
  body: {
    type: String,
    required: true
  },
  user: {
    type: ObjectId,
    required: true,
    ref: "User"
  },
  likes: [{
    type: ObjectId,
    ref: "User"
  }],
  deleted: {
    type: Boolean,
    default: false
  }
}

const SqreeSchema = Schema({
  ...sqreeFields,
  replies: [{...sqreeFields}]
}, {
  timestamps: true
});

SqreeSchema.statics.create = async function(body, userId) {
  const sqree = new this();
  sqree.body = body;
  sqree.user = userId;

  await sqree.save();
  return sqree;
}

SqreeSchema.methods.reply = async function(body, userId) {
  const response = this.create(body, userId);
  this.replies.push(response);
  await this.save();
  return this;
}

const Sqree = mongoose.model("Sqree", SqreeSchema);
module.exports = Sqree;
