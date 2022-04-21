const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { connectDatabase } = require("../server"); //connect toserver.js

chai.use(chaiHttp);

setTimeout(() => {
  before(async () => {
    this.db = await connectDatabase("forum");
  });

  after(async () => {
    await this.db.connection.dropDatabase(); //drop and close database
    await this.db.connection.close();
  });
});