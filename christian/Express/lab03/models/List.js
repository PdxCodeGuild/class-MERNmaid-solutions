const mongoose = require("mongoose");
const { Schema } = mongoose;

// List attributes
const listSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

//connect to Item model
listSchema.virtual("items", {
    ref: "Item", // referance to Item Model
    localField: "_id",  // target items by ID
    foreignField: "list", // 'items' refer to 'list' as relationship
    justOne: false, // false because a list will have more than one item
});

const List = mongoose.model("List", listSchema);
module.exports = List