const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		board: { type: Schema.Types.ObjectId, ref: "Board", required: true },
	},
	{
		timestamps: true,
	},
	{ toJSON: { virtuals: true } }
);

postSchema.virtual("boards", {
	ref: "Board",
	localField: "_id",
	foreignField: "board",
	justOne: false,
});

postSchema.virtual("users", {
	ref: "User",
	localField: "_id",
	foreignField: "user",
	justOne: false,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
