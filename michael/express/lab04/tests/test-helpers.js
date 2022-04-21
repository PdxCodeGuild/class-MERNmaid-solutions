const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
process.env.ENV = "test";
const { connectDatabase } = require("../server");

chai.use(chaiHttp);

setTimeout(() => {
	before(async () => {
		this.db = await connectDatabase("test-db");
		console.log("Connected to test database");
	});

	after(async () => {
		await this.db.connection.dropDatabase();
		await this.db.connection.close();
		console.log("Database connection closed");
	});
});
