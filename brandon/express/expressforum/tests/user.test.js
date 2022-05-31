process.env.ENV = "test";

const chai = require("chai");

const { app } = require("../app");

describe("User", () => {

  it("should allow a valid user to sign up", async () => {
    const response = await chai.request(app).post("/user/signup").send({
      username: "username",
      password: "password",
      passwordCheck: "password"
    });
    chai.expect(response.body.username).to.exist;
    chai.expect(response.status).to.be.eq(200);
  })
});
