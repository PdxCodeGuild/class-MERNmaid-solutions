const chai = require("chai");
const dotenv = require("dotenv");

const { app } = require("../server");
dotenv.config();

describe("/user/signup user.routes.js", () => {
  it("Should allow a valid user to signup", async () => {
    const response = await chai.request(app).post("/user/signup").send({
      username: "Batman",
      password: "Password123",
      passwordCheck: "Password123",
    });

    chai.expect(response.body.username).to.be.eq("Batman");
    chai.expect(response.body.password).to.not.exist;
    chai.expect(response.status).to.be.eq(200);
  });

  it("Should not allow a user to signup if passwords do not match", async () => {
    const response = await chai.request(app).post("/user/signup").send({
      username: "Robin",
      password: "Password123",
      passwordCheck: "Password",
    });

    chai.expect(response.status).to.eq(401);
  });

  it("Should not allow a user to signup if username is taken", async () => {
    const response = await chai.request(app).post("/user/signup").send({
      username: "Batman",
      password: "Password123",
      passwordCheck: "Password123",
    });

    chai.expect(response.status).to.eq(409);
  });
});

describe("/user/login user.routes.js", () => {
  it("should disallow bad password, good user", async () => {
    const response = await chai.request(app).post("/user/login").send({
      username: "Batman",
      password: "Passwordwrong",
    });

    chai.expect(response.status).to.be.eq(401);
  });

  it("Should allow a valid user to login", async () => {
    const response = await chai.request(app).post("/user/login").send({
      username: "Batman",
      password: "Password123",
    });

    this.token = response.body.token;
    chai.expect(response.body.token).to.exist;
    chai.expect(response.status).to.be.eq(200);
  });
});

describe("/user/profile user.routes.js", () => {
  it("Should show admin user as admin", async () => {
    const response = await chai
      .request(app)
      .get("/user/profile")
      .set("Authorization", `Bearer ${process.env.ADMIN_TOKEN}`);

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.isAdmin).to.be.eq(true);
    chai.expect(response.body.username).to.be.eq("admin");
    chai.expect(response.body.password).to.not.exist;
  });
  
  it("Should allow a user to visit their profile", async () => {
    const response = await chai
      .request(app)
      .get("/user/profile")
      .set("Authorization", `Bearer ${this.token}`);

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.isAdmin).to.be.eq(false);
    chai.expect(response.body.username).to.be.eq("Batman");
    chai.expect(response.body.password).to.not.exist;
  });
});