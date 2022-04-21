process.env.ENV = "test";

const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");

const { app, connectDB } = require("../server");

chai.use(chaiHttp);

// settimeout is a workaround for before & after not being allowed in the global scope
setTimeout(() => {
  before(async () => {
    await connectDB("/testdb");
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });
});

describe("General Route testing", () => {
  it("Should return 200 status code", async () => {
    const response = await chai.request(app).get("/post");

    chai.expect(response.status).to.be.eq(200);
  });

  it("Should return 404 status code", async () => {
    const response = await chai.request(app).get("/thispagedoesnotexist");

    chai.expect(response.status).to.be.eq(404);
  });
});

describe("Auth", () => {
  it("Should allow a valid user to sign up", async () => {
    const response = await chai.request(app).post("/auth/signup").send({
      username: "robin",
      password: "password",
      passwordCheck: "password",
    });

    chai.expect(response.body.username).exist;
    chai.expect(response.status).to.be.eq(200);
  });

  it("Should be able to login with a valid user", async function () {
    const response = await chai.request(app).post("/auth/login").send({
      username: "robin",
      password: "password",
    });

    this.token = response.body.token;

    chai.expect(response.body.token).exist;
    chai.expect(response.status).to.be.eq(200);
  });
});
