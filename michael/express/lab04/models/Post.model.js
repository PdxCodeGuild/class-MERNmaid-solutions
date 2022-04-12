const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model("User", postSchema);

module.exports = Post;
