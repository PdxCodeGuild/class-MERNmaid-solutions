process.env.ENV = "test";

const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");

const { app, connect } = require("../app");

const TESTDB = process.env.TESTDB;

chai.use(chaiHttp);

setTimeout(() => {
  before(async () => {
    this.db = await connect(TESTDB);
  });

  after(async () => {
    await this.db.connection.dropDatabase();
    await this.db.connection.close();
  });
});

module.exports = "test.helper";
