const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        
        
    },
   {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },

}
);

userSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "user",
    justOne: false,
});
userSchema.virtual("boards", {
    ref: "board",
    localField: "_id",
    foreignField: "user",
    justOne: false,
});

//make virtual for posts and board
const User = mongoose.model("User", userSchema);
module.exports = User;

