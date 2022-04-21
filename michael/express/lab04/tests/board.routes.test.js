const chai = require("chai");
const dotenv = require("dotenv");
const { expect } = chai;
const { app } = require("../server");
dotenv.config();

describe("Board Routes", () => {
	it("should create a board", async () => {
		const res = await chai
			.request(app)
			.post("/board/")
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
			.send({
				title: "test",
				description: "test",
				userId: 1,
			});

		expect(res.status).to.eq(201);
		// expect(res.body.title).to.exist;
		// expect(res.body.description).to.exist;
		// expect(res.body.userId).to.exist;
	});
});
