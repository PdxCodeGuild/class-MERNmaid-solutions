const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 50,
        },
        body: {
            type: String,
            required: true,
            maxlength: 250
        },
        user: {
            type: ObjectId,
            ref: "User",
        },
        board: {
            type: ObjectId,
            ref: "Board"
        },
    }
)



const Post = mongoose.model("Post", postSchema)
module.exports = Post