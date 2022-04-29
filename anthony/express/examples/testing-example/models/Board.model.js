const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types

const boardSchema = Schema(
    {
        boardName: {
            type: String,
            required: true,
        },
        author: {
            type: ObjectId,
            ref: "User"
          }
    },
    
    {
    toJSON: {
        virtuals: true
     }
    }
);

boardSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "board",
    justOne: false
})

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;