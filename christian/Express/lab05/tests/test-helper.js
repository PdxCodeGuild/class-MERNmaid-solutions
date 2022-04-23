const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../server")

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
const getToken = async () =>{

    const response = await chai.request(app).post("/user/login").send({
      username: "Loki",
      password: "123456789",
    });
    
    return response.body.token;
  }

  module.exports = {
    getToken
  }