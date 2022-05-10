const mongoose = require("mongoose");

const { Schema } = mongoose;

const boardSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        
    },{
        toJSON: {
            virtuals: true,

    }
       
    },
);

boardSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "board",
    justOne: false,
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board