const chai = require("chai");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { expect } = chai;
const { app } = require("../server");
dotenv.config();

describe("post Routes", () => {
	it("should create a post", async () => {
		const res = await chai
			.request(app)
			.post("/post/")
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
			.send({
				title: "Test post",
				content: "test",
				boardId: process.env.BOARD_ID,
				userId: jwt.verify(process.env.TEST_TOKEN, process.env.JWT_SECRET)._id,
			});

		expect(res.status).to.eq(201);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test post");
		expect(res.body["content"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
		this.postId = res.body["_id"];
		this.userId = res.body["user"];
	});

	it("should not create a post with no content", async () => {
		const res = await chai
			.request(app)
			.post("/post/")
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
			.send({
				title: "Test post",
				content: "",
				boardId: process.env.BOARD_ID,
				userId: jwt.verify(process.env.TEST_TOKEN, process.env.JWT_SECRET)._id,
			});

		expect(res.status).to.eq(400);
	});

	it("should read a post", async () => {
		const res = await chai
			.request(app)
			.get(`/post/${this.postId}`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`);

		expect(res.status).to.eq(201);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test post");
		expect(res.body["content"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
	});

	it("should update a post", async () => {
		const res = await chai
			.request(app)
			.put(`/post/${this.postId}`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
			.send({
				title: "Test post Updated",
				content: "test",
				userId: jwt.verify(process.env.TEST_TOKEN, process.env.JWT_SECRET)._id,
				boardId: process.env.BOARD_ID,
			});

		expect(res.status).to.eq(200);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test post Updated");
		expect(res.body["content"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
	});

	it("should not update a post with no content", async () => {
		const res = await chai
			.request(app)
			.put(`/post/${this.postId}`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
			.send({
				title: "Test post Updated",
				content: "",
				userId: jwt.verify(process.env.TEST_TOKEN, process.env.JWT_SECRET)._id,
				boardId: process.env.BOARD_ID,
			});

		expect(res.status).to.eq(400);
	});
	it("should list all posts", async () => {
		const res = await chai
			.request(app)
			.get(`/post/`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`);

		expect(res.status).to.eq(200);
		expect(res.body).to.be.an("array");
		expect(res.body[0]["title"]).to.exist;
		expect(res.body[0]["title"]).to.eq("Test post Updated");
		expect(res.body[0]["content"]).to.exist;
		expect(res.body[0]["user"]).to.exist;
		expect(res.body[0]["_id"]).to.exist;
	});

	it("should delete a post", async () => {
		const res = await chai
			.request(app)
			.delete(`/post/${this.postId}`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`);

		expect(res.status).to.eq(200);
		expect(res.body["title"]).to.exist;
		expect(res.body["title"]).to.eq("Test post Updated");
		expect(res.body["content"]).to.exist;
		expect(res.body["user"]).to.exist;
		expect(res.body["_id"]).to.exist;
	});

	it("should list all posts", async () => {
		const res = await chai
			.request(app)
			.get(`/post/`)
			.set("Authorization", `Bearer ${process.env.TEST_TOKEN}`);

		expect(res.status).to.eq(200);
		expect(res.body).to.be.an("array");
		expect(res.body.length).to.eq(0);
	});
});
