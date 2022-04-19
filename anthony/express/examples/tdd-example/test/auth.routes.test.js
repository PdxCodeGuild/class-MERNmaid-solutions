const chai = require("chai");
const dotenv = require("dotenv");

const { app } = require("../server");
dotenv.config();

describe("/auth/signup auth.routes.js", () => {
  it("Should allow a valid user to signup", async () => {
    const response = await chai.request(app).post("/auth/signup").send({
      username: "Batman",
      password: "Password123",
      passwordCheck: "Password123",
    });

    chai.expect(response.body.username).to.exist;
    chai.expect(response.body.password).to.not.exist;
    chai.expect(response.status).to.be.eq(200);
  });

  it("Should not allow a user to signup if passwords do not match", async () => {
    const response = await chai.request(app).post("/auth/signup").send({
      username: "Robin",
      password: "Password123",
      passwordCheck: "Password",
    });

    chai.expect(response.status).to.eq(401);
  });

  it("Should not allow a user to signup if username is taken", async () => {
    const response = await chai.request(app).post("/auth/signup").send({
      username: "Batman",
      password: "Password123",
      passwordCheck: "Password123",
    });

    chai.expect(response.status).to.eq(409);
  });
});

describe("/auth/login auth.routes.js", () => {
  it("Should allow a valid user to login", async () => {
    const response = await chai.request(app).post("/auth/login").send({
      username: "Batman",
      password: "Password123",
    });

    this.token = response.body.token;
    chai.expect(response.body.token).to.exist;
    chai.expect(response.status).to.be.eq(200);
  });
});

describe("/auth/profile auth.routes.js", () => {
  it("Should allow a user to visit their profile", async () => {
    const response = await chai
      .request(app)
      .get("/auth/profile")
      .set("Authorization", `Bearer ${this.token}`);

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.username).exist;
  });
});
