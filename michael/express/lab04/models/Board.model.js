const mongoose = require("mongoose");
const { Schema } = mongoose;

const boardSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
	},
	{
		timestamps: true,
	},
	{ toJSON: { virtuals: true } }
);

boardSchema.virtual("posts", {
	ref: "Post",
	localField: "_id",
	foreignField: "board",
	justOne: false,
});

const Board = mongoose.model("User", boardSchema);

module.exports = Board;
