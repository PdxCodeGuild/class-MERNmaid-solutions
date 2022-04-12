const mongoose = require("mongoose");

const { Schema } = mongoose;

const boardSchema = Schema(
    {
        boardName: {
            type: String,
            required: true,
            // unique: true,
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
    jsutOne: false
})

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;