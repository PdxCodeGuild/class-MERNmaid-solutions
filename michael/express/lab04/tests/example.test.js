const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
process.env.ENV = "test";
const { app, startServer } = require("../app");

chai.use(chaiHttp);

setTimeout(() => {
	before(async () => {
		await startServer();
	});
	after(async () => {
		await mongoose.connection.dropDatabase();
		await mongoose.connection.close();
	});
});

describe("Test the status codes of the routes", () => {
	// dictionary containing all the routes and their status codes
	const routes = {
		"/auth/": {
			status: 404,
		},
		"/post/": {
			status: 200,
		},
		"/board/": {
			status: 200,
		},
		"/user/": {
			status: 404,
		},
	};
	function status200(route, statusCode) {
		it(`${route} Should return a ${statusCode} status code`, async () => {
			let res = await chai.request(app).get(route);
			// console.log(res.status, res);
			chai.expect(res.status).to.be.eq(statusCode);
		}).timeout(10000);
	}

	// test status200 on all routes
	for (let route in routes) {
		status200(route, routes[route].status);
	}
});
process.env.DB_NAME = "testDB";
describe("Auth", () => {
	it("Should allow a valid user to sign up", async function () {
		const res = await chai.request(app).post("/auth/signup").send({
			username: "testy",
			password: "testtest",
			passwordCheck: "testtest",
		});

		chai.expect(res.body.username);
		chai.expect(res.status).to.be.eq(201);
	});
	it("Should allow a valid user to login", async () => {
		const res = await chai.request(app).post("/auth/login").send({
			username: "testy",
			password: "testtest",
		});

		this.token = res.body.token;
		console.log(this.token);

		chai.expect(res.body.username);
		chai.expect(res.status).to.be.eq(201);
	});
});
