const mocha = require("mocha");
const chai = require("chai");
const dotenv = require("dotenv");

dotenv.config();

const { connectDatabase } = require("../server");

describe("server.js", () => {
	it("Should connect to a mongodb server", async () => {
		const connection = await connectDatabase("test-db");

		chai.expect(connection).to.exist;
	});
});
