const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	},
	{ toJSON: { virtuals: true } }
);

userSchema.virtual("boards", {
	ref: "Board",
	localField: "_id",
	foreignField: "owner",
});

userSchema.virtual("posts", {
	ref: "Post",
	localField: "_id",
	foreignField: "author",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
