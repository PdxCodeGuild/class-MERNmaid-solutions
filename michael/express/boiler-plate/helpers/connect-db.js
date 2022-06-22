const mongoose = require("mongoose");

databaseName = process.env.DB_NAME;

const connectDatabase = async (databaseName) => {
	try {
		const connection = await mongoose.connect(
			`mongodb://127.0.0.1:27017/${databaseName}`
		);
		console.log(`🚀 Connected to database "${databaseName}"...`);
		return connection;
	} catch (err) {
		console.error(err);
	}
};

module.exports = connectDatabase;
