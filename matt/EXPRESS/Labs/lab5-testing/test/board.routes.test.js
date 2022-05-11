const chai = require("chai");
const dotenv = require("dotenv");
const mocha = require("mocha")
const { createUser, getToken } = require('./test-helper')

const { app } = require("../server");
dotenv.config();



describe("/board board.routes.js", () => {
  it("Should allow a board to be made", async () => {
    // call the createUser to get a user
    const responseUser = await createUser()
    this.user = responseUser.body
    // call the getToken to get a token
    const responseToken = await getToken()
    this.token = responseToken.body.token
    console.log("token", this.token)

    console.log("HEREE", this.user)
    const response = await chai.request(app).post("board").set("Authorization", `Bearer ${this.token}`)
    .send({
      name: 'NameOfTheBoard',
      author: this.user.id,
    })

    this.boardID = response.body.id
    chai.expect(response.body.name).to.exist;
    chai.expect(response.body.author).to.exist;
  });
});

