const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");

const { connectDataBase, app } = require("../server");

chai.use(chaiHttp);
process.env.ENV = 'test'
const dbUrlTest = process.env.DB_TEST;

setTimeout(() => {
  before(async () => {
    this.db = await connectDataBase(dbUrlTest);
  });

  after(async () => {
    await this.db.connection.dropDatabase();
    await this.db.connection.close();
  });
});


const createUser = async () => {
  const response = await chai.request(app).post("/auth/signup").send({
    username: 'FakeNameFOrTest',
    password: "Password123",
    passwordCheck: "Password123",
  });
  return response
}

const getToken = async () => {
  const response = await chai.request(app).post("/auth/login").send({
    username: 'FakeNameFOrTest',
    password: "Password123",
  });
  return response
}


module.exports = {
  createUser,
  getToken
}