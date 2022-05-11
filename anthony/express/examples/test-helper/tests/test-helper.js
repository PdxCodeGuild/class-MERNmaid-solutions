const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { connectDatabase } = require("../server");

chai.use(chaiHttp);

setTimeout(() => {
  before(async () => {
    this.db = await connectDatabase("test-db");
  });

  after(async () => {
    await this.db.connection.dropDatabase();
    await this.db.connection.close();
  });
});
