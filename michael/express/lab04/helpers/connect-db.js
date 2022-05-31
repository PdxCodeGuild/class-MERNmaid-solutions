const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const databaseName = process.env.DB_NAME;

const connectDatabase = async () => {
	try {
		const connection = await mongoose.connect(
			`mongodb://127.0.0.1:27017/${databaseName}`
		);
		if (process.env.ENV !== "test")
			console.log(`\n🚀 Connected to database "${databaseName}"...`);
		return connection;
	} catch (err) {
		console.error(err);
	}
};

module.exports = connectDatabase;
