const mongoose = require("mongoose");
const { Schema } = mongoose;

const boardSchema = new Schema(
	{
		title: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	},
	{
		timestamps: true,
	},
	{ toJSON: { virtuals: true } }
);

boardSchema.virtual("users", {
	ref: "User",
	localField: "_id",
	foreignField: "user",
	justOne: false,
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
