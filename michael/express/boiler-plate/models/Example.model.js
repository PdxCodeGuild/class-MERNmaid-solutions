const mongoose = require("mongoose");

const { Schema } = mongoose;

const exampleSchema = Schema(
	{
		fieldOne: {
			type: String,
			required: true,
			unique: true,
		},
		fieldTwo: {
			type: Number,
			default: 0,
		},
		fieldThree: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
