const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");

const { connectDatabase, app } = require("../server");

dotenv.config();
process.env.TESTING = true;

chai.use(chaiHttp);

const popTestData = async () => {
  await chai.request(app).post("/user/signup").send({
    username: "boardTestUser",
    password: "Password123",
    passwordCheck: "Password123",
  });
  const userResponse = await chai.request(app).post("/user/login").send({
    username: "boardTestUser",
    password: "Password123",
  });

  process.env.TOKEN = userResponse.body.token;

  await chai.request(app).post("/user/signup").send({
    username: "admin",
    password: "Password123",
    passwordCheck: "Password123",
    isAdmin: true,
  });

  const adminResponse = await chai.request(app).post("/user/login").send({
    username: "admin",
    password: "Password123",
  });

  process.env.ADMIN_TOKEN = adminResponse.body.token;

  const boardResponse = await chai.request(app).post("/").set("Authorization", `Bearer ${process.env.ADMIN_TOKEN}`).send({
    boardName: "globalBoard",
  });

  process.env.BOARDID = boardResponse.body._id;
}


setTimeout(() => {
  before(async () => {
    this.db = await connectDatabase("test-db");
    await popTestData();
  });

  after(async () => {
    await this.db.connection.dropDatabase();
    await this.db.connection.close();
  });
});