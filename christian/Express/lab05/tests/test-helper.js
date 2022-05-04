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
const getToken = async () => {

  const response = await chai.request(app).post("/user/login").send({
    username: "Loki",
    password: "123456789",
  });

  return response.body.token;
}

// function to create a user
// from that user, get ID
// pass it in to new created post
//repeat to create a board
const createUser = async () => {
  const response = await chai.request(app).post("/user/signup").send({
    username: "Thor",
    password: "123456789",
    passwordCheck: "123456789"
  })
  return response.body._id
}
const createBoard = async () => {
  const response = await chai.request(app).post("/board/create").send({
    name: "board"


  })

  return response.body
}
const getThor = async () => {

  const response = await chai.request(app).post("/user/login").send({
    username: "Thor",
    password: "123456789",
  });

  return response.body.token;
}


module.exports = {
  getToken,
  createUser,
  createBoard,
  getThor
}