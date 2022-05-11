const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");

const { connectDataBase } = require("../server");

chai.use(chaiHttp);

setTimeout(() => {
  before(async () => {
    this.db = await connectDataBase("test-db");
  });

  after(async () => {
    await this.db.connection.dropDatabase();
    await this.db.connection.close();
  });
});


