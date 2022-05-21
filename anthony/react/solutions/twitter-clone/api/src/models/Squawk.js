const mongoose = require("mongoose")

const { Schema } = mongoose
const { ObjectId } = Schema.Types


const squawkFields = {
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

const squawkSchema = Schema({
  ...squawkFields,
  replies: [{ ...squawkFields }]
}, {
  timestamps: true
})

squawkSchema.statics.create = async function (body, userId) {
  const squawk = new this()
  squawk.body = body
  squawk.user = userId

  await squawk.save()
  return squawk
}

squawkSchema.methods.reply = async function (body, userId) {
  const response = this.create(body, userId)
  this.replies.push(response)
  await this.save()
  return this
}

const Squawk = mongoose.model("Squawk", squawkSchema)
module.exports = Squawk