const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const boardRouter = require("./routes/board.routes");
// const adminRouter = require("./routes/admin.routes");
const connectDatabase = require("./helpers/connect-db");

dotenv.config();

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/board", boardRouter);

const startServer = async (port = process.env.PORT, hostname = "127.0.0.1") => {
	await connectDatabase("database-name"); // Change database name

	app.listen(port, hostname, () => {
		console.log(`🚀 Listening at ${hostname}:${port}...\n`);
	});
};

startServer();
