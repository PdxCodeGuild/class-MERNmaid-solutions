const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const connectDatabase = require("./helpers/connect-db");

const pEnv = process.env;

dotenv.config();

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/secret", postRouter);

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(pEnv.DB_CONNECTION);
// 		console.log("DB Connected");
// 	} catch (err) {
// 		console.error(err.message);
// 	}
// };

// connectDB();

// app.listen(pEnv.PORT, () => {
// 	console.log(`Server started on port ${pEnv.PORT}`);
// });

const startServer = async (port = process.env.PORT, hostname = "127.0.0.1") => {
	await connectDatabase("database-name"); // Change database name

	app.listen(port, hostname, () => {
		console.log(`🚀 Listening at ${hostname}:${port}...`);
	});
};

startServer();
