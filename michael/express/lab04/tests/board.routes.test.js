const chai = require("chai");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
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
				title: "Test Board",
				description: "test",
				userId: jwt.verify(process.env.TEST_TOKEN, process.env.JWT_SECRET)._id,
			});

		expect(res.status).to.eq(201);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test Board");
		expect(res.body["description"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
		this.boardId = res.body["_id"];
		process.env.BOARD_ID = this.boardId;
		this.userId = res.body["user"];
	});
	it("should read a board", async () => {
		const res = await chai
			.request(app)
			.get(`/board/${this.boardId}`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`);

		expect(res.status).to.eq(201);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test Board");
		expect(res.body["description"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
	});
	it("should update a board", async () => {
		const res = await chai
			.request(app)
			.put(`/board/${this.boardId}`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
			.send({
				title: "Test Board Updated",
				description: "test",
				userId: jwt.verify(process.env.TEST_TOKEN, process.env.JWT_SECRET)._id,
			});

		expect(res.status).to.eq(200);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test Board Updated");
		expect(res.body["description"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
	});
	it("should delete a board", async () => {
		const res = await chai
			.request(app)
			.delete(`/board/${this.boardId}`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`);

		expect(res.status).to.eq(200);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test Board Updated");
		expect(res.body["description"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
	});
	it("should create a second board", async () => {
		const res = await chai
			.request(app)
			.post("/board/")
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
			.send({
				title: "Second Test Board",
				description: "test",
				userId: jwt.verify(process.env.TEST_TOKEN, process.env.JWT_SECRET)._id,
			});

		expect(res.status).to.eq(201);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Second Test Board");
		expect(res.body["description"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
		this.boardId = res.body["_id"];
		process.env.BOARD_ID = this.boardId;
		this.userId = res.body["user"];
	});
	it("should get all boards", async () => {
		const res = await chai
			.request(app)
			.get("/board/")
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`);

		expect(res.status).to.eq(200);
		expect(res.body).to.be.an("array");
	});
});
