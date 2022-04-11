const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth.routes");
const pEnv = process.env;
dotenv.config();

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

const connectDB = async () => {
	try {
		await mongoose.connect(pEnv.DB_CONNECTION);
		console.log("DB Connected");
	} catch (err) {
		console.error(err.message);
	}
};

connectDB();

app.listen(pEnv.PORT, () => {
	console.log(`Server started on port ${pEnv.PORT}`);
});
