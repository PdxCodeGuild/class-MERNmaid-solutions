const chai = require("chai");
const dotenv = require("dotenv");
const mocha = require("mocha")
const { app } = require("../server");
const chaiHttp = require("chai-http")
dotenv.config;
chai.use(chaiHttp)


describe("/user/signup userRoute.js", () => {
  it("shuld allow a valid user to signup", async () => {
    const response = await chai.request(app).post("/user/signup").send({
      username: "Loki",
      password: "123456789", //put in data into our account requirements from userRoute(authorization)
      passwordCheck: "123456789"
    });
    
    chai.expect(response.body.username).to.exist; //expect username to exist
    chai.expect(response.body.password).to.not.exist; // expect password to exist
    chai.expect(response.status).to.be.eq(200);

  })



  it("Should not allow a user to signup if passwords do not match", async () => {
    const response = await chai.request(app).post("/user/signup").send({
      username: "Spiderman",
      password: "Password123",
      passwordCheck: "Password",
    });

    chai.expect(response.status).to.eq(400);
  });

  it("Should not allow a user to signup if username is taken", async () => {
    const response = await chai.request(app).post("/user/signup").send({
      username: "Loki",
      password: "123456789",
      passwordCheck: "123456789",
    });

    chai.expect(response.status).to.eq(400);
  });
});

describe("/user/login userRoute.js", () => {
  it("Should allow a valid user to login", async () => {
    const response = await chai.request(app).post("/user/login").send({
      username: "Loki",
      password: "123456789",
    });
    
    this.token = response.body.token;
    chai.expect(response.body.token).to.exist;
    chai.expect(response.status).to.be.eq(200);
  });
});

//failing. Assertion error: expected undefined to exist
describe("/user/profile userRoute.js", () => {
  it("Should allow a user to visit their profile", async () => {
    console.log(this.token, "heres the TOKEN")
    const response = await chai
      .request(app)
      .get("/user/profile")
      .set("Authorization", `Bearer ${this.token}`);
      
    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.username).to.exist;
  });
});
