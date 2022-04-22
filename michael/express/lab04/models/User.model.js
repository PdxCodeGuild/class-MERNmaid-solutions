const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
		post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
		board: [{ type: Schema.Types.ObjectId, ref: "Board" }],
	},
	{
		timestamps: true,
	},
	{ toJSON: { virtuals: true } }
);

userSchema.virtual("posts", {
	ref: "Post",
	localField: "post",
	foreignField: "post",
	justOne: false,
});

userSchema.virtual("boards", {
	ref: "Board",
	localField: "board",
	foreignField: "board",
	justOne: false,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
